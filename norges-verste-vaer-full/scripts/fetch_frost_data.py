#!/usr/bin/env python3
"""
============================================================
NORGES VERSTE VÆR — Frost API Data Fetcher v2
============================================================
Henter observasjonsdata fra Frost API og oppdaterer weatherData.ts.

Nøkkelforbedringer v2:
- Fikset nedbørhenting: P1D først, deretter timesdata (PT1H) som fallback
- Idempotent: Samme dag overskrives, legges ikke til som ny
- Ukelogikk: Mandagsskifte arkiverer forrige uke
- Arkiv: Lagrer fullførte uker i ARKIV-array
- Ukentlig stasjonsranking: STASJONER_UKE oppdateres daglig

Bruk:
  export FROST_CLIENT_ID=din_client_id
  python3 scripts/fetch_frost_data.py [--date YYYY-MM-DD]
============================================================
"""

import os
import sys
import json
import logging
import argparse
from datetime import datetime, timedelta, timezone
from zoneinfo import ZoneInfo
from collections import defaultdict

import requests

# ---- KONFIGURASJON ----

FROST_CLIENT_ID = os.environ.get("FROST_CLIENT_ID", "")
FROST_BASE_URL = "https://frost.met.no/observations/v0.jsonld"
FROST_SOURCES_URL = "https://frost.met.no/sources/v0.jsonld"

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
WEATHER_DATA_PATH = os.path.join(PROJECT_ROOT, "client", "src", "lib", "weatherData.ts")
DATA_STORE_PATH = os.path.join(SCRIPT_DIR, "data_store.json")

ALL_FYLKER = [
    "Finnmark", "Troms", "Nordland", "Trøndelag", "Møre og Romsdal",
    "Vestland", "Rogaland", "Agder", "Telemark", "Vestfold",
    "Buskerud", "Innlandet", "Akershus", "Østfold", "Oslo"
]

KOMMUNE_FYLKE = {
    "03": "Oslo",
    "30": "Akershus", "31": "Østfold", "32": "Buskerud",
    "33": "Buskerud", "34": "Innlandet",
    "38": "Vestfold", "39": "Telemark", "40": "Telemark",
    "42": "Agder",
    "11": "Rogaland",
    "12": "Vestland",
    "15": "Møre og Romsdal",
    "46": "Vestland", "47": "Vestland",
    "50": "Trøndelag",
    "18": "Nordland",
    "54": "Troms", "55": "Troms",
    "56": "Finnmark",
}

DAY_LABELS_NO = ["Man", "Tir", "Ons", "Tor", "Fre", "Lør", "Søn"]
DAY_NAMES_NO = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"]

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
log = logging.getLogger("NVV")

OSLO_TZ = ZoneInfo("Europe/Oslo")

def oslo_now():
    return datetime.now(OSLO_TZ)

def default_target_date():
    # Dashboardet skal vise norsk dato, ikke UTC-forsinket dato.
    return oslo_now().date()


# ---- DATA STORE ----

def load_data_store():
    """Load persistent data store (JSON) that tracks week state."""
    if os.path.exists(DATA_STORE_PATH):
        with open(DATA_STORE_PATH, "r", encoding="utf-8") as f:
            store = json.load(f)
    else:
        store = {
            "current_week_start": None,
            "current_week_iso": None,
            "days": {},
            "station_days": {},
            "archive": []
        }

    store.setdefault("current_week_start", None)
    store.setdefault("current_week_iso", None)
    store.setdefault("days", {})
    store.setdefault("station_days", {})
    store.setdefault("archive", [])
    return store


def save_data_store(store):
    """Save persistent data store."""
    with open(DATA_STORE_PATH, "w", encoding="utf-8") as f:
        json.dump(store, f, indent=2, ensure_ascii=False)
    log.info(f"Data store saved to {DATA_STORE_PATH}")


def get_week_start(d):
    """Get Monday of the week containing date d."""
    return d - timedelta(days=d.weekday())


def sanitize_archive(store):
    """
    Clean archive:
    - Remove any entry that matches the current week
    - Remove duplicates by ukeId
    - Keep only valid dict entries with ukeId
    """
    current_week_iso = store.get("current_week_iso")
    cleaned = {}

    for entry in store.get("archive", []):
        if not isinstance(entry, dict):
            continue
        uke_id = entry.get("ukeId")
        if not uke_id:
            continue
        if current_week_iso and uke_id == current_week_iso:
            continue
        cleaned[uke_id] = entry

    def sort_key(item):
        uke_id = item.get("ukeId", "")
        try:
            year_part, week_part = uke_id.split("-W")
            return (int(year_part), int(week_part))
        except Exception:
            return (0, 0)

    store["archive"] = sorted(cleaned.values(), key=sort_key)


def prune_current_week_days(store):
    """Keep only dates that belong to the currently active week."""
    week_start_str = store.get("current_week_start")
    if not week_start_str:
        return

    ws = datetime.strptime(week_start_str, "%Y-%m-%d").date()
    allowed = { (ws + timedelta(days=i)).strftime("%Y-%m-%d") for i in range(7) }

    store["days"] = {k: v for k, v in store.get("days", {}).items() if k in allowed}
    store["station_days"] = {k: v for k, v in store.get("station_days", {}).items() if k in allowed}


# ---- FROST API ----

def frost_get(url, params, retries=3):
    """Make authenticated GET request to Frost API with retry."""
    for attempt in range(retries):
        try:
            resp = requests.get(url, params=params, auth=(FROST_CLIENT_ID, ""), timeout=60)
            if resp.status_code == 200:
                return resp.json()
            elif resp.status_code == 404:
                log.warning(f"Frost 404: No data for params {params.get('referencetime', '')}")
                return None
            elif resp.status_code == 412:
                log.warning("Frost 412: No matching data")
                return None
            else:
                log.warning(f"Frost HTTP {resp.status_code} (attempt {attempt+1})")
                if attempt < retries - 1:
                    import time
                    time.sleep(5 * (attempt + 1))
        except requests.exceptions.RequestException as e:
            log.warning(f"Request error (attempt {attempt+1}): {e}")
            if attempt < retries - 1:
                import time
                time.sleep(5 * (attempt + 1))
    return None


def get_station_metadata():
    """Fetch all Norwegian weather stations with municipality info."""
    log.info("Fetching station metadata...")
    data = frost_get(FROST_SOURCES_URL, {
        "country": "NO",
        "types": "SensorSystem",
        "fields": "id,name,municipality,municipalityId"
    })
    if not data or "data" not in data:
        log.error("Failed to fetch station metadata")
        return {}

    stations = {}
    for s in data["data"]:
        sid = s.get("id", "").split(":")[0]
        if not sid or not s.get("municipalityId"):
            continue

        muni_id = str(s["municipalityId"]).zfill(4)
        prefix = muni_id[:2]

        fylke = None
        for p_len in [4, 2]:
            key = muni_id[:p_len]
            if key in KOMMUNE_FYLKE:
                fylke = KOMMUNE_FYLKE[key]
                break
        if not fylke:
            fylke = KOMMUNE_FYLKE.get(prefix)
        if not fylke:
            continue

        stations[sid] = {
            "name": s.get("name", sid),
            "municipality": s.get("municipality", "Ukjent"),
            "fylke": fylke
        }

    log.info(f"Got {len(stations)} stations with fylke mapping")
    return stations


def fetch_daily_p1d(date_str, station_ids):
    """Fetch P1D (daily aggregate) data."""
    log.info(f"Fetching P1D data for {date_str}...")
    next_day = (datetime.strptime(date_str, "%Y-%m-%d") + timedelta(days=1)).strftime("%Y-%m-%d")
    obs = {}
    batch_size = 50

    for i in range(0, len(station_ids), batch_size):
        batch = station_ids[i:i + batch_size]
        sources_str = ",".join(batch)

        data = frost_get(FROST_BASE_URL, {
            "sources": sources_str,
            "referencetime": f"{date_str}/{next_day}",
            "elements": "sum(precipitation_amount P1D),mean(wind_speed P1D),max(wind_speed_of_gust P1D),mean(air_temperature P1D)",
            "fields": "sourceId,elementId,value,referenceTime"
        })

        if data and "data" in data:
            for record in data["data"]:
                sid = record.get("sourceId", "").split(":")[0]
                if sid not in obs:
                    obs[sid] = {}
                for o in record.get("observations", []):
                    eid = o.get("elementId", "")
                    val = o.get("value")
                    if val is None:
                        continue
                    val = float(val)
                    if "precipitation" in eid and "precip" not in obs[sid]:
                        obs[sid]["precip"] = max(0, val)
                    elif eid == "mean(wind_speed P1D)":
                        obs[sid]["wind_mean"] = val
                    elif "gust" in eid:
                        obs[sid]["gust_max"] = val
                    elif "temperature" in eid:
                        obs[sid]["temp_mean"] = val

        if (i // batch_size) % 10 == 0 and i > 0:
            log.info(f"  P1D progress: {i}/{len(station_ids)} stations...")

    log.info(f"P1D: Got data for {len(obs)} stations")
    return obs


def fetch_hourly_data(date_str, station_ids):
    """Fetch hourly (PT1H) data as fallback."""
    log.info(f"Fetching hourly data for {date_str}...")
    next_day = (datetime.strptime(date_str, "%Y-%m-%d") + timedelta(days=1)).strftime("%Y-%m-%d")
    hourly_raw = defaultdict(lambda: {"winds": [], "gusts": [], "temps": [], "precip_by_hour": {}})
    batch_size = 50

    for i in range(0, len(station_ids), batch_size):
        batch = station_ids[i:i + batch_size]
        sources_str = ",".join(batch)

        data = frost_get(FROST_BASE_URL, {
            "sources": sources_str,
            "referencetime": f"{date_str}T00:00:00/{next_day}T00:00:00",
            "elements": "wind_speed,max(wind_speed_of_gust PT1H),air_temperature,sum(precipitation_amount PT1H)",
            "fields": "sourceId,elementId,value,referenceTime"
        })

        if data and "data" in data:
            for record in data["data"]:
                sid = record.get("sourceId", "").split(":")[0]
                ref_time = record.get("referenceTime", "")
                hour_key = ref_time[:13] if len(ref_time) >= 13 else ref_time
                for o in record.get("observations", []):
                    eid = o.get("elementId", "")
                    val = o.get("value")
                    if val is None:
                        continue
                    val = float(val)
                    if eid == "wind_speed":
                        hourly_raw[sid]["winds"].append(val)
                    elif "gust" in eid:
                        hourly_raw[sid]["gusts"].append(val)
                    elif "temperature" in eid:
                        hourly_raw[sid]["temps"].append(val)
                    elif "precipitation" in eid:
                        if hour_key not in hourly_raw[sid]["precip_by_hour"]:
                            hourly_raw[sid]["precip_by_hour"][hour_key] = max(0, val)

        if (i // batch_size) % 10 == 0 and i > 0:
            log.info(f"  Hourly progress: {i}/{len(station_ids)} stations...")

    obs = {}
    for sid, h in hourly_raw.items():
        obs[sid] = {}
        if h["winds"]:
            obs[sid]["wind_mean"] = sum(h["winds"]) / len(h["winds"])
        if h["gusts"]:
            obs[sid]["gust_max"] = max(h["gusts"])
        if h["temps"]:
            obs[sid]["temp_mean"] = sum(h["temps"]) / len(h["temps"])
        if h["precip_by_hour"]:
            obs[sid]["precip"] = sum(h["precip_by_hour"].values())

    log.info(f"Hourly: Aggregated data for {len(obs)} stations")
    return obs


def merge_observations(p1d_obs, hourly_obs):
    """Merge P1D and hourly data. P1D takes priority, hourly fills gaps."""
    merged = {}
    all_sids = set(list(p1d_obs.keys()) + list(hourly_obs.keys()))

    for sid in all_sids:
        p1d = p1d_obs.get(sid, {})
        hourly = hourly_obs.get(sid, {})
        merged[sid] = {
            "wind_mean": p1d.get("wind_mean", hourly.get("wind_mean", 0)),
            "gust_max": p1d.get("gust_max", hourly.get("gust_max", 0)),
            "precip": p1d.get("precip", hourly.get("precip", 0)),
            "temp_mean": p1d.get("temp_mean", hourly.get("temp_mean", 0)),
        }

    precip_count = sum(1 for s in merged.values() if s["precip"] > 0)
    log.info(f"Merged: {len(merged)} stations total, {precip_count} with precipitation > 0")
    return merged


# ---- EI BEREGNING ----

def calculate_ei(wind_mean, gust_max, precip, temp_mean):
    """
    Elendighets-Indeks:
    (vind_mean * 2.0) + (vindkast * 0.5) + (nedbor * 0.5) + (20 - temp)
    Sludd-bonus: +15 hvis temp mellom -1 og +2 grader C og nedbor > 0
    """
    ei = (wind_mean * 2.0) + (gust_max * 0.5) + (precip * 0.5) + (20.0 - temp_mean)
    if -1.0 <= temp_mean <= 2.0 and precip > 0:
        ei += 15.0
    return round(max(0, ei), 1)


def compute_county_ei(obs_data, stations):
    """Aggregate station EI to county level (average of all stations in county)."""
    county_scores = defaultdict(list)

    for sid, data in obs_data.items():
        if sid not in stations:
            continue
        fylke = stations[sid]["fylke"]
        ei = calculate_ei(
            data.get("wind_mean", 0),
            data.get("gust_max", 0),
            data.get("precip", 0),
            data.get("temp_mean", 0)
        )
        county_scores[fylke].append(ei)

    result = {}
    for fylke in ALL_FYLKER:
        scores = county_scores.get(fylke, [])
        if scores:
            result[fylke] = round(sum(scores) / len(scores), 1)
        else:
            result[fylke] = 0.0
            log.warning(f"No data for {fylke} - using 0.0")

    return result


def find_top_stations(obs_data, stations, n=5):
    """Find top N stations by EI score for a single day."""
    station_scores = []
    for sid, data in obs_data.items():
        if sid not in stations:
            continue
        ei = calculate_ei(
            data.get("wind_mean", 0),
            data.get("gust_max", 0),
            data.get("precip", 0),
            data.get("temp_mean", 0)
        )
        station_scores.append({
            "sid": sid,
            "navn": stations[sid]["name"],
            "kommune": stations[sid]["municipality"],
            "fylke": stations[sid]["fylke"],
            "ei": ei,
            "vindkast": round(data.get("gust_max", 0), 1),
            "nedbor": round(data.get("precip", 0), 1),
            "temp": round(data.get("temp_mean", 0), 1),
            "farevarsel": "oransje" if ei > 60 else ("gul" if ei > 40 else "ingen")
        })

    station_scores.sort(key=lambda x: x["ei"], reverse=True)
    return station_scores[:n]


def compute_weekly_station_ranking(store, stations, n=5):
    """Compute weekly top stations by summing daily EI across current week."""
    station_totals = defaultdict(lambda: {
        "daily_ei": {},
        "max_gust": 0,
        "total_precip": 0,
        "min_temp": 99,
        "days_count": 0
    })

    for date_str, day_data in store.get("station_days", {}).items():
        for sid, sdata in day_data.items():
            ei = sdata.get("ei", 0)
            station_totals[sid]["daily_ei"][date_str] = ei
            station_totals[sid]["max_gust"] = max(station_totals[sid]["max_gust"], sdata.get("gust", 0))
            station_totals[sid]["total_precip"] += sdata.get("precip", 0)
            station_totals[sid]["min_temp"] = min(station_totals[sid]["min_temp"], sdata.get("temp", 99))
            station_totals[sid]["days_count"] += 1

    ranked = []
    for sid, totals in station_totals.items():
        if sid not in stations:
            continue

        # Vis også stasjoner når det bare finnes 1 dag i ny uke
        if totals["days_count"] < 1:
            continue

        total_ei = round(sum(totals["daily_ei"].values()), 1)

        week_start = store.get("current_week_start")
        if week_start:
            ws = datetime.strptime(week_start, "%Y-%m-%d").date()
            dager = []
            for i in range(7):
                day = (ws + timedelta(days=i)).strftime("%Y-%m-%d")
                dager.append(round(totals["daily_ei"].get(day, 0), 1))
        else:
            dager = list(totals["daily_ei"].values())

        ranked.append({
            "sid": sid,
            "navn": stations[sid]["name"],
            "kommune": stations[sid]["municipality"],
            "fylke": stations[sid]["fylke"],
            "totalEi": total_ei,
            "gustMax": round(totals["max_gust"], 1),
            "precipTotal": round(totals["total_precip"], 1),
            "tempMin": round(totals["min_temp"], 1),
            "dager": dager,
            "days_count": totals["days_count"]
        })

    ranked.sort(key=lambda x: x["totalEi"], reverse=True)
    return ranked[:n]


# ---- WEEK SUMMARY GENERATION ----

def generate_week_summary(top3, best_station, best_station_fylke, best_station_score, iso_week):
    """Generate a detailed weekly summary text."""
    parts = []
    parts.append(f"Uke {iso_week} ble preget av")
    if top3[0][1] > 250:
        parts.append(f"ekstremt vaer i {top3[0][0]} som tok ukesseieren med {top3[0][1]:.1f} poeng.")
    elif top3[0][1] > 200:
        parts.append(f"hardt vaer i {top3[0][0]} som vant med {top3[0][1]:.1f} poeng.")
    else:
        parts.append(f"moderat vaer der {top3[0][0]} ledet med {top3[0][1]:.1f} poeng.")

    if len(top3) > 1:
        parts.append(f"{top3[1][0]} ({top3[1][1]:.1f}) og {top3[2][0]} ({top3[2][1]:.1f}) fulgte paa de neste plassene.")

    if best_station_score > 0:
        parts.append(f"{best_station} i {best_station_fylke} ble ukens verste stasjon med {best_station_score:.1f} sammenlagt EI.")

    return " ".join(parts)


def determine_weather_type(days_data, ordered_dates):
    """Determine the dominant weather type for the week."""
    total_precip = 0
    min_temp = 99
    max_gust = 0
    for ds in ordered_dates:
        for s in days_data[ds].get("top_stations", []):
            total_precip += s.get("nedbor", 0)
            if s.get("temp", 99) < min_temp:
                min_temp = s.get("temp", 99)
            if s.get("vindkast", 0) > max_gust:
                max_gust = s.get("vindkast", 0)

    parts = []
    if max_gust > 25:
        parts.append("Sterk vind")
    if total_precip > 50:
        parts.append("mye nedbor")
    if min_temp < -5:
        parts.append("vedvarende kulde")
    elif min_temp < 2:
        parts.append("temperaturer naer frysepunktet")

    if not parts:
        return "Varierende vaer"
    return ", ".join(parts)


# ---- TREND GENERATION ----

def generate_trend(prev_score, new_score):
    """Generate a short trend explanation based on score change."""
    diff = new_score - prev_score
    if diff > 5:
        return f"Kraftig forverring (+{diff:.1f}) - okt vind og/eller nedbor"
    elif diff > 2:
        return f"Noe forverring (+{diff:.1f}) - ustabilt vaer fortsetter"
    elif diff > -2:
        return "Stabilt - lite endring fra i gar"
    elif diff > -5:
        return f"Noe bedring ({diff:.1f}) - roligere forhold"
    else:
        return f"Markant bedring ({diff:.1f}) - lavtrykket har passert"


def generate_station_description(s):
    """Generate a short description for a weekly top station."""
    dager = s.get("dager", [])
    if not dager or all(d == 0 for d in dager):
        return "Begrenset data tilgjengelig."

    peak_val = max(dager)
    peak_idx = dager.index(peak_val)
    peak_day = DAY_LABELS_NO[peak_idx] if peak_idx < len(DAY_LABELS_NO) else f"Dag {peak_idx+1}"
    avg = s["totalEi"] / max(s["days_count"], 1)
    prefix = "sa langt denne uka" if s.get("days_count", 0) < 7 else "hele uken"

    parts = []
    if avg > 60:
        parts.append(f"Ekstremt vaer {prefix} med snitt {avg:.0f} EI per dag.")
    elif avg > 40:
        parts.append(f"Jevnt darlig vaer {prefix} med snitt {avg:.0f} EI per dag.")
    else:
        parts.append(f"Varierende forhold {prefix} med snitt {avg:.0f} EI per dag.")

    parts.append(f"Toppdag {peak_day} med {peak_val:.1f} EI.")

    if s["gustMax"] > 25:
        parts.append(f"Kraftige vindkast opp til {s['gustMax']:.1f} m/s.")
    if s["precipTotal"] > 20:
        parts.append(f"Mye nedbor med totalt {s['precipTotal']:.1f} mm.")
    if s["tempMin"] < -5:
        parts.append(f"Bitende kulde ned til {s['tempMin']:.1f} grader C.")

    return " ".join(parts)


# ---- WEATHERDATA.TS GENERERING ----

def generate_weather_data_ts(store, stations):
    """Generate the complete weatherData.ts file from the data store."""
    days_data = store.get("days", {})
    week_start_str = store.get("current_week_start")
    current_week_iso = store.get("current_week_iso")

    if not week_start_str or not days_data:
        log.error("No data in store to generate weatherData.ts")
        return False

    week_start = datetime.strptime(week_start_str, "%Y-%m-%d").date()

    ordered_dates = []
    for i in range(7):
        d = week_start + timedelta(days=i)
        ds = d.strftime("%Y-%m-%d")
        if ds in days_data:
            ordered_dates.append(ds)

    if not ordered_dates:
        log.error("No dates found in data store")
        return False

    dag_labels = []
    for ds in ordered_dates:
        d = datetime.strptime(ds, "%Y-%m-%d").date()
        day_num = d.strftime("%d")
        dag_labels.append(f"{DAY_LABELS_NO[d.weekday()]} {day_num}")

    fylke_daily = {}
    for fylke in ALL_FYLKER:
        fylke_daily[fylke] = []
        for ds in ordered_dates:
            county_ei = days_data[ds].get("county_ei", {})
            fylke_daily[fylke].append(county_ei.get(fylke, 0.0))

    totals = {f: round(sum(d), 1) for f, d in fylke_daily.items()}
    sorted_total = sorted(totals.items(), key=lambda x: x[1], reverse=True)

    latest_date = ordered_dates[-1]
    latest_county_ei = days_data[latest_date].get("county_ei", {})
    latest_top_stations = days_data[latest_date].get("top_stations", [])

    prev_date = ordered_dates[-2] if len(ordered_dates) >= 2 else None
    prev_county_ei = days_data[prev_date].get("county_ei", {}) if prev_date else {}

    trends = {}
    for fylke in ALL_FYLKER:
        prev = prev_county_ei.get(fylke, 0)
        curr = latest_county_ei.get(fylke, 0)
        trends[fylke] = generate_trend(prev, curr)

    if prev_date:
        prev_totals = {}
        for fylke in ALL_FYLKER:
            prev_totals[fylke] = round(sum(fylke_daily[fylke][:-1]), 1)
        prev_sorted = sorted(prev_totals.items(), key=lambda x: x[1], reverse=True)
        prev_rank = {f: i for i, (f, _) in enumerate(prev_sorted)}
    else:
        prev_rank = {f: i for i, (f, _) in enumerate(sorted_total)}

    new_rank = {f: i for i, (f, _) in enumerate(sorted_total)}
    rank_change = {f: prev_rank.get(f, 0) - new_rank.get(f, 0) for f in ALL_FYLKER}

    today_sorted = sorted(latest_county_ei.items(), key=lambda x: x[1], reverse=True)
    today_leader = today_sorted[0] if today_sorted else ("Ukjent", 0)

    overall_leader = sorted_total[0][0]
    prev_leader = sorted_total[0][0]
    if prev_date:
        prev_total_sorted = sorted(
            {f: round(sum(fylke_daily[f][:-1]), 1) for f in ALL_FYLKER}.items(),
            key=lambda x: x[1], reverse=True
        )
        prev_leader = prev_total_sorted[0][0]

    tronskifte_aktiv = overall_leader != prev_leader

    weekly_stations = compute_weekly_station_ranking(store, stations, n=5)

    latest_d = datetime.strptime(latest_date, "%Y-%m-%d").date()
    day_name = DAY_NAMES_NO[latest_d.weekday()]
    date_str_no = latest_d.strftime("%d.%m.%Y")
    now_str = oslo_now().strftime("%d.%m.%Y kl. %H:%M")
    first_d = datetime.strptime(ordered_dates[0], "%Y-%m-%d").date()
    period_str = f"{first_d.strftime('%d.%m')} - {latest_d.strftime('%d.%m.%Y')} ({len(ordered_dates)} dager)"

    leader_temp = 0
    leader_precip = 0
    if latest_top_stations:
        for s in latest_top_stations:
            if s.get("fylke") == today_leader[0]:
                leader_temp = s.get("temp", 0)
                leader_precip = s.get("nedbor", 0)
                break
        if leader_temp == 0 and latest_top_stations:
            leader_temp = latest_top_stations[0].get("temp", 0)
            leader_precip = latest_top_stations[0].get("nedbor", 0)

    # Viktig: ARKIV skal aldri inneholde nåværende uke
    archive = [a for a in store.get("archive", []) if a.get("ukeId") != current_week_iso]

    lines = []
    lines.append('/**')
    lines.append(' * ============================================================')
    lines.append(' * NORGES VERSTE VAER - DATABLOKK')
    lines.append(' * ============================================================')
    lines.append(' * FREMTIDSSIKRING: For a oppdatere dashboardet med nye data,')
    lines.append(' * erstatt kun denne filen. Designet endres ikke.')
    lines.append(f' *')
    lines.append(f' * Sist oppdatert: {now_str}')
    lines.append(f' * Periode sammenlagt: {period_str}')
    lines.append(' * Kilde: Frost API (frost.met.no), P1D + timesdata')
    lines.append(' * ============================================================')
    lines.append(' */')
    lines.append('')

    lines.append('// ---- METADATA ----')
    lines.append('')
    lines.append('export const META = {')
    lines.append('  serieNavn: "Norges Verste Vaer",')
    lines.append(f'  dagLabel: "{day_name} {date_str_no}",')
    lines.append(f'  sammenlagtLabel: "{period_str}",')
    lines.append(f'  datoOppdatert: "{now_str}",')
    lines.append('  rapportVersjon: "v2.2 (norsk tid, live uke, ryddig arkiv, fikset uke/arkiv-logikk)",')
    labels_str = ", ".join(f'"{l}"' for l in dag_labels)
    lines.append(f'  dagLabels: [{labels_str}],')
    lines.append('};')
    lines.append('')

    lines.append('// ---- DAG-FOR-DAG EI PER FYLKE ----')
    lines.append('')
    lines.append('export const FYLKER_DAG_FOR_DAG = [')
    for fylke, total in sorted_total:
        dager = fylke_daily[fylke]
        dager_str = ", ".join(f"{d}" for d in dager)
        trend = trends.get(fylke, "")
        lines.append(f'  {{ navn: "{fylke}", dager: [{dager_str}], trend: "{trend}" }},')
    lines.append('];')
    lines.append('')

    lines.append('// ---- SAMMENLAGT ----')
    lines.append('')
    lines.append('export const FYLKER_SAMMENLAGT = [')
    for fylke, total in sorted_total:
        i_dag = latest_county_ei.get(fylke, 0)
        prev_day = prev_county_ei.get(fylke, 0) if prev_county_ei else 0
        endring = round(i_dag - prev_day, 1)
        plassering = rank_change.get(fylke, 0)
        lines.append(f'  {{ navn: "{fylke}", total: {total}, iDag: {i_dag}, endringFraIGar: {endring}, plasseringEndring: {plassering} }},')
    lines.append('];')
    lines.append('')

    lines.append(f'// ---- TOPP 5 STASJONER {day_name.upper()} {date_str_no} ----')
    lines.append('')
    lines.append('export const STASJONER_PERIODE = [')
    for s in latest_top_stations[:5]:
        lines.append(f'  {{ navn: "{s["navn"]}", kommune: "{s["kommune"]}", fylke: "{s["fylke"]}", ei: {s["ei"]}, vindkast: {s["vindkast"]}, nedbor: {s["nedbor"]}, temp: {s["temp"]}, farevarsel: "{s["farevarsel"]}" }},')
    lines.append('];')
    lines.append('')

    lines.append('// ---- UKENS TOPP 5 STASJONER (sammenlagt) ----')
    lines.append('')
    lines.append('export const STASJONER_UKE = [')
    for s in weekly_stations:
        dager_str = ", ".join(f"{d}" for d in s["dager"])
        desc = generate_station_description(s).replace('"', '\\"')
        lines.append('  {')
        lines.append(f'    navn: "{s["navn"]}",')
        lines.append(f'    kommune: "{s["kommune"]}",')
        lines.append(f'    fylke: "{s["fylke"]}",')
        lines.append(f'    totalEi: {s["totalEi"]},')
        lines.append(f'    gustMax: {s["gustMax"]},')
        lines.append(f'    precipTotal: {s["precipTotal"]},')
        lines.append(f'    tempMin: {s["tempMin"]},')
        lines.append(f'    dager: [{dager_str}],')
        lines.append(f'    beskrivelse: "{desc}"')
        lines.append('  },')
    lines.append('];')
    lines.append('')

    lines.append('// ---- TRONSKIFTE ----')
    lines.append('')
    lines.append('export const TRONSKIFTE = {')
    lines.append(f'  aktiv: {str(tronskifte_aktiv).lower()},')
    if tronskifte_aktiv:
        lines.append(f'  tittel: "TRONSKIFTE! {overall_leader.upper()} TAR LEDELSEN!",')
        lines.append(f'  beskrivelse: "{overall_leader} har overtatt forsteplassen i sammenlagt-ligaen med {sorted_total[0][1]} poeng, foran {sorted_total[1][0]} ({sorted_total[1][1]}).",')
        lines.append(f'  gammelLeder: "{prev_leader}",')
    else:
        margin = round(sorted_total[0][1] - sorted_total[1][1], 1) if len(sorted_total) > 1 else 0
        lines.append(f'  tittel: "{overall_leader.upper()} LEDER!",')
        lines.append(f'  beskrivelse: "{overall_leader} leder sammenlagt med {sorted_total[0][1]} poeng - {margin} poeng foran {sorted_total[1][0] if len(sorted_total) > 1 else "ukjent"} ({sorted_total[1][1] if len(sorted_total) > 1 else 0}).",')
        lines.append(f'  gammelLeder: "{overall_leader}",')
    lines.append(f'  nyLeder: "{overall_leader}",')
    lines.append('};')
    lines.append('')

    lines.append('// ---- DAGENS LEDER ----')
    lines.append('')
    lines.append('export const DAGENS_LEDER = {')
    lines.append(f'  fylke: "{today_leader[0]}",')
    lines.append(f'  ei: {today_leader[1]},')
    lines.append(f'  temp: {leader_temp},')
    lines.append(f'  nedbor: {leader_precip},')
    lines.append('};')
    lines.append('')

    lines.append('// ---- AKTUELL UKE / SIST FULLFORTE UKE ----')
    lines.append('')
    lines.append('export const AKTUELL_UKE = {')
    lines.append(f'  ukeId: "{current_week_iso}",')
    lines.append(f'  uke: "Uke {latest_d.isocalendar().week}",')
    lines.append(f'  fraDato: "{first_d.strftime("%Y-%m-%d")}",')
    lines.append(f'  tilDato: "{latest_d.strftime("%Y-%m-%d")}",')
    lines.append(f'  periode: "{period_str}",')
    lines.append(f'  dagerRegistrert: {len(ordered_dates)},')
    lines.append(f'  versteFylke: "{overall_leader}",')
    lines.append(f'  versteFylkeScore: {sorted_total[0][1]},')
    lines.append('};')
    lines.append('')

    lines.append('// ---- ARKIV (fullforte uker) ----')
    lines.append('')
    lines.append('export interface ArkivUke {')
    lines.append('  ukeId: string;')
    lines.append('  uke: string;')
    lines.append('  periode: string;')
    lines.append('  versteFylke: string;')
    lines.append('  versteFylkeScore: number;')
    lines.append('  versteStasjon: string;')
    lines.append('  versteStasjonKommune: string;')
    lines.append('  versteStasjonFylke: string;')
    lines.append('  versteStasjonScore: number;')
    lines.append('  dominerendeVaertype: string;')
    lines.append('  oppsummering: string;')
    lines.append('  fylkerTotal: Record<string, number>;')
    lines.append('  fylkerDagForDag: Record<string, number[]>;')
    lines.append('  dagLabels: string[];')
    lines.append('  toppStasjoner: {')
    lines.append('    navn: string;')
    lines.append('    kommune: string;')
    lines.append('    fylke: string;')
    lines.append('    totalEi: number;')
    lines.append('    gustMax: number;')
    lines.append('    tempMin: number;')
    lines.append('    beskrivelse: string;')
    lines.append('  }[];')
    lines.append('}')
    lines.append('')

    if archive:
        lines.append('export const ARKIV: ArkivUke[] = [')
        for week in archive:
            lines.append('  {')
            lines.append(f'    ukeId: "{week.get("ukeId", "")}",')
            lines.append(f'    uke: "{week.get("uke", "")}",')
            lines.append(f'    periode: "{week.get("periode", "")}",')
            lines.append(f'    versteFylke: "{week.get("versteFylke", "")}",')
            lines.append(f'    versteFylkeScore: {week.get("versteFylkeScore", 0)},')
            lines.append(f'    versteStasjon: "{week.get("versteStasjon", "Ukjent")}",')
            lines.append(f'    versteStasjonKommune: "{week.get("versteStasjonKommune", "Ukjent")}",')
            lines.append(f'    versteStasjonFylke: "{week.get("versteStasjonFylke", "Ukjent")}",')
            lines.append(f'    versteStasjonScore: {week.get("versteStasjonScore", 0)},')
            lines.append(f'    dominerendeVaertype: "{week.get("dominerendeVaertype", "Varierende vaer")}",')
            opps = week.get("oppsummering", "").replace('"', '\\"')
            lines.append(f'    oppsummering: "{opps}",')
            ft = week.get("fylkerTotal", {})
            ft_items = ", ".join(f'"{k}": {v}' for k, v in ft.items())
            lines.append(f'    fylkerTotal: {{ {ft_items} }},')
            lines.append('    fylkerDagForDag: {')
            fdfd = week.get("fylkerDagForDag", {})
            for fk, vals in fdfd.items():
                vals_str = ", ".join(str(v) for v in vals)
                lines.append(f'      "{fk}": [{vals_str}],')
            lines.append('    },')
            dl = week.get("dagLabels", [])
            dl_str = ", ".join(f'"{l}"' for l in dl)
            lines.append(f'    dagLabels: [{dl_str}],')
            lines.append('    toppStasjoner: [')
            for ts in week.get("toppStasjoner", []):
                ts_desc = ts.get("beskrivelse", "").replace('"', '\\"')
                lines.append('      {')
                lines.append(f'        navn: "{ts.get("navn", "")}",')
                lines.append(f'        kommune: "{ts.get("kommune", "")}",')
                lines.append(f'        fylke: "{ts.get("fylke", "")}",')
                lines.append(f'        totalEi: {ts.get("totalEi", 0)},')
                lines.append(f'        gustMax: {ts.get("gustMax", 0)},')
                lines.append(f'        tempMin: {ts.get("tempMin", 0)},')
                lines.append(f'        beskrivelse: "{ts_desc}"')
                lines.append('      },')
            lines.append('    ]')
            lines.append('  },')
        lines.append('];')
    else:
        lines.append('export const ARKIV: ArkivUke[] = [];')
    lines.append('')

    lines.append('export const SIST_FULLFORTE_UKE: ArkivUke | null = ARKIV.length ? ARKIV[ARKIV.length - 1] : null;')
    lines.append('')

    lines.append('// ---- HJELPEFUNKSJONER ----')
    lines.append('')
    lines.append('export function scoreColor(score: number): string {')
    lines.append('  if (score > 50) return "#ff2d2d";')
    lines.append('  if (score >= 30) return "#ffaa00";')
    lines.append('  return "#d4c957";')
    lines.append('}')
    lines.append('')
    lines.append('export function scoreClass(score: number): string {')
    lines.append('  if (score > 50) return "score-critical";')
    lines.append('  if (score >= 30) return "score-warning";')
    lines.append('  return "score-caution";')
    lines.append('}')
    lines.append('')
    lines.append('export function fmt(n: number): string {')
    lines.append('  return n.toFixed(1);')
    lines.append('}')
    lines.append('')
    lines.append('export function fmtChange(n: number): string {')
    lines.append('  return (n > 0 ? "+" : "") + n.toFixed(1);')
    lines.append('}')
    lines.append('')
    lines.append('export function posLabel(n: number): string {')
    lines.append('  if (n > 0) return "\\u25B2 " + n;')
    lines.append('  if (n < 0) return "\\u25BC " + Math.abs(n);')
    lines.append('  return "\\u2014";')
    lines.append('}')
    lines.append('')
    lines.append('export function posColor(n: number): string {')
    lines.append('  if (n > 0) return "#00d4ff";')
    lines.append('  if (n < 0) return "#ff2d2d";')
    lines.append('  return "#4a6a8a";')
    lines.append('}')
    lines.append('')
    lines.append('export function sortedSammenlagt() {')
    lines.append('  return [...FYLKER_SAMMENLAGT].sort((a, b) => b.total - a.total);')
    lines.append('}')
    lines.append('')
    lines.append('export function sortedIDag() {')
    lines.append('  return [...FYLKER_SAMMENLAGT].sort((a, b) => b.iDag - a.iDag);')
    lines.append('}')
    lines.append('')
    lines.append('export function sortedDagForDag() {')
    lines.append('  return [...FYLKER_DAG_FOR_DAG].sort((a, b) => {')
    lines.append('    const sumA = a.dager.reduce((s: number, v: number) => s + v, 0);')
    lines.append('    const sumB = b.dager.reduce((s: number, v: number) => s + v, 0);')
    lines.append('    return sumB - sumA;')
    lines.append('  });')
    lines.append('}')
    lines.append('')

    content = "\n".join(lines)
    with open(WEATHER_DATA_PATH, "w", encoding="utf-8") as f:
        f.write(content)

    log.info(f"Updated weatherData.ts with {len(ordered_dates)} days of data")
    log.info(f"Sammenlagt leder: {overall_leader} ({sorted_total[0][1]})")
    log.info(f"Dagens leder: {today_leader[0]} ({today_leader[1]})")
    return True


# ---- MAIN ----

def main():
    parser = argparse.ArgumentParser(description="Norges Verste Vaer - Frost API Fetcher")
    parser.add_argument("--date", type=str, help="Target date (YYYY-MM-DD). Default: yesterday.")
    args = parser.parse_args()

    if not FROST_CLIENT_ID:
        log.error("FROST_CLIENT_ID environment variable not set!")
        log.error("Set it with: export FROST_CLIENT_ID=your_client_id")
        sys.exit(1)

    if args.date:
        target_date = datetime.strptime(args.date, "%Y-%m-%d").date()
    else:
        target_date = default_target_date()

    date_str = target_date.strftime("%Y-%m-%d")
    week_start = get_week_start(target_date)
    week_start_str = week_start.strftime("%Y-%m-%d")
    iso = target_date.isocalendar()
    current_week_iso = f"{iso.year}-W{iso.week:02d}"

    log.info("=== Norges Verste Vaer - Oppdatering ===")
    log.info(f"Henter data for: {date_str} (uke starter {week_start_str}, {current_week_iso})")

    store = load_data_store()

    # Rydd opp gammel dritt før vi gjør noe annet
    sanitize_archive(store)

    stations = get_station_metadata()
    if not stations:
        log.error("No station metadata - aborting")
        sys.exit(1)

    stored_week_start = store.get("current_week_start")
    stored_week_iso = store.get("current_week_iso")

    # UKEBYTTE: arkiver kun hvis tidligere uke faktisk var en annen uke
    if stored_week_start and stored_week_iso and stored_week_iso != current_week_iso:
        log.info(f"NY UKE! Arkiverer forrige uke {stored_week_iso}...")

        old_days = store.get("days", {})
        old_station_days = store.get("station_days", {})

        if old_days:
            old_start = datetime.strptime(stored_week_start, "%Y-%m-%d").date()
            old_end = old_start + timedelta(days=6)
            old_iso = old_start.isocalendar()
            old_week_iso = f"{old_iso.year}-W{old_iso.week:02d}"

            old_ordered = sorted(old_days.keys())

            old_dag_labels = []
            for ds in old_ordered:
                d = datetime.strptime(ds, "%Y-%m-%d").date()
                old_dag_labels.append(f"{DAY_LABELS_NO[d.weekday()]} {d.strftime('%d')}")

            old_totals = {}
            old_fylker_dfd = {}
            for fylke in ALL_FYLKER:
                daily_vals = []
                for ds in old_ordered:
                    val = old_days[ds].get("county_ei", {}).get(fylke, 0)
                    daily_vals.append(round(val, 1))
                old_fylker_dfd[fylke] = daily_vals
                old_totals[fylke] = round(sum(daily_vals), 1)

            old_winner = max(old_totals, key=old_totals.get) if old_totals else "Ukjent"

            station_week_totals = defaultdict(lambda: {
                "total": 0,
                "max_gust": 0,
                "min_temp": 99,
                "total_precip": 0,
                "days": 0,
                "daily_ei": []
            })

            for ds in old_ordered:
                day_stations = old_station_days.get(ds, {})
                for sid, sdata in day_stations.items():
                    station_week_totals[sid]["total"] += sdata.get("ei", 0)
                    station_week_totals[sid]["max_gust"] = max(station_week_totals[sid]["max_gust"], sdata.get("gust", 0))
                    station_week_totals[sid]["min_temp"] = min(station_week_totals[sid]["min_temp"], sdata.get("temp", 99))
                    station_week_totals[sid]["total_precip"] += sdata.get("precip", 0)
                    station_week_totals[sid]["days"] += 1
                    station_week_totals[sid]["daily_ei"].append(sdata.get("ei", 0))

            best_station_sid = max(station_week_totals, key=lambda s: station_week_totals[s]["total"]) if station_week_totals else None
            best_station_name = "Ukjent"
            best_station_kommune = "Ukjent"
            best_station_fylke = "Ukjent"
            best_station_score = 0

            if best_station_sid and best_station_sid in stations:
                best_station_name = stations[best_station_sid]["name"]
                best_station_kommune = stations[best_station_sid]["municipality"]
                best_station_fylke = stations[best_station_sid]["fylke"]
                best_station_score = round(station_week_totals[best_station_sid]["total"], 1)

            ranked_stations = sorted(
                station_week_totals.items(),
                key=lambda x: x[1]["total"],
                reverse=True
            )[:5]

            archive_top_stations = []
            for sid, st in ranked_stations:
                if sid in stations:
                    avg_ei = st["total"] / max(st["days"], 1)
                    desc_parts = []
                    if avg_ei > 60:
                        desc_parts.append(f"Ekstremt vaer hele uken med snitt {avg_ei:.0f} EI per dag.")
                    elif avg_ei > 40:
                        desc_parts.append(f"Jevnt daarlig vaer med snitt {avg_ei:.0f} EI per dag.")
                    else:
                        desc_parts.append(f"Varierende forhold med snitt {avg_ei:.0f} EI per dag.")
                    if st["max_gust"] > 25:
                        desc_parts.append(f"Vindkast opp til {st['max_gust']:.1f} m/s.")
                    if st["total_precip"] > 20:
                        desc_parts.append(f"Totalt {st['total_precip']:.1f} mm nedbor.")
                    if st["min_temp"] < -5:
                        desc_parts.append(f"Kulde ned til {st['min_temp']:.1f}C.")
                    archive_top_stations.append({
                        "navn": stations[sid]["name"],
                        "kommune": stations[sid]["municipality"],
                        "fylke": stations[sid]["fylke"],
                        "totalEi": round(st["total"], 1),
                        "gustMax": round(st["max_gust"], 1),
                        "tempMin": round(st["min_temp"], 1),
                        "beskrivelse": " ".join(desc_parts)
                    })

            sorted_old = sorted(old_totals.items(), key=lambda x: x[1], reverse=True)
            top3 = sorted_old[:3] if len(sorted_old) >= 3 else sorted_old
            if len(top3) < 3:
                while len(top3) < 3:
                    top3.append(("Ukjent", 0.0))

            oppsummering = generate_week_summary(
                top3,
                best_station_name,
                best_station_fylke,
                best_station_score,
                old_iso.week
            )

            vaertype = determine_weather_type(old_days, old_ordered)

            archive_entry = {
                "ukeId": old_week_iso,
                "uke": f"Uke {old_iso.week}",
                "periode": f"{old_start.strftime('%d.%m')} - {old_end.strftime('%d.%m.%Y')}",
                "versteFylke": old_winner,
                "versteFylkeScore": old_totals.get(old_winner, 0),
                "versteStasjon": best_station_name,
                "versteStasjonKommune": best_station_kommune,
                "versteStasjonFylke": best_station_fylke,
                "versteStasjonScore": best_station_score,
                "dominerendeVaertype": vaertype,
                "oppsummering": oppsummering,
                "fylkerTotal": old_totals,
                "fylkerDagForDag": old_fylker_dfd,
                "dagLabels": old_dag_labels,
                "toppStasjoner": archive_top_stations
            }

            # Fjern eventuell gammel kopi av samme uke før vi legger inn ny
            store["archive"] = [a for a in store.get("archive", []) if a.get("ukeId") != old_week_iso]
            store["archive"].append(archive_entry)
            log.info(f"Arkivert {old_week_iso}: {old_winner} ({old_totals.get(old_winner, 0)})")

        # Start helt ren ny uke
        store["days"] = {}
        store["station_days"] = {}
        store["current_week_start"] = week_start_str
        store["current_week_iso"] = current_week_iso

    elif not stored_week_start:
        store["current_week_start"] = week_start_str
        store["current_week_iso"] = current_week_iso
    else:
        # Samme uke: bare sørg for at metadata er korrekt
        store["current_week_start"] = week_start_str
        store["current_week_iso"] = current_week_iso

    prune_current_week_days(store)

    station_ids = list(stations.keys())

    p1d_obs = fetch_daily_p1d(date_str, station_ids)

    p1d_precip_count = sum(1 for s in p1d_obs.values() if s.get("precip", 0) > 0)
    log.info(f"P1D stations with precip > 0: {p1d_precip_count}")

    hourly_obs = fetch_hourly_data(date_str, station_ids)

    merged_obs = merge_observations(p1d_obs, hourly_obs)

    county_ei = compute_county_ei(merged_obs, stations)
    log.info(f"County EI: {json.dumps(county_ei, indent=2, ensure_ascii=False)}")

    top_stations = find_top_stations(merged_obs, stations, n=5)
    log.info("Top 5 stations:")
    for i, s in enumerate(top_stations):
        log.info(f"  {i+1}. {s['navn']} ({s['fylke']}): EI {s['ei']}, precip {s['nedbor']}mm")

    station_day_data = {}
    for sid, data in merged_obs.items():
        if sid not in stations:
            continue
        ei = calculate_ei(
            data.get("wind_mean", 0),
            data.get("gust_max", 0),
            data.get("precip", 0),
            data.get("temp_mean", 0)
        )
        station_day_data[sid] = {
            "ei": ei,
            "gust": round(data.get("gust_max", 0), 1),
            "precip": round(data.get("precip", 0), 1),
            "temp": round(data.get("temp_mean", 0), 1)
        }

    # Samme dato overskrives, ikke dupliseres
    store["days"][date_str] = {
        "county_ei": county_ei,
        "top_stations": [
            {k: v for k, v in s.items() if k != "sid"}
            for s in top_stations
        ]
    }
    store["station_days"][date_str] = station_day_data

    # Rydd opp igjen i tilfelle gammel bad state ligger igjen
    sanitize_archive(store)

    log.info(f"Days in store: {sorted(store['days'].keys())}")

    save_data_store(store)

    success = generate_weather_data_ts(store, stations)

    if success:
        log.info("=== Oppdatering fullfort! ===")
    else:
        log.error("=== Oppdatering feilet ===")
        sys.exit(1)


if __name__ == "__main__":
    main()

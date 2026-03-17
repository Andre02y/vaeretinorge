/**
 * ============================================================
 * NORGES VERSTE VAER - DATABLOKK
 * ============================================================
 * FREMTIDSSIKRING: For a oppdatere dashboardet med nye data,
 * erstatt kun denne filen. Designet endres ikke.
 *
 * Sist oppdatert: 17.03.2026 kl. 07:51
 * Periode sammenlagt: 16.03 - 17.03.2026 (2 dager)
 * Kilde: Frost API (frost.met.no), P1D + timesdata
 * ============================================================
 */

// ---- METADATA ----

export const META = {
  serieNavn: "Norges Verste Vaer",
  dagLabel: "Tirsdag 17.03.2026",
  sammenlagtLabel: "16.03 - 17.03.2026 (2 dager)",
  datoOppdatert: "17.03.2026 kl. 07:51",
  rapportVersjon: "v2.2 (norsk tid, live uke, ryddig arkiv, fikset uke/arkiv-logikk)",
  dagLabels: ["Man 16", "Tir 17"],
};

// ---- DAG-FOR-DAG EI PER FYLKE ----

export const FYLKER_DAG_FOR_DAG = [
  { navn: "Finnmark", dager: [31.1, 32.9], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Innlandet", dager: [32.1, 28.1], trend: "Noe bedring (-4.0) - roligere forhold" },
  { navn: "Nordland", dager: [29.6, 29.2], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Agder", dager: [33.5, 24.8], trend: "Markant bedring (-8.7) - lavtrykket har passert" },
  { navn: "Oslo", dager: [34.0, 23.4], trend: "Markant bedring (-10.6) - lavtrykket har passert" },
  { navn: "Vestland", dager: [29.9, 26.4], trend: "Noe bedring (-3.5) - roligere forhold" },
  { navn: "Telemark", dager: [30.1, 26.1], trend: "Noe bedring (-4.0) - roligere forhold" },
  { navn: "Troms", dager: [28.1, 27.7], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Rogaland", dager: [28.6, 25.8], trend: "Noe bedring (-2.8) - roligere forhold" },
  { navn: "Østfold", dager: [28.9, 23.8], trend: "Markant bedring (-5.1) - lavtrykket har passert" },
  { navn: "Buskerud", dager: [28.6, 23.8], trend: "Noe bedring (-4.8) - roligere forhold" },
  { navn: "Møre og Romsdal", dager: [24.5, 24.3], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Trøndelag", dager: [22.5, 23.9], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Vestfold", dager: [0.0, 0.0], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Akershus", dager: [0.0, 0.0], trend: "Stabilt - lite endring fra i gar" },
];

// ---- SAMMENLAGT ----

export const FYLKER_SAMMENLAGT = [
  { navn: "Finnmark", total: 64.0, iDag: 32.9, endringFraIGar: 1.8, plasseringEndring: 3 },
  { navn: "Innlandet", total: 60.2, iDag: 28.1, endringFraIGar: -4.0, plasseringEndring: 1 },
  { navn: "Nordland", total: 58.8, iDag: 29.2, endringFraIGar: -0.4, plasseringEndring: 4 },
  { navn: "Agder", total: 58.3, iDag: 24.8, endringFraIGar: -8.7, plasseringEndring: -2 },
  { navn: "Oslo", total: 57.4, iDag: 23.4, endringFraIGar: -10.6, plasseringEndring: -4 },
  { navn: "Vestland", total: 56.3, iDag: 26.4, endringFraIGar: -3.5, plasseringEndring: 0 },
  { navn: "Telemark", total: 56.2, iDag: 26.1, endringFraIGar: -4.0, plasseringEndring: -2 },
  { navn: "Troms", total: 55.8, iDag: 27.7, endringFraIGar: -0.4, plasseringEndring: 3 },
  { navn: "Rogaland", total: 54.4, iDag: 25.8, endringFraIGar: -2.8, plasseringEndring: 0 },
  { navn: "Østfold", total: 52.7, iDag: 23.8, endringFraIGar: -5.1, plasseringEndring: -2 },
  { navn: "Buskerud", total: 52.4, iDag: 23.8, endringFraIGar: -4.8, plasseringEndring: -1 },
  { navn: "Møre og Romsdal", total: 48.8, iDag: 24.3, endringFraIGar: -0.2, plasseringEndring: 0 },
  { navn: "Trøndelag", total: 46.4, iDag: 23.9, endringFraIGar: 1.4, plasseringEndring: 0 },
  { navn: "Vestfold", total: 0.0, iDag: 0.0, endringFraIGar: 0.0, plasseringEndring: 0 },
  { navn: "Akershus", total: 0.0, iDag: 0.0, endringFraIGar: 0.0, plasseringEndring: 0 },
];

// ---- TOPP 5 STASJONER TIRSDAG 17.03.2026 ----

export const STASJONER_PERIODE = [
  { navn: "FOLGEFONNA SKISENTER TOPP", kommune: "ULLENSVANG", fylke: "Vestland", ei: 66.6, vindkast: 24.1, nedbor: 0, temp: -4.6, farevarsel: "oransje" },
  { navn: "KRÅKENES", kommune: "KINN", fylke: "Vestland", ei: 65.3, vindkast: 31.7, nedbor: 0, temp: 5.9, farevarsel: "oransje" },
  { navn: "TROLLEDALSEGGA", kommune: "STAD", fylke: "Vestland", ei: 65.0, vindkast: 26.6, nedbor: 0, temp: -2.8, farevarsel: "oransje" },
  { navn: "ROALDSHORNET", kommune: "STRANDA", fylke: "Møre og Romsdal", ei: 62.7, vindkast: 22.8, nedbor: 0, temp: -1.2, farevarsel: "oransje" },
  { navn: "YTTERØYANE FYR", kommune: "KINN", fylke: "Vestland", ei: 61.5, vindkast: 24.3, nedbor: 0, temp: 6.1, farevarsel: "oransje" },
];

// ---- UKENS TOPP 5 STASJONER (sammenlagt) ----

export const STASJONER_UKE = [
  {
    navn: "KRÅKENES",
    kommune: "KINN",
    fylke: "Vestland",
    totalEi: 126.0,
    gustMax: 32.3,
    precipTotal: 0,
    tempMin: 5.2,
    dager: [60.7, 65.3, 0, 0, 0, 0, 0],
    beskrivelse: "Ekstremt vaer sa langt denne uka med snitt 63 EI per dag. Toppdag Tir med 65.3 EI. Kraftige vindkast opp til 32.3 m/s."
  },
  {
    navn: "TROLLEDALSEGGA",
    kommune: "STAD",
    fylke: "Vestland",
    totalEi: 125.5,
    gustMax: 26.8,
    precipTotal: 0,
    tempMin: -2.8,
    dager: [60.5, 65.0, 0, 0, 0, 0, 0],
    beskrivelse: "Ekstremt vaer sa langt denne uka med snitt 63 EI per dag. Toppdag Tir med 65.0 EI. Kraftige vindkast opp til 26.8 m/s."
  },
  {
    navn: "TRYSIL - NORDRE KANKEN",
    kommune: "TRYSIL",
    fylke: "Innlandet",
    totalEi: 122.3,
    gustMax: 23.4,
    precipTotal: 0,
    tempMin: -3.2,
    dager: [62.0, 60.3, 0, 0, 0, 0, 0],
    beskrivelse: "Ekstremt vaer sa langt denne uka med snitt 61 EI per dag. Toppdag Man med 62.0 EI."
  },
  {
    navn: "TRYVANNSHØGDA",
    kommune: "OSLO",
    fylke: "Oslo",
    totalEi: 120.1,
    gustMax: 19.5,
    precipTotal: 33.1,
    tempMin: -0.4,
    dager: [67.3, 52.8, 0, 0, 0, 0, 0],
    beskrivelse: "Ekstremt vaer sa langt denne uka med snitt 60 EI per dag. Toppdag Man med 67.3 EI. Mye nedbor med totalt 33.1 mm."
  },
  {
    navn: "ROALDSHORNET",
    kommune: "STRANDA",
    fylke: "Møre og Romsdal",
    totalEi: 119.2,
    gustMax: 27.7,
    precipTotal: 0,
    tempMin: -1.6,
    dager: [56.5, 62.7, 0, 0, 0, 0, 0],
    beskrivelse: "Jevnt darlig vaer sa langt denne uka med snitt 60 EI per dag. Toppdag Tir med 62.7 EI. Kraftige vindkast opp til 27.7 m/s."
  },
];

// ---- TRONSKIFTE ----

export const TRONSKIFTE = {
  aktiv: true,
  tittel: "TRONSKIFTE! FINNMARK TAR LEDELSEN!",
  beskrivelse: "Finnmark har overtatt forsteplassen i sammenlagt-ligaen med 64.0 poeng, foran Innlandet (60.2).",
  gammelLeder: "Oslo",
  nyLeder: "Finnmark",
};

// ---- DAGENS LEDER ----

export const DAGENS_LEDER = {
  fylke: "Finnmark",
  ei: 32.9,
  temp: -4.6,
  nedbor: 0,
};

// ---- AKTUELL UKE / SIST FULLFORTE UKE ----

export const AKTUELL_UKE = {
  ukeId: "2026-W12",
  uke: "Uke 12",
  fraDato: "2026-03-16",
  tilDato: "2026-03-17",
  periode: "16.03 - 17.03.2026 (2 dager)",
  dagerRegistrert: 2,
  versteFylke: "Finnmark",
  versteFylkeScore: 64.0,
};

// ---- ARKIV (fullforte uker) ----

export interface ArkivUke {
  ukeId: string;
  uke: string;
  periode: string;
  versteFylke: string;
  versteFylkeScore: number;
  versteStasjon: string;
  versteStasjonKommune: string;
  versteStasjonFylke: string;
  versteStasjonScore: number;
  dominerendeVaertype: string;
  oppsummering: string;
  fylkerTotal: Record<string, number>;
  fylkerDagForDag: Record<string, number[]>;
  dagLabels: string[];
  toppStasjoner: {
    navn: string;
    kommune: string;
    fylke: string;
    totalEi: number;
    gustMax: number;
    tempMin: number;
    beskrivelse: string;
  }[];
}

export const ARKIV: ArkivUke[] = [
  {
    ukeId: "2026-W10",
    uke: "Uke 10",
    periode: "02.03 – 09.03.2026",
    versteFylke: "Finnmark",
    versteFylkeScore: 278.1,
    versteStasjon: "Hasvik-Sluskfjellet",
    versteStasjonKommune: "Hasvik",
    versteStasjonFylke: "Finnmark",
    versteStasjonScore: 461.3,
    dominerendeVaertype: "Sterk vind og vedvarende kulde i nord, nedbør og sludd langs kysten",
    oppsummering: "Uke 10 ble preget av et kraftig lavtrykk som feide inn over Nord-Norge tidlig i uka, med ekstreme vindkast og store nedbørsmengder i Nordland og Møre og Romsdal tirsdag og onsdag. Finnmark tok likevel ukesseieren med vedvarende kulde (ned til -9°C) og sterk vind gjennom hele perioden, og endte på 278.1 poeng. Nordland (271.4) hadde sin verste dag onsdag med 45.0 EI, men klarte ikke å holde følge i helgen da lavtrykket trakk nordover. Vestland (247.1) ble hardt rammet tirsdag-onsdag med sludd og kraftige vindkast. Hasvik-Sluskfjellet i Finnmark ble ukens verste stasjon med 461.3 sammenlagt EI — jevnt over 57-79 poeng hver dag med vindkast opp til 43.2 m/s. Sørlige fylker slapp billigere unna, men Oslo overrasket med 30.4 EI søndag grunnet nedbør og milde temperaturer nær sluddpunktet.",
    fylkerTotal: { "Finnmark": 278.1, "Nordland": 271.4, "Vestland": 227.7, "Troms": 244.8, "Trøndelag": 218.2, "Møre og Romsdal": 216.6, "Innlandet": 220.6, "Rogaland": 202.9, "Agder": 186.3, "Telemark": 185.6, "Buskerud": 186.3, "Oslo": 173.4, "Akershus": 172.4, "Østfold": 168.7, "Vestfold": 153.2 },
    fylkerDagForDag: {
      "Finnmark": [33.0, 41.0, 36.0, 27.1, 37.2, 38.0, 33.2, 32.6],
      "Troms": [30.0, 35.0, 37.0, 25.3, 30.0, 29.0, 32.5, 26.0],
      "Nordland": [28.5, 42.0, 45.0, 23.2, 34.8, 32.8, 36.3, 28.8],
      "Trøndelag": [27.0, 36.0, 37.0, 18.9, 23.0, 26.4, 24.1, 25.8],
      "Møre og Romsdal": [29.0, 40.0, 39.0, 16.7, 21.9, 23.8, 22.5, 23.7],
      "Vestland": [32.0, 45.0, 42.0, 18.2, 20.1, 21.4, 26.9, 22.1],
      "Rogaland": [28.0, 38.0, 41.0, 17.3, 18.8, 18.1, 24.7, 17.0],
      "Agder": [22.0, 28.0, 28.0, 17.4, 22.4, 21.3, 25.7, 21.5],
      "Telemark": [21.0, 27.0, 29.0, 16.7, 21.4, 25.8, 25.2, 19.5],
      "Vestfold": [17.0, 21.0, 22.0, 16.2, 18.0, 20.0, 22.0, 17.0],
      "Buskerud": [20.0, 26.0, 28.0, 17.1, 22.4, 25.2, 25.1, 22.5],
      "Innlandet": [26.0, 34.0, 36.0, 19.1, 25.2, 27.8, 27.9, 24.6],
      "Akershus": [19.0, 24.0, 27.0, 16.3, 21.2, 22.0, 24.0, 18.9],
      "Østfold": [18.0, 23.0, 25.0, 15.9, 21.8, 22.0, 23.6, 19.4],
      "Oslo": [16.0, 20.0, 23.0, 13.1, 21.6, 29.5, 30.4, 19.8],
    },
    dagLabels: ["Man 02", "Tir 03", "Ons 04", "Tor 05", "Fre 06", "Lør 07", "Søn 08", "Søn 09"],
    toppStasjoner: [
      {
        navn: "Hasvik-Sluskfjellet",
        kommune: "Hasvik",
        fylke: "Finnmark",
        totalEi: 461.3,
        gustMax: 43.2,
        tempMin: -1.3,
        beskrivelse: "Ekstremt vær hele uken med snitt 57.7 EI per dag. Kraftige vindkast opp til 43.2 m/s."
      },
      {
        navn: "Båtsfjord-Straumsnesaksla",
        kommune: "Båtsfjord",
        fylke: "Finnmark",
        totalEi: 420.5,
        gustMax: 19.8,
        tempMin: -9.0,
        beskrivelse: "Bitende kulde ned til -9.0°C kombinert med sterk vind gjennom hele uken."
      },
      {
        navn: "Ånstadblåheia",
        kommune: "Sortland",
        fylke: "Nordland",
        totalEi: 395.2,
        gustMax: 32.5,
        tempMin: -2.1,
        beskrivelse: "Kraftige vindkast og kalde temperaturer, spesielt fredag med 75.2 EI."
      },
      {
        navn: "Narvik-Fagernesfjellet",
        kommune: "Narvik",
        fylke: "Nordland",
        totalEi: 380.1,
        gustMax: 29.1,
        tempMin: -3.5,
        beskrivelse: "Vedvarende sterk vind hele uken med topp søndag."
      },
      {
        navn: "E69 Nordkapp",
        kommune: "Nordkapp",
        fylke: "Finnmark",
        totalEi: 370.8,
        gustMax: 15.2,
        tempMin: -2.5,
        beskrivelse: "Mye nedbør og kulde, 69.5 EI søndag med 35.8mm nedbør."
      },
    ]
  },
  {
    ukeId: "2026-W11",
    uke: "Uke 11",
    periode: "09.03 - 15.03.2026",
    versteFylke: "Finnmark",
    versteFylkeScore: 69.4,
    versteStasjon: "ØRSTA - EITREFJELL",
    versteStasjonKommune: "ØRSTA",
    versteStasjonFylke: "Møre og Romsdal",
    versteStasjonScore: 129.0,
    dominerendeVaertype: "Sterk vind, mye nedbor, vedvarende kulde",
    oppsummering: "Uke 11 ble preget av moderat vaer der Finnmark ledet med 69.4 poeng. Nordland (63.6) og Agder (61.7) fulgte paa de neste plassene. ØRSTA - EITREFJELL i Møre og Romsdal ble ukens verste stasjon med 129.0 sammenlagt EI.",
    fylkerTotal: { "Finnmark": 69.4, "Troms": 54.5, "Nordland": 63.6, "Trøndelag": 51.2, "Møre og Romsdal": 54.0, "Vestland": 60.8, "Rogaland": 54.7, "Agder": 61.7, "Telemark": 50.8, "Vestfold": 0.0, "Buskerud": 46.7, "Innlandet": 57.3, "Akershus": 0.0, "Østfold": 50.4, "Oslo": 44.7 },
    fylkerDagForDag: {
      "Finnmark": [39.8, 29.6],
      "Troms": [28.7, 25.8],
      "Nordland": [32.9, 30.7],
      "Trøndelag": [26.5, 24.7],
      "Møre og Romsdal": [27.5, 26.5],
      "Vestland": [30.1, 30.7],
      "Rogaland": [25.7, 29.0],
      "Agder": [28.6, 33.1],
      "Telemark": [26.4, 24.4],
      "Vestfold": [0.0, 0.0],
      "Buskerud": [22.4, 24.3],
      "Innlandet": [29.0, 28.3],
      "Akershus": [0.0, 0.0],
      "Østfold": [24.2, 26.2],
      "Oslo": [23.1, 21.6],
    },
    dagLabels: ["Lør 14", "Søn 15"],
    toppStasjoner: [
      {
        navn: "ØRSTA - EITREFJELL",
        kommune: "ØRSTA",
        fylke: "Møre og Romsdal",
        totalEi: 129.0,
        gustMax: 26.6,
        tempMin: -0.4,
        beskrivelse: "Ekstremt vaer hele uken med snitt 64 EI per dag. Vindkast opp til 26.6 m/s."
      },
      {
        navn: "JUVVASSHØE",
        kommune: "LOM",
        fylke: "Innlandet",
        totalEi: 128.1,
        gustMax: 29.9,
        tempMin: -8.2,
        beskrivelse: "Ekstremt vaer hele uken med snitt 64 EI per dag. Vindkast opp til 29.9 m/s. Kulde ned til -8.2C."
      },
      {
        navn: "KRÅKENES",
        kommune: "KINN",
        fylke: "Vestland",
        totalEi: 121.8,
        gustMax: 32.7,
        tempMin: 4.7,
        beskrivelse: "Ekstremt vaer hele uken med snitt 61 EI per dag. Vindkast opp til 32.7 m/s."
      },
      {
        navn: "ROALDSHORNET",
        kommune: "STRANDA",
        fylke: "Møre og Romsdal",
        totalEi: 118.6,
        gustMax: 26.5,
        tempMin: -3.2,
        beskrivelse: "Jevnt daarlig vaer med snitt 59 EI per dag. Vindkast opp til 26.5 m/s."
      },
      {
        navn: "TROLLEDALSEGGA",
        kommune: "STAD",
        fylke: "Vestland",
        totalEi: 118.0,
        gustMax: 25.4,
        tempMin: -3.2,
        beskrivelse: "Jevnt daarlig vaer med snitt 59 EI per dag. Vindkast opp til 25.4 m/s."
      },
    ]
  },
];

export const SIST_FULLFORTE_UKE: ArkivUke | null = ARKIV.length ? ARKIV[ARKIV.length - 1] : null;

// ---- HJELPEFUNKSJONER ----

export function scoreColor(score: number): string {
  if (score > 50) return "#ff2d2d";
  if (score >= 30) return "#ffaa00";
  return "#d4c957";
}

export function scoreClass(score: number): string {
  if (score > 50) return "score-critical";
  if (score >= 30) return "score-warning";
  return "score-caution";
}

export function fmt(n: number): string {
  return n.toFixed(1);
}

export function fmtChange(n: number): string {
  return (n > 0 ? "+" : "") + n.toFixed(1);
}

export function posLabel(n: number): string {
  if (n > 0) return "\u25B2 " + n;
  if (n < 0) return "\u25BC " + Math.abs(n);
  return "\u2014";
}

export function posColor(n: number): string {
  if (n > 0) return "#00d4ff";
  if (n < 0) return "#ff2d2d";
  return "#4a6a8a";
}

export function sortedSammenlagt() {
  return [...FYLKER_SAMMENLAGT].sort((a, b) => b.total - a.total);
}

export function sortedIDag() {
  return [...FYLKER_SAMMENLAGT].sort((a, b) => b.iDag - a.iDag);
}

export function sortedDagForDag() {
  return [...FYLKER_DAG_FOR_DAG].sort((a, b) => {
    const sumA = a.dager.reduce((s: number, v: number) => s + v, 0);
    const sumB = b.dager.reduce((s: number, v: number) => s + v, 0);
    return sumB - sumA;
  });
}

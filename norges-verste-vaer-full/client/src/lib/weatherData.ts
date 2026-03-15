/**
 * ============================================================
 * NORGES VERSTE VAER — DATABLOKK
 * ============================================================
 * FREMTIDSSIKRING: For aa oppdatere dashboardet med nye data,
 * erstatt kun denne filen. Designet endres ikke.
 *
 * Sist oppdatert: 10.03.2026 kl. 18:00
 * Innev. uke: Uke 11 (10.03 – 16.03.2026)
 * Kilde: Frost API (frost.met.no), P1D + timesdata
 *
 * STRUKTUR:
 *   1. META — metadata og daglabels for innev. uke
 *   2. FYLKER_DAG_FOR_DAG — daglig EI per fylke (innev. uke)
 *   3. FYLKER_SAMMENLAGT — sammenlagt for innev. uke
 *   4. STASJONER_PERIODE — dagens topp 5 stasjoner
 *   5. STASJONER_UKE — ukens topp 5 stasjoner (sammenlagt)
 *   6. TRONSKIFTE — tronskifte-info
 *   7. DAGENS_LEDER — dagens leder
 *   8. ARKIV — fullfoerte uker med detaljert oppsummering
 *   9. Hjelpefunksjoner
 * ============================================================
 */

// ---- METADATA ----

export const META = {
  serieNavn: "Norges Verste Vaer",
  dagLabel: "Mandag 10.03.2026",
  sammenlagtLabel: "Uke 11: 10.03 – 16.03.2026 (1 dag)",
  datoOppdatert: "10.03.2026 kl. 18:00",
  rapportVersjon: "v3.0 (Frost API P1D + timesdata, ukearkiv, auto-oppdatering)",
  dagLabels: ["Man 10"],
  ukeId: "2026-W11",
  ukeNummer: 11,
};

// ---- DAG-FOR-DAG EI PER FYLKE (INNEV. UKE) ----

export const FYLKER_DAG_FOR_DAG = [
  { navn: "Finnmark", dager: [35.7], trend: "Finnmark starter uke 11 sterkt med 35.7 EI — vedvarende kulde og nedbor" },
  { navn: "Nordland", dager: [34.6], trend: "Nordland folger tett med 34.6 EI — vind og nedbor langs kysten" },
  { navn: "Troms", dager: [30.9], trend: "Troms starter med 30.9 EI — kalde temperaturer og noe vind" },
  { navn: "Vestland", dager: [28.2], trend: "Vestland paa 28.2 EI — moderat vaer etter en toff uke 10" },
  { navn: "Moere og Romsdal", dager: [25.7], trend: "Moderat start paa uken med 25.7 EI" },
  { navn: "Innlandet", dager: [25.4], trend: "Innlandet paa 25.4 EI — kaldt innlandsvaer" },
  { navn: "Agder", dager: [25.3], trend: "Agder starter med 25.3 EI — noe nedbor og milde temperaturer" },
  { navn: "Oslo", dager: [25.0], trend: "Oslo overrasker med 25.0 EI — nedbor og sludd" },
  { navn: "Oestfold", dager: [24.9], trend: "Oestfold paa 24.9 EI — vaatt vaer" },
  { navn: "Rogaland", dager: [24.6], trend: "Rogaland starter rolig med 24.6 EI" },
  { navn: "Troendelag", dager: [23.8], trend: "Troendelag paa 23.8 EI — rolig start" },
  { navn: "Telemark", dager: [22.9], trend: "Telemark starter lavt med 22.9 EI" },
  { navn: "Buskerud", dager: [22.5], trend: "Buskerud paa 22.5 EI — rolig start" },
  { navn: "Akershus", dager: [24.0], trend: "Akershus starter med 24.0 EI" },
  { navn: "Vestfold", dager: [22.0], trend: "Vestfold lavest med 22.0 EI" },
];

// ---- SAMMENLAGT (INNEV. UKE) ----

export const FYLKER_SAMMENLAGT = [
  { navn: "Finnmark", total: 35.7, iDag: 35.7, endringFraIGar: 0, plasseringEndring: 0 },
  { navn: "Nordland", total: 34.6, iDag: 34.6, endringFraIGar: 0, plasseringEndring: 0 },
  { navn: "Troms", total: 30.9, iDag: 30.9, endringFraIGar: 0, plasseringEndring: 0 },
  { navn: "Vestland", total: 28.2, iDag: 28.2, endringFraIGar: 0, plasseringEndring: 0 },
  { navn: "Moere og Romsdal", total: 25.7, iDag: 25.7, endringFraIGar: 0, plasseringEndring: 0 },
  { navn: "Innlandet", total: 25.4, iDag: 25.4, endringFraIGar: 0, plasseringEndring: 0 },
  { navn: "Agder", total: 25.3, iDag: 25.3, endringFraIGar: 0, plasseringEndring: 0 },
  { navn: "Oslo", total: 25.0, iDag: 25.0, endringFraIGar: 0, plasseringEndring: 0 },
  { navn: "Oestfold", total: 24.9, iDag: 24.9, endringFraIGar: 0, plasseringEndring: 0 },
  { navn: "Rogaland", total: 24.6, iDag: 24.6, endringFraIGar: 0, plasseringEndring: 0 },
  { navn: "Troendelag", total: 23.8, iDag: 23.8, endringFraIGar: 0, plasseringEndring: 0 },
  { navn: "Akershus", total: 24.0, iDag: 24.0, endringFraIGar: 0, plasseringEndring: 0 },
  { navn: "Telemark", total: 22.9, iDag: 22.9, endringFraIGar: 0, plasseringEndring: 0 },
  { navn: "Buskerud", total: 22.5, iDag: 22.5, endringFraIGar: 0, plasseringEndring: 0 },
  { navn: "Vestfold", total: 22.0, iDag: 22.0, endringFraIGar: 0, plasseringEndring: 0 },
];

// ---- TOPP 5 STASJONER MANDAG 10.03.2026 ----

export const STASJONER_PERIODE = [
  { navn: "E69 Nordkapp", kommune: "Nordkapp", fylke: "Finnmark", ei: 75.7, vindkast: 0, nedbor: 36.0, temp: 0.0, farevarsel: "oransje" },
  { navn: "Hasvik-Sluskfjellet", kommune: "Hasvik", fylke: "Finnmark", ei: 64.0, vindkast: 29.5, nedbor: 0, temp: -1.3, farevarsel: "oransje" },
  { navn: "Juvvasshoe", kommune: "Lom", fylke: "Innlandet", ei: 62.2, vindkast: 28.9, nedbor: 0, temp: -1.4, farevarsel: "oransje" },
  { navn: "Kraakenes", kommune: "Stad", fylke: "Vestland", ei: 61.8, vindkast: 26.0, nedbor: 0, temp: 6.2, farevarsel: "oransje" },
  { navn: "Gvarv-Nes", kommune: "Nome", fylke: "Telemark", ei: 60.3, vindkast: 5.6, nedbor: 41.2, temp: 0.4, farevarsel: "oransje" },
];

// ---- UKENS TOPP 5 STASJONER (sammenlagt innev. uke) ----

export const STASJONER_UKE = [
  {
    navn: "E69 Nordkapp",
    kommune: "Nordkapp",
    fylke: "Finnmark",
    totalEi: 75.7,
    gustMax: 0,
    precipTotal: 36.0,
    tempMin: 0.0,
    dager: [75.7],
    beskrivelse: "Nordkapp starter uke 11 paa topp med 75.7 EI — kraftig nedbor (36mm) ved frysepunktet."
  },
  {
    navn: "Hasvik-Sluskfjellet",
    kommune: "Hasvik",
    fylke: "Finnmark",
    totalEi: 64.0,
    gustMax: 29.5,
    precipTotal: 0,
    tempMin: -1.3,
    dager: [64.0],
    beskrivelse: "Hasvik-Sluskfjellet fortsetter fra forrige ukes dominans med 64.0 EI og vindkast paa 29.5 m/s."
  },
  {
    navn: "Juvvasshoe",
    kommune: "Lom",
    fylke: "Innlandet",
    totalEi: 62.2,
    gustMax: 28.9,
    precipTotal: 0,
    tempMin: -1.4,
    dager: [62.2],
    beskrivelse: "Juvvasshoe i Innlandet med 62.2 EI — sterk vind paa fjellet."
  },
  {
    navn: "Kraakenes",
    kommune: "Stad",
    fylke: "Vestland",
    totalEi: 61.8,
    gustMax: 26.0,
    precipTotal: 0,
    tempMin: 6.2,
    dager: [61.8],
    beskrivelse: "Kraakenes paa Stad med 61.8 EI — kraftige vindkast paa 26.0 m/s."
  },
  {
    navn: "Gvarv-Nes",
    kommune: "Nome",
    fylke: "Telemark",
    totalEi: 60.3,
    gustMax: 5.6,
    precipTotal: 41.2,
    tempMin: 0.4,
    dager: [60.3],
    beskrivelse: "Gvarv-Nes i Telemark med 60.3 EI — enorm nedbor (41.2mm) ved sluddpunktet."
  },
];

// ---- TRONSKIFTE ----

export const TRONSKIFTE = {
  aktiv: false,
  tittel: "FINNMARK LEDER!",
  beskrivelse: "Finnmark starter uke 11 i tet med 35.7 EI paa dag 1. Nordland folger tett med 34.6. Alt aa spille for!",
  gammelLeder: "Finnmark",
  nyLeder: "Finnmark",
};

// ---- DAGENS LEDER ----

export const DAGENS_LEDER = {
  fylke: "Finnmark",
  ei: 35.7,
  temp: 0.0,
  nedbor: 36.0,
};

// ---- ARKIV (fullfoerte uker med detaljert oppsummering) ----

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
    periode: "02.03 \u2013 09.03.2026",
    versteFylke: "Finnmark",
    versteFylkeScore: 278.1,
    versteStasjon: "Hasvik-Sluskfjellet",
    versteStasjonKommune: "Hasvik",
    versteStasjonFylke: "Finnmark",
    versteStasjonScore: 461.3,
    dominerendeVaertype: "Sterk vind og vedvarende kulde i nord, nedbor og sludd langs kysten",
    oppsummering: "Uke 10 ble preget av et kraftig lavtrykk som feide inn over Nord-Norge tidlig i uka, med ekstreme vindkast og store nedbormengder i Nordland og More og Romsdal tirsdag og onsdag. Finnmark tok likevel ukesseieren med vedvarende kulde (ned til -9\u00B0C) og sterk vind gjennom hele perioden, og endte paa 278.1 poeng. Nordland (271.4) hadde sin verste dag onsdag med 45.0 EI, men klarte ikke aa holde folge i helgen da lavtrykket trakk nordover. Vestland (227.7) ble hardt rammet tirsdag-onsdag med sludd og kraftige vindkast. Hasvik-Sluskfjellet i Finnmark ble ukens verste stasjon med 461.3 sammenlagt EI \u2014 jevnt over 57-79 poeng hver dag med vindkast opp til 43.2 m/s. Sorlige fylker slapp billigere unna, men Oslo overrasket med 30.4 EI sondag grunnet nedbor og milde temperaturer naer sluddpunktet.",
    fylkerTotal: {
      "Finnmark": 278.1,
      "Nordland": 271.4,
      "Troms": 244.8,
      "Vestland": 227.7,
      "Innlandet": 220.6,
      "Troendelag": 218.2,
      "Moere og Romsdal": 216.6,
      "Rogaland": 202.9,
      "Agder": 186.3,
      "Buskerud": 186.3,
      "Telemark": 185.6,
      "Oslo": 173.4,
      "Akershus": 172.4,
      "Oestfold": 168.7,
      "Vestfold": 153.2
    },
    fylkerDagForDag: {
      "Finnmark": [33.0, 41.0, 36.0, 27.1, 37.2, 38.0, 33.2, 32.6],
      "Troms": [30.0, 35.0, 37.0, 25.3, 30.0, 29.0, 32.5, 26.0],
      "Nordland": [28.5, 42.0, 45.0, 23.2, 34.8, 32.8, 36.3, 28.8],
      "Troendelag": [27.0, 36.0, 37.0, 18.9, 23.0, 26.4, 24.1, 25.8],
      "Moere og Romsdal": [29.0, 40.0, 39.0, 16.7, 21.9, 23.8, 22.5, 23.7],
      "Vestland": [32.0, 45.0, 42.0, 18.2, 20.1, 21.4, 26.9, 22.1],
      "Rogaland": [28.0, 38.0, 41.0, 17.3, 18.8, 18.1, 24.7, 17.0],
      "Agder": [22.0, 28.0, 28.0, 17.4, 22.4, 21.3, 25.7, 21.5],
      "Telemark": [21.0, 27.0, 29.0, 16.7, 21.4, 25.8, 25.2, 19.5],
      "Vestfold": [17.0, 21.0, 22.0, 16.2, 18.0, 20.0, 22.0, 17.0],
      "Buskerud": [20.0, 26.0, 28.0, 17.1, 22.4, 25.2, 25.1, 22.5],
      "Innlandet": [26.0, 34.0, 36.0, 19.1, 25.2, 27.8, 27.9, 24.6],
      "Akershus": [19.0, 24.0, 27.0, 16.3, 21.2, 22.0, 24.0, 18.9],
      "Oestfold": [18.0, 23.0, 25.0, 15.9, 21.8, 22.0, 23.6, 19.4],
      "Oslo": [16.0, 20.0, 23.0, 13.1, 21.6, 29.5, 30.4, 19.8]
    },
    dagLabels: ["Man 02", "Tir 03", "Ons 04", "Tor 05", "Fre 06", "Lor 07", "Son 08", "Son 09"],
    toppStasjoner: [
      { navn: "Hasvik-Sluskfjellet", kommune: "Hasvik", fylke: "Finnmark", totalEi: 461.3, gustMax: 43.2, tempMin: -1.3, beskrivelse: "Ekstremt vaer hele uken med snitt 57.7 EI per dag. Kraftige vindkast opp til 43.2 m/s." },
      { navn: "Baatsfjord-Straumsnesaksla", kommune: "Baatsfjord", fylke: "Finnmark", totalEi: 420.5, gustMax: 19.8, tempMin: -9.0, beskrivelse: "Bitende kulde ned til -9.0\u00B0C kombinert med sterk vind gjennom hele uken." },
      { navn: "Aanstadblaaaheia", kommune: "Sortland", fylke: "Nordland", totalEi: 395.2, gustMax: 32.5, tempMin: -2.1, beskrivelse: "Kraftige vindkast og kalde temperaturer, spesielt fredag med 75.2 EI." },
      { navn: "Narvik-Fagernesfjellet", kommune: "Narvik", fylke: "Nordland", totalEi: 380.1, gustMax: 29.1, tempMin: -3.5, beskrivelse: "Vedvarende sterk vind hele uken med topp sondag." },
      { navn: "E69 Nordkapp", kommune: "Nordkapp", fylke: "Finnmark", totalEi: 370.8, gustMax: 15.2, tempMin: -2.5, beskrivelse: "Mye nedbor og kulde, 69.5 EI sondag med 35.8mm nedbor." }
    ]
  }
];

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

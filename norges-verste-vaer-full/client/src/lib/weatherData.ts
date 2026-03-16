/**
 * ============================================================
 * NORGES VERSTE VAER - DATABLOKK
 * ============================================================
 * FREMTIDSSIKRING: For a oppdatere dashboardet med nye data,
 * erstatt kun denne filen. Designet endres ikke.
 *
 * Sist oppdatert: 16.03.2026 kl. 06:09
 * Periode sammenlagt: 16.03 - 16.03.2026 (1 dager)
 * Kilde: Frost API (frost.met.no), P1D + timesdata
 * ============================================================
 */

// ---- METADATA ----

export const META = {
  serieNavn: "Norges Verste Vaer",
  dagLabel: "Mandag 16.03.2026",
  sammenlagtLabel: "16.03 - 16.03.2026 (1 dager)",
  datoOppdatert: "16.03.2026 kl. 06:09",
  rapportVersjon: "v2.2 (norsk tid, live uke, ryddig arkiv, fikset uke/arkiv-logikk)",
  dagLabels: ["Man 16"],
};

// ---- DAG-FOR-DAG EI PER FYLKE ----

export const FYLKER_DAG_FOR_DAG = [
  { navn: "Agder", dager: [32.0], trend: "Kraftig forverring (+32.0) - okt vind og/eller nedbor" },
  { navn: "Innlandet", dager: [31.8], trend: "Kraftig forverring (+31.8) - okt vind og/eller nedbor" },
  { navn: "Oslo", dager: [31.6], trend: "Kraftig forverring (+31.6) - okt vind og/eller nedbor" },
  { navn: "Nordland", dager: [29.6], trend: "Kraftig forverring (+29.6) - okt vind og/eller nedbor" },
  { navn: "Finnmark", dager: [29.4], trend: "Kraftig forverring (+29.4) - okt vind og/eller nedbor" },
  { navn: "Telemark", dager: [28.3], trend: "Kraftig forverring (+28.3) - okt vind og/eller nedbor" },
  { navn: "Troms", dager: [27.6], trend: "Kraftig forverring (+27.6) - okt vind og/eller nedbor" },
  { navn: "Østfold", dager: [27.6], trend: "Kraftig forverring (+27.6) - okt vind og/eller nedbor" },
  { navn: "Vestland", dager: [27.5], trend: "Kraftig forverring (+27.5) - okt vind og/eller nedbor" },
  { navn: "Buskerud", dager: [27.3], trend: "Kraftig forverring (+27.3) - okt vind og/eller nedbor" },
  { navn: "Trøndelag", dager: [24.4], trend: "Kraftig forverring (+24.4) - okt vind og/eller nedbor" },
  { navn: "Møre og Romsdal", dager: [24.4], trend: "Kraftig forverring (+24.4) - okt vind og/eller nedbor" },
  { navn: "Rogaland", dager: [24.1], trend: "Kraftig forverring (+24.1) - okt vind og/eller nedbor" },
  { navn: "Vestfold", dager: [0.0], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Akershus", dager: [0.0], trend: "Stabilt - lite endring fra i gar" },
];

// ---- SAMMENLAGT ----

export const FYLKER_SAMMENLAGT = [
  { navn: "Agder", total: 32.0, iDag: 32.0, endringFraIGar: 32.0, plasseringEndring: 0 },
  { navn: "Innlandet", total: 31.8, iDag: 31.8, endringFraIGar: 31.8, plasseringEndring: 0 },
  { navn: "Oslo", total: 31.6, iDag: 31.6, endringFraIGar: 31.6, plasseringEndring: 0 },
  { navn: "Nordland", total: 29.6, iDag: 29.6, endringFraIGar: 29.6, plasseringEndring: 0 },
  { navn: "Finnmark", total: 29.4, iDag: 29.4, endringFraIGar: 29.4, plasseringEndring: 0 },
  { navn: "Telemark", total: 28.3, iDag: 28.3, endringFraIGar: 28.3, plasseringEndring: 0 },
  { navn: "Troms", total: 27.6, iDag: 27.6, endringFraIGar: 27.6, plasseringEndring: 0 },
  { navn: "Østfold", total: 27.6, iDag: 27.6, endringFraIGar: 27.6, plasseringEndring: 0 },
  { navn: "Vestland", total: 27.5, iDag: 27.5, endringFraIGar: 27.5, plasseringEndring: 0 },
  { navn: "Buskerud", total: 27.3, iDag: 27.3, endringFraIGar: 27.3, plasseringEndring: 0 },
  { navn: "Trøndelag", total: 24.4, iDag: 24.4, endringFraIGar: 24.4, plasseringEndring: 0 },
  { navn: "Møre og Romsdal", total: 24.4, iDag: 24.4, endringFraIGar: 24.4, plasseringEndring: 0 },
  { navn: "Rogaland", total: 24.1, iDag: 24.1, endringFraIGar: 24.1, plasseringEndring: 0 },
  { navn: "Vestfold", total: 0.0, iDag: 0.0, endringFraIGar: 0.0, plasseringEndring: 0 },
  { navn: "Akershus", total: 0.0, iDag: 0.0, endringFraIGar: 0.0, plasseringEndring: 0 },
];

// ---- TOPP 5 STASJONER MANDAG 16.03.2026 ----

export const STASJONER_PERIODE = [
  { navn: "TRYSIL - NORDRE KANKEN", kommune: "TRYSIL", fylke: "Innlandet", ei: 66.9, vindkast: 23.4, nedbor: 0, temp: -2.9, farevarsel: "oransje" },
  { navn: "TRYVANNSHØGDA", kommune: "OSLO", fylke: "Oslo", ei: 65.9, vindkast: 19.5, nedbor: 1.8, temp: 0.1, farevarsel: "oransje" },
  { navn: "JUVVASSHØE", kommune: "LOM", fylke: "Innlandet", ei: 64.6, vindkast: 30.5, nedbor: 0, temp: -7.5, farevarsel: "oransje" },
  { navn: "GULLFJELLET", kommune: "BERGEN", fylke: "Vestland", ei: 63.3, vindkast: 10.7, nedbor: 38.5, temp: 1.9, farevarsel: "oransje" },
  { navn: "TORUNGEN FYR", kommune: "ARENDAL", fylke: "Agder", ei: 62.0, vindkast: 24.7, nedbor: 3.5, temp: 4.4, farevarsel: "oransje" },
];

// ---- UKENS TOPP 5 STASJONER (sammenlagt) ----

export const STASJONER_UKE = [
  {
    navn: "TRYSIL - NORDRE KANKEN",
    kommune: "TRYSIL",
    fylke: "Innlandet",
    totalEi: 66.9,
    gustMax: 23.4,
    precipTotal: 0,
    tempMin: -2.9,
    dager: [66.9, 0, 0, 0, 0, 0, 0],
    beskrivelse: "Ekstremt vaer sa langt denne uka med snitt 67 EI per dag. Toppdag Man med 66.9 EI."
  },
  {
    navn: "TRYVANNSHØGDA",
    kommune: "OSLO",
    fylke: "Oslo",
    totalEi: 65.9,
    gustMax: 19.5,
    precipTotal: 1.8,
    tempMin: 0.1,
    dager: [65.9, 0, 0, 0, 0, 0, 0],
    beskrivelse: "Ekstremt vaer sa langt denne uka med snitt 66 EI per dag. Toppdag Man med 65.9 EI."
  },
  {
    navn: "JUVVASSHØE",
    kommune: "LOM",
    fylke: "Innlandet",
    totalEi: 64.6,
    gustMax: 30.5,
    precipTotal: 0,
    tempMin: -7.5,
    dager: [64.6, 0, 0, 0, 0, 0, 0],
    beskrivelse: "Ekstremt vaer sa langt denne uka med snitt 65 EI per dag. Toppdag Man med 64.6 EI. Kraftige vindkast opp til 30.5 m/s. Bitende kulde ned til -7.5 grader C."
  },
  {
    navn: "GULLFJELLET",
    kommune: "BERGEN",
    fylke: "Vestland",
    totalEi: 63.3,
    gustMax: 10.7,
    precipTotal: 38.5,
    tempMin: 1.9,
    dager: [63.3, 0, 0, 0, 0, 0, 0],
    beskrivelse: "Ekstremt vaer sa langt denne uka med snitt 63 EI per dag. Toppdag Man med 63.3 EI. Mye nedbor med totalt 38.5 mm."
  },
  {
    navn: "TORUNGEN FYR",
    kommune: "ARENDAL",
    fylke: "Agder",
    totalEi: 62.0,
    gustMax: 24.7,
    precipTotal: 3.5,
    tempMin: 4.4,
    dager: [62.0, 0, 0, 0, 0, 0, 0],
    beskrivelse: "Ekstremt vaer sa langt denne uka med snitt 62 EI per dag. Toppdag Man med 62.0 EI."
  },
];

// ---- TRONSKIFTE ----

export const TRONSKIFTE = {
  aktiv: false,
  tittel: "AGDER LEDER!",
  beskrivelse: "Agder leder sammenlagt med 32.0 poeng - 0.2 poeng foran Innlandet (31.8).",
  gammelLeder: "Agder",
  nyLeder: "Agder",
};

// ---- DAGENS LEDER ----

export const DAGENS_LEDER = {
  fylke: "Agder",
  ei: 32.0,
  temp: 4.4,
  nedbor: 3.5,
};

// ---- AKTUELL UKE / SIST FULLFORTE UKE ----

export const AKTUELL_UKE = {
  ukeId: "2026-W12",
  uke: "Uke 12",
  fraDato: "2026-03-16",
  tilDato: "2026-03-16",
  periode: "16.03 - 16.03.2026 (1 dager)",
  dagerRegistrert: 1,
  versteFylke: "Agder",
  versteFylkeScore: 32.0,
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

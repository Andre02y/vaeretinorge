/**
 * ============================================================
 * NORGES VERSTE VAER - DATABLOKK
 * ============================================================
 * FREMTIDSSIKRING: For a oppdatere dashboardet med nye data,
 * erstatt kun denne filen. Designet endres ikke.
 *
 * Sist oppdatert: 15.03.2026 kl. 19:23
 * Periode sammenlagt: 14.03 - 15.03.2026 (2 dager)
 * Kilde: Frost API (frost.met.no), P1D + timesdata
 * ============================================================
 */

// ---- METADATA ----

export const META = {
  serieNavn: "Norges Verste Vaer",
  dagLabel: "Søndag 15.03.2026",
  sammenlagtLabel: "14.03 - 15.03.2026 (2 dager)",
  datoOppdatert: "15.03.2026 kl. 19:23",
  rapportVersjon: "v2.2 (norsk tid, live uke, ryddig arkiv, fikset uke/arkiv-logikk)",
  dagLabels: ["Lør 14", "Søn 15"],
};

// ---- DAG-FOR-DAG EI PER FYLKE ----

export const FYLKER_DAG_FOR_DAG = [
  { navn: "Finnmark", dager: [39.8, 29.7], trend: "Markant bedring (-10.1) - lavtrykket har passert" },
  { navn: "Nordland", dager: [32.9, 30.8], trend: "Noe bedring (-2.1) - roligere forhold" },
  { navn: "Vestland", dager: [30.1, 30.4], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Agder", dager: [28.6, 31.8], trend: "Noe forverring (+3.2) - ustabilt vaer fortsetter" },
  { navn: "Innlandet", dager: [29.0, 26.5], trend: "Noe bedring (-2.5) - roligere forhold" },
  { navn: "Troms", dager: [28.7, 25.9], trend: "Noe bedring (-2.8) - roligere forhold" },
  { navn: "Rogaland", dager: [25.7, 28.7], trend: "Noe forverring (+3.0) - ustabilt vaer fortsetter" },
  { navn: "Møre og Romsdal", dager: [27.5, 26.6], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Telemark", dager: [26.4, 26.2], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Trøndelag", dager: [26.5, 24.3], trend: "Noe bedring (-2.2) - roligere forhold" },
  { navn: "Østfold", dager: [24.2, 24.9], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Oslo", dager: [23.1, 23.5], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Buskerud", dager: [22.4, 23.1], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Vestfold", dager: [0.0, 0.0], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Akershus", dager: [0.0, 0.0], trend: "Stabilt - lite endring fra i gar" },
];

// ---- SAMMENLAGT ----

export const FYLKER_SAMMENLAGT = [
  { navn: "Finnmark", total: 69.5, iDag: 29.7, endringFraIGar: -10.1, plasseringEndring: 0 },
  { navn: "Nordland", total: 63.7, iDag: 30.8, endringFraIGar: -2.1, plasseringEndring: 0 },
  { navn: "Vestland", total: 60.5, iDag: 30.4, endringFraIGar: 0.3, plasseringEndring: 0 },
  { navn: "Agder", total: 60.4, iDag: 31.8, endringFraIGar: 3.2, plasseringEndring: 2 },
  { navn: "Innlandet", total: 55.5, iDag: 26.5, endringFraIGar: -2.5, plasseringEndring: -1 },
  { navn: "Troms", total: 54.6, iDag: 25.9, endringFraIGar: -2.8, plasseringEndring: -1 },
  { navn: "Rogaland", total: 54.4, iDag: 28.7, endringFraIGar: 3.0, plasseringEndring: 3 },
  { navn: "Møre og Romsdal", total: 54.1, iDag: 26.6, endringFraIGar: -0.9, plasseringEndring: -1 },
  { navn: "Telemark", total: 52.6, iDag: 26.2, endringFraIGar: -0.2, plasseringEndring: 0 },
  { navn: "Trøndelag", total: 50.8, iDag: 24.3, endringFraIGar: -2.2, plasseringEndring: -2 },
  { navn: "Østfold", total: 49.1, iDag: 24.9, endringFraIGar: 0.7, plasseringEndring: 0 },
  { navn: "Oslo", total: 46.6, iDag: 23.5, endringFraIGar: 0.4, plasseringEndring: 0 },
  { navn: "Buskerud", total: 45.5, iDag: 23.1, endringFraIGar: 0.7, plasseringEndring: 0 },
  { navn: "Vestfold", total: 0.0, iDag: 0.0, endringFraIGar: 0.0, plasseringEndring: 0 },
  { navn: "Akershus", total: 0.0, iDag: 0.0, endringFraIGar: 0.0, plasseringEndring: 0 },
];

// ---- TOPP 5 STASJONER SØNDAG 15.03.2026 ----

export const STASJONER_PERIODE = [
  { navn: "ØRSTA - EITREFJELL", kommune: "ØRSTA", fylke: "Møre og Romsdal", ei: 66.7, vindkast: 26.6, nedbor: 1.2, temp: 0.6, farevarsel: "oransje" },
  { navn: "ÅNSTADBLÅHEIA", kommune: "SORTLAND", fylke: "Nordland", ei: 64.4, vindkast: 26.5, nedbor: 0, temp: 0.7, farevarsel: "oransje" },
  { navn: "JUVVASSHØE", kommune: "LOM", fylke: "Innlandet", ei: 61.9, vindkast: 29.9, nedbor: 0, temp: -8.0, farevarsel: "oransje" },
  { navn: "MANNEN", kommune: "RAUMA", fylke: "Møre og Romsdal", ei: 61.4, vindkast: 30.5, nedbor: 0, temp: -3.1, farevarsel: "oransje" },
  { navn: "TROLLEDALSEGGA", kommune: "STAD", fylke: "Vestland", ei: 60.1, vindkast: 25.4, nedbor: 0, temp: -2.7, farevarsel: "oransje" },
];

// ---- UKENS TOPP 5 STASJONER (sammenlagt) ----

export const STASJONER_UKE = [
  {
    navn: "ØRSTA - EITREFJELL",
    kommune: "ØRSTA",
    fylke: "Møre og Romsdal",
    totalEi: 128.5,
    gustMax: 26.6,
    precipTotal: 3.6,
    tempMin: -0.4,
    dager: [0, 0, 0, 0, 0, 61.8, 66.7],
    beskrivelse: "Ekstremt vaer sa langt denne uka med snitt 64 EI per dag. Toppdag Søn med 66.7 EI. Kraftige vindkast opp til 26.6 m/s."
  },
  {
    navn: "JUVVASSHØE",
    kommune: "LOM",
    fylke: "Innlandet",
    totalEi: 125.2,
    gustMax: 29.9,
    precipTotal: 0,
    tempMin: -8.2,
    dager: [0, 0, 0, 0, 0, 63.3, 61.9],
    beskrivelse: "Ekstremt vaer sa langt denne uka med snitt 63 EI per dag. Toppdag Lør med 63.3 EI. Kraftige vindkast opp til 29.9 m/s. Bitende kulde ned til -8.2 grader C."
  },
  {
    navn: "KRÅKENES",
    kommune: "KINN",
    fylke: "Vestland",
    totalEi: 121.3,
    gustMax: 32.7,
    precipTotal: 0,
    tempMin: 4.7,
    dager: [0, 0, 0, 0, 0, 61.5, 59.8],
    beskrivelse: "Ekstremt vaer sa langt denne uka med snitt 61 EI per dag. Toppdag Lør med 61.5 EI. Kraftige vindkast opp til 32.7 m/s."
  },
  {
    navn: "TROLLEDALSEGGA",
    kommune: "STAD",
    fylke: "Vestland",
    totalEi: 119.0,
    gustMax: 25.4,
    precipTotal: 0,
    tempMin: -3.2,
    dager: [0, 0, 0, 0, 0, 58.9, 60.1],
    beskrivelse: "Jevnt darlig vaer sa langt denne uka med snitt 60 EI per dag. Toppdag Søn med 60.1 EI. Kraftige vindkast opp til 25.4 m/s."
  },
  {
    navn: "ÅNSTADBLÅHEIA",
    kommune: "SORTLAND",
    fylke: "Nordland",
    totalEi: 118.2,
    gustMax: 26.5,
    precipTotal: 0,
    tempMin: 0.7,
    dager: [0, 0, 0, 0, 0, 53.8, 64.4],
    beskrivelse: "Jevnt darlig vaer sa langt denne uka med snitt 59 EI per dag. Toppdag Søn med 64.4 EI. Kraftige vindkast opp til 26.5 m/s."
  },
];

// ---- TRONSKIFTE ----

export const TRONSKIFTE = {
  aktiv: false,
  tittel: "FINNMARK LEDER!",
  beskrivelse: "Finnmark leder sammenlagt med 69.5 poeng - 5.8 poeng foran Nordland (63.7).",
  gammelLeder: "Finnmark",
  nyLeder: "Finnmark",
};

// ---- DAGENS LEDER ----

export const DAGENS_LEDER = {
  fylke: "Agder",
  ei: 31.8,
  temp: 0.6,
  nedbor: 1.2,
};

// ---- AKTUELL UKE / SIST FULLFORTE UKE ----

export const AKTUELL_UKE = {
  ukeId: "2026-W11",
  uke: "Uke 11",
  fraDato: "2026-03-14",
  tilDato: "2026-03-15",
  periode: "14.03 - 15.03.2026 (2 dager)",
  dagerRegistrert: 2,
  versteFylke: "Finnmark",
  versteFylkeScore: 69.5,
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

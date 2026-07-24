/**
 * ============================================================
 * NORGES VERSTE VAER - DATABLOKK
 * ============================================================
 * FREMTIDSSIKRING: For a oppdatere dashboardet med nye data,
 * erstatt kun denne filen. Designet endres ikke.
 *
 * Sist oppdatert: 24.07.2026 kl. 15:14
 * Periode sammenlagt: 20.07 - 24.07.2026 (5 dager)
 * Kilde: Frost API (frost.met.no), P1D + timesdata
 * ============================================================
 */

// ---- METADATA ----

export const META = {
  serieNavn: "Norges Verste Vaer",
  dagLabel: "Fredag 24.07.2026",
  sammenlagtLabel: "20.07 - 24.07.2026 (5 dager)",
  datoOppdatert: "24.07.2026 kl. 15:14",
  rapportVersjon: "v2.2 (norsk tid, live uke, ryddig arkiv, fikset uke/arkiv-logikk)",
  dagLabels: ["Man 20", "Tir 21", "Ons 22", "Tor 23", "Fre 24"],
};

// ---- DAG-FOR-DAG EI PER FYLKE ----

export const FYLKER_DAG_FOR_DAG = [
  { navn: "Nordland", dager: [19.7, 28.1, 23.5, 21.2, 25.8], trend: "Noe forverring (+4.6) - ustabilt vaer fortsetter" },
  { navn: "Finnmark", dager: [20.9, 22.8, 21.6, 21.8, 22.7], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Troms", dager: [17.8, 19.5, 20.3, 18.6, 18.4], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Møre og Romsdal", dager: [14.4, 17.0, 19.9, 17.7, 22.6], trend: "Noe forverring (+4.9) - ustabilt vaer fortsetter" },
  { navn: "Trøndelag", dager: [14.1, 17.9, 20.1, 17.0, 19.8], trend: "Noe forverring (+2.8) - ustabilt vaer fortsetter" },
  { navn: "Oslo", dager: [17.8, 16.2, 16.4, 16.6, 16.4], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Rogaland", dager: [12.9, 13.8, 18.1, 13.9, 17.0], trend: "Noe forverring (+3.1) - ustabilt vaer fortsetter" },
  { navn: "Vestland", dager: [12.2, 13.3, 16.0, 13.8, 19.1], trend: "Kraftig forverring (+5.3) - okt vind og/eller nedbor" },
  { navn: "Innlandet", dager: [12.7, 11.6, 15.3, 13.8, 13.6], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Agder", dager: [12.1, 12.3, 11.5, 12.7, 14.1], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Telemark", dager: [13.1, 11.2, 11.3, 11.1, 11.9], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Buskerud", dager: [12.0, 11.0, 10.9, 11.8, 12.7], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Østfold", dager: [13.0, 11.2, 12.7, 9.7, 9.3], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Vestfold", dager: [0.0, 0.0, 0.0, 0.0, 0.0], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Akershus", dager: [0.0, 0.0, 0.0, 0.0, 0.0], trend: "Stabilt - lite endring fra i gar" },
];

// ---- SAMMENLAGT ----

export const FYLKER_SAMMENLAGT = [
  { navn: "Nordland", total: 118.3, iDag: 25.8, endringFraIGar: 4.6, plasseringEndring: 0 },
  { navn: "Finnmark", total: 109.8, iDag: 22.7, endringFraIGar: 0.9, plasseringEndring: 0 },
  { navn: "Troms", total: 94.6, iDag: 18.4, endringFraIGar: -0.2, plasseringEndring: 0 },
  { navn: "Møre og Romsdal", total: 91.6, iDag: 22.6, endringFraIGar: 4.9, plasseringEndring: 1 },
  { navn: "Trøndelag", total: 88.9, iDag: 19.8, endringFraIGar: 2.8, plasseringEndring: -1 },
  { navn: "Oslo", total: 83.4, iDag: 16.4, endringFraIGar: -0.2, plasseringEndring: 0 },
  { navn: "Rogaland", total: 75.7, iDag: 17.0, endringFraIGar: 3.1, plasseringEndring: 0 },
  { navn: "Vestland", total: 74.4, iDag: 19.1, endringFraIGar: 5.3, plasseringEndring: 0 },
  { navn: "Innlandet", total: 67.0, iDag: 13.6, endringFraIGar: -0.2, plasseringEndring: 0 },
  { navn: "Agder", total: 62.7, iDag: 14.1, endringFraIGar: 1.4, plasseringEndring: 0 },
  { navn: "Telemark", total: 58.6, iDag: 11.9, endringFraIGar: 0.8, plasseringEndring: 0 },
  { navn: "Buskerud", total: 58.4, iDag: 12.7, endringFraIGar: 0.9, plasseringEndring: 1 },
  { navn: "Østfold", total: 55.9, iDag: 9.3, endringFraIGar: -0.4, plasseringEndring: -1 },
  { navn: "Vestfold", total: 0.0, iDag: 0.0, endringFraIGar: 0.0, plasseringEndring: 0 },
  { navn: "Akershus", total: 0.0, iDag: 0.0, endringFraIGar: 0.0, plasseringEndring: 0 },
];

// ---- TOPP 5 STASJONER FREDAG 24.07.2026 ----

export const STASJONER_PERIODE = [
  { navn: "RV13 VIKAFJELL", kommune: "VIK", fylke: "Vestland", ei: 65.3, vindkast: 0, nedbor: 0.4, temp: -34.0, farevarsel: "oransje" },
  { navn: "KONGSMARKA", kommune: "VÅGAN", fylke: "Nordland", ei: 63.8, vindkast: 0, nedbor: 57.6, temp: 0, farevarsel: "oransje" },
  { navn: "KRÅKENES", kommune: "KINN", fylke: "Vestland", ei: 53.6, vindkast: 23.0, nedbor: 0, temp: 11.2, farevarsel: "gul" },
  { navn: "KRISTIANSUND LH - KVERNBERGET 200MOH", kommune: "KRISTIANSUND", fylke: "Møre og Romsdal", ei: 51.8, vindkast: 21.8, nedbor: 0, temp: 0, farevarsel: "gul" },
  { navn: "SVINØY FYR", kommune: "HERØY", fylke: "Møre og Romsdal", ei: 51.5, vindkast: 23.2, nedbor: 0, temp: 12.3, farevarsel: "gul" },
];

// ---- UKENS TOPP 5 STASJONER (sammenlagt) ----

export const STASJONER_UKE = [
  {
    navn: "KONGSMARKA",
    kommune: "VÅGAN",
    fylke: "Nordland",
    totalEi: 228.7,
    gustMax: 0,
    precipTotal: 107.2,
    tempMin: 0,
    dager: [36.0, 56.2, 37.5, 35.2, 63.8, 0, 0],
    beskrivelse: "Jevnt darlig vaer sa langt denne uka med snitt 46 EI per dag. Toppdag Fre med 63.8 EI. Mye nedbor med totalt 107.2 mm."
  },
  {
    navn: "LEIRFJORD",
    kommune: "LEIRFJORD",
    fylke: "Nordland",
    totalEi: 221.9,
    gustMax: 0,
    precipTotal: 94.0,
    tempMin: 0,
    dager: [41.2, 53.6, 48.2, 35.4, 43.5, 0, 0],
    beskrivelse: "Jevnt darlig vaer sa langt denne uka med snitt 44 EI per dag. Toppdag Tir med 53.6 EI. Mye nedbor med totalt 94.0 mm."
  },
  {
    navn: "SANDNESSJØEN - ÅSEN",
    kommune: "ALSTAHAUG",
    fylke: "Nordland",
    totalEi: 221.8,
    gustMax: 0,
    precipTotal: 93.1,
    tempMin: 0,
    dager: [36.5, 71.7, 38.0, 35.8, 39.8, 0, 0],
    beskrivelse: "Jevnt darlig vaer sa langt denne uka med snitt 44 EI per dag. Toppdag Tir med 71.7 EI. Mye nedbor med totalt 93.1 mm."
  },
  {
    navn: "SANDNESSJØEN - STAMNESØRA",
    kommune: "ALSTAHAUG",
    fylke: "Nordland",
    totalEi: 207.9,
    gustMax: 0,
    precipTotal: 66.0,
    tempMin: 0,
    dager: [36.0, 61.1, 37.0, 35.6, 38.2, 0, 0],
    beskrivelse: "Jevnt darlig vaer sa langt denne uka med snitt 42 EI per dag. Toppdag Tir med 61.1 EI. Mye nedbor med totalt 66.0 mm."
  },
  {
    navn: "SØMNA - STEIN",
    kommune: "SØMNA",
    fylke: "Nordland",
    totalEi: 207.3,
    gustMax: 0,
    precipTotal: 64.5,
    tempMin: 0,
    dager: [36.4, 47.8, 44.0, 36.6, 42.5, 0, 0],
    beskrivelse: "Jevnt darlig vaer sa langt denne uka med snitt 41 EI per dag. Toppdag Tir med 47.8 EI. Mye nedbor med totalt 64.5 mm."
  },
];

// ---- TRONSKIFTE ----

export const TRONSKIFTE = {
  aktiv: false,
  tittel: "NORDLAND LEDER!",
  beskrivelse: "Nordland leder sammenlagt med 118.3 poeng - 8.5 poeng foran Finnmark (109.8).",
  gammelLeder: "Nordland",
  nyLeder: "Nordland",
};

// ---- DAGENS LEDER ----

export const DAGENS_LEDER = {
  fylke: "Nordland",
  ei: 25.8,
  temp: -34.0,
  nedbor: 0.4,
};

// ---- AKTUELL UKE / SIST FULLFORTE UKE ----

export const AKTUELL_UKE = {
  ukeId: "2026-W30",
  uke: "Uke 30",
  fraDato: "2026-07-20",
  tilDato: "2026-07-24",
  periode: "20.07 - 24.07.2026 (5 dager)",
  dagerRegistrert: 5,
  versteFylke: "Nordland",
  versteFylkeScore: 118.3,
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
  {
    ukeId: "2026-W12",
    uke: "Uke 12",
    periode: "16.03 - 22.03.2026",
    versteFylke: "Nordland",
    versteFylkeScore: 271.3,
    versteStasjon: "FV705 LANGSVOLA",
    versteStasjonKommune: "TYDAL",
    versteStasjonFylke: "Trøndelag",
    versteStasjonScore: 3299.3,
    dominerendeVaertype: "Sterk vind, mye nedbor, vedvarende kulde",
    oppsummering: "Uke 12 ble preget av ekstremt vaer i Nordland som tok ukesseieren med 271.3 poeng. Finnmark (253.7) og Troms (240.0) fulgte paa de neste plassene. FV705 LANGSVOLA i Trøndelag ble ukens verste stasjon med 3299.3 sammenlagt EI.",
    fylkerTotal: { "Finnmark": 253.7, "Troms": 240.0, "Nordland": 271.3, "Trøndelag": 200.5, "Møre og Romsdal": 187.3, "Vestland": 180.8, "Rogaland": 160.5, "Agder": 171.7, "Telemark": 165.6, "Vestfold": 0.0, "Buskerud": 154.9, "Innlandet": 179.0, "Akershus": 0.0, "Østfold": 169.1, "Oslo": 176.7 },
    fylkerDagForDag: {
      "Finnmark": [31.1, 33.6, 37.6, 38.9, 37.4, 34.4, 40.7],
      "Troms": [28.1, 28.9, 33.1, 39.5, 35.9, 36.4, 38.1],
      "Nordland": [29.6, 33.8, 41.5, 42.4, 41.3, 42.4, 40.3],
      "Trøndelag": [22.5, 24.8, 25.9, 32.5, 30.7, 30.4, 33.7],
      "Møre og Romsdal": [24.5, 25.2, 29.2, 25.9, 25.2, 26.1, 31.2],
      "Vestland": [29.9, 27.3, 25.1, 24.1, 23.4, 22.2, 28.8],
      "Rogaland": [28.6, 26.8, 22.5, 19.1, 19.0, 20.4, 24.1],
      "Agder": [33.5, 28.2, 24.4, 21.7, 20.3, 21.0, 22.6],
      "Telemark": [30.1, 29.7, 25.0, 19.9, 19.4, 20.2, 21.3],
      "Vestfold": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Buskerud": [28.6, 24.9, 21.7, 19.1, 19.0, 20.1, 21.5],
      "Innlandet": [32.1, 28.8, 26.2, 22.9, 21.3, 22.7, 25.0],
      "Akershus": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Østfold": [28.9, 26.6, 26.6, 19.8, 20.3, 21.7, 25.2],
      "Oslo": [34.0, 30.8, 25.5, 23.2, 19.4, 20.6, 23.2],
    },
    dagLabels: ["Man 16", "Tir 17", "Ons 18", "Tor 19", "Fre 20", "Lør 21", "Søn 22"],
    toppStasjoner: [
      {
        navn: "FV705 LANGSVOLA",
        kommune: "TYDAL",
        fylke: "Trøndelag",
        totalEi: 3299.3,
        gustMax: 0,
        tempMin: -1.8,
        beskrivelse: "Ekstremt vaer hele uken med snitt 471 EI per dag. Totalt 6057.0 mm nedbor."
      },
      {
        navn: "NARVIK - FAGERNESFJELLET",
        kommune: "NARVIK",
        fylke: "Nordland",
        totalEi: 541.2,
        gustMax: 53.1,
        tempMin: -4.4,
        beskrivelse: "Ekstremt vaer hele uken med snitt 77 EI per dag. Vindkast opp til 53.1 m/s."
      },
      {
        navn: "E6 STØDI BRU",
        kommune: "SALTDAL",
        fylke: "Nordland",
        totalEi: 482.2,
        gustMax: 0,
        tempMin: -2.2,
        beskrivelse: "Ekstremt vaer hele uken med snitt 69 EI per dag. Totalt 221.2 mm nedbor."
      },
      {
        navn: "JUVVASSHØE",
        kommune: "LOM",
        fylke: "Innlandet",
        totalEi: 472.7,
        gustMax: 41.5,
        tempMin: -8.0,
        beskrivelse: "Ekstremt vaer hele uken med snitt 68 EI per dag. Vindkast opp til 41.5 m/s. Kulde ned til -8.0C."
      },
      {
        navn: "E69 NORDKAPP",
        kommune: "NORDKAPP",
        fylke: "Finnmark",
        totalEi: 462.0,
        gustMax: 0,
        tempMin: -0.6,
        beskrivelse: "Ekstremt vaer hele uken med snitt 66 EI per dag. Totalt 203.9 mm nedbor."
      },
    ]
  },
  {
    ukeId: "2026-W13",
    uke: "Uke 13",
    periode: "23.03 - 29.03.2026",
    versteFylke: "Nordland",
    versteFylkeScore: 249.5,
    versteStasjon: "FV705 LANGSVOLA",
    versteStasjonKommune: "TYDAL",
    versteStasjonFylke: "Trøndelag",
    versteStasjonScore: 734.5,
    dominerendeVaertype: "Sterk vind, mye nedbor, vedvarende kulde",
    oppsummering: "Uke 13 ble preget av hardt vaer i Nordland som vant med 249.5 poeng. Finnmark (244.0) og Møre og Romsdal (226.8) fulgte paa de neste plassene. FV705 LANGSVOLA i Trøndelag ble ukens verste stasjon med 734.5 sammenlagt EI.",
    fylkerTotal: { "Finnmark": 244.0, "Troms": 224.9, "Nordland": 249.5, "Trøndelag": 207.0, "Møre og Romsdal": 226.8, "Vestland": 221.9, "Rogaland": 197.6, "Agder": 206.7, "Telemark": 172.3, "Vestfold": 0.0, "Buskerud": 167.2, "Innlandet": 199.3, "Akershus": 0.0, "Østfold": 175.7, "Oslo": 190.7 },
    fylkerDagForDag: {
      "Finnmark": [37.0, 32.9, 29.8, 35.6, 38.4, 36.3, 34.0],
      "Troms": [36.5, 33.8, 29.0, 30.1, 36.3, 31.2, 28.0],
      "Nordland": [46.8, 39.3, 33.4, 31.6, 34.1, 31.2, 33.1],
      "Trøndelag": [40.7, 31.0, 22.9, 33.1, 28.8, 23.7, 26.8],
      "Møre og Romsdal": [35.7, 35.1, 32.8, 38.6, 29.1, 28.7, 26.8],
      "Vestland": [32.1, 34.6, 32.3, 32.1, 29.5, 31.5, 29.8],
      "Rogaland": [24.8, 27.6, 30.0, 31.7, 28.0, 27.1, 28.4],
      "Agder": [25.2, 30.5, 31.5, 26.7, 29.8, 30.3, 32.7],
      "Telemark": [22.2, 25.8, 28.0, 21.4, 25.0, 26.6, 23.3],
      "Vestfold": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Buskerud": [21.9, 23.4, 26.0, 21.2, 26.3, 25.7, 22.7],
      "Innlandet": [27.7, 29.7, 26.2, 30.6, 28.8, 28.7, 27.6],
      "Akershus": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Østfold": [21.4, 27.1, 30.4, 24.3, 23.8, 24.8, 23.9],
      "Oslo": [20.5, 27.4, 35.8, 21.2, 30.9, 33.6, 21.3],
    },
    dagLabels: ["Man 23", "Tir 24", "Ons 25", "Tor 26", "Fre 27", "Lør 28", "Søn 29"],
    toppStasjoner: [
      {
        navn: "FV705 LANGSVOLA",
        kommune: "TYDAL",
        fylke: "Trøndelag",
        totalEi: 734.5,
        gustMax: 0,
        tempMin: -3.3,
        beskrivelse: "Ekstremt vaer hele uken med snitt 105 EI per dag. Totalt 1020.7 mm nedbor."
      },
      {
        navn: "E6 STØDI BRU",
        kommune: "SALTDAL",
        fylke: "Nordland",
        totalEi: 473.8,
        gustMax: 0,
        tempMin: -5.0,
        beskrivelse: "Ekstremt vaer hele uken med snitt 68 EI per dag. Totalt 375.0 mm nedbor."
      },
      {
        navn: "JUVVASSHØE",
        kommune: "LOM",
        fylke: "Innlandet",
        totalEi: 455.3,
        gustMax: 43.3,
        tempMin: -9.9,
        beskrivelse: "Ekstremt vaer hele uken med snitt 65 EI per dag. Vindkast opp til 43.3 m/s. Kulde ned til -9.9C."
      },
      {
        navn: "TROLLEDALSEGGA",
        kommune: "STAD",
        fylke: "Vestland",
        totalEi: 455.2,
        gustMax: 38.0,
        tempMin: -4.3,
        beskrivelse: "Ekstremt vaer hele uken med snitt 65 EI per dag. Vindkast opp til 38.0 m/s."
      },
      {
        navn: "ØRSTA - EITREFJELL",
        kommune: "ØRSTA",
        fylke: "Møre og Romsdal",
        totalEi: 444.9,
        gustMax: 26.9,
        tempMin: -2.1,
        beskrivelse: "Ekstremt vaer hele uken med snitt 64 EI per dag. Vindkast opp til 26.9 m/s. Totalt 104.7 mm nedbor."
      },
    ]
  },
  {
    ukeId: "2026-W14",
    uke: "Uke 14",
    periode: "30.03 - 05.04.2026",
    versteFylke: "Finnmark",
    versteFylkeScore: 246.3,
    versteStasjon: "E69 NORDKAPP",
    versteStasjonKommune: "NORDKAPP",
    versteStasjonFylke: "Finnmark",
    versteStasjonScore: 496.0,
    dominerendeVaertype: "Sterk vind, mye nedbor, vedvarende kulde",
    oppsummering: "Uke 14 ble preget av hardt vaer i Finnmark som vant med 246.3 poeng. Nordland (237.6) og Troms (220.3) fulgte paa de neste plassene. E69 NORDKAPP i Finnmark ble ukens verste stasjon med 496.0 sammenlagt EI.",
    fylkerTotal: { "Finnmark": 246.3, "Troms": 220.3, "Nordland": 237.6, "Trøndelag": 188.9, "Møre og Romsdal": 208.1, "Vestland": 214.2, "Rogaland": 194.6, "Agder": 211.6, "Telemark": 185.5, "Vestfold": 0.0, "Buskerud": 188.5, "Innlandet": 207.5, "Akershus": 0.0, "Østfold": 184.8, "Oslo": 219.4 },
    fylkerDagForDag: {
      "Finnmark": [32.4, 31.2, 38.1, 41.1, 36.7, 32.1, 34.7],
      "Troms": [27.6, 28.6, 39.0, 39.1, 31.5, 27.5, 27.0],
      "Nordland": [30.4, 31.1, 44.3, 40.1, 30.5, 29.1, 32.1],
      "Trøndelag": [21.9, 23.9, 26.0, 31.0, 28.2, 26.9, 31.0],
      "Møre og Romsdal": [25.2, 27.3, 31.6, 32.3, 25.9, 33.6, 32.2],
      "Vestland": [31.4, 28.2, 28.0, 29.0, 29.6, 33.4, 34.6],
      "Rogaland": [29.5, 24.6, 23.3, 27.6, 27.8, 27.8, 34.0],
      "Agder": [32.3, 23.7, 20.3, 26.2, 32.8, 35.5, 40.8],
      "Telemark": [26.9, 20.4, 19.0, 27.4, 28.7, 31.8, 31.3],
      "Vestfold": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Buskerud": [27.1, 20.8, 19.0, 27.4, 31.8, 31.7, 30.7],
      "Innlandet": [29.0, 25.5, 23.6, 28.0, 30.4, 35.1, 35.9],
      "Akershus": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Østfold": [27.7, 22.4, 20.5, 25.7, 28.1, 30.6, 29.8],
      "Oslo": [35.4, 21.5, 19.4, 34.4, 35.3, 37.1, 36.3],
    },
    dagLabels: ["Man 30", "Tir 31", "Ons 01", "Tor 02", "Fre 03", "Lør 04", "Søn 05"],
    toppStasjoner: [
      {
        navn: "E69 NORDKAPP",
        kommune: "NORDKAPP",
        fylke: "Finnmark",
        totalEi: 496.0,
        gustMax: 0,
        tempMin: -2.9,
        beskrivelse: "Ekstremt vaer hele uken med snitt 71 EI per dag. Totalt 331.6 mm nedbor."
      },
      {
        navn: "E134 MIDTLÆGER",
        kommune: "ULLENSVANG",
        fylke: "Vestland",
        totalEi: 442.7,
        gustMax: 0,
        tempMin: -4.9,
        beskrivelse: "Ekstremt vaer hele uken med snitt 63 EI per dag. Totalt 361.0 mm nedbor."
      },
      {
        navn: "NARVIK - FAGERNESFJELLET",
        kommune: "NARVIK",
        fylke: "Nordland",
        totalEi: 434.7,
        gustMax: 46.9,
        tempMin: -5.3,
        beskrivelse: "Ekstremt vaer hele uken med snitt 62 EI per dag. Vindkast opp til 46.9 m/s. Kulde ned til -5.3C."
      },
      {
        navn: "JUVVASSHØE",
        kommune: "LOM",
        fylke: "Innlandet",
        totalEi: 421.3,
        gustMax: 36.4,
        tempMin: -12.2,
        beskrivelse: "Ekstremt vaer hele uken med snitt 60 EI per dag. Vindkast opp til 36.4 m/s. Kulde ned til -12.2C."
      },
      {
        navn: "HASVIK - SLUSKFJELLET",
        kommune: "HASVIK",
        fylke: "Finnmark",
        totalEi: 415.2,
        gustMax: 40.6,
        tempMin: -4.0,
        beskrivelse: "Jevnt daarlig vaer med snitt 59 EI per dag. Vindkast opp til 40.6 m/s."
      },
    ]
  },
  {
    ukeId: "2026-W15",
    uke: "Uke 15",
    periode: "06.04 - 12.04.2026",
    versteFylke: "Finnmark",
    versteFylkeScore: 209.8,
    versteStasjon: "FOLGEFONNA SKISENTER TOPP",
    versteStasjonKommune: "ULLENSVANG",
    versteStasjonFylke: "Vestland",
    versteStasjonScore: 481.5,
    dominerendeVaertype: "Sterk vind, mye nedbor, vedvarende kulde",
    oppsummering: "Uke 15 ble preget av hardt vaer i Finnmark som vant med 209.8 poeng. Agder (192.6) og Innlandet (184.0) fulgte paa de neste plassene. FOLGEFONNA SKISENTER TOPP i Vestland ble ukens verste stasjon med 481.5 sammenlagt EI.",
    fylkerTotal: { "Finnmark": 209.8, "Troms": 169.6, "Nordland": 177.8, "Trøndelag": 176.8, "Møre og Romsdal": 166.4, "Vestland": 180.9, "Rogaland": 170.9, "Agder": 192.6, "Telemark": 156.6, "Vestfold": 0.0, "Buskerud": 147.6, "Innlandet": 184.0, "Akershus": 0.0, "Østfold": 139.9, "Oslo": 151.6 },
    fylkerDagForDag: {
      "Finnmark": [28.8, 29.6, 39.4, 34.1, 28.7, 23.6, 25.6],
      "Troms": [24.5, 25.6, 31.8, 25.1, 20.6, 20.5, 21.5],
      "Nordland": [24.6, 24.2, 30.2, 25.5, 24.0, 23.6, 25.7],
      "Trøndelag": [34.0, 25.6, 22.7, 21.0, 23.4, 23.9, 26.2],
      "Møre og Romsdal": [32.6, 24.7, 21.3, 20.9, 22.9, 21.0, 23.0],
      "Vestland": [31.7, 22.9, 23.6, 24.9, 27.0, 24.8, 26.0],
      "Rogaland": [27.2, 20.4, 21.2, 23.5, 25.2, 25.4, 28.0],
      "Agder": [32.3, 20.8, 20.9, 22.9, 30.8, 31.4, 33.5],
      "Telemark": [23.8, 19.2, 19.1, 19.3, 21.7, 26.0, 27.5],
      "Vestfold": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Buskerud": [23.2, 19.3, 19.1, 18.8, 20.9, 20.5, 25.8],
      "Innlandet": [34.6, 24.1, 23.4, 24.1, 24.8, 24.8, 28.2],
      "Akershus": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Østfold": [24.2, 18.6, 18.5, 17.8, 20.9, 19.7, 20.2],
      "Oslo": [24.7, 19.4, 19.1, 18.7, 19.8, 19.8, 30.1],
    },
    dagLabels: ["Man 06", "Tir 07", "Ons 08", "Tor 09", "Fre 10", "Lør 11", "Søn 12"],
    toppStasjoner: [
      {
        navn: "FOLGEFONNA SKISENTER TOPP",
        kommune: "ULLENSVANG",
        fylke: "Vestland",
        totalEi: 481.5,
        gustMax: 48.4,
        tempMin: -6.0,
        beskrivelse: "Ekstremt vaer hele uken med snitt 69 EI per dag. Vindkast opp til 48.4 m/s. Kulde ned til -6.0C."
      },
      {
        navn: "RØLDALSFJELLET - ELVERSHEI",
        kommune: "ULLENSVANG",
        fylke: "Vestland",
        totalEi: 480.9,
        gustMax: 42.0,
        tempMin: -6.1,
        beskrivelse: "Ekstremt vaer hele uken med snitt 69 EI per dag. Vindkast opp til 42.0 m/s. Kulde ned til -6.1C."
      },
      {
        navn: "E134 MIDTLÆGER",
        kommune: "ULLENSVANG",
        fylke: "Vestland",
        totalEi: 457.8,
        gustMax: 0,
        tempMin: -3.9,
        beskrivelse: "Ekstremt vaer hele uken med snitt 65 EI per dag. Totalt 276.0 mm nedbor."
      },
      {
        navn: "TROLLHEIMEN - STORHORNET",
        kommune: "OPPDAL",
        fylke: "Trøndelag",
        totalEi: 438.6,
        gustMax: 40.1,
        tempMin: -7.5,
        beskrivelse: "Ekstremt vaer hele uken med snitt 63 EI per dag. Vindkast opp til 40.1 m/s. Kulde ned til -7.5C."
      },
      {
        navn: "SPØRTEGGBU",
        kommune: "LUSTER",
        fylke: "Vestland",
        totalEi: 438.6,
        gustMax: 37.2,
        tempMin: -7.4,
        beskrivelse: "Ekstremt vaer hele uken med snitt 63 EI per dag. Vindkast opp til 37.2 m/s. Kulde ned til -7.4C."
      },
    ]
  },
  {
    ukeId: "2026-W16",
    uke: "Uke 16",
    periode: "13.04 - 19.04.2026",
    versteFylke: "Agder",
    versteFylkeScore: 181.2,
    versteStasjon: "E134 MIDTLÆGER",
    versteStasjonKommune: "ULLENSVANG",
    versteStasjonFylke: "Vestland",
    versteStasjonScore: 550.6,
    dominerendeVaertype: "Sterk vind, mye nedbor, vedvarende kulde",
    oppsummering: "Uke 16 ble preget av moderat vaer der Agder ledet med 181.2 poeng. Finnmark (180.9) og Oslo (168.7) fulgte paa de neste plassene. E134 MIDTLÆGER i Vestland ble ukens verste stasjon med 550.6 sammenlagt EI.",
    fylkerTotal: { "Finnmark": 180.9, "Troms": 151.5, "Nordland": 157.5, "Trøndelag": 140.9, "Møre og Romsdal": 129.3, "Vestland": 155.5, "Rogaland": 152.7, "Agder": 181.2, "Telemark": 167.1, "Vestfold": 0.0, "Buskerud": 158.1, "Innlandet": 166.1, "Akershus": 0.0, "Østfold": 139.5, "Oslo": 168.7 },
    fylkerDagForDag: {
      "Finnmark": [24.9, 23.3, 24.1, 27.5, 27.0, 28.8, 25.3],
      "Troms": [22.0, 20.6, 22.4, 22.1, 22.2, 23.2, 19.0],
      "Nordland": [24.3, 23.1, 22.3, 21.8, 20.6, 23.6, 21.8],
      "Trøndelag": [22.4, 21.3, 20.7, 21.3, 17.1, 18.5, 19.6],
      "Møre og Romsdal": [20.5, 19.6, 19.1, 19.1, 16.8, 16.8, 17.4],
      "Vestland": [22.2, 24.5, 22.4, 21.8, 20.7, 21.8, 22.1],
      "Rogaland": [21.8, 21.5, 23.5, 24.2, 19.6, 21.5, 20.6],
      "Agder": [24.6, 34.2, 28.1, 23.3, 21.2, 25.6, 24.2],
      "Telemark": [22.8, 27.6, 26.5, 19.6, 18.1, 22.6, 29.9],
      "Vestfold": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Buskerud": [23.2, 23.7, 23.8, 18.7, 17.1, 19.8, 31.8],
      "Innlandet": [26.7, 25.8, 25.2, 23.4, 20.0, 20.2, 24.8],
      "Akershus": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Østfold": [21.8, 19.8, 21.5, 18.2, 16.6, 14.0, 27.6],
      "Oslo": [25.1, 19.7, 29.1, 19.4, 18.1, 18.0, 39.3],
    },
    dagLabels: ["Man 13", "Tir 14", "Ons 15", "Tor 16", "Fre 17", "Lør 18", "Søn 19"],
    toppStasjoner: [
      {
        navn: "E134 MIDTLÆGER",
        kommune: "ULLENSVANG",
        fylke: "Vestland",
        totalEi: 550.6,
        gustMax: 0,
        tempMin: -1.1,
        beskrivelse: "Ekstremt vaer hele uken med snitt 79 EI per dag. Totalt 428.0 mm nedbor."
      },
      {
        navn: "FOLGEFONNA SKISENTER TOPP",
        kommune: "ULLENSVANG",
        fylke: "Vestland",
        totalEi: 426.1,
        gustMax: 36.7,
        tempMin: -3.0,
        beskrivelse: "Ekstremt vaer hele uken med snitt 61 EI per dag. Vindkast opp til 36.7 m/s."
      },
      {
        navn: "FV280 ENDERUD BRU",
        kommune: "KRØDSHERAD",
        fylke: "Buskerud",
        totalEi: 408.2,
        gustMax: 0,
        tempMin: 2.5,
        beskrivelse: "Jevnt daarlig vaer med snitt 58 EI per dag. Totalt 599.9 mm nedbor."
      },
      {
        navn: "RØLDALSFJELLET - ELVERSHEI",
        kommune: "ULLENSVANG",
        fylke: "Vestland",
        totalEi: 401.2,
        gustMax: 31.7,
        tempMin: -3.7,
        beskrivelse: "Jevnt daarlig vaer med snitt 57 EI per dag. Vindkast opp til 31.7 m/s."
      },
      {
        navn: "JUVVASSHØE",
        kommune: "LOM",
        fylke: "Innlandet",
        totalEi: 389.4,
        gustMax: 28.5,
        tempMin: -7.3,
        beskrivelse: "Jevnt daarlig vaer med snitt 56 EI per dag. Vindkast opp til 28.5 m/s. Kulde ned til -7.3C."
      },
    ]
  },
  {
    ukeId: "2026-W17",
    uke: "Uke 17",
    periode: "20.04 - 26.04.2026",
    versteFylke: "Finnmark",
    versteFylkeScore: 270.0,
    versteStasjon: "FINNESVATNET",
    versteStasjonKommune: "VARDØ",
    versteStasjonFylke: "Finnmark",
    versteStasjonScore: 401.2,
    dominerendeVaertype: "Sterk vind, mye nedbor, vedvarende kulde",
    oppsummering: "Uke 17 ble preget av ekstremt vaer i Finnmark som tok ukesseieren med 270.0 poeng. Troms (225.6) og Nordland (216.0) fulgte paa de neste plassene. FINNESVATNET i Finnmark ble ukens verste stasjon med 401.2 sammenlagt EI.",
    fylkerTotal: { "Finnmark": 270.0, "Troms": 225.6, "Nordland": 216.0, "Trøndelag": 187.9, "Møre og Romsdal": 174.1, "Vestland": 150.7, "Rogaland": 144.1, "Agder": 139.6, "Telemark": 132.1, "Vestfold": 0.0, "Buskerud": 132.7, "Innlandet": 164.5, "Akershus": 0.0, "Østfold": 126.7, "Oslo": 144.6 },
    fylkerDagForDag: {
      "Finnmark": [28.3, 36.3, 46.8, 47.9, 43.1, 31.2, 36.4],
      "Troms": [23.4, 31.2, 30.4, 33.8, 36.5, 34.3, 36.0],
      "Nordland": [20.5, 27.3, 29.3, 29.6, 32.0, 39.1, 38.2],
      "Trøndelag": [17.6, 19.3, 25.0, 27.4, 28.0, 34.8, 35.8],
      "Møre og Romsdal": [17.2, 17.7, 21.0, 25.3, 28.2, 34.6, 30.1],
      "Vestland": [19.7, 18.2, 19.3, 20.2, 21.8, 28.2, 23.3],
      "Rogaland": [19.0, 17.6, 19.3, 20.8, 20.9, 25.2, 21.3],
      "Agder": [25.2, 18.5, 18.1, 17.7, 17.3, 22.0, 20.8],
      "Telemark": [25.0, 17.7, 16.4, 16.5, 15.9, 20.3, 20.3],
      "Vestfold": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Buskerud": [23.5, 17.6, 16.6, 16.7, 16.9, 21.0, 20.4],
      "Innlandet": [22.3, 19.6, 21.7, 22.4, 21.5, 28.4, 28.6],
      "Akershus": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Østfold": [23.6, 16.3, 15.2, 15.9, 15.7, 19.3, 20.7],
      "Oslo": [30.2, 19.4, 18.1, 18.6, 17.8, 20.6, 19.9],
    },
    dagLabels: ["Man 20", "Tir 21", "Ons 22", "Tor 23", "Fre 24", "Lør 25", "Søn 26"],
    toppStasjoner: [
      {
        navn: "FINNESVATNET",
        kommune: "VARDØ",
        fylke: "Finnmark",
        totalEi: 401.2,
        gustMax: 26.3,
        tempMin: -2.6,
        beskrivelse: "Jevnt daarlig vaer med snitt 57 EI per dag. Vindkast opp til 26.3 m/s."
      },
      {
        navn: "REINHAUGEN",
        kommune: "NESSEBY",
        fylke: "Finnmark",
        totalEi: 397.6,
        gustMax: 27.3,
        tempMin: -6.8,
        beskrivelse: "Jevnt daarlig vaer med snitt 57 EI per dag. Vindkast opp til 27.3 m/s. Kulde ned til -6.8C."
      },
      {
        navn: "HASVIK - SLUSKFJELLET",
        kommune: "HASVIK",
        fylke: "Finnmark",
        totalEi: 397.5,
        gustMax: 40.9,
        tempMin: -4.7,
        beskrivelse: "Jevnt daarlig vaer med snitt 57 EI per dag. Vindkast opp til 40.9 m/s."
      },
      {
        navn: "KISTEFJELL",
        kommune: "SENJA",
        fylke: "Troms",
        totalEi: 397.4,
        gustMax: 29.6,
        tempMin: -7.6,
        beskrivelse: "Jevnt daarlig vaer med snitt 57 EI per dag. Vindkast opp til 29.6 m/s. Kulde ned til -7.6C."
      },
      {
        navn: "ARNØYA - TROLLTINDEN",
        kommune: "SKJERVØY",
        fylke: "Troms",
        totalEi: 396.7,
        gustMax: 28.3,
        tempMin: -7.4,
        beskrivelse: "Jevnt daarlig vaer med snitt 57 EI per dag. Vindkast opp til 28.3 m/s. Kulde ned til -7.4C."
      },
    ]
  },
  {
    ukeId: "2026-W18",
    uke: "Uke 18",
    periode: "27.04 - 03.05.2026",
    versteFylke: "Finnmark",
    versteFylkeScore: 245.0,
    versteStasjon: "FV705 LANGSVOLA",
    versteStasjonKommune: "TYDAL",
    versteStasjonFylke: "Trøndelag",
    versteStasjonScore: 1788.0,
    dominerendeVaertype: "Sterk vind, mye nedbor, vedvarende kulde",
    oppsummering: "Uke 18 ble preget av hardt vaer i Finnmark som vant med 245.0 poeng. Nordland (233.0) og Troms (228.4) fulgte paa de neste plassene. FV705 LANGSVOLA i Trøndelag ble ukens verste stasjon med 1788.0 sammenlagt EI.",
    fylkerTotal: { "Finnmark": 245.0, "Troms": 228.4, "Nordland": 233.0, "Trøndelag": 174.2, "Møre og Romsdal": 152.7, "Vestland": 134.3, "Rogaland": 124.5, "Agder": 124.7, "Telemark": 121.4, "Vestfold": 0.0, "Buskerud": 115.3, "Innlandet": 133.8, "Akershus": 0.0, "Østfold": 119.1, "Oslo": 136.8 },
    fylkerDagForDag: {
      "Finnmark": [42.6, 37.3, 30.2, 29.6, 27.8, 35.9, 41.6],
      "Troms": [34.7, 30.9, 31.4, 28.5, 28.7, 37.3, 36.9],
      "Nordland": [34.8, 26.8, 32.3, 32.6, 32.2, 37.9, 36.4],
      "Trøndelag": [27.9, 22.3, 24.3, 19.7, 19.0, 24.7, 36.3],
      "Møre og Romsdal": [22.8, 20.1, 21.9, 18.6, 20.3, 24.7, 24.3],
      "Vestland": [20.3, 18.8, 17.6, 17.3, 18.3, 20.5, 21.5],
      "Rogaland": [18.8, 17.9, 17.1, 16.8, 17.2, 16.9, 19.8],
      "Agder": [20.2, 19.3, 17.3, 15.4, 16.4, 17.0, 19.1],
      "Telemark": [18.9, 18.3, 17.0, 15.1, 15.6, 17.3, 19.2],
      "Vestfold": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Buskerud": [18.9, 17.8, 16.2, 15.8, 14.4, 15.4, 16.8],
      "Innlandet": [23.9, 21.1, 18.2, 15.8, 16.7, 17.2, 20.9],
      "Akershus": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Østfold": [19.3, 17.9, 17.1, 15.7, 16.0, 15.5, 17.6],
      "Oslo": [19.3, 18.8, 18.1, 17.6, 17.3, 25.4, 20.3],
    },
    dagLabels: ["Man 27", "Tir 28", "Ons 29", "Tor 30", "Fre 01", "Lør 02", "Søn 03"],
    toppStasjoner: [
      {
        navn: "FV705 LANGSVOLA",
        kommune: "TYDAL",
        fylke: "Trøndelag",
        totalEi: 1788.0,
        gustMax: 0,
        tempMin: -2.5,
        beskrivelse: "Ekstremt vaer hele uken med snitt 255 EI per dag. Totalt 3190.0 mm nedbor."
      },
      {
        navn: "NARVIK - FAGERNESFJELLET",
        kommune: "NARVIK",
        fylke: "Nordland",
        totalEi: 413.7,
        gustMax: 52.9,
        tempMin: -5.9,
        beskrivelse: "Jevnt daarlig vaer med snitt 59 EI per dag. Vindkast opp til 52.9 m/s. Kulde ned til -5.9C."
      },
      {
        navn: "KISTEFJELL",
        kommune: "SENJA",
        fylke: "Troms",
        totalEi: 402.3,
        gustMax: 37.5,
        tempMin: -6.1,
        beskrivelse: "Jevnt daarlig vaer med snitt 57 EI per dag. Vindkast opp til 37.5 m/s. Kulde ned til -6.1C."
      },
      {
        navn: "E69 NORDKAPP",
        kommune: "NORDKAPP",
        fylke: "Finnmark",
        totalEi: 383.9,
        gustMax: 0,
        tempMin: -2.2,
        beskrivelse: "Jevnt daarlig vaer med snitt 55 EI per dag. Totalt 151.9 mm nedbor."
      },
      {
        navn: "HASVIK - SLUSKFJELLET",
        kommune: "HASVIK",
        fylke: "Finnmark",
        totalEi: 382.4,
        gustMax: 42.2,
        tempMin: -2.9,
        beskrivelse: "Jevnt daarlig vaer med snitt 55 EI per dag. Vindkast opp til 42.2 m/s."
      },
    ]
  },
  {
    ukeId: "2026-W19",
    uke: "Uke 19",
    periode: "04.05 - 10.05.2026",
    versteFylke: "Nordland",
    versteFylkeScore: 204.5,
    versteStasjon: "FV705 LANGSVOLA",
    versteStasjonKommune: "TYDAL",
    versteStasjonFylke: "Trøndelag",
    versteStasjonScore: 1753.1,
    dominerendeVaertype: "Sterk vind, mye nedbor, vedvarende kulde",
    oppsummering: "Uke 19 ble preget av hardt vaer i Nordland som vant med 204.5 poeng. Møre og Romsdal (193.9) og Trøndelag (193.4) fulgte paa de neste plassene. FV705 LANGSVOLA i Trøndelag ble ukens verste stasjon med 1753.1 sammenlagt EI.",
    fylkerTotal: { "Finnmark": 192.0, "Troms": 171.9, "Nordland": 204.5, "Trøndelag": 193.4, "Møre og Romsdal": 193.9, "Vestland": 177.7, "Rogaland": 143.1, "Agder": 141.4, "Telemark": 134.4, "Vestfold": 0.0, "Buskerud": 137.1, "Innlandet": 163.3, "Akershus": 0.0, "Østfold": 125.1, "Oslo": 153.9 },
    fylkerDagForDag: {
      "Finnmark": [29.1, 29.8, 28.5, 25.9, 24.7, 28.3, 25.7],
      "Troms": [28.0, 25.4, 25.0, 24.5, 24.4, 24.1, 20.5],
      "Nordland": [33.3, 33.1, 30.4, 29.3, 26.7, 23.8, 27.9],
      "Trøndelag": [42.9, 32.3, 29.2, 24.6, 20.9, 18.9, 24.6],
      "Møre og Romsdal": [33.7, 34.3, 28.4, 24.4, 20.2, 24.5, 28.4],
      "Vestland": [27.4, 29.4, 26.8, 22.6, 20.7, 24.4, 26.4],
      "Rogaland": [21.4, 22.4, 21.0, 18.2, 18.6, 19.0, 22.5],
      "Agder": [21.3, 21.5, 20.6, 19.2, 18.7, 17.1, 23.0],
      "Telemark": [18.4, 19.3, 19.9, 18.4, 18.2, 17.3, 22.9],
      "Vestfold": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Buskerud": [18.4, 21.8, 19.6, 19.1, 17.6, 18.2, 22.4],
      "Innlandet": [23.8, 26.7, 24.8, 22.3, 21.4, 20.1, 24.2],
      "Akershus": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Østfold": [19.0, 18.8, 18.7, 17.3, 16.6, 16.1, 18.6],
      "Oslo": [19.3, 27.1, 19.8, 18.7, 18.9, 19.3, 30.8],
    },
    dagLabels: ["Man 04", "Tir 05", "Ons 06", "Tor 07", "Fre 08", "Lør 09", "Søn 10"],
    toppStasjoner: [
      {
        navn: "FV705 LANGSVOLA",
        kommune: "TYDAL",
        fylke: "Trøndelag",
        totalEi: 1753.1,
        gustMax: 0,
        tempMin: -2.9,
        beskrivelse: "Ekstremt vaer hele uken med snitt 250 EI per dag. Totalt 3110.3 mm nedbor."
      },
      {
        navn: "JUVVASSHØE",
        kommune: "LOM",
        fylke: "Innlandet",
        totalEi: 362.0,
        gustMax: 26.3,
        tempMin: -10.8,
        beskrivelse: "Jevnt daarlig vaer med snitt 52 EI per dag. Vindkast opp til 26.3 m/s. Kulde ned til -10.8C."
      },
      {
        navn: "TROLLEDALSEGGA",
        kommune: "STAD",
        fylke: "Vestland",
        totalEi: 343.4,
        gustMax: 23.0,
        tempMin: -5.7,
        beskrivelse: "Jevnt daarlig vaer med snitt 49 EI per dag. Kulde ned til -5.7C."
      },
      {
        navn: "GJEMNES - REINSFJELLET",
        kommune: "GJEMNES",
        fylke: "Møre og Romsdal",
        totalEi: 328.0,
        gustMax: 26.7,
        tempMin: -5.2,
        beskrivelse: "Jevnt daarlig vaer med snitt 47 EI per dag. Vindkast opp til 26.7 m/s. Kulde ned til -5.2C."
      },
      {
        navn: "JUVFLYE - KLIMAPARK 2469",
        kommune: "LOM",
        fylke: "Innlandet",
        totalEi: 326.8,
        gustMax: 26.3,
        tempMin: -10.5,
        beskrivelse: "Jevnt daarlig vaer med snitt 47 EI per dag. Vindkast opp til 26.3 m/s. Kulde ned til -10.5C."
      },
    ]
  },
  {
    ukeId: "2026-W20",
    uke: "Uke 20",
    periode: "11.05 - 17.05.2026",
    versteFylke: "Oslo",
    versteFylkeScore: 204.4,
    versteStasjon: "RØLDALSFJELLET - ELVERSHEI",
    versteStasjonKommune: "ULLENSVANG",
    versteStasjonFylke: "Vestland",
    versteStasjonScore: 315.8,
    dominerendeVaertype: "Sterk vind, mye nedbor, temperaturer naer frysepunktet",
    oppsummering: "Uke 20 ble preget av hardt vaer i Oslo som vant med 204.4 poeng. Finnmark (179.7) og Innlandet (174.7) fulgte paa de neste plassene. RØLDALSFJELLET - ELVERSHEI i Vestland ble ukens verste stasjon med 315.8 sammenlagt EI.",
    fylkerTotal: { "Finnmark": 179.7, "Troms": 154.0, "Nordland": 166.8, "Trøndelag": 148.8, "Møre og Romsdal": 144.5, "Vestland": 146.7, "Rogaland": 143.7, "Agder": 172.1, "Telemark": 162.3, "Vestfold": 0.0, "Buskerud": 161.3, "Innlandet": 174.7, "Akershus": 0.0, "Østfold": 147.9, "Oslo": 204.4 },
    fylkerDagForDag: {
      "Finnmark": [22.7, 24.7, 33.2, 28.6, 30.2, 18.7, 21.6],
      "Troms": [21.7, 21.5, 23.9, 24.1, 24.7, 18.3, 19.8],
      "Nordland": [24.1, 28.7, 22.8, 25.1, 26.5, 19.3, 20.3],
      "Trøndelag": [22.5, 21.3, 18.7, 25.5, 23.1, 18.9, 18.8],
      "Møre og Romsdal": [23.5, 20.2, 18.2, 26.0, 21.2, 16.9, 18.5],
      "Vestland": [25.4, 20.2, 20.6, 21.5, 22.3, 17.8, 18.9],
      "Rogaland": [24.6, 19.9, 21.7, 20.7, 19.2, 17.5, 20.1],
      "Agder": [21.6, 20.8, 19.7, 24.4, 33.3, 29.7, 22.6],
      "Telemark": [20.9, 19.0, 19.8, 26.2, 30.0, 24.6, 21.8],
      "Vestfold": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Buskerud": [20.5, 21.1, 19.4, 27.1, 26.7, 24.7, 21.8],
      "Innlandet": [26.4, 22.0, 20.7, 29.1, 27.3, 26.3, 22.9],
      "Akershus": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Østfold": [21.6, 16.4, 18.0, 25.9, 24.5, 20.2, 21.3],
      "Oslo": [20.0, 29.5, 22.5, 34.9, 33.4, 33.1, 31.0],
    },
    dagLabels: ["Man 11", "Tir 12", "Ons 13", "Tor 14", "Fre 15", "Lør 16", "Søn 17"],
    toppStasjoner: [
      {
        navn: "RØLDALSFJELLET - ELVERSHEI",
        kommune: "ULLENSVANG",
        fylke: "Vestland",
        totalEi: 315.8,
        gustMax: 28.5,
        tempMin: -5.4,
        beskrivelse: "Jevnt daarlig vaer med snitt 45 EI per dag. Vindkast opp til 28.5 m/s. Kulde ned til -5.4C."
      },
      {
        navn: "FOLGEFONNA SKISENTER TOPP",
        kommune: "ULLENSVANG",
        fylke: "Vestland",
        totalEi: 314.1,
        gustMax: 28.8,
        tempMin: -5.6,
        beskrivelse: "Jevnt daarlig vaer med snitt 45 EI per dag. Vindkast opp til 28.8 m/s. Kulde ned til -5.6C."
      },
      {
        navn: "HONNEGRASNUTEN",
        kommune: "VINJE",
        fylke: "Telemark",
        totalEi: 308.9,
        gustMax: 27.0,
        tempMin: -4.5,
        beskrivelse: "Jevnt daarlig vaer med snitt 44 EI per dag. Vindkast opp til 27.0 m/s."
      },
      {
        navn: "MIDTSTOVA",
        kommune: "ULVIK",
        fylke: "Vestland",
        totalEi: 307.0,
        gustMax: 24.1,
        tempMin: -4.7,
        beskrivelse: "Jevnt daarlig vaer med snitt 44 EI per dag."
      },
      {
        navn: "FV55 HERVAVATN",
        kommune: "LUSTER",
        fylke: "Vestland",
        totalEi: 301.0,
        gustMax: 0,
        tempMin: -4.6,
        beskrivelse: "Jevnt daarlig vaer med snitt 43 EI per dag. Totalt 20.5 mm nedbor."
      },
    ]
  },
  {
    ukeId: "2026-W21",
    uke: "Uke 21",
    periode: "18.05 - 24.05.2026",
    versteFylke: "Finnmark",
    versteFylkeScore: 149.0,
    versteStasjon: "FOLGEFONNA SKISENTER TOPP",
    versteStasjonKommune: "ULLENSVANG",
    versteStasjonFylke: "Vestland",
    versteStasjonScore: 363.0,
    dominerendeVaertype: "Sterk vind, mye nedbor, vedvarende kulde",
    oppsummering: "Uke 21 ble preget av moderat vaer der Finnmark ledet med 149.0 poeng. Vestland (147.1) og Oslo (146.3) fulgte paa de neste plassene. FOLGEFONNA SKISENTER TOPP i Vestland ble ukens verste stasjon med 363.0 sammenlagt EI.",
    fylkerTotal: { "Finnmark": 149.0, "Troms": 130.5, "Nordland": 143.3, "Trøndelag": 115.5, "Møre og Romsdal": 128.6, "Vestland": 147.1, "Rogaland": 130.3, "Agder": 140.3, "Telemark": 119.9, "Vestfold": 0.0, "Buskerud": 110.1, "Innlandet": 121.3, "Akershus": 0.0, "Østfold": 101.6, "Oslo": 146.3 },
    fylkerDagForDag: {
      "Finnmark": [22.4, 21.7, 21.0, 23.3, 19.2, 18.2, 23.2],
      "Troms": [20.6, 19.7, 16.8, 17.9, 17.8, 17.2, 20.5],
      "Nordland": [22.1, 19.8, 16.0, 15.8, 18.4, 22.0, 29.2],
      "Trøndelag": [17.9, 14.2, 12.7, 13.6, 14.6, 19.0, 23.5],
      "Møre og Romsdal": [17.4, 15.4, 14.1, 15.9, 18.2, 22.5, 25.1],
      "Vestland": [21.1, 19.7, 18.4, 19.3, 19.0, 26.3, 23.3],
      "Rogaland": [21.3, 23.1, 18.0, 18.4, 15.7, 19.1, 14.7],
      "Agder": [26.7, 22.2, 20.9, 21.3, 14.9, 17.9, 16.4],
      "Telemark": [21.0, 17.0, 14.9, 20.9, 14.7, 17.3, 14.1],
      "Vestfold": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Buskerud": [16.4, 14.7, 13.7, 19.7, 14.7, 17.5, 13.4],
      "Innlandet": [19.6, 16.7, 15.4, 17.1, 16.5, 16.9, 19.1],
      "Akershus": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Østfold": [16.3, 12.1, 12.3, 18.6, 15.1, 14.1, 13.1],
      "Oslo": [19.0, 19.1, 17.1, 29.0, 17.7, 26.7, 17.7],
    },
    dagLabels: ["Man 18", "Tir 19", "Ons 20", "Tor 21", "Fre 22", "Lør 23", "Søn 24"],
    toppStasjoner: [
      {
        navn: "FOLGEFONNA SKISENTER TOPP",
        kommune: "ULLENSVANG",
        fylke: "Vestland",
        totalEi: 363.0,
        gustMax: 33.0,
        tempMin: 0.5,
        beskrivelse: "Jevnt daarlig vaer med snitt 52 EI per dag. Vindkast opp til 33.0 m/s."
      },
      {
        navn: "RØLDALSFJELLET - ELVERSHEI",
        kommune: "ULLENSVANG",
        fylke: "Vestland",
        totalEi: 346.4,
        gustMax: 27.0,
        tempMin: -0.4,
        beskrivelse: "Jevnt daarlig vaer med snitt 49 EI per dag. Vindkast opp til 27.0 m/s."
      },
      {
        navn: "SKARDSBØFJELLET",
        kommune: "SOGNDAL",
        fylke: "Vestland",
        totalEi: 332.6,
        gustMax: 20.2,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 48 EI per dag. Totalt 52.2 mm nedbor."
      },
      {
        navn: "JUVVASSHØE",
        kommune: "LOM",
        fylke: "Innlandet",
        totalEi: 332.2,
        gustMax: 30.1,
        tempMin: -1.8,
        beskrivelse: "Jevnt daarlig vaer med snitt 47 EI per dag. Vindkast opp til 30.1 m/s."
      },
      {
        navn: "SOGNDAL LH - STOREHAUGFJELLET",
        kommune: "SOGNDAL",
        fylke: "Vestland",
        totalEi: 319.7,
        gustMax: 22.3,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 46 EI per dag."
      },
    ]
  },
  {
    ukeId: "2026-W22",
    uke: "Uke 22",
    periode: "25.05 - 31.05.2026",
    versteFylke: "Finnmark",
    versteFylkeScore: 180.0,
    versteStasjon: "JUVVASSHØE",
    versteStasjonKommune: "LOM",
    versteStasjonFylke: "Innlandet",
    versteStasjonScore: 343.0,
    dominerendeVaertype: "Sterk vind, mye nedbor, vedvarende kulde",
    oppsummering: "Uke 22 ble preget av moderat vaer der Finnmark ledet med 180.0 poeng. Nordland (179.7) og Troms (156.1) fulgte paa de neste plassene. JUVVASSHØE i Innlandet ble ukens verste stasjon med 343.0 sammenlagt EI.",
    fylkerTotal: { "Finnmark": 180.0, "Troms": 156.1, "Nordland": 179.7, "Trøndelag": 154.5, "Møre og Romsdal": 148.5, "Vestland": 140.3, "Rogaland": 115.3, "Agder": 108.4, "Telemark": 97.0, "Vestfold": 0.0, "Buskerud": 98.6, "Innlandet": 121.2, "Akershus": 0.0, "Østfold": 88.5, "Oslo": 129.1 },
    fylkerDagForDag: {
      "Finnmark": [25.2, 25.2, 27.3, 29.3, 26.3, 24.8, 21.9],
      "Troms": [24.4, 20.0, 20.5, 23.0, 24.4, 23.3, 20.5],
      "Nordland": [29.5, 26.9, 25.6, 26.8, 25.7, 24.4, 20.8],
      "Trøndelag": [22.4, 28.2, 28.3, 23.1, 19.4, 17.6, 15.5],
      "Møre og Romsdal": [23.8, 29.9, 25.8, 21.7, 16.9, 15.3, 15.1],
      "Vestland": [25.3, 25.3, 22.1, 18.1, 16.0, 18.1, 15.4],
      "Rogaland": [15.1, 17.7, 18.6, 14.9, 15.3, 17.3, 16.4],
      "Agder": [14.9, 17.0, 16.9, 15.4, 14.5, 15.0, 14.7],
      "Telemark": [13.2, 14.3, 14.8, 14.2, 14.0, 14.3, 12.2],
      "Vestfold": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Buskerud": [13.2, 14.9, 14.9, 14.1, 13.5, 12.8, 15.2],
      "Innlandet": [17.2, 21.6, 21.4, 18.5, 14.5, 13.7, 14.3],
      "Akershus": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Østfold": [10.9, 13.5, 14.2, 13.5, 13.4, 10.0, 13.0],
      "Oslo": [16.6, 17.4, 17.5, 17.5, 17.5, 18.0, 24.6],
    },
    dagLabels: ["Man 25", "Tir 26", "Ons 27", "Tor 28", "Fre 29", "Lør 30", "Søn 31"],
    toppStasjoner: [
      {
        navn: "JUVVASSHØE",
        kommune: "LOM",
        fylke: "Innlandet",
        totalEi: 343.0,
        gustMax: 28.9,
        tempMin: -3.5,
        beskrivelse: "Jevnt daarlig vaer med snitt 49 EI per dag. Vindkast opp til 28.9 m/s."
      },
      {
        navn: "SKARDSBØFJELLET",
        kommune: "SOGNDAL",
        fylke: "Vestland",
        totalEi: 317.0,
        gustMax: 17.4,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 45 EI per dag. Totalt 34.0 mm nedbor."
      },
      {
        navn: "SOGNDAL LH - STOREHAUGFJELLET",
        kommune: "SOGNDAL",
        fylke: "Vestland",
        totalEi: 316.7,
        gustMax: 27.8,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 45 EI per dag. Vindkast opp til 27.8 m/s."
      },
      {
        navn: "JUVFLYE - KLIMAPARK 2469",
        kommune: "LOM",
        fylke: "Innlandet",
        totalEi: 306.2,
        gustMax: 33.8,
        tempMin: -3.0,
        beskrivelse: "Jevnt daarlig vaer med snitt 44 EI per dag. Vindkast opp til 33.8 m/s."
      },
      {
        navn: "HONNEGRASNUTEN",
        kommune: "VINJE",
        fylke: "Telemark",
        totalEi: 299.3,
        gustMax: 28.2,
        tempMin: 1.0,
        beskrivelse: "Jevnt daarlig vaer med snitt 43 EI per dag. Vindkast opp til 28.2 m/s."
      },
    ]
  },
  {
    ukeId: "2026-W23",
    uke: "Uke 23",
    periode: "01.06 - 07.06.2026",
    versteFylke: "Oslo",
    versteFylkeScore: 192.8,
    versteStasjon: "FOLGEFONNA SKISENTER TOPP",
    versteStasjonKommune: "ULLENSVANG",
    versteStasjonFylke: "Vestland",
    versteStasjonScore: 307.0,
    dominerendeVaertype: "Sterk vind, mye nedbor, temperaturer naer frysepunktet",
    oppsummering: "Uke 23 ble preget av moderat vaer der Oslo ledet med 192.8 poeng. Agder (140.9) og Telemark (132.6) fulgte paa de neste plassene. FOLGEFONNA SKISENTER TOPP i Vestland ble ukens verste stasjon med 307.0 sammenlagt EI.",
    fylkerTotal: { "Finnmark": 126.5, "Troms": 107.1, "Nordland": 127.9, "Trøndelag": 103.9, "Møre og Romsdal": 114.6, "Vestland": 126.0, "Rogaland": 124.7, "Agder": 140.9, "Telemark": 132.6, "Vestfold": 0.0, "Buskerud": 128.1, "Innlandet": 128.3, "Akershus": 0.0, "Østfold": 119.8, "Oslo": 192.8 },
    fylkerDagForDag: {
      "Finnmark": [20.5, 18.8, 19.9, 17.6, 16.6, 15.5, 17.6],
      "Troms": [18.8, 17.3, 15.9, 12.5, 13.9, 14.6, 14.1],
      "Nordland": [18.4, 17.5, 18.4, 16.9, 17.3, 19.9, 19.5],
      "Trøndelag": [13.8, 15.4, 12.7, 14.2, 15.5, 15.7, 16.6],
      "Møre og Romsdal": [17.6, 17.5, 17.3, 14.7, 16.7, 15.3, 15.5],
      "Vestland": [19.6, 18.1, 19.5, 19.3, 19.7, 16.3, 13.5],
      "Rogaland": [19.0, 18.5, 17.7, 21.3, 19.4, 15.7, 13.1],
      "Agder": [19.4, 18.4, 21.7, 26.3, 23.7, 17.4, 14.0],
      "Telemark": [20.8, 18.7, 18.5, 23.2, 22.7, 15.0, 13.7],
      "Vestfold": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Buskerud": [18.8, 17.7, 17.9, 23.0, 22.6, 15.3, 12.8],
      "Innlandet": [16.8, 17.1, 16.9, 23.3, 22.0, 17.0, 15.2],
      "Akershus": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Østfold": [17.7, 16.2, 14.9, 21.1, 22.4, 15.2, 12.3],
      "Oslo": [29.2, 29.3, 28.8, 32.7, 36.3, 19.5, 17.0],
    },
    dagLabels: ["Man 01", "Tir 02", "Ons 03", "Tor 04", "Fre 05", "Lør 06", "Søn 07"],
    toppStasjoner: [
      {
        navn: "FOLGEFONNA SKISENTER TOPP",
        kommune: "ULLENSVANG",
        fylke: "Vestland",
        totalEi: 307.0,
        gustMax: 34.9,
        tempMin: 2.9,
        beskrivelse: "Jevnt daarlig vaer med snitt 44 EI per dag. Vindkast opp til 34.9 m/s."
      },
      {
        navn: "SKARDSBØFJELLET",
        kommune: "SOGNDAL",
        fylke: "Vestland",
        totalEi: 302.4,
        gustMax: 14.0,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 43 EI per dag."
      },
      {
        navn: "TROMSØ LH - STORKJØLEN",
        kommune: "TROMSØ",
        fylke: "Troms",
        totalEi: 301.3,
        gustMax: 28.4,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 43 EI per dag. Vindkast opp til 28.4 m/s."
      },
      {
        navn: "SOGNDAL LH - STOREHAUGFJELLET",
        kommune: "SOGNDAL",
        fylke: "Vestland",
        totalEi: 283.1,
        gustMax: 30.6,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 40 EI per dag. Vindkast opp til 30.6 m/s."
      },
      {
        navn: "TONSTAD - NETTFED",
        kommune: "SIRDAL",
        fylke: "Agder",
        totalEi: 273.7,
        gustMax: 0,
        tempMin: 0,
        beskrivelse: "Varierende forhold med snitt 39 EI per dag. Totalt 57.2 mm nedbor."
      },
    ]
  },
  {
    ukeId: "2026-W24",
    uke: "Uke 24",
    periode: "08.06 - 14.06.2026",
    versteFylke: "Oslo",
    versteFylkeScore: 198.4,
    versteStasjon: "SKARDSBØFJELLET",
    versteStasjonKommune: "SOGNDAL",
    versteStasjonFylke: "Vestland",
    versteStasjonScore: 332.8,
    dominerendeVaertype: "Sterk vind, mye nedbor, temperaturer naer frysepunktet",
    oppsummering: "Uke 24 ble preget av moderat vaer der Oslo ledet med 198.4 poeng. Agder (153.5) og Telemark (151.4) fulgte paa de neste plassene. SKARDSBØFJELLET i Vestland ble ukens verste stasjon med 332.8 sammenlagt EI.",
    fylkerTotal: { "Finnmark": 142.1, "Troms": 118.1, "Nordland": 130.4, "Trøndelag": 118.5, "Møre og Romsdal": 128.2, "Vestland": 144.8, "Rogaland": 146.7, "Agder": 153.5, "Telemark": 151.4, "Vestfold": 0.0, "Buskerud": 138.4, "Innlandet": 138.6, "Akershus": 0.0, "Østfold": 118.2, "Oslo": 198.4 },
    fylkerDagForDag: {
      "Finnmark": [19.1, 15.3, 15.3, 21.1, 18.7, 26.5, 26.1],
      "Troms": [16.7, 12.5, 10.6, 18.7, 17.0, 22.0, 20.6],
      "Nordland": [21.1, 15.6, 15.7, 23.6, 18.1, 17.5, 18.8],
      "Trøndelag": [14.8, 12.6, 20.9, 20.7, 16.8, 13.9, 18.8],
      "Møre og Romsdal": [15.0, 16.6, 23.6, 20.2, 15.6, 17.6, 19.6],
      "Vestland": [17.6, 22.9, 25.0, 22.2, 20.4, 19.1, 17.6],
      "Rogaland": [19.0, 27.3, 22.5, 20.6, 20.8, 19.3, 17.2],
      "Agder": [17.0, 31.1, 22.7, 19.9, 22.5, 22.1, 18.2],
      "Telemark": [15.9, 27.8, 22.8, 19.5, 20.8, 24.5, 20.1],
      "Vestfold": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Buskerud": [12.2, 21.8, 21.9, 18.3, 18.8, 25.4, 20.0],
      "Innlandet": [14.4, 20.8, 22.4, 18.6, 18.1, 21.9, 22.4],
      "Akershus": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Østfold": [14.3, 20.8, 19.1, 15.3, 15.4, 17.0, 16.3],
      "Oslo": [17.4, 30.0, 30.9, 27.8, 27.3, 35.9, 29.1],
    },
    dagLabels: ["Man 08", "Tir 09", "Ons 10", "Tor 11", "Fre 12", "Lør 13", "Søn 14"],
    toppStasjoner: [
      {
        navn: "SKARDSBØFJELLET",
        kommune: "SOGNDAL",
        fylke: "Vestland",
        totalEi: 332.8,
        gustMax: 14.2,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 48 EI per dag. Totalt 37.2 mm nedbor."
      },
      {
        navn: "HUNDSEID I VIKEDAL",
        kommune: "VINDAFJORD",
        fylke: "Rogaland",
        totalEi: 307.8,
        gustMax: 0,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 44 EI per dag. Totalt 125.7 mm nedbor."
      },
      {
        navn: "SØYLAND I GJESDAL",
        kommune: "GJESDAL",
        fylke: "Rogaland",
        totalEi: 305.4,
        gustMax: 0,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 44 EI per dag. Totalt 120.7 mm nedbor."
      },
      {
        navn: "ULLANDHAUG",
        kommune: "SOLA",
        fylke: "Rogaland",
        totalEi: 302.1,
        gustMax: 0,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 43 EI per dag. Totalt 114.2 mm nedbor."
      },
      {
        navn: "FOLGEFONNA SKISENTER TOPP",
        kommune: "ULLENSVANG",
        fylke: "Vestland",
        totalEi: 296.5,
        gustMax: 24.5,
        tempMin: 0.0,
        beskrivelse: "Jevnt daarlig vaer med snitt 42 EI per dag."
      },
    ]
  },
  {
    ukeId: "2026-W25",
    uke: "Uke 25",
    periode: "15.06 - 21.06.2026",
    versteFylke: "Finnmark",
    versteFylkeScore: 175.7,
    versteStasjon: "GAMANJUNNI",
    versteStasjonKommune: "KÅFJORD",
    versteStasjonFylke: "Troms",
    versteStasjonScore: 396.4,
    dominerendeVaertype: "Sterk vind, mye nedbor, vedvarende kulde",
    oppsummering: "Uke 25 ble preget av moderat vaer der Finnmark ledet med 175.7 poeng. Oslo (151.4) og Nordland (141.9) fulgte paa de neste plassene. GAMANJUNNI i Troms ble ukens verste stasjon med 396.4 sammenlagt EI.",
    fylkerTotal: { "Finnmark": 175.7, "Troms": 135.6, "Nordland": 141.9, "Trøndelag": 119.8, "Møre og Romsdal": 137.2, "Vestland": 124.1, "Rogaland": 110.4, "Agder": 101.8, "Telemark": 100.3, "Vestfold": 0.0, "Buskerud": 101.1, "Innlandet": 108.5, "Akershus": 0.0, "Østfold": 95.9, "Oslo": 151.4 },
    fylkerDagForDag: {
      "Finnmark": [32.1, 22.7, 27.4, 28.7, 20.0, 20.4, 24.4],
      "Troms": [20.5, 18.2, 20.6, 20.5, 16.8, 19.3, 19.7],
      "Nordland": [16.7, 17.4, 18.9, 18.9, 18.3, 24.0, 27.7],
      "Trøndelag": [19.2, 17.7, 15.1, 15.8, 15.2, 14.8, 22.0],
      "Møre og Romsdal": [20.1, 17.7, 15.6, 19.0, 18.0, 22.1, 24.7],
      "Vestland": [15.5, 14.3, 14.1, 18.2, 18.9, 22.7, 20.4],
      "Rogaland": [16.0, 16.1, 14.7, 16.2, 17.1, 15.4, 14.9],
      "Agder": [15.4, 14.2, 15.9, 17.2, 12.6, 11.9, 14.6],
      "Telemark": [15.7, 12.8, 15.6, 17.0, 15.7, 11.7, 11.8],
      "Vestfold": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Buskerud": [15.0, 12.5, 14.9, 14.7, 15.5, 14.0, 14.5],
      "Innlandet": [18.9, 16.0, 13.9, 13.3, 14.6, 15.1, 16.7],
      "Akershus": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Østfold": [18.0, 11.9, 13.5, 15.5, 13.7, 12.1, 11.2],
      "Oslo": [26.6, 16.8, 23.6, 23.3, 26.6, 17.3, 17.2],
    },
    dagLabels: ["Man 15", "Tir 16", "Ons 17", "Tor 18", "Fre 19", "Lør 20", "Søn 21"],
    toppStasjoner: [
      {
        navn: "GAMANJUNNI",
        kommune: "KÅFJORD",
        fylke: "Troms",
        totalEi: 396.4,
        gustMax: 17.8,
        tempMin: -0.9,
        beskrivelse: "Jevnt daarlig vaer med snitt 57 EI per dag. Totalt 270.7 mm nedbor."
      },
      {
        navn: "KRÅKENES",
        kommune: "KINN",
        fylke: "Vestland",
        totalEi: 298.2,
        gustMax: 28.9,
        tempMin: 9.9,
        beskrivelse: "Jevnt daarlig vaer med snitt 43 EI per dag. Vindkast opp til 28.9 m/s."
      },
      {
        navn: "LAKSELV LH - NJEAIDDAN",
        kommune: "PORSANGER",
        fylke: "Finnmark",
        totalEi: 297.9,
        gustMax: 19.2,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 43 EI per dag."
      },
      {
        navn: "SOGNDAL LH - STOREHAUGFJELLET",
        kommune: "SOGNDAL",
        fylke: "Vestland",
        totalEi: 297.5,
        gustMax: 24.7,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 42 EI per dag."
      },
      {
        navn: "SKARDSBØFJELLET",
        kommune: "SOGNDAL",
        fylke: "Vestland",
        totalEi: 296.3,
        gustMax: 16.6,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 42 EI per dag. Totalt 31.0 mm nedbor."
      },
    ]
  },
  {
    ukeId: "2026-W26",
    uke: "Uke 26",
    periode: "22.06 - 28.06.2026",
    versteFylke: "Nordland",
    versteFylkeScore: 163.7,
    versteStasjon: "SKARDSBØFJELLET",
    versteStasjonKommune: "SOGNDAL",
    versteStasjonFylke: "Vestland",
    versteStasjonScore: 296.1,
    dominerendeVaertype: "Sterk vind, mye nedbor, vedvarende kulde",
    oppsummering: "Uke 26 ble preget av moderat vaer der Nordland ledet med 163.7 poeng. Finnmark (146.0) og Møre og Romsdal (139.5) fulgte paa de neste plassene. SKARDSBØFJELLET i Vestland ble ukens verste stasjon med 296.1 sammenlagt EI.",
    fylkerTotal: { "Finnmark": 146.0, "Troms": 131.6, "Nordland": 163.7, "Trøndelag": 123.4, "Møre og Romsdal": 139.5, "Vestland": 119.6, "Rogaland": 87.6, "Agder": 75.6, "Telemark": 77.7, "Vestfold": 0.0, "Buskerud": 80.3, "Innlandet": 95.7, "Akershus": 0.0, "Østfold": 66.4, "Oslo": 111.4 },
    fylkerDagForDag: {
      "Finnmark": [20.3, 21.2, 20.8, 18.8, 17.3, 25.2, 22.4],
      "Troms": [20.5, 20.3, 17.4, 16.3, 17.3, 22.4, 17.4],
      "Nordland": [33.0, 24.8, 19.9, 21.5, 22.8, 24.4, 17.3],
      "Trøndelag": [23.4, 18.0, 18.2, 18.8, 17.6, 15.4, 12.0],
      "Møre og Romsdal": [22.9, 21.2, 22.8, 20.1, 21.4, 17.2, 13.9],
      "Vestland": [18.0, 18.7, 20.3, 16.7, 18.9, 14.7, 12.3],
      "Rogaland": [14.2, 13.4, 15.0, 11.6, 12.8, 11.2, 9.4],
      "Agder": [13.6, 12.6, 11.5, 10.6, 9.1, 9.7, 8.5],
      "Telemark": [11.9, 12.3, 12.8, 10.3, 9.8, 12.1, 8.5],
      "Vestfold": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Buskerud": [12.4, 12.0, 14.0, 10.7, 10.9, 11.8, 8.5],
      "Innlandet": [15.3, 14.5, 17.1, 13.1, 14.3, 12.6, 8.8],
      "Akershus": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Østfold": [9.9, 11.9, 13.1, 8.0, 9.3, 7.7, 6.5],
      "Oslo": [16.2, 16.1, 17.6, 15.4, 15.1, 16.2, 14.8],
    },
    dagLabels: ["Man 22", "Tir 23", "Ons 24", "Tor 25", "Fre 26", "Lør 27", "Søn 28"],
    toppStasjoner: [
      {
        navn: "SKARDSBØFJELLET",
        kommune: "SOGNDAL",
        fylke: "Vestland",
        totalEi: 296.1,
        gustMax: 13.8,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 42 EI per dag. Totalt 33.2 mm nedbor."
      },
      {
        navn: "SOGNDAL LH - STOREHAUGFJELLET",
        kommune: "SOGNDAL",
        fylke: "Vestland",
        totalEi: 288.3,
        gustMax: 21.2,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 41 EI per dag."
      },
      {
        navn: "JUVVASSHØE",
        kommune: "LOM",
        fylke: "Innlandet",
        totalEi: 287.0,
        gustMax: 35.4,
        tempMin: -0.3,
        beskrivelse: "Jevnt daarlig vaer med snitt 41 EI per dag. Vindkast opp til 35.4 m/s."
      },
      {
        navn: "ØRSTA-VOLDA LH - HELGEHORNET",
        kommune: "ØRSTA",
        fylke: "Møre og Romsdal",
        totalEi: 284.4,
        gustMax: 19.4,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 41 EI per dag."
      },
      {
        navn: "BJERKA - VALLA",
        kommune: "HEMNES",
        fylke: "Nordland",
        totalEi: 282.2,
        gustMax: 0,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 40 EI per dag. Totalt 74.1 mm nedbor."
      },
    ]
  },
  {
    ukeId: "2026-W27",
    uke: "Uke 27",
    periode: "29.06 - 05.07.2026",
    versteFylke: "Oslo",
    versteFylkeScore: 164.5,
    versteStasjon: "SKARDSBØFJELLET",
    versteStasjonKommune: "SOGNDAL",
    versteStasjonFylke: "Vestland",
    versteStasjonScore: 337.6,
    dominerendeVaertype: "Sterk vind, mye nedbor, vedvarende kulde",
    oppsummering: "Uke 27 ble preget av moderat vaer der Oslo ledet med 164.5 poeng. Finnmark (150.4) og Nordland (146.8) fulgte paa de neste plassene. SKARDSBØFJELLET i Vestland ble ukens verste stasjon med 337.6 sammenlagt EI.",
    fylkerTotal: { "Finnmark": 150.4, "Troms": 126.0, "Nordland": 146.8, "Trøndelag": 120.8, "Møre og Romsdal": 133.1, "Vestland": 126.5, "Rogaland": 107.1, "Agder": 102.9, "Telemark": 97.4, "Vestfold": 0.0, "Buskerud": 104.0, "Innlandet": 109.5, "Akershus": 0.0, "Østfold": 87.2, "Oslo": 164.5 },
    fylkerDagForDag: {
      "Finnmark": [18.6, 27.6, 27.6, 22.5, 17.4, 18.0, 18.7],
      "Troms": [14.2, 24.3, 24.3, 18.7, 14.9, 14.8, 14.8],
      "Nordland": [21.4, 27.7, 24.9, 17.5, 17.3, 18.6, 19.4],
      "Trøndelag": [15.7, 19.4, 14.6, 13.9, 16.8, 17.0, 23.4],
      "Møre og Romsdal": [19.3, 18.9, 13.2, 15.8, 19.7, 20.5, 25.7],
      "Vestland": [16.7, 16.3, 13.1, 16.7, 21.7, 19.8, 22.2],
      "Rogaland": [10.6, 11.0, 10.7, 19.1, 23.3, 13.9, 18.5],
      "Agder": [11.9, 12.8, 11.1, 17.5, 20.4, 13.6, 15.6],
      "Telemark": [10.4, 11.4, 11.2, 21.6, 17.8, 11.7, 13.3],
      "Vestfold": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Buskerud": [10.2, 11.1, 11.2, 21.6, 19.1, 12.5, 18.3],
      "Innlandet": [11.7, 12.8, 13.3, 17.5, 19.3, 15.5, 19.4],
      "Akershus": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Østfold": [9.8, 10.1, 10.5, 16.8, 18.2, 11.2, 10.6],
      "Oslo": [15.4, 15.7, 15.8, 33.2, 29.6, 24.8, 30.0],
    },
    dagLabels: ["Man 29", "Tir 30", "Ons 01", "Tor 02", "Fre 03", "Lør 04", "Søn 05"],
    toppStasjoner: [
      {
        navn: "SKARDSBØFJELLET",
        kommune: "SOGNDAL",
        fylke: "Vestland",
        totalEi: 337.6,
        gustMax: 14.4,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 48 EI per dag. Totalt 20.5 mm nedbor."
      },
      {
        navn: "LAKSELV LH - NJEAIDDAN",
        kommune: "PORSANGER",
        fylke: "Finnmark",
        totalEi: 315.9,
        gustMax: 23.9,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 45 EI per dag."
      },
      {
        navn: "KVANNTOKOLLEN",
        kommune: "EVENES",
        fylke: "Nordland",
        totalEi: 310.6,
        gustMax: 32.1,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 44 EI per dag. Vindkast opp til 32.1 m/s."
      },
      {
        navn: "SOGNDAL LH - STOREHAUGFJELLET",
        kommune: "SOGNDAL",
        fylke: "Vestland",
        totalEi: 301.1,
        gustMax: 22.7,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 43 EI per dag."
      },
      {
        navn: "RV13 VIKAFJELL",
        kommune: "VIK",
        fylke: "Vestland",
        totalEi: 296.8,
        gustMax: 0,
        tempMin: -26.9,
        beskrivelse: "Jevnt daarlig vaer med snitt 42 EI per dag. Totalt 23.0 mm nedbor. Kulde ned til -26.9C."
      },
    ]
  },
  {
    ukeId: "2026-W28",
    uke: "Uke 28",
    periode: "06.07 - 12.07.2026",
    versteFylke: "Nordland",
    versteFylkeScore: 145.6,
    versteStasjon: "KVANNTOKOLLEN",
    versteStasjonKommune: "EVENES",
    versteStasjonFylke: "Nordland",
    versteStasjonScore: 296.2,
    dominerendeVaertype: "Sterk vind, mye nedbor, vedvarende kulde",
    oppsummering: "Uke 28 ble preget av moderat vaer der Nordland ledet med 145.6 poeng. Finnmark (139.4) og Oslo (137.8) fulgte paa de neste plassene. KVANNTOKOLLEN i Nordland ble ukens verste stasjon med 296.2 sammenlagt EI.",
    fylkerTotal: { "Finnmark": 139.4, "Troms": 112.2, "Nordland": 145.6, "Trøndelag": 128.9, "Møre og Romsdal": 126.4, "Vestland": 101.5, "Rogaland": 89.3, "Agder": 80.2, "Telemark": 81.8, "Vestfold": 0.0, "Buskerud": 88.2, "Innlandet": 101.7, "Akershus": 0.0, "Østfold": 65.7, "Oslo": 137.8 },
    fylkerDagForDag: {
      "Finnmark": [24.2, 26.4, 17.6, 20.1, 15.5, 17.2, 18.4],
      "Troms": [13.5, 17.7, 15.4, 15.9, 15.6, 16.4, 17.7],
      "Nordland": [21.3, 24.8, 20.7, 20.0, 19.5, 20.4, 18.9],
      "Trøndelag": [20.4, 21.8, 24.9, 17.2, 13.4, 16.8, 14.4],
      "Møre og Romsdal": [24.6, 20.2, 19.2, 16.7, 14.7, 16.5, 14.5],
      "Vestland": [19.1, 19.6, 15.4, 12.5, 10.6, 12.2, 12.1],
      "Rogaland": [13.9, 16.2, 15.4, 11.6, 9.6, 11.0, 11.6],
      "Agder": [14.6, 17.0, 13.3, 9.5, 8.5, 7.4, 9.9],
      "Telemark": [13.4, 14.4, 12.6, 9.9, 9.0, 8.3, 14.2],
      "Vestfold": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Buskerud": [14.8, 14.7, 12.9, 10.0, 8.6, 12.9, 14.3],
      "Innlandet": [17.8, 18.8, 19.5, 12.0, 8.8, 12.3, 12.5],
      "Akershus": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Østfold": [12.1, 13.5, 11.0, 8.4, 6.5, 5.6, 8.6],
      "Oslo": [17.5, 17.6, 16.9, 15.3, 15.0, 26.4, 29.1],
    },
    dagLabels: ["Man 06", "Tir 07", "Ons 08", "Tor 09", "Fre 10", "Lør 11", "Søn 12"],
    toppStasjoner: [
      {
        navn: "KVANNTOKOLLEN",
        kommune: "EVENES",
        fylke: "Nordland",
        totalEi: 296.2,
        gustMax: 18.4,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 42 EI per dag."
      },
      {
        navn: "HAMMERFEST LH - BOAZOVARRI",
        kommune: "HAMMERFEST",
        fylke: "Finnmark",
        totalEi: 280.2,
        gustMax: 21.1,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 40 EI per dag."
      },
      {
        navn: "KIRKENES LUFTHAVN - HØYDE 212",
        kommune: "SØR-VARANGER",
        fylke: "Finnmark",
        totalEi: 275.1,
        gustMax: 27.5,
        tempMin: 0,
        beskrivelse: "Varierende forhold med snitt 39 EI per dag. Vindkast opp til 27.5 m/s."
      },
      {
        navn: "TROMSØ LH - STORKJØLEN",
        kommune: "TROMSØ",
        fylke: "Troms",
        totalEi: 271.2,
        gustMax: 18.4,
        tempMin: 0,
        beskrivelse: "Varierende forhold med snitt 39 EI per dag."
      },
      {
        navn: "LEIRFJORD",
        kommune: "LEIRFJORD",
        fylke: "Nordland",
        totalEi: 265.9,
        gustMax: 0,
        tempMin: 0,
        beskrivelse: "Varierende forhold med snitt 38 EI per dag. Totalt 72.1 mm nedbor."
      },
    ]
  },
  {
    ukeId: "2026-W29",
    uke: "Uke 29",
    periode: "13.07 - 19.07.2026",
    versteFylke: "Finnmark",
    versteFylkeScore: 164.1,
    versteStasjon: "KVANNTOKOLLEN",
    versteStasjonKommune: "EVENES",
    versteStasjonFylke: "Nordland",
    versteStasjonScore: 385.3,
    dominerendeVaertype: "Sterk vind, mye nedbor, vedvarende kulde",
    oppsummering: "Uke 29 ble preget av moderat vaer der Finnmark ledet med 164.1 poeng. Nordland (163.9) og Troms (155.7) fulgte paa de neste plassene. KVANNTOKOLLEN i Nordland ble ukens verste stasjon med 385.3 sammenlagt EI.",
    fylkerTotal: { "Finnmark": 164.1, "Troms": 155.7, "Nordland": 163.9, "Trøndelag": 96.4, "Møre og Romsdal": 101.4, "Vestland": 74.9, "Rogaland": 68.5, "Agder": 63.2, "Telemark": 78.7, "Vestfold": 0.0, "Buskerud": 85.0, "Innlandet": 77.8, "Akershus": 0.0, "Østfold": 71.7, "Oslo": 142.7 },
    fylkerDagForDag: {
      "Finnmark": [19.2, 26.2, 20.7, 23.7, 23.2, 24.5, 26.6],
      "Troms": [20.6, 21.9, 20.6, 24.5, 21.6, 24.0, 22.5],
      "Nordland": [20.8, 24.0, 26.0, 24.0, 23.3, 23.9, 21.9],
      "Trøndelag": [12.9, 12.7, 12.6, 12.2, 13.0, 17.1, 15.9],
      "Møre og Romsdal": [13.5, 12.7, 12.4, 12.4, 15.4, 18.1, 16.9],
      "Vestland": [10.3, 9.7, 8.7, 8.7, 10.2, 14.2, 13.1],
      "Rogaland": [8.7, 8.9, 8.0, 7.3, 10.6, 12.8, 12.2],
      "Agder": [7.5, 7.3, 7.0, 6.4, 7.1, 12.9, 15.0],
      "Telemark": [9.0, 7.8, 7.3, 7.2, 8.1, 18.5, 20.8],
      "Vestfold": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Buskerud": [8.9, 7.8, 7.7, 7.2, 9.3, 23.7, 20.4],
      "Innlandet": [9.2, 7.7, 6.8, 6.5, 8.0, 21.4, 18.2],
      "Akershus": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      "Østfold": [7.1, 6.7, 6.0, 5.6, 6.2, 16.7, 23.4],
      "Oslo": [15.3, 14.9, 14.7, 14.6, 15.9, 35.9, 31.4],
    },
    dagLabels: ["Man 13", "Tir 14", "Ons 15", "Tor 16", "Fre 17", "Lør 18", "Søn 19"],
    toppStasjoner: [
      {
        navn: "KVANNTOKOLLEN",
        kommune: "EVENES",
        fylke: "Nordland",
        totalEi: 385.3,
        gustMax: 29.2,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 55 EI per dag. Vindkast opp til 29.2 m/s."
      },
      {
        navn: "HASVIK - SLUSKFJELLET",
        kommune: "HASVIK",
        fylke: "Finnmark",
        totalEi: 357.9,
        gustMax: 30.3,
        tempMin: 4.1,
        beskrivelse: "Jevnt daarlig vaer med snitt 51 EI per dag. Vindkast opp til 30.3 m/s."
      },
      {
        navn: "HAMMERFEST LH - BOAZOVARRI",
        kommune: "HAMMERFEST",
        fylke: "Finnmark",
        totalEi: 354.5,
        gustMax: 26.8,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 51 EI per dag. Vindkast opp til 26.8 m/s."
      },
      {
        navn: "KISTEFJELL",
        kommune: "SENJA",
        fylke: "Troms",
        totalEi: 339.2,
        gustMax: 25.8,
        tempMin: -0.3,
        beskrivelse: "Jevnt daarlig vaer med snitt 48 EI per dag. Vindkast opp til 25.8 m/s."
      },
      {
        navn: "LAKSELV LH - NJEAIDDAN",
        kommune: "PORSANGER",
        fylke: "Finnmark",
        totalEi: 339.0,
        gustMax: 27.0,
        tempMin: 0,
        beskrivelse: "Jevnt daarlig vaer med snitt 48 EI per dag. Vindkast opp til 27.0 m/s."
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

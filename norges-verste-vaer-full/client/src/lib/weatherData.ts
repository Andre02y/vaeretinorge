/**
 * ============================================================
 * NORGES VERSTE VAER - DATABLOKK
 * ============================================================
 * FREMTIDSSIKRING: For a oppdatere dashboardet med nye data,
 * erstatt kun denne filen. Designet endres ikke.
 *
 * Sist oppdatert: 31.03.2026 kl. 14:48
 * Periode sammenlagt: 30.03 - 31.03.2026 (2 dager)
 * Kilde: Frost API (frost.met.no), P1D + timesdata
 * ============================================================
 */

// ---- METADATA ----

export const META = {
  serieNavn: "Norges Verste Vaer",
  dagLabel: "Tirsdag 31.03.2026",
  sammenlagtLabel: "30.03 - 31.03.2026 (2 dager)",
  datoOppdatert: "31.03.2026 kl. 14:48",
  rapportVersjon: "v2.2 (norsk tid, live uke, ryddig arkiv, fikset uke/arkiv-logikk)",
  dagLabels: ["Man 30", "Tir 31"],
};

// ---- DAG-FOR-DAG EI PER FYLKE ----

export const FYLKER_DAG_FOR_DAG = [
  { navn: "Oslo", dager: [35.4, 33.2], trend: "Noe bedring (-2.2) - roligere forhold" },
  { navn: "Finnmark", dager: [32.4, 31.6], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Vestland", dager: [31.4, 29.0], trend: "Noe bedring (-2.4) - roligere forhold" },
  { navn: "Nordland", dager: [30.4, 29.6], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Agder", dager: [32.3, 25.1], trend: "Markant bedring (-7.2) - lavtrykket har passert" },
  { navn: "Troms", dager: [27.6, 28.8], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Rogaland", dager: [29.5, 26.6], trend: "Noe bedring (-2.9) - roligere forhold" },
  { navn: "Innlandet", dager: [29.0, 27.1], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Buskerud", dager: [27.1, 25.3], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Møre og Romsdal", dager: [25.2, 26.8], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Østfold", dager: [27.7, 23.5], trend: "Noe bedring (-4.2) - roligere forhold" },
  { navn: "Telemark", dager: [26.9, 22.1], trend: "Noe bedring (-4.8) - roligere forhold" },
  { navn: "Trøndelag", dager: [21.9, 23.9], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Vestfold", dager: [0.0, 0.0], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Akershus", dager: [0.0, 0.0], trend: "Stabilt - lite endring fra i gar" },
];

// ---- SAMMENLAGT ----

export const FYLKER_SAMMENLAGT = [
  { navn: "Oslo", total: 68.6, iDag: 33.2, endringFraIGar: -2.2, plasseringEndring: 0 },
  { navn: "Finnmark", total: 64.0, iDag: 31.6, endringFraIGar: -0.8, plasseringEndring: 0 },
  { navn: "Vestland", total: 60.4, iDag: 29.0, endringFraIGar: -2.4, plasseringEndring: 1 },
  { navn: "Nordland", total: 60.0, iDag: 29.6, endringFraIGar: -0.8, plasseringEndring: 1 },
  { navn: "Agder", total: 57.4, iDag: 25.1, endringFraIGar: -7.2, plasseringEndring: -2 },
  { navn: "Troms", total: 56.4, iDag: 28.8, endringFraIGar: 1.2, plasseringEndring: 3 },
  { navn: "Rogaland", total: 56.1, iDag: 26.6, endringFraIGar: -2.9, plasseringEndring: -1 },
  { navn: "Innlandet", total: 56.1, iDag: 27.1, endringFraIGar: -1.9, plasseringEndring: -1 },
  { navn: "Buskerud", total: 52.4, iDag: 25.3, endringFraIGar: -1.8, plasseringEndring: 1 },
  { navn: "Møre og Romsdal", total: 52.0, iDag: 26.8, endringFraIGar: 1.6, plasseringEndring: 2 },
  { navn: "Østfold", total: 51.2, iDag: 23.5, endringFraIGar: -4.2, plasseringEndring: -3 },
  { navn: "Telemark", total: 49.0, iDag: 22.1, endringFraIGar: -4.8, plasseringEndring: -1 },
  { navn: "Trøndelag", total: 45.8, iDag: 23.9, endringFraIGar: 2.0, plasseringEndring: 0 },
  { navn: "Vestfold", total: 0.0, iDag: 0.0, endringFraIGar: 0.0, plasseringEndring: 0 },
  { navn: "Akershus", total: 0.0, iDag: 0.0, endringFraIGar: 0.0, plasseringEndring: 0 },
];

// ---- TOPP 5 STASJONER TIRSDAG 31.03.2026 ----

export const STASJONER_PERIODE = [
  { navn: "KVAMSKOGEN - JONSHØGDI", kommune: "KVAM", fylke: "Vestland", ei: 60.4, vindkast: 13.0, nedbor: 24.4, temp: 1.0, farevarsel: "oransje" },
  { navn: "KISTEFJELL", kommune: "SENJA", fylke: "Troms", ei: 59.6, vindkast: 19.8, nedbor: 0, temp: -3.9, farevarsel: "gul" },
  { navn: "ANDØYA - TROLLTINDEN", kommune: "ANDØY", fylke: "Nordland", ei: 59.2, vindkast: 24.9, nedbor: 0, temp: 0.3, farevarsel: "gul" },
  { navn: "HONNEGRASNUTEN", kommune: "VINJE", fylke: "Telemark", ei: 58.2, vindkast: 21.4, nedbor: 0, temp: -4.6, farevarsel: "gul" },
  { navn: "SIRDAL - SMØLEHEIKNUDEN", kommune: "SIRDAL", fylke: "Agder", ei: 57.2, vindkast: 25.7, nedbor: 0, temp: -1.7, farevarsel: "gul" },
];

// ---- UKENS TOPP 5 STASJONER (sammenlagt) ----

export const STASJONER_UKE = [
  {
    navn: "KVAMSKOGEN - JONSHØGDI",
    kommune: "KVAM",
    fylke: "Vestland",
    totalEi: 127.8,
    gustMax: 25.9,
    precipTotal: 54.3,
    tempMin: 0.1,
    dager: [67.4, 60.4, 0, 0, 0, 0, 0],
    beskrivelse: "Ekstremt vaer sa langt denne uka med snitt 64 EI per dag. Toppdag Man med 67.4 EI. Kraftige vindkast opp til 25.9 m/s. Mye nedbor med totalt 54.3 mm."
  },
  {
    navn: "SIRDAL - SMØLEHEIKNUDEN",
    kommune: "SIRDAL",
    fylke: "Agder",
    totalEi: 113.4,
    gustMax: 25.7,
    precipTotal: 0,
    tempMin: -2.6,
    dager: [56.2, 57.2, 0, 0, 0, 0, 0],
    beskrivelse: "Jevnt darlig vaer sa langt denne uka med snitt 57 EI per dag. Toppdag Tir med 57.2 EI. Kraftige vindkast opp til 25.7 m/s."
  },
  {
    navn: "NARVIK - FAGERNESFJELLET",
    kommune: "NARVIK",
    fylke: "Nordland",
    totalEi: 110.7,
    gustMax: 19.8,
    precipTotal: 0,
    tempMin: -3.2,
    dager: [55.0, 55.7, 0, 0, 0, 0, 0],
    beskrivelse: "Jevnt darlig vaer sa langt denne uka med snitt 55 EI per dag. Toppdag Tir med 55.7 EI."
  },
  {
    navn: "GULLINGEN SKISENTER",
    kommune: "SULDAL",
    fylke: "Rogaland",
    totalEi: 109.7,
    gustMax: 11.7,
    precipTotal: 38.6,
    tempMin: -0.4,
    dager: [55.7, 54.0, 0, 0, 0, 0, 0],
    beskrivelse: "Jevnt darlig vaer sa langt denne uka med snitt 55 EI per dag. Toppdag Man med 55.7 EI. Mye nedbor med totalt 38.6 mm."
  },
  {
    navn: "ØRSTA - EITREFJELL",
    kommune: "ØRSTA",
    fylke: "Møre og Romsdal",
    totalEi: 109.2,
    gustMax: 20.7,
    precipTotal: 15.2,
    tempMin: 0.2,
    dager: [55.5, 53.7, 0, 0, 0, 0, 0],
    beskrivelse: "Jevnt darlig vaer sa langt denne uka med snitt 55 EI per dag. Toppdag Man med 55.5 EI."
  },
];

// ---- TRONSKIFTE ----

export const TRONSKIFTE = {
  aktiv: false,
  tittel: "OSLO LEDER!",
  beskrivelse: "Oslo leder sammenlagt med 68.6 poeng - 4.6 poeng foran Finnmark (64.0).",
  gammelLeder: "Oslo",
  nyLeder: "Oslo",
};

// ---- DAGENS LEDER ----

export const DAGENS_LEDER = {
  fylke: "Oslo",
  ei: 33.2,
  temp: 1.0,
  nedbor: 24.4,
};

// ---- AKTUELL UKE / SIST FULLFORTE UKE ----

export const AKTUELL_UKE = {
  ukeId: "2026-W14",
  uke: "Uke 14",
  fraDato: "2026-03-30",
  tilDato: "2026-03-31",
  periode: "30.03 - 31.03.2026 (2 dager)",
  dagerRegistrert: 2,
  versteFylke: "Oslo",
  versteFylkeScore: 68.6,
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

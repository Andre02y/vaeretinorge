/**
 * ============================================================
 * NORGES VERSTE VAER - DATABLOKK
 * ============================================================
 * FREMTIDSSIKRING: For a oppdatere dashboardet med nye data,
 * erstatt kun denne filen. Designet endres ikke.
 *
 * Sist oppdatert: 30.04.2026 kl. 21:05
 * Periode sammenlagt: 27.04 - 30.04.2026 (4 dager)
 * Kilde: Frost API (frost.met.no), P1D + timesdata
 * ============================================================
 */

// ---- METADATA ----

export const META = {
  serieNavn: "Norges Verste Vaer",
  dagLabel: "Torsdag 30.04.2026",
  sammenlagtLabel: "27.04 - 30.04.2026 (4 dager)",
  datoOppdatert: "30.04.2026 kl. 21:05",
  rapportVersjon: "v2.2 (norsk tid, live uke, ryddig arkiv, fikset uke/arkiv-logikk)",
  dagLabels: ["Man 27", "Tir 28", "Ons 29", "Tor 30"],
};

// ---- DAG-FOR-DAG EI PER FYLKE ----

export const FYLKER_DAG_FOR_DAG = [
  { navn: "Finnmark", dager: [42.6, 37.3, 30.2, 28.7], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Nordland", dager: [34.8, 26.8, 32.3, 32.6], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Troms", dager: [34.7, 30.9, 31.4, 28.2], trend: "Noe bedring (-3.2) - roligere forhold" },
  { navn: "Trøndelag", dager: [27.9, 22.3, 24.3, 19.8], trend: "Noe bedring (-4.5) - roligere forhold" },
  { navn: "Møre og Romsdal", dager: [22.8, 20.1, 21.9, 18.4], trend: "Noe bedring (-3.5) - roligere forhold" },
  { navn: "Innlandet", dager: [23.9, 21.1, 18.2, 15.7], trend: "Noe bedring (-2.5) - roligere forhold" },
  { navn: "Vestland", dager: [20.3, 18.8, 17.6, 17.1], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Oslo", dager: [19.3, 18.8, 18.1, 17.5], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Agder", dager: [20.2, 19.3, 17.3, 15.3], trend: "Noe bedring (-2.0) - roligere forhold" },
  { navn: "Rogaland", dager: [18.8, 17.9, 17.1, 16.8], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Østfold", dager: [19.3, 17.9, 17.1, 15.5], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Telemark", dager: [18.9, 18.3, 17.0, 15.1], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Buskerud", dager: [18.9, 17.8, 16.2, 14.0], trend: "Noe bedring (-2.2) - roligere forhold" },
  { navn: "Vestfold", dager: [0.0, 0.0, 0.0, 0.0], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Akershus", dager: [0.0, 0.0, 0.0, 0.0], trend: "Stabilt - lite endring fra i gar" },
];

// ---- SAMMENLAGT ----

export const FYLKER_SAMMENLAGT = [
  { navn: "Finnmark", total: 138.8, iDag: 28.7, endringFraIGar: -1.5, plasseringEndring: 0 },
  { navn: "Nordland", total: 126.5, iDag: 32.6, endringFraIGar: 0.3, plasseringEndring: 1 },
  { navn: "Troms", total: 125.2, iDag: 28.2, endringFraIGar: -3.2, plasseringEndring: -1 },
  { navn: "Trøndelag", total: 94.3, iDag: 19.8, endringFraIGar: -4.5, plasseringEndring: 0 },
  { navn: "Møre og Romsdal", total: 83.2, iDag: 18.4, endringFraIGar: -3.5, plasseringEndring: 0 },
  { navn: "Innlandet", total: 78.9, iDag: 15.7, endringFraIGar: -2.5, plasseringEndring: 0 },
  { navn: "Vestland", total: 73.8, iDag: 17.1, endringFraIGar: -0.5, plasseringEndring: 1 },
  { navn: "Oslo", total: 73.7, iDag: 17.5, endringFraIGar: -0.6, plasseringEndring: 1 },
  { navn: "Agder", total: 72.1, iDag: 15.3, endringFraIGar: -2.0, plasseringEndring: -2 },
  { navn: "Rogaland", total: 70.6, iDag: 16.8, endringFraIGar: -0.3, plasseringEndring: 2 },
  { navn: "Østfold", total: 69.8, iDag: 15.5, endringFraIGar: -1.6, plasseringEndring: -1 },
  { navn: "Telemark", total: 69.3, iDag: 15.1, endringFraIGar: -1.9, plasseringEndring: -1 },
  { navn: "Buskerud", total: 66.9, iDag: 14.0, endringFraIGar: -2.2, plasseringEndring: 0 },
  { navn: "Vestfold", total: 0.0, iDag: 0.0, endringFraIGar: 0.0, plasseringEndring: 0 },
  { navn: "Akershus", total: 0.0, iDag: 0.0, endringFraIGar: 0.0, plasseringEndring: 0 },
];

// ---- TOPP 5 STASJONER TORSDAG 30.04.2026 ----

export const STASJONER_PERIODE = [
  { navn: "KISTEFJELL", kommune: "SENJA", fylke: "Troms", ei: 64.0, vindkast: 23.9, nedbor: 0, temp: -0.7, farevarsel: "oransje" },
  { navn: "SANDHORNØYA - VÅTVIKFJELLET", kommune: "GILDESKÅL", fylke: "Nordland", ei: 62.0, vindkast: 27.6, nedbor: 0, temp: 3.2, farevarsel: "oransje" },
  { navn: "HASVIK - SLUSKFJELLET", kommune: "HASVIK", fylke: "Finnmark", ei: 61.0, vindkast: 23.6, nedbor: 0, temp: 0.4, farevarsel: "oransje" },
  { navn: "ANDØYA - TROLLTINDEN", kommune: "ANDØY", fylke: "Nordland", ei: 55.6, vindkast: 22.8, nedbor: 0, temp: 2.6, farevarsel: "gul" },
  { navn: "NARVIK - FAGERNESFJELLET", kommune: "NARVIK", fylke: "Nordland", ei: 55.3, vindkast: 20.4, nedbor: 0, temp: -0.2, farevarsel: "gul" },
];

// ---- UKENS TOPP 5 STASJONER (sammenlagt) ----

export const STASJONER_UKE = [
  {
    navn: "KISTEFJELL",
    kommune: "SENJA",
    fylke: "Troms",
    totalEi: 209.4,
    gustMax: 23.9,
    precipTotal: 0,
    tempMin: -5.7,
    dager: [47.2, 43.8, 54.4, 64.0, 0, 0, 0],
    beskrivelse: "Jevnt darlig vaer sa langt denne uka med snitt 52 EI per dag. Toppdag Tor med 64.0 EI. Bitende kulde ned til -5.7 grader C."
  },
  {
    navn: "VARDØ RADIO",
    kommune: "VARDØ",
    fylke: "Finnmark",
    totalEi: 205.5,
    gustMax: 18.3,
    precipTotal: 2.9,
    tempMin: 1.0,
    dager: [61.7, 59.2, 53.3, 31.3, 0, 0, 0],
    beskrivelse: "Jevnt darlig vaer sa langt denne uka med snitt 51 EI per dag. Toppdag Man med 61.7 EI."
  },
  {
    navn: "SANDHORNØYA - VÅTVIKFJELLET",
    kommune: "GILDESKÅL",
    fylke: "Nordland",
    totalEi: 200.5,
    gustMax: 27.6,
    precipTotal: 0,
    tempMin: -2.8,
    dager: [50.6, 31.8, 56.1, 62.0, 0, 0, 0],
    beskrivelse: "Jevnt darlig vaer sa langt denne uka med snitt 50 EI per dag. Toppdag Tor med 62.0 EI. Kraftige vindkast opp til 27.6 m/s."
  },
  {
    navn: "NARVIK - FAGERNESFJELLET",
    kommune: "NARVIK",
    fylke: "Nordland",
    totalEi: 200.0,
    gustMax: 20.9,
    precipTotal: 0,
    tempMin: -5.9,
    dager: [47.2, 39.3, 58.2, 55.3, 0, 0, 0],
    beskrivelse: "Jevnt darlig vaer sa langt denne uka med snitt 50 EI per dag. Toppdag Ons med 58.2 EI. Bitende kulde ned til -5.9 grader C."
  },
  {
    navn: "ARNØYA - TROLLTINDEN",
    kommune: "SKJERVØY",
    fylke: "Troms",
    totalEi: 198.7,
    gustMax: 19.0,
    precipTotal: 0,
    tempMin: -9.0,
    dager: [46.6, 47.0, 51.6, 53.5, 0, 0, 0],
    beskrivelse: "Jevnt darlig vaer sa langt denne uka med snitt 50 EI per dag. Toppdag Tor med 53.5 EI. Bitende kulde ned til -9.0 grader C."
  },
];

// ---- TRONSKIFTE ----

export const TRONSKIFTE = {
  aktiv: false,
  tittel: "FINNMARK LEDER!",
  beskrivelse: "Finnmark leder sammenlagt med 138.8 poeng - 12.3 poeng foran Nordland (126.5).",
  gammelLeder: "Finnmark",
  nyLeder: "Finnmark",
};

// ---- DAGENS LEDER ----

export const DAGENS_LEDER = {
  fylke: "Nordland",
  ei: 32.6,
  temp: 3.2,
  nedbor: 0,
};

// ---- AKTUELL UKE / SIST FULLFORTE UKE ----

export const AKTUELL_UKE = {
  ukeId: "2026-W18",
  uke: "Uke 18",
  fraDato: "2026-04-27",
  tilDato: "2026-04-30",
  periode: "27.04 - 30.04.2026 (4 dager)",
  dagerRegistrert: 4,
  versteFylke: "Finnmark",
  versteFylkeScore: 138.8,
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

/**
 * ============================================================
 * NORGES VERSTE VAER - DATABLOKK
 * ============================================================
 * FREMTIDSSIKRING: For a oppdatere dashboardet med nye data,
 * erstatt kun denne filen. Designet endres ikke.
 *
 * Sist oppdatert: 25.04.2026 kl. 09:02
 * Periode sammenlagt: 20.04 - 25.04.2026 (6 dager)
 * Kilde: Frost API (frost.met.no), P1D + timesdata
 * ============================================================
 */

// ---- METADATA ----

export const META = {
  serieNavn: "Norges Verste Vaer",
  dagLabel: "Lørdag 25.04.2026",
  sammenlagtLabel: "20.04 - 25.04.2026 (6 dager)",
  datoOppdatert: "25.04.2026 kl. 09:02",
  rapportVersjon: "v2.2 (norsk tid, live uke, ryddig arkiv, fikset uke/arkiv-logikk)",
  dagLabels: ["Man 20", "Tir 21", "Ons 22", "Tor 23", "Fre 24", "Lør 25"],
};

// ---- DAG-FOR-DAG EI PER FYLKE ----

export const FYLKER_DAG_FOR_DAG = [
  { navn: "Finnmark", dager: [28.3, 36.3, 46.8, 47.9, 43.1, 31.9], trend: "Markant bedring (-11.2) - lavtrykket har passert" },
  { navn: "Troms", dager: [23.4, 31.2, 30.4, 33.8, 36.5, 32.5], trend: "Noe bedring (-4.0) - roligere forhold" },
  { navn: "Nordland", dager: [20.5, 27.3, 29.3, 29.6, 32.0, 35.9], trend: "Noe forverring (+3.9) - ustabilt vaer fortsetter" },
  { navn: "Trøndelag", dager: [17.6, 19.3, 25.0, 27.4, 28.0, 31.1], trend: "Noe forverring (+3.1) - ustabilt vaer fortsetter" },
  { navn: "Møre og Romsdal", dager: [17.2, 17.7, 21.0, 25.3, 28.2, 32.0], trend: "Noe forverring (+3.8) - ustabilt vaer fortsetter" },
  { navn: "Innlandet", dager: [22.3, 19.6, 21.7, 22.4, 21.5, 26.5], trend: "Noe forverring (+5.0) - ustabilt vaer fortsetter" },
  { navn: "Vestland", dager: [19.7, 18.2, 19.3, 20.2, 21.8, 26.8], trend: "Noe forverring (+5.0) - ustabilt vaer fortsetter" },
  { navn: "Oslo", dager: [30.2, 19.4, 18.1, 18.6, 17.8, 18.6], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Rogaland", dager: [19.0, 17.6, 19.3, 20.8, 20.9, 23.7], trend: "Noe forverring (+2.8) - ustabilt vaer fortsetter" },
  { navn: "Agder", dager: [25.2, 18.5, 18.1, 17.7, 17.3, 22.3], trend: "Noe forverring (+5.0) - ustabilt vaer fortsetter" },
  { navn: "Buskerud", dager: [23.5, 17.6, 16.6, 16.7, 16.9, 18.3], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Telemark", dager: [25.0, 17.7, 16.4, 16.5, 15.9, 18.0], trend: "Noe forverring (+2.1) - ustabilt vaer fortsetter" },
  { navn: "Østfold", dager: [23.6, 16.3, 15.2, 15.9, 15.7, 17.3], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Vestfold", dager: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], trend: "Stabilt - lite endring fra i gar" },
  { navn: "Akershus", dager: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], trend: "Stabilt - lite endring fra i gar" },
];

// ---- SAMMENLAGT ----

export const FYLKER_SAMMENLAGT = [
  { navn: "Finnmark", total: 234.3, iDag: 31.9, endringFraIGar: -11.2, plasseringEndring: 0 },
  { navn: "Troms", total: 187.8, iDag: 32.5, endringFraIGar: -4.0, plasseringEndring: 0 },
  { navn: "Nordland", total: 174.6, iDag: 35.9, endringFraIGar: 3.9, plasseringEndring: 0 },
  { navn: "Trøndelag", total: 148.4, iDag: 31.1, endringFraIGar: 3.1, plasseringEndring: 0 },
  { navn: "Møre og Romsdal", total: 141.4, iDag: 32.0, endringFraIGar: 3.8, plasseringEndring: 0 },
  { navn: "Innlandet", total: 134.0, iDag: 26.5, endringFraIGar: 5.0, plasseringEndring: 0 },
  { navn: "Vestland", total: 126.0, iDag: 26.8, endringFraIGar: 5.0, plasseringEndring: 1 },
  { navn: "Oslo", total: 122.7, iDag: 18.6, endringFraIGar: 0.8, plasseringEndring: -1 },
  { navn: "Rogaland", total: 121.3, iDag: 23.7, endringFraIGar: 2.8, plasseringEndring: 0 },
  { navn: "Agder", total: 119.1, iDag: 22.3, endringFraIGar: 5.0, plasseringEndring: 0 },
  { navn: "Buskerud", total: 109.6, iDag: 18.3, endringFraIGar: 1.4, plasseringEndring: 1 },
  { navn: "Telemark", total: 109.5, iDag: 18.0, endringFraIGar: 2.1, plasseringEndring: -1 },
  { navn: "Østfold", total: 104.0, iDag: 17.3, endringFraIGar: 1.6, plasseringEndring: 0 },
  { navn: "Vestfold", total: 0.0, iDag: 0.0, endringFraIGar: 0.0, plasseringEndring: 0 },
  { navn: "Akershus", total: 0.0, iDag: 0.0, endringFraIGar: 0.0, plasseringEndring: 0 },
];

// ---- TOPP 5 STASJONER LØRDAG 25.04.2026 ----

export const STASJONER_PERIODE = [
  { navn: "SOGNDAL LH - STOREHAUGFJELLET", kommune: "SOGNDAL", fylke: "Vestland", ei: 71.0, vindkast: 27.1, nedbor: 0, temp: 0, farevarsel: "oransje" },
  { navn: "JUVVASSHØE", kommune: "LOM", fylke: "Innlandet", ei: 69.0, vindkast: 27.9, nedbor: 0, temp: -4.5, farevarsel: "oransje" },
  { navn: "RØST LUFTHAVN", kommune: "RØST", fylke: "Nordland", ei: 67.0, vindkast: 18.9, nedbor: 5.4, temp: 1.7, farevarsel: "oransje" },
  { navn: "HEMSEDAL SKISENTER", kommune: "HEMSEDAL", fylke: "Buskerud", ei: 66.1, vindkast: 27.1, nedbor: 0, temp: -1.4, farevarsel: "oransje" },
  { navn: "MIDTSTOVA", kommune: "ULVIK", fylke: "Vestland", ei: 65.6, vindkast: 16.8, nedbor: 0.3, temp: -0.7, farevarsel: "oransje" },
];

// ---- UKENS TOPP 5 STASJONER (sammenlagt) ----

export const STASJONER_UKE = [
  {
    navn: "REINHAUGEN",
    kommune: "NESSEBY",
    fylke: "Finnmark",
    totalEi: 351.5,
    gustMax: 27.3,
    precipTotal: 0,
    tempMin: -6.8,
    dager: [40.4, 63.8, 70.8, 69.7, 66.1, 40.7, 0],
    beskrivelse: "Jevnt darlig vaer sa langt denne uka med snitt 59 EI per dag. Toppdag Ons med 70.8 EI. Kraftige vindkast opp til 27.3 m/s. Bitende kulde ned til -6.8 grader C."
  },
  {
    navn: "HASVIK - SLUSKFJELLET",
    kommune: "HASVIK",
    fylke: "Finnmark",
    totalEi: 348.3,
    gustMax: 40.9,
    precipTotal: 0,
    tempMin: -4.7,
    dager: [54.3, 85.8, 56.7, 69.2, 48.7, 33.6, 0],
    beskrivelse: "Jevnt darlig vaer sa langt denne uka med snitt 58 EI per dag. Toppdag Tir med 85.8 EI. Kraftige vindkast opp til 40.9 m/s."
  },
  {
    navn: "ARNØYA - TROLLTINDEN",
    kommune: "SKJERVØY",
    fylke: "Troms",
    totalEi: 348.2,
    gustMax: 28.3,
    precipTotal: 0,
    tempMin: -7.4,
    dager: [53.6, 65.4, 56.0, 60.9, 60.0, 52.3, 0],
    beskrivelse: "Jevnt darlig vaer sa langt denne uka med snitt 58 EI per dag. Toppdag Tir med 65.4 EI. Kraftige vindkast opp til 28.3 m/s. Bitende kulde ned til -7.4 grader C."
  },
  {
    navn: "FINNESVATNET",
    kommune: "VARDØ",
    fylke: "Finnmark",
    totalEi: 346.0,
    gustMax: 26.3,
    precipTotal: 1.8,
    tempMin: -2.6,
    dager: [39.6, 54.0, 78.0, 68.6, 61.0, 44.8, 0],
    beskrivelse: "Jevnt darlig vaer sa langt denne uka med snitt 58 EI per dag. Toppdag Ons med 78.0 EI. Kraftige vindkast opp til 26.3 m/s."
  },
  {
    navn: "KISTEFJELL",
    kommune: "SENJA",
    fylke: "Troms",
    totalEi: 339.6,
    gustMax: 29.6,
    precipTotal: 0,
    tempMin: -7.7,
    dager: [48.2, 74.4, 56.5, 61.0, 52.0, 47.5, 0],
    beskrivelse: "Jevnt darlig vaer sa langt denne uka med snitt 57 EI per dag. Toppdag Tir med 74.4 EI. Kraftige vindkast opp til 29.6 m/s. Bitende kulde ned til -7.7 grader C."
  },
];

// ---- TRONSKIFTE ----

export const TRONSKIFTE = {
  aktiv: false,
  tittel: "FINNMARK LEDER!",
  beskrivelse: "Finnmark leder sammenlagt med 234.3 poeng - 46.5 poeng foran Troms (187.8).",
  gammelLeder: "Finnmark",
  nyLeder: "Finnmark",
};

// ---- DAGENS LEDER ----

export const DAGENS_LEDER = {
  fylke: "Nordland",
  ei: 35.9,
  temp: 1.7,
  nedbor: 5.4,
};

// ---- AKTUELL UKE / SIST FULLFORTE UKE ----

export const AKTUELL_UKE = {
  ukeId: "2026-W17",
  uke: "Uke 17",
  fraDato: "2026-04-20",
  tilDato: "2026-04-25",
  periode: "20.04 - 25.04.2026 (6 dager)",
  dagerRegistrert: 6,
  versteFylke: "Finnmark",
  versteFylkeScore: 234.3,
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

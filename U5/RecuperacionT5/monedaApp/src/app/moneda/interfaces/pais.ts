export interface Pais {
    name:           string;
    topLevelDomain: string[];
    alpha2Code:     string;
    alpha3Code:     string;
    callingCodes:   string[];
    capital:        string;
    altSpellings:   string[];
    subregion:      string;
    region:         Region;
    population:     number;
    latlng:         number[];
    demonym:        string;
    area?:          number;
    timezones:      string[];
    nativeName:     string;
    numericCode:    string;
    flags:          Flags;
    currencies:     Currency[];
    languages:      Language[];
    translations:   Translations;
    flag:           string;
    regionalBlocs?: RegionalBloc[];
    independent:    boolean;
    borders?:       string[];
    cioc?:          string;
    gini?:          number;
}

export interface Currency {
    code:   Code;
    name:   CurrencyName;
    symbol: Symbol;
}

export enum Code {
    Eur = "EUR",
}

export enum CurrencyName {
    Euro = "Euro",
}

export enum Symbol {
    Empty = "€",
}

export interface Flags {
    svg: string;
    png: string;
}

export interface Language {
    iso639_1:   string;
    iso639_2:   string;
    name:       string;
    nativeName: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Europe = "Europe",
}

export interface RegionalBloc {
    acronym:        Acronym;
    name:           RegionalBlocName;
    otherAcronyms?: string[];
    otherNames?:    string[];
}

export enum Acronym {
    Au = "AU",
    Cefta = "CEFTA",
    Eu = "EU",
    Usan = "USAN",
}

export enum RegionalBlocName {
    AfricanUnion = "African Union",
    CentralEuropeanFreeTradeAgreement = "Central European Free Trade Agreement",
    EuropeanUnion = "European Union",
    UnionOfSouthAmericanNations = "Union of South American Nations",
}

export interface Translations {
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    hu: string;
}


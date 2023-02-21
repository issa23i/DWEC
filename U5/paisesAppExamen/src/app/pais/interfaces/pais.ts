export interface Pais {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    cioc?:        string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  Currencies;
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages?:   { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    area:         number;
    demonyms?:    Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
    borders?:     string[];
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side:   Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    ISK?: Aed;
    JPY?: Aed;
    XPF?: Aed;
    SOS?: Aed;
    JOD?: Aed;
    USD?: Aed;
    DZD?: Aed;
    NZD?: Aed;
    CLP?: Aed;
    EUR?: Aed;
    LSL?: Aed;
    ZAR?: Aed;
    LBP?: Aed;
    NOK?: Aed;
    PEN?: Aed;
    SYP?: Aed;
    AUD?: Aed;
    FJD?: Aed;
    HNL?: Aed;
    XOF?: Aed;
    XCD?: Aed;
    SGD?: Aed;
    KZT?: Aed;
    SCR?: Aed;
    AMD?: Aed;
    CNY?: Aed;
    MYR?: Aed;
    TRY?: Aed;
    ETB?: Aed;
    PYG?: Aed;
    CZK?: Aed;
    IRR?: Aed;
    GHS?: Aed;
    SEK?: Aed;
    GYD?: Aed;
    BND?: Aed;
    SDG?: BAM;
    VES?: Aed;
    SZL?: Aed;
    EGP?: Aed;
    ILS?: Aed;
    STN?: Aed;
    KES?: Aed;
    PGK?: Aed;
    XAF?: Aed;
    TWD?: Aed;
    CVE?: Aed;
    TMT?: Aed;
    MDL?: Aed;
    RON?: Aed;
    GBP?: Aed;
    IMP?: Aed;
    LAK?: Aed;
    NAD?: Aed;
    KWD?: Aed;
    MXN?: Aed;
    WST?: Aed;
    SLL?: Aed;
    KGS?: Aed;
    SHP?: Aed;
    QAR?: Aed;
    TOP?: Aed;
    COP?: Aed;
    MWK?: Aed;
    KYD?: Aed;
    KHR?: Aed;
    RSD?: Aed;
    LKR?: Aed;
    JMD?: Aed;
    CHF?: Aed;
    GNF?: Aed;
    TVD?: Aed;
    IDR?: Aed;
    BAM?: BAM;
    DJF?: Aed;
    MUR?: Aed;
    BWP?: Aed;
    IQD?: Aed;
    VND?: Aed;
    CDF?: Aed;
    NGN?: Aed;
    ZWL?: Aed;
    MKD?: Aed;
    LRD?: Aed;
    CKD?: Aed;
    ARS?: Aed;
    BBD?: Aed;
    ERN?: Aed;
    MMK?: Aed;
    YER?: Aed;
    AWG?: Aed;
    BDT?: Aed;
    SRD?: Aed;
    BRL?: Aed;
    TND?: Aed;
    ANG?: Aed;
    VUV?: Aed;
    CUC?: Aed;
    CUP?: Aed;
    BIF?: Aed;
    BOB?: Aed;
    DKK?: Aed;
    FOK?: Aed;
    PLN?: Aed;
    CAD?: Aed;
    GTQ?: Aed;
    KPW?: Aed;
    UGX?: Aed;
    AFN?: Aed;
    AZN?: Aed;
    MRU?: Aed;
    MNT?: Aed;
    SBD?: Aed;
    UZS?: Aed;
    PHP?: Aed;
    BHD?: Aed;
    ALL?: Aed;
    GEL?: Aed;
    BTN?: Aed;
    INR?: Aed;
    SAR?: Aed;
    BSD?: Aed;
    AED?: Aed;
    HTG?: Aed;
    MAD?: Aed;
    LYD?: Aed;
    CRC?: Aed;
    THB?: Aed;
    TZS?: Aed;
    HKD?: Aed;
    BMD?: Aed;
    UAH?: Aed;
    MOP?: Aed;
    MZN?: Aed;
    DOP?: Aed;
    PAB?: Aed;
    BGN?: Aed;
    SSP?: Aed;
    GMD?: Aed;
    OMR?: Aed;
    RUB?: Aed;
    AOA?: Aed;
    NPR?: Aed;
    JEP?: Aed;
    KMF?: Aed;
    HUF?: Aed;
    FKP?: Aed;
    TTD?: Aed;
    GGP?: Aed;
    GIP?: Aed;
    BZD?: Aed;
    KID?: Aed;
    MGA?: Aed;
    KRW?: Aed;
    UYU?: Aed;
    NIO?: Aed;
    ZMW?: Aed;
    PKR?: Aed;
    RWF?: Aed;
    BYN?: Aed;
    MVR?: Aed;
    TJS?: Aed;
}

export interface Aed {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}

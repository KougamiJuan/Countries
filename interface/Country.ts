export interface Country {
  flags: Flags
  name: Name
  tld: string[]
  ccn3: string
  currencies: Currencies
  capital: string[]
  region: string
  subregion: string
  languages: Languages
  borders: string[]
  population: number
}

interface Languages {
  swe?: string
  sqi?: string
  bis?: string
  eng?: string
  fra?: string
  mfe?: string
  por?: string
  kat?: string
  dzo?: string
  afr?: string
  deu?: string
  her?: string
  hgm?: string
  kwn?: string
  loz?: string
  ndo?: string
  tsn?: string
  nld?: string
  spa?: string
  nfr?: string
  swa?: string
  pov?: string
  kor?: string
  cnr?: string
  nno?: string
  nob?: string
  smi?: string
  lav?: string
  grn?: string
  nrf?: string
  lao?: string
  ara?: string
  nor?: string
  slk?: string
  bos?: string
  hrv?: string
  srp?: string
  mya?: string
  khm?: string
  hin?: string
  tam?: string
  dan?: string
  fao?: string
  ces?: string
  ukr?: string
  kal?: string
  ton?: string
  pih?: string
  kon?: string
  lin?: string
  rus?: string
  uzb?: string
  cha?: string
  est?: string
  tvl?: string
  fin?: string
  bjz?: string
  gil?: string
  cat?: string
  aze?: string
  tir?: string
  msa?: string
  cal?: string
  mri?: string
  nzs?: string
  ber?: string
  som?: string
  zho?: string
  tet?: string
  ell?: string
  ind?: string
  mkd?: string
  ssw?: string
  sag?: string
  aym?: string
  que?: string
  tha?: string
  run?: string
  pau?: string
  nya?: string
  ben?: string
  jam?: string
  ltz?: string
  pap?: string
  smo?: string
  arc?: string
  ckb?: string
  tkl?: string
  bwg?: string
  kck?: string
  khi?: string
  ndc?: string
  nde?: string
  sna?: string
  sot?: string
  toi?: string
  tso?: string
  ven?: string
  xho?: string
  zib?: string
  kir?: string
  amh?: string
  glv?: string
  urd?: string
  hat?: string
  nau?: string
  lua?: string
  gle?: string
  nbl?: string
  nso?: string
  zul?: string
  ita?: string
  tgk?: string
  mah?: string
  jpn?: string
  hmo?: string
  tpi?: string
  mlt?: string
  div?: string
  bar?: string
  mey?: string
  lit?: string
  kin?: string
  mlg?: string
  ron?: string
  nep?: string
  prs?: string
  pus?: string
  tuk?: string
  lat?: string
  tur?: string
  zdj?: string
  bul?: string
  hun?: string
  crs?: string
  heb?: string
  mon?: string
  fil?: string
  pol?: string
  hye?: string
  slv?: string
  rar?: string
  kaz?: string
  bel?: string
  sin?: string
  isl?: string
  niu?: string
  vie?: string
  fij?: string
  hif?: string
  fas?: string
  gsw?: string
  roh?: string
}

interface Currencies {
  SEK?: CurrencyType
  ALL?: CurrencyType
  VUV?: CurrencyType
  MUR?: CurrencyType
  GBP?: CurrencyType
  EUR?: CurrencyType
  XOF?: CurrencyType
  GEL?: CurrencyType
  BTN?: CurrencyType
  INR?: CurrencyType
  NAD?: CurrencyType
  ZAR?: CurrencyType
  UYU?: CurrencyType
  GGP?: CurrencyType
  USD?: CurrencyType
  UGX?: CurrencyType
  CHF?: CurrencyType
  KRW?: CurrencyType
  CUC?: CurrencyType
  CUP?: CurrencyType
  NOK?: CurrencyType
  XCD?: CurrencyType
  PYG?: CurrencyType
  JEP?: CurrencyType
  LAK?: CurrencyType
  QAR?: CurrencyType
  DOP?: CurrencyType
  BAM?: CurrencyType
  PAB?: CurrencyType
  MMK?: CurrencyType
  BBD?: CurrencyType
  KHR?: CurrencyType
  KES?: CurrencyType
  STN?: CurrencyType
  DKK?: CurrencyType
  FOK?: CurrencyType
  CZK?: CurrencyType
  SHP?: CurrencyType
  UAH?: CurrencyType
  DJF?: CurrencyType
  TOP?: CurrencyType
  AUD?: CurrencyType
  XAF?: CurrencyType
  LBP?: CurrencyType
  UZS?: CurrencyType
  TVD?: CurrencyType
  BMD?: CurrencyType
  SSP?: CurrencyType
  CRC?: CurrencyType
  GMD?: CurrencyType
  XPF?: CurrencyType
  BZD?: CurrencyType
  KID?: CurrencyType
  MZN?: CurrencyType
  AZN?: CurrencyType
  SDG?: CurrencyType
  ERN?: CurrencyType
  MYR?: CurrencyType
  KWD?: CurrencyType
  NZD?: CurrencyType
  MAD?: CurrencyType
  SOS?: CurrencyType
  SGD?: CurrencyType
  BWP?: CurrencyType
  IDR?: CurrencyType
  MKD?: CurrencyType
  TZS?: CurrencyType
  SZL?: CurrencyType
  BOB?: CurrencyType
  SBD?: CurrencyType
  THB?: CurrencyType
  HRK?: CurrencyType
  BIF?: CurrencyType
  AED?: CurrencyType
  FKP?: CurrencyType
  MWK?: CurrencyType
  BDT?: CurrencyType
  CAD?: CurrencyType
  JMD?: CurrencyType
  TND?: CurrencyType
  CVE?: CurrencyType
  AWG?: CurrencyType
  NGN?: CurrencyType
  IQD?: CurrencyType
  ZWL?: CurrencyType
  GNF?: CurrencyType
  GHS?: CurrencyType
  KGS?: CurrencyType
  MOP?: CurrencyType
  BHD?: CurrencyType
  ETB?: CurrencyType
  GIP?: CurrencyType
  IMP?: CurrencyType
  PKR?: CurrencyType
  HNL?: CurrencyType
  HTG?: CurrencyType
  TTD?: CurrencyType
  CDF?: CurrencyType
  VES?: CurrencyType
  MRU?: CurrencyType
  EGP?: CurrencyType
  TJS?: CurrencyType
  JPY?: CurrencyType
  ILS?: CurrencyType
  JOD?: CurrencyType
  MXN?: CurrencyType
  PGK?: CurrencyType
  RSD?: CurrencyType
  ARS?: CurrencyType
  OMR?: CurrencyType
  MVR?: CurrencyType
  DZD?: CurrencyType
  KPW?: CurrencyType
  COP?: CurrencyType
  RWF?: CurrencyType
  MGA?: CurrencyType
  MDL?: CurrencyType
  NPR?: CurrencyType
  AFN?: CurrencyType
  SAR?: CurrencyType
  ZMW?: CurrencyType
  TRY?: CurrencyType
  YER?: CurrencyType
  KMF?: CurrencyType
  ANG?: CurrencyType
  BGN?: CurrencyType
  BRL?: CurrencyType
  LSL?: CurrencyType
  HUF?: CurrencyType
  GTQ?: CurrencyType
  CLP?: CurrencyType
  SLL?: CurrencyType
  BND?: CurrencyType
  SCR?: CurrencyType
  PEN?: CurrencyType
  RON?: CurrencyType
  CNY?: CurrencyType
  MNT?: CurrencyType
  LYD?: CurrencyType
  HKD?: CurrencyType
  GYD?: CurrencyType
  PHP?: CurrencyType
  PLN?: CurrencyType
  AMD?: CurrencyType
  AOA?: CurrencyType
  CKD?: CurrencyType
  RUB?: CurrencyType
  KYD?: CurrencyType
  TMT?: CurrencyType
  SYP?: CurrencyType
  KZT?: CurrencyType
  BYN?: CurrencyType
  LKR?: CurrencyType
  LRD?: CurrencyType
  ISK?: CurrencyType
  BSD?: CurrencyType
  WST?: CurrencyType
  VND?: CurrencyType
  FJD?: CurrencyType
  NIO?: CurrencyType
  TWD?: CurrencyType
  IRR?: CurrencyType
  SRD?: CurrencyType
}

interface CurrencyType {
  name: string
  symbol: string
}

interface Name {
  common: string
  official: string
  nativeName: NativeName
}

interface NativeName {
  swe?: NativeNameType
  sqi?: NativeNameType
  bis?: NativeNameType
  eng?: NativeNameType
  fra?: NativeNameType
  mfe?: NativeNameType
  por?: NativeNameType
  kat?: NativeNameType
  dzo?: NativeNameType
  afr?: NativeNameType
  deu?: NativeNameType
  her?: NativeNameType
  hgm?: NativeNameType
  kwn?: NativeNameType
  loz?: NativeNameType
  ndo?: NativeNameType
  tsn?: NativeNameType
  nld?: NativeNameType
  spa?: NativeNameType
  nfr?: NativeNameType
  swa?: NativeNameType
  pov?: NativeNameType
  kor?: NativeNameType
  cnr?: NativeNameType
  nno?: NativeNameType
  nob?: NativeNameType
  smi?: NativeNameType
  lav?: NativeNameType
  grn?: NativeNameType
  nrf?: NativeNameType
  lao?: NativeNameType
  ara?: NativeNameType
  nor?: NativeNameType
  slk?: NativeNameType
  bos?: NativeNameType
  hrv?: NativeNameType
  srp?: NativeNameType
  mya?: NativeNameType
  khm?: NativeNameType
  hin?: NativeNameType
  tam?: NativeNameType
  dan?: NativeNameType
  fao?: NativeNameType
  ces?: NativeNameType
  ukr?: NativeNameType
  kal?: NativeNameType
  ton?: NativeNameType
  pih?: NativeNameType
  kon?: NativeNameType
  lin?: NativeNameType
  rus?: NativeNameType
  uzb?: NativeNameType
  cha?: NativeNameType
  est?: NativeNameType
  tvl?: NativeNameType
  fin?: NativeNameType
  bjz?: NativeNameType
  gil?: NativeNameType
  cat?: NativeNameType
  aze?: NativeNameType
  tir?: NativeNameType
  msa?: NativeNameType
  cal?: NativeNameType
  mri?: NativeNameType
  nzs?: NativeNameType
  ber?: NativeNameType
  som?: NativeNameType
  zho?: NativeNameType
  tet?: NativeNameType
  ell?: NativeNameType
  ind?: NativeNameType
  mkd?: NativeNameType
  ssw?: NativeNameType
  sag?: NativeNameType
  aym?: NativeNameType
  que?: NativeNameType
  tha?: NativeNameType
  run?: NativeNameType
  pau?: NativeNameType
  nya?: NativeNameType
  ben?: NativeNameType
  jam?: NativeNameType
  ltz?: NativeNameType
  pap?: NativeNameType
  smo?: NativeNameType
  arc?: NativeNameType
  ckb?: NativeNameType
  tkl?: NativeNameType
  bwg?: NativeNameType
  kck?: NativeNameType
  khi?: NativeNameType
  ndc?: NativeNameType
  nde?: NativeNameType
  sna?: NativeNameType
  sot?: NativeNameType
  toi?: NativeNameType
  tso?: NativeNameType
  ven?: NativeNameType
  xho?: NativeNameType
  zib?: NativeNameType
  kir?: NativeNameType
  amh?: NativeNameType
  glv?: NativeNameType
  urd?: NativeNameType
  hat?: NativeNameType
  nau?: NativeNameType
  lua?: NativeNameType
  gle?: NativeNameType
  nbl?: NativeNameType
  nso?: NativeNameType
  zul?: NativeNameType
  ita?: NativeNameType
  tgk?: NativeNameType
  mah?: NativeNameType
  jpn?: NativeNameType
  hmo?: NativeNameType
  tpi?: NativeNameType
  mlt?: NativeNameType
  div?: NativeNameType
  bar?: NativeNameType
  mey?: NativeNameType
  lit?: NativeNameType
  kin?: NativeNameType
  mlg?: NativeNameType
  ron?: NativeNameType
  nep?: NativeNameType
  prs?: NativeNameType
  pus?: NativeNameType
  tuk?: NativeNameType
  lat?: NativeNameType
  tur?: NativeNameType
  zdj?: NativeNameType
  bul?: NativeNameType
  hun?: NativeNameType
  crs?: NativeNameType
  heb?: NativeNameType
  mon?: NativeNameType
  fil?: NativeNameType
  pol?: NativeNameType
  hye?: NativeNameType
  slv?: NativeNameType
  rar?: NativeNameType
  kaz?: NativeNameType
  bel?: NativeNameType
  sin?: NativeNameType
  isl?: NativeNameType
  niu?: NativeNameType
  vie?: NativeNameType
  fij?: NativeNameType
  hif?: NativeNameType
  fas?: NativeNameType
  gsw?: NativeNameType
  roh?: NativeNameType
}

interface NativeNameType {
  official: string
  common: string
}

interface Flags {
  png: string
  svg: string
}

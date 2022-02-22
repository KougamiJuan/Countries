const ENDPOINT = 'https://restcountries.com/v3.1/'

const OPERATION_ALL = 'all?'

const OPERATION_ALPHA = 'alpha/170?'

const DEFAULT_FIELDS = 'fields=flags,name,population,region,capital,'

const COUNTRY_CODE = 'ccn3'

const COUNTRY_PAGE = 'subregion,tld,currencies,languages,borders'

export const URL_GET_COUNTRIES =
  ENDPOINT + OPERATION_ALL + DEFAULT_FIELDS + COUNTRY_CODE

export const URL_GET_COUNTRY =
  ENDPOINT + OPERATION_ALPHA + DEFAULT_FIELDS + COUNTRY_PAGE

export const COUNTERS = {
  start: 0,
  end: 12,
  every: 13,
}

export const OPTIONS = [
  { value: '', label: 'Filter by Region' },
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'Americas' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
]

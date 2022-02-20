const ENDPOINT = 'https://restcountries.com/v3.1/'

const OPERATION = 'all?'

const FIELDS =
  // eslint-disable-next-line max-len
  'fields=flags,name,population,region,subregion,capital,tld,currencies,languages,borders,ccn3'

export const URL_GET_COUNTRIES = ENDPOINT + OPERATION + FIELDS

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

import { Dispatch, MutableRefObject, SetStateAction } from 'react'
import { Country } from '../interface/Country'
import { URL_GET_COUNTRIES, COUNTERS } from './constants'

export async function getCountries() {
  return await fetch(URL_GET_COUNTRIES).then((res) => res.json())
}

export function getCountriesByLittle(
  start: MutableRefObject<number>,
  end: MutableRefObject<number>,
  setCountryList: Dispatch<SetStateAction<Country[]>>,
  countries: Array<Country>
) {
  start.current = start.current + COUNTERS.every
  end.current = end.current + COUNTERS.every
  setCountryList((prevCountries) => [
    ...prevCountries,
    ...countries.slice(start.current, end.current),
  ])
}

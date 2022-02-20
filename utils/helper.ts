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

export function searchCountry(
  finderValue: MutableRefObject<string>,
  filterValue: MutableRefObject<string>,
  countryList: Array<Country>,
  setFilterCountry: Dispatch<SetStateAction<Country[]>>
) {
  let newCountries = countryList.filter(
    (country) =>
      country.name.common
        .toLowerCase()
        .indexOf(finderValue.current.toLowerCase()) > -1
  )
  if (filterValue.current) {
    newCountries = newCountries.filter(
      (country) => country.region === filterValue.current
    )
  }
  setFilterCountry(newCountries)
}

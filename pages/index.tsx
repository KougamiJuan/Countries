// Libraries
import { useRef, useState } from 'react'
import { InferGetStaticPropsType } from 'next'
// Interface
import { Country } from '../interface/Country'
// Utils
import { getCountries, searchCountry } from '../utils/helper'
// Components
import Finder from '../components/Finder'
import Filter from '../components/Filter'
import ListItems from '../components/ListItems'

export default function Home({
  countryList,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const finderValue = useRef('')
  const filterValue = useRef('')
  const [filterCountry, setFilterCountry] = useState(countryList)

  function handleFinder(value: string) {
    finderValue.current = value
    searchCountry(finderValue, filterValue, countryList, setFilterCountry)
  }

  function handleFilter(value: string) {
    filterValue.current = value
    searchCountry(finderValue, filterValue, countryList, setFilterCountry)
  }

  return (
    <>
      <div
        className="flex flex-col space-y-12 px-4 pt-6 md:flex-row
        md:justify-between md:space-y-0 md:px-20 md:pt-11 md:pb-7"
      >
        <Finder parentCallback={handleFinder} />
        <Filter parentCallback={handleFilter} />
      </div>
      <ListItems countries={countryList} filteredCountries={filterCountry} />
    </>
  )
}

export async function getStaticProps() {
  const countryList: Array<Country> = await getCountries()
  return { props: { countryList } }
}

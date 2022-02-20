// Libraries
import { useState, useRef } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
// Interface
import { Country } from '../../interface/Country'
// Utils
import { COUNTERS } from '../../utils/constants'
import { getCountriesByLittle } from '../../utils/helper'
// Components
import Item from '../Item'

export default function ListItems({
  countries,
  filteredCountries,
}: {
  countries: Array<Country>
  filteredCountries: Array<Country>
}) {
  const start = useRef(COUNTERS.start)
  const end = useRef(COUNTERS.end)
  const defaultCountries = countries.slice(COUNTERS.start, COUNTERS.end)
  const [countryList, setCountryList] = useState(defaultCountries)

  function fetchMoreData() {
    getCountriesByLittle(start, end, setCountryList, countries)
  }

  const infiniteScroll = (
    <InfiniteScroll
      className="flex flex-wrap justify-center px-14 pt-9 pb-5
        sm:justify-between md:pt-5 lg:px-40 xl:px-20"
      dataLength={countryList.length}
      next={fetchMoreData}
      hasMore={true}
      loader={null}
    >
      {countryList.map((country) => (
        <Item key={country.ccn3} country={country} />
      ))}
    </InfiniteScroll>
  )

  const filtered = (
    <div
      className="flex flex-wrap justify-center px-14 pt-9 pb-5
        sm:justify-between md:pt-5 lg:px-40 xl:px-20"
    >
      {filteredCountries.map((country) => (
        <Item key={country.ccn3} country={country} />
      ))}
    </div>
  )

  return filteredCountries.length < 60 ? filtered : infiniteScroll
}

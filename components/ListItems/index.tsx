import { useState, useRef } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Item from '../Item'
import { Country } from '../../interface/Country'
import { COUNTERS } from '../../utils/constants'
import { getCountriesByLittle } from '../../utils/helper'

export default function ListItems({
  countries,
}: {
  countries: Array<Country>
}) {
  const start = useRef(COUNTERS.start)
  const end = useRef(COUNTERS.end)
  const defaultCountries = countries.slice(COUNTERS.start, COUNTERS.end)
  const [countryList, setCountryList] = useState(defaultCountries)

  const fetchMoreData = () => {
    getCountriesByLittle(start, end, setCountryList, countries)
  }

  return (
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
}

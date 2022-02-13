// Next
import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'
// Interface
import { Country } from '../interface/Country'
// Helper
import { getCountries } from '../utils/helper'
// Components
import Header from '../components/Header'
import Finder from '../components/Finder'
import Filter from '../components/Filter'
import ListItems from '../components/ListItems'

export default function Home({
  countries,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="bg-alabaster transition-colors duration-700 dark:bg-ebony-clay">
      <Head>
        <title>Countries</title>
        <meta name="description" content="Find country information"></meta>
        <meta name="keywords" content="country, countries"></meta>
      </Head>
      <Header />
      <div
        className="flex flex-col space-y-12 px-4 pt-6 md:flex-row md:justify-between
        md:space-y-0 md:px-20 md:pt-11 md:pb-7"
      >
        <Finder />
        <Filter />
      </div>
      <ListItems countries={countries} />
    </div>
  )
}

export async function getStaticProps() {
  const countries: Array<Country> = await getCountries()
  return { props: { countries } }
}

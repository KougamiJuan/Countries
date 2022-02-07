import Head from 'next/head'
import Header from '../components/Header'
import Finder from '../components/Finder'
import Filter from '../components/Filter'
import Item from '../components/Item'

const Home = () => {
  return (
    <div className="bg-alabaster transition-colors duration-700 dark:bg-ebony-clay">
      <Head>
        <title>Countries</title>
        <meta name="description" content="Find country information"></meta>
        <meta name="keywords" content="country, countries"></meta>
      </Head>
      <Header />
      <main
        className="flex flex-col space-y-12 px-4 pt-6 md:flex-row md:justify-between
        md:space-y-0 md:px-20 md:pt-11 md:pb-7"
      >
        <Finder />
        <Filter />
      </main>
      <div
        className="flex flex-wrap justify-center px-14 pt-9 pb-5
        sm:justify-between md:pt-5 lg:px-40 xl:px-20"
      >
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
}

export default Home

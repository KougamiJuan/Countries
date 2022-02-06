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
      <main className="flex justify-between px-20 pt-11 pb-7">
        <Finder />
        <Filter />
      </main>
      <div className="flex flex-wrap justify-between px-20 pt-5 pb-5">
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

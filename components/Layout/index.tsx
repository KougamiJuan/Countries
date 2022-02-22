// Libraries
import Head from 'next/head'
// Components
import Header from '../Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <title>Countries</title>
        <meta name="description" content="Find country information"></meta>
        <meta name="keywords" content="country, countries"></meta>
      </Head>
      <Header />
      <main
        className="bg-alabaster transition-colors
        duration-700 dark:bg-ebony-clay"
      >
        {children}
      </main>
    </div>
  )
}

// Assets
import Link from 'next/link'
import Image from 'next/image'
// Interface
import { Country } from '../../interface/Country'
// Components
import Field from '../Field'

export default function Item({ country }: { country: Country }) {
  return (
    <Link passHref key={country.ccn3} href={`/country/${country.ccn3}`}>
      <div
        className="mb-9 box-border h-[20.6rem] w-[16.7rem] cursor-pointer
        rounded-md bg-white shadow-md transition-colors duration-700
        dark:bg-oxford-blue md:mb-20 md:w-64"
      >
        <Image
          src={country.flags.png}
          alt="Flag image"
          width={100}
          height={65}
          layout="responsive"
          className="rounded-t-md"
        />
        <div className="px-5 py-5 font-sans text-woodsmoke dark:text-white">
          <p className="mb-3 text-lg font-extrabold">{country.name.common}</p>
          <Field
            title={'population'}
            value={country.population.toLocaleString('en-US')}
          />
          <Field title={'region'} value={country.region} />
          <Field title={'capital'} value={country.capital} />
        </div>
      </div>
    </Link>
  )
}

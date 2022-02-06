import Image from 'next/image'
import imgSearch from '../../assets/svg/search.svg'

const Finder = () => {
  return (
    <div className="relative w-1/3 transition-colors duration-700">
      <div className="pointer-events-none absolute left-8 top-5">
        <Image src={imgSearch} alt="search icon" height={16} width={16} />
      </div>
      <input
        type="search"
        placeholder="Search for a country..."
        className="w-full rounded-md bg-white py-4 pr-8 pl-20 font-sans font-light text-gray
        shadow-md hover:outline-none focus:outline-none dark:bg-oxford-blue dark:text-white"
      />
    </div>
  )
}

export default Finder

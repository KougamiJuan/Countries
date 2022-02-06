import IconSearch from '../../assets/svg/search.svg'

const Finder = () => {
  return (
    <div className="relative w-1/3 transition-colors duration-700">
      <div className="pointer-events-none absolute left-8 top-5">
        <IconSearch
          viewBox="0 0 50 50"
          className="h-7 w-7 fill-gray dark:fill-white"
        />
      </div>
      <input
        type="search"
        placeholder="Search for a country..."
        className="w-full rounded-md bg-white py-5 pr-8 pl-20 font-sans text-sm font-light
        text-gray shadow-md hover:outline-none focus:outline-none dark:bg-oxford-blue dark:text-white"
      />
    </div>
  )
}

export default Finder

import IconSearch from '../../assets/svg/search.svg'

const Finder = () => {
  return (
    <div className="relative transition-colors duration-700 md:w-1/2 lg:w-[38%]">
      <div className="pointer-events-none absolute left-8 top-4 md:top-5">
        <IconSearch
          viewBox="0 0 50 50"
          className="h-6 w-6 fill-gray dark:fill-white md:h-7 md:w-7"
        />
      </div>
      <input
        type="search"
        placeholder="Search for a country..."
        className="w-full rounded-md bg-white py-[0.85rem] pr-8 pl-20 font-sans text-xs font-light text-gray shadow-md
        hover:outline-none focus:outline-none dark:bg-oxford-blue dark:text-white md:py-5 md:text-sm"
      />
    </div>
  )
}

export default Finder

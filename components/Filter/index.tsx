const Filter = () => {
  return (
    <div className="relative w-48 transition-colors duration-700">
      <select
        id="regions"
        name="regions"
        aria-label="Regions"
        className="w-full rounded-md bg-white py-4 px-2 font-sans 
        font-light text-woodsmoke shadow-md dark:bg-oxford-blue dark:text-white"
      >
        <option value="Africa">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}

export default Filter

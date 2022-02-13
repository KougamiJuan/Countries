export default function Filter() {
  return (
    <div className="relative w-48 transition-colors duration-700">
      <select
        id="regions"
        name="regions"
        aria-label="Regions"
        className="w-full rounded-md bg-white py-[0.85rem] px-2 font-sans text-xs font-light text-woodsmoke
        shadow-md dark:bg-oxford-blue dark:text-white md:py-5 md:text-sm"
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

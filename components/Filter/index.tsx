// Libraries
import { useState } from 'react'
import { Listbox } from '@headlessui/react'
// Assests
import ArrowDown from '../../assets/svg/arrow-down.svg'
// Utils
import { OPTIONS } from '../../utils/constants'

export default function Filter({
  parentCallback,
}: {
  parentCallback: (value: string) => void
}) {
  const [selectedRegion, setSelectedRegion] = useState(OPTIONS[0])

  function handleChange(region: { value: string; label: string }) {
    parentCallback(region.value)
    setSelectedRegion(region)
  }

  return (
    <div className="relative w-48 transition-colors duration-700">
      <Listbox value={selectedRegion} onChange={handleChange}>
        <Listbox.Button
          className="w-full rounded-md bg-white py-[0.85rem] px-5
          text-left font-sans text-xs font-light text-woodsmoke
          shadow-md dark:bg-oxford-blue dark:text-white md:py-5 md:text-sm"
        >
          {selectedRegion.label}
          <div className="pointer-events-none absolute right-1 top-4 md:top-5">
            <ArrowDown
              viewBox="0 0 35 35"
              className="h-6 w-6 fill-woodsmoke dark:fill-white md:h-7 md:w-7"
            />
          </div>
        </Listbox.Button>
        <Listbox.Options
          className="absolute z-10 mt-1 w-full rounded-md bg-white px-5
          py-2 text-left font-sans text-xs font-light text-woodsmoke
          shadow-md dark:bg-oxford-blue dark:text-white md:text-sm"
        >
          {OPTIONS.map((region) => (
            <Listbox.Option
              className="cursor-pointer py-1"
              key={region.value}
              value={region}
            >
              {region.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}

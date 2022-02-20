// Libraries
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
// Assets
import IconColorMode from '../../assets/svg/moon-fill.svg'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const color = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div
      className="flex justify-between bg-white px-4 py-8 font-sans
      text-woodsmoke shadow-md transition-colors duration-150
      dark:bg-oxford-blue dark:text-white md:py-6 md:px-20"
    >
      <p className="text-sm font-extrabold md:text-2xl">Where in the world?</p>
      <div
        className="flex cursor-pointer flex-row space-x-1 place-self-center"
        onClick={() => setTheme(color)}
      >
        <IconColorMode
          viewBox="-1 0 40 40"
          className="h-4 w-4 place-self-center fill-white
          stroke-woodsmoke stroke-2 dark:fill-white
          dark:stroke-oxford-blue md:h-5 md:w-5"
        />
        <p className="text-xs font-semibold capitalize md:text-base">
          {color} mode
        </p>
      </div>
    </div>
  )
}

import IconColorMode from '../../assets/svg/moon-fill.svg'
import { useTheme } from 'next-themes'

const Header = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div
      className="flex justify-between bg-white px-20 py-6 font-sans text-woodsmoke shadow-md
      transition-colors duration-150 dark:bg-oxford-blue dark:text-white"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <p className="text-2xl font-extrabold">Where in the world?</p>
      <div className="flex cursor-pointer flex-row space-x-1 place-self-center">
        <IconColorMode
          viewBox="-1 0 40 40"
          className="h-5 w-5 place-self-center fill-white stroke-woodsmoke stroke-2
          dark:fill-white dark:stroke-oxford-blue"
        />
        <p className="text-base font-semibold">Dark Mode</p>
      </div>
    </div>
  )
}

export default Header

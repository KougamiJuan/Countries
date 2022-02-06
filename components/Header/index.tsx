import Image from 'next/image'
import imgLight from '../../assets/svg/moon-stroke.svg'
import { useTheme } from 'next-themes'

const Header = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex justify-between bg-white px-20 py-6 font-sans text-woodsmoke shadow-md transition-colors duration-150 dark:bg-oxford-blue dark:text-white">
      <p className="text-2xl font-extrabold">Where in the world?</p>
      <div className="flex flex-row space-x-2 place-self-center">
        <Image
          src={imgLight}
          alt="dark mode icon"
          height={16}
          width={16}
          className="test"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
        <p className="text-base font-semibold">Dark Mode</p>
      </div>
    </div>
  )
}

export default Header

import Image from 'next/image'
import imgFlag from '../../assets/svg/flag.svg'

const Item = () => {
  return (
    <div className="mb-10 box-border h-80 w-64 rounded-md bg-white shadow-md transition-colors duration-700 dark:bg-oxford-blue">
      <div className="h-40">
        <Image src={imgFlag} alt="Flag image" className="rounded-t-md" />
      </div>
      <div className="p-4 font-sans text-woodsmoke dark:text-white">
        <p className="mb-3 text-xl font-extrabold">Germany</p>
        <div className="flex whitespace-pre text-sm">
          <p className="font-semibold ">Population: </p>
          <p className="font-light">81,770,900</p>
        </div>
        <div className="flex whitespace-pre text-sm">
          <p className="font-semibold">Region: </p>
          <p className="font-light">Europe</p>
        </div>
        <div className="flex whitespace-pre text-sm">
          <p className="font-semibold">Capital: </p>
          <p className="font-light">Berlin</p>
        </div>
      </div>
    </div>
  )
}

export default Item

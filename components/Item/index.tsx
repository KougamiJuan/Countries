import Image from 'next/image'
/*import imgFlag from '../../assets/svg/flag.svg'*/

const Item = () => {
  return (
    <div
      className="mb-9 box-border h-[20.6rem] w-[16.7rem] cursor-pointer rounded-md bg-white shadow-md transition-colors
      duration-700 dark:bg-oxford-blue md:mb-20 md:w-64"
    >
      <Image
        src={'https://flagcdn.com/w320/de.png'}
        alt="Flag image"
        width={100}
        height={65}
        layout="responsive"
        className="rounded-t-md"
      />
      <div className="px-5 py-5 font-sans text-woodsmoke dark:text-white">
        <p className="mb-3 text-lg font-extrabold">Germany</p>
        <div className="my-1 flex whitespace-pre text-sm">
          <p className="font-semibold ">Population: </p>
          <p className="font-light">81,770,900</p>
        </div>
        <div className="my-1 flex whitespace-pre text-sm">
          <p className="font-semibold">Region: </p>
          <p className="font-light">Europe</p>
        </div>
        <div className="my-1 flex whitespace-pre text-sm">
          <p className="font-semibold">Capital: </p>
          <p className="font-light">Berlin</p>
        </div>
      </div>
    </div>
  )
}

export default Item

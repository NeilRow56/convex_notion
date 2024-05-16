import Image from 'next/image'

export const Heros = () => {
  return (
    <div className=" mt-12 flex max-w-5xl flex-col items-center space-x-1 md:flex-row lg:space-x-24">
      <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]">
        <Image
          src="/docs1.svg"
          alt="docs_picture"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative mt-5 hidden h-[400px] w-[400px] dark:hidden md:block">
        <Image src="/folder.svg" alt="documents Image" fill />
      </div>
    </div>
  )
}

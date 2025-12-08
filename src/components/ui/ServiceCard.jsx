import Image from "next/image"
import Link from "next/link"
export default function ServiceCard({src , alt , title, textTitle, description,href,mobileBg }) {
  return (
    <div className="relative max-sm:h-[652px]">
        <Image
          src={src}
          alt={alt}
          title={title}
          unoptimized
          className="service-background w-full max-sm:h-[432px]"
        />
        <div className="absolute top-1/2 right-28 -translate-y-1/2 flex flex-col gap-5 text-white max-w-[500px] max-sm:hidden">
          <p className="font-bold text-4xl drop-shadow-lg max-sm:text-xl">
            {textTitle}
          </p>

         <p className="text-[20px] leading-[26px] font-thin max-sm:text-lg">
            {description}
          </p>
          <div className="flex  w-[116px] mb-4">
            <Link
              href={href}
              className="p-2.5 bg-transparent rounded-md  text-primary border border-primary rounded hover:bg-primary hover:text-white transition"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="absolute top-1/2 right-28 -translate-y-1/2 flex flex-col gap-5 text-white max-w-[500px] max-sm:left-0 max-sm:w-full max-sm:max-w-full max-sm:px-3 max-sm:gap-2 max-sm:translate-y-20  sm:hidden" style={{ backgroundColor: mobileBg }}>
          <p className="font-bold text-4xl drop-shadow-lg max-sm:text-xl">
            {textTitle}
          </p>

         <p className="text-[20px] leading-[26px] font-thin max-sm:text-lg">
            {description}
          </p>
          <div className="flex  w-[116px] mb-4">
            <Link
              href={href}
              className="p-2.5 bg-transparent rounded-md  text-primary border border-primary rounded hover:bg-primary hover:text-white transition"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
  )
}

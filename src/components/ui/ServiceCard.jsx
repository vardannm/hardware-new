import Image from "next/image"
import Link from "next/link"
export default function ServiceCard({src , alt , title, textTitle, description,href,mobileBg }) {
  return (
    <div className="relative max-xl:h-[652px]">
        <Image
          src={src}
          alt={alt}
          title={title}
          unoptimized
          className="service-background w-full max-xl:h-[432px]"
        />
        <div className="absolute top-1/2 right-28 -translate-y-1/2 flex flex-col gap-5 text-white max-w-[500px] max-[1550px]:right-14 max-[1390px]:right-10 max-[1290px]:right-3 max-xl:hidden">
          <p className="font-bold max-[2000px]:text-4xl drop-shadow-lg max-xl:text-xl max-[4000px]:text-5xl">
            {textTitle}
          </p>

         <p className="max-[2000px]:text-[20px] max-[4000px]:text-[26px] leading-[26px] font-thin max-xl:text-lg">
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
        <div className="absolute top-1/2 right-28  -translate-y-1/2 flex flex-col gap-5 text-white max-w-[500px] max-xl:left-0 max-xl:w-full max-xl:max-w-full max-xl:px-3 max-xl:gap-2 max-xl:translate-y-20  xl:hidden" style={{ backgroundColor: mobileBg }}>
          <p className="font-bold text-4xl drop-shadow-lg max-xl:text-xl">
            {textTitle}
          </p>

         <p className="text-[20px] leading-[26px] font-thin max-xl:text-lg max-[440px]:line-clamp-5 max-[400px]:line-clamp-4">
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

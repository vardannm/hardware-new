import Image from "next/image"
import Link from "next/link"
export default function ServiceCard({src , alt , title, textTitle, description,href }) {
  return (
    <div className="relative w-fit">
        <Image
          src={src}
          alt={alt}
          title={title}
          unoptimized
          className="rounded-[10px] w-auto"
        />
        <div className="absolute top-1/2 right-28 -translate-y-1/2 flex flex-col gap-5 text-white max-w-[500px]">
          <p className="font-bold text-4xl drop-shadow-lg">
            {textTitle}
          </p>

         <p className="text-[20px] leading-[26px] font-thin">
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

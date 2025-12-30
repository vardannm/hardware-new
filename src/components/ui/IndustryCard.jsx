import Image from "next/image";
import Link from "next/link";
export default function IndustryCard({src,text,alt,title,href}) {
  return (
    <div className=" bg-secondary rounded-lg overflow-hidden">
    <div  >
         <Image
                  src={src}
                  alt={alt}
                  title={title}
                className="w-full h-[273px] object-cover"
                  unoptimized
                />
                <div className="flex px-4 py-4 items-center justify-between">
                <p className="font-bold text-xl">{text}</p>
                {href && (
      <div className=" flex justify-center w-[116px] ">
       <Link
              href={href}
             className="px-2 py-2 bg-transparent font-light text-primary border border-primary rounded hover:bg-primary hover:text-white transition"
            >
              Learn more
            </Link>
      </div>)}
                </div>
    </div>
    </div>
  )
}

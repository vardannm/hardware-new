import Image from "next/image";
import Link from "next/link";

export default function HomeCard({
  src,
  alt,
  title,
  text,
  imageTitle,
  buttonText = "Learn more",
  href,
   cardMaxW = "w-[353px] max-md:w-auto max-md:max-w-[353px]",
  SectionH = "h-[220px] max-sm:h-[260px]",
}) {
  return (
    <div className={` shadow-md ${cardMaxW} flex flex-col gap-4 bg-secondary`}>
      <div className={` flex items-center justify-center w-full overflow-hidden bg-white`}>
        <Image
          src={src}
          alt={alt}
          title={imageTitle}
          
          className="object-contain"
        />
      </div>
      <div className={`flex flex-col gap-2 ${SectionH} relative px-3`}>
        <h3 className="text-lg font-semibold ">
          {title}
        </h3>
        <p className="text-sm leading-relaxed">
          {text}
        </p>
      <Link href={href}>
      <button
        className="absolute bottom-2.5 px-4 py-2 text-sm text-green-600 border border-green-500 rounded-md hover:bg-green-50 transition"
      >
        {buttonText}
      </button>
      </Link>
      </div>
    </div>
  );
}

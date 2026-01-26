import Image from "next/image";
import Link from "next/link";

export default function HomeCard({
  src,
  alt,
  title,
  text,
  imageTitle,
  href,
   cardMaxW = "w-[32%] max-md:w-auto max-md:max-w-[353px]",
  SectionH = "h-[220px] max-sm:h-full",
  lines,
  imageHeight= "h-auto"
}) {
  return (
  <Link
  href={href}
  className={`
    group
    ${cardMaxW}
    flex flex-col gap-4 bg-secondary
    transition-all duration-300 ease-in-out
    hover:scale-[1.03]
    hover:shadow-[0px_24px_22px_-18px_#31B56A]
  `}
>
  <div
    className="
      border-b-2 border-transparent
      transition-colors duration-300
      group-hover:border-b-primary
    "
  >
    <Image
      src={src}
      alt={alt}
      title={imageTitle}
      className={`object-cover w-full ${imageHeight}`}
    />
  </div>

  <div className={`flex flex-col gap-2 relative px-3 pb-4 h-full ${SectionH}`}>
    <div className="flex flex-col gap-4 flex-1">
      <h3 className="h3-bold">{title}</h3>
      <p className={`text-regular leading-relaxed ${lines}`}>
        {text}
      </p>
    </div>
  </div>
</Link>


  );
}

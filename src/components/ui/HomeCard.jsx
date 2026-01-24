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
   cardMaxW = "w-[32%] max-md:w-auto max-md:max-w-[353px]",
  SectionH = "h-[220px] max-sm:h-full",
  lines,
  imageHeight= "h-auto"
}) {
  return (
    <Link
  href={href}
  className={`${cardMaxW} flex flex-col gap-4 bg-secondary`}
>
  <div>
    <Image
      src={src}
      alt={alt}
      title={imageTitle}
      className={`object-cover w-full ${imageHeight}`}
    />
  </div>

 <div className={`flex flex-col gap-2 relative px-3 h-full ${SectionH}`}>
  <div className="flex flex-col gap-4 flex-1">
    <h3 className="h3-bold">{title}</h3>
    <p className={`text-regular leading-relaxed ${lines}`}>{text}</p>
  </div>

  <div className="px-4 py-2 text-green-600 border border-green-500 rounded-md hover:bg-green-50 transition mb-2 w-fit">
    {buttonText}
  </div>
</div>

</Link>

  );
}

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
      className="object-cover w-full"
    />
  </div>

  <div className={`flex flex-col gap-2 ${SectionH} relative px-3 justify-between`}>
    <div className="flex flex-col gap-4">
      <h3 className="h3-bold">{title}</h3>
      <p className="text-regular leading-relaxed">{text}</p>
    </div>

    <div className="px-4 py-2 text-sm text-green-600 border border-green-500 rounded-md hover:bg-green-50 transition mb-2 inline-block w-fit">
      {buttonText}
    </div>
  </div>
</Link>

  );
}

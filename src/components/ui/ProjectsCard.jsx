import Image from "next/image";
import Link from "next/link";
export default function ProjectsCard({
  image,
  alt,
  Imagetitle,
  title,
  description,
  buttonText = "Learn more",
  href,
  textHeight,
  height ="h-[320px]",
  maxSmHeight = "max-sm:h-[380px]",
  lines,
}) {
  return (
<div className="bg-white shadow-md min-w-[32%] rounded-lg overflow-hidden max-w-sm flex flex-col ">
  <Image
    src={image}
    alt={alt}
    title={Imagetitle}
  className="w-full aspect-[16/12] object-cover border-b-2 border-b-primary"
    unoptimized
  />

  <div className={`p-4 flex flex-col ${height} ${maxSmHeight}   relative justify-between`}>
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className={`text-gray-600 mb-4  ${lines}`}>{description}</p>
    </div>
  {href && (
      <div className="flex justify-center">
  <Link
    href={href}
    className="px-4 py-2 bg-transparent text-primary border border-primary rounded hover:bg-primary hover:text-white transition"
  >
    {buttonText}
  </Link>
</div>)}
    
  </div>
</div>

  );
}
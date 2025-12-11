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
  textHeight
}) {
  return (
<div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm flex flex-col ">
  <Image
    src={image}
    alt={alt}
    title={Imagetitle}
    className="w-full h-[273px] object-cover border-b-2 border-b-primary"
    unoptimized
  />

  <div className="p-4 flex flex-col h-[320px] max-sm:h-[380px] relative">
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
  {href && (
      <div className="absolute bottom-3 -translate-y-1/3 left-1/2 -translate-x-1/2 ">
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
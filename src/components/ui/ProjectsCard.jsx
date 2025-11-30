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

  <div className="p-4 flex flex-col h-full max-sm:h-[360px]">
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
  {href && (
      <div className="mt-auto flex justify-center">
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
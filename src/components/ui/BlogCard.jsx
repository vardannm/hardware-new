import Image from "next/image"
import Link from "next/link"
export default function BlogCard({src, alt,imageTitle, title, description ,href}) {
  return (
    <div className="flex flex-col gap-26 max-sm:gap-0">
        <div className="padding-image-responsive relative h-[320px] max-sm:h-[220px] overflow-hidden">
  <Image
    src={src}
    alt={alt}
    title={imageTitle}
    fill
    className="object-cover"
    sizes="(max-width: 640px) 100vw, 63vw"
    priority={false}
  />
</div>
        <div className="flex flex-col gap-7 card-blog-description relative">
        <h4 className="heading-responsive">{title}</h4>
        <p className="text-[20px] max-sm:mb-20 max-sm:text-[14px]">{description}</p>
        {href && (
      <div>
  <Link
    href={href}
    className="max-sm:absolute bottom-6 px-4 py-2 bg-transparent text-primary border border-primary rounded hover:bg-primary hover:text-white transition "
  >
    Learn more
  </Link>
</div>)}
</div>

    </div>
  )
}

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
  height = "h-auto",
  maxSmHeight = "max-sm:h-[380px]",
  lines,
}) {
  const Wrapper = href ? Link : "div";
  const wrapperProps = href ? { href } : {};

  const hoverClasses = href
    ? "group transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-[0px_24px_22px_-18px_#31B56A] cursor-pointer"
    : "";

  return (
    <Wrapper
      {...wrapperProps}
      className={`
        ${hoverClasses}
        bg-white shadow-md min-w-[32%] max-w-sm
        rounded-lg overflow-hidden
        flex flex-col
      `}
    >
      {/* Image wrapper (border only when hover is enabled) */}
      <div
        className={`
          border-b-2 border-transparent
          ${href ? "transition-colors duration-300 group-hover:border-b-primary" : ""}
        `}
      >
        <Image
          src={image}
          alt={alt}
          title={Imagetitle}
          className="w-full aspect-[16/12] object-cover"
          unoptimized
        />
      </div>

      {/* Content */}
      <div className={`p-4 flex flex-col relative justify-between ${height} ${maxSmHeight}`}>
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className={`text-gray-600 mb-4 ${lines}`}>
            {description}
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

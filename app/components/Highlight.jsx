import Image from "next/image";

export default function Highlight({ src, alt, title, text, isLeft }) {
  return (
    <div className="flex flex-col gap-3 w-[539px] max-sm:w-full justify-center">
      <div className="max-sm:w-full">
        <Image 
          src={src} 
          alt={alt} 
          title={title} 
          className="rounded-[30px] h-full w-full max-sm:w-full object-cover"
        />
      </div>
      <p className={`bg-[#dadade] p-3 rounded-[30px] ${isLeft ? "text-right" : "text-left"} max-sm:text-left max-sm:w-full`}>
        {text}
      </p>
    </div>
  );
}
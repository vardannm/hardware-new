import Image from "next/image";

export default function Testimonial({ logo, text, name, position }) {
  return (
    <div className="relative w-[350px] bg-[#f5f5f5] rounded-lg pt-20 pb-10 px-6 mx-auto flex flex-col max-sm:h-[476px] max-sm:mt-14">
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 bg-secondary rounded-full flex items-center justify-center border-8 border-white">
        <Image src={logo} alt="logo" className="object-contain" />
      </div>

      <p className="text-sm leading-relaxed">{text}</p>

      <div className="mt-auto pt-6">
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-xs">{position}</p>
      </div>
    </div>
  );
}

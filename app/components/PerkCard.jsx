import Image from "next/image";

export default function PerkCard({ headline, text, alt, title, src, width }) {
  return (
    <div className="bg-[#f4f5f6] p-1 rounded-2xl border-2 border-[#EDEEF0]">
    <div
      className="flex flex-col justify-between bg-white h-[445px] rounded-2xl  overflow-hidden max-sm:h-[414px] max-sm:max-w-[260px]  border border-[#D3D5D9]"
      style={{ width: `${width}px` }}
    >
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-xl font-bold">{headline}</h2>
        <p className="text-gray-600">{text}</p>
      </div>

      <div className="w-full h-48 relative max-sm:h-60">
        <Image
          src={src}
          alt={alt}
          title={title}
          fill
          className="object-cover"
        />
      </div>
    </div>
    </div>
  );
}

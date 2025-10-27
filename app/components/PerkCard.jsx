import Image from "next/image";

export default function PerkCard({ headline, text, alt, title, src }) {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden w-[352px]">
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-xl font-bold">{headline}</h2>
        <p className="text-gray-600">{text}</p>
      </div>

      <div className="w-full h-48 relative">
        <Image
          src={src}
          alt={alt}
          title={title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

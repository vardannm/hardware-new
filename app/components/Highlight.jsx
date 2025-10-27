import Image from "next/image";
export default function Highlight({src,alt,title,text,isLeft}){
    return(
<div className="flex flex-col gap-3 w-[539px]">
<Image src={src} alt={alt} title={title} className="rounded-[30px] h-full"/>
<p className={`bg-[#dadade] p-3 rounded-[30px] ${isLeft ? "text-right" : "text-left"}`}>
{text}</p>
</div>
    );
}
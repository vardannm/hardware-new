import Image from "next/image";
import Link from "next/link";
import { industriesData } from "../../data/industries";

function Industries() {
  const { header, industries } = industriesData;

  return (
    <div className="flex flex-col  mt-60 max-sm:mt-5">
      <div className="w-[73%] flex flex-col mx-auto gap-8 mb-20 max-sm:w-[95%] max-sm:gap-4 text-start">
        <p className="font-bold text-[56px] max-sm:text-[32px]">{header.title}</p>
        <p className="text-[20px] w-2/3 max-sm:w-90">{header.description}</p>
      </div>
      {industries.map((industry) => (
        <div key={industry.id} className="flex flex-col w-full">
          {industry.image && (
            <Image
              src={industry.image}
              alt={industry.imageAlt}
              title={industry.imageTitle}
              className="w-full h-auto"
            />
          )}
          <div className="px-[13%] bg-[#FAFAFA] py-6 flex flex-col mx-auto gap-8 mb-20 max-sm:px-[5%] max-sm:gap-4 text-start">
            <p className="font-bold text-[32px]">{industry.title}</p>
            <p className="text-[20px]">{industry.description}</p>

            <Link href={industry.link}>
              <button className="px-4 py-2 text-sm text-green-600 border border-green-500 rounded-md hover:bg-green-50 transition cursor-pointer">
                {industry.linkLabel}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Industries;

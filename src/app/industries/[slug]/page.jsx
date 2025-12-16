"use client";
import Image from "next/image";
import BackButton from "../../../components/ui/BackButton";
import IndustryCard from "../../../components/ui/IndustryCard";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { INDUSTRY_DETAILS } from "../../../data/industryDetail";
import { notFound } from "next/navigation";
import React from "react";
export default function IndustryPage({ params }) {
    const resolvedParams = React.use(params);
 const slug = resolvedParams.slug;
  const industry = INDUSTRY_DETAILS[slug];

  if (!industry) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-60 mb-60">
      <div className="w-full h-[645px] relative max-sm:h-[400px]">
        <Image
          src={industry.hero.icon}
          alt={industry.hero.imageAlt}
          title={industry.hero.imageTitle}
          fill
          unoptimized
          className="hero-background"
        />
      </div>

      <div className="w-[60%] flex flex-col mx-auto gap-8 max-sm:w-[95%] max-sm:gap-4">
        <BackButton href={"/industries"} />
        <p className="text-5xl font-bold w-2/3 max-sm:text-2xl">{industry.title}</p>
        <div className="flex gap-6">
          <Image
            src={industry.mainImage.src}
            unoptimized
            alt={industry.mainImage.imageAlt}
            title={industry.mainImage.imageTitle}
            className="max-sm:hidden"
          />
          <p className="text-xl">{industry.description}</p>
        </div>
      </div>

      <div className="bg-[#FAFAFA] max-sm:bg-white">
        <div className="w-[55%] flex justify-center gap-16 py-8 items-center max-sm:flex-col mx-auto max-sm:w-[95%]">
          <div className="flex flex-col gap-6 w-[80%] max-sm:w-[95%]">
            <p className="font-bold text-3xl">{industry.technologiesTitle}</p>
            <p>{industry.technologiesText}</p>
          </div>
          <div>
            <div className="flex flex-col items-start space-y-8 relative pl-6 max-sm:text-2xl">
              <div className="absolute left-[10px] top-8 h-[88%] w-0.5 bg-primary sm:hidden"></div>
              {industry.expertiseList.map((item, i) => (
                <div key={i} className="relative flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary ring-4 ring-primary/30 absolute -left-[17px] top-1/2 -translate-y-1/2"></div>
                  <p className="pl-[30px] font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[40%] mx-auto text-center justify-center items-center max-sm:w-90 max-sm:text-start">
        <p className="font-bold text-3xl max-sm:text-xl">{industry.benefitsTitle}</p>
        <p className="leading-12 w-[80%] max-sm:w-90 max-sm:leading-normal">
          {industry.benefitsText}
        </p>
      </div>

      <div className="mx-auto flex flex-col gap-6 max-sm:hidden">
        <p className="text-3xl font-bold mx-auto">Other Industries We Serve</p>
        <div className="flex gap-6">
          {industry.otherIndustries.map((ind, i) => (
            <IndustryCard key={i} {...ind} />
          ))}
        </div>
      </div>

      <div className="mx-auto flex flex-col gap-6 w-[53%]">
        <p className="text-3xl font-bold mx-auto">FAQ</p>
        <div className="flex flex-col gap-2">
          {industry.faq.map((item) => (
            <Accordion.Root key={item.id} type="single" collapsible className="space-y-3">
              <Accordion.Item
                value={item.id}
                className="bg-[#F8F8F8] overflow-hidden transition-all duration-200 hover:shadow-md rounded-lg"
              >
                <Accordion.Trigger className="flex justify-between items-center w-full p-2 text-left font-bold text-lg text-black hover:bg-gray-50 transition-colors duration-200 group">
                  <span className="text-left pr-4">{item.question}</span>
                  <ChevronDownIcon
                    className="transform transition-transform duration-300 group-data-[state=open]:rotate-180 text-[#31B56A] font-bold flex-shrink-0 ml-2"
                    width={35}
                    height={35}
                  />
                </Accordion.Trigger>
                <Accordion.Content className="px-6 pb-6 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                  <div className="border-t border-gray-100 pt-4 mt-4">{item.answer}</div>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          ))}
        </div>
      </div>
    </div>
  );
}
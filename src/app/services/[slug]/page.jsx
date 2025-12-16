"use client";

import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";
import { SERVICE_DETAILS } from "../../../data/serviceDetail";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as Accordion from "@radix-ui/react-accordion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Testimonial from "@/components/ui/Testimonial";
import ServiceCard from "@/components/ui/ServiceGridItem";
import BackButton from "../../../components/ui/BackButton";
export default function ServicePage({ params }) {
  const resolvedParams = React.use(params);
  const slug = resolvedParams.slug;

  const service = SERVICE_DETAILS[slug];

  if (!service) {
    notFound();
  }

  const {
    hero,
    expertise,
    process,
    whyChoose,
    serviceCards,
    faq,
    testimonials,
  } = service;

  return (
    <div className="flex flex-col">
      <div className="w-full h-[645px] relative max-sm:h-[400px]">
        <Image
          src={hero.backgroundImage}
          alt={hero.alt}
          title={hero.title}
          fill
          unoptimized
          className="hero-background"
        />
        <div className="absolute left-[60%] top-[10%] flex flex-col justify-start gap-6 text-white max-sm:hidden">
          <BackButton className="self-start" href={"/services"}/>
          <div className="flex flex-col gap-[7px]">
            <p className="text-4xl font-bold w-[37%]">{hero.desktopTitle}</p>
            <p className="text-xl font-bold">{hero.desktopSubtitle}</p>
          </div>
          <p className="w-[50%]">{hero.text}</p>
        </div>
      </div>

      <div className="flex flex-col gap-[120px] mt-5 mb-16 mx-auto w-[100%] max-sm:gap-60">
   
        <div className="sm:hidden">
         
          <BackButton className="self-start" href={"/services"}/>
          <div className="flex flex-col gap-[7px]">
            <p className="text-3xl font-bold">
              {hero.mobileTitle || hero.desktopTitle}
            </p>
            <p className="text-xl font-bold">{hero.mobileSubtitle || hero.desktopSubtitle}</p>
          </div>
          <p>{hero.text}</p>
        </div>

        <div className="mx-auto flex flex-col gap-6 text-center w-[37%] max-sm:w-full">
          <p className="font-bold text-3xl max-sm:text-start max-sm:text-2xl">{expertise.title}</p>
          <div className="px-[18px] py-3.5 flex flex-col bg-secondary rounded-[10px] gap-2.5 text-start">
            <p className="font-bold text-2xl max-sm:text-xl">{expertise.highlightTitle}</p>
            <div className="pl-5">
              {expertise.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#FAFAFA] flex justify-center gap-28 py-8 items-center max-sm:flex-col">
          <div className="flex flex-col gap-6 max-w-[27%] max-sm:max-w-[87%]">
            <p className="font-bold text-3xl">{process.title}</p>
            <p>{process.description}</p>
          </div>
          <div>
            <div className="flex flex-col items-start space-y-8 relative pl-6">
              <div className="absolute left-[11px] top-2 h-[94%] w-px bg-primary"></div>
              {process.steps.map((step, i) => (
                <div key={i} className="relative flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary ring-4 ring-primary/30 absolute -left-[17px] top-1/2 -translate-y-1/2"></div>
                  <p className="pl-[30px] font-bold">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto max-sm:hidden">
          <div className="grid grid-rows-13 grid-cols-5 gap-2 max-sm:hidden">
            <div className="row-span-7 bg-secondary p-3 rounded-md"></div>
            <div className="row-span-3 bg-secondary p-3 rounded-md"></div>
            <ServiceCard {...serviceCards[0]} className="row-span-4" />
            <div className="row-span-3 bg-secondary p-3 rounded-md"></div>
            <div className="row-span-7 bg-secondary p-3 rounded-md"></div>
            <ServiceCard {...serviceCards[1]} className="row-span-5" />
            <ServiceCard {...serviceCards[2]} className="row-span-6" />
            <ServiceCard {...serviceCards[3]} className="row-span-6" />
            <div className="row-span-2 bg-secondary p-3 rounded-md"></div>
            <div className="row-span-2 bg-secondary p-3 rounded-md"></div>
            <ServiceCard {...serviceCards[4]} className="row-span-5" />
            <div className="row-span-4 bg-secondary p-3 rounded-md"></div>
            <ServiceCard {...serviceCards[5]} className="row-span-4" />
            <div className="row-span-4 bg-secondary p-3 rounded-md"></div>
            <div className="row-span-3 bg-secondary p-3 rounded-md"></div>
          </div>
        </div>

          <div className="sm:hidden">
          
              <Swiper
                        slidesPerView={1}
                        spaceBetween={16}
                        centeredSlides={true}
                        loop={false}
                        pagination={{ clickable: true }}
                        className="pb-10"
                      >
                        {serviceCards.map((card, index) => (
                          <SwiperSlide key={index}>
                            <div className="bg-secondary p-5 rounded-xl shadow-sm flex flex-col justify-between h-[270px]">
                              <div className="flex gap-4 items-start mb-4">
                                <div className="flex-shrink-0">
                                  {React.cloneElement(card.icon, { width: 48, height: 48 })}
                                </div>
                                <h3 className="text-xl font-bold leading-tight">
                                  {card.title}
                                </h3>
                              </div>
                              <p className="text-sm text-gray-700  ">
                                {card.description}
                              </p>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
          </div>
        {/* FAQ */}
        <div className="mx-auto flex flex-col gap-7 w-[63%] max-sm:w-[87%]">
          <p className="font-bold text-2xl text-center">{faq.title}</p>
          <div className="flex flex-col gap-2">
            {faq.items.map((item, index) => (
              <div key={index} className="space-y-4">
                <Accordion.Root type="single" collapsible className="space-y-3">
                  <Accordion.Item value={item.question} className="bg-[#F8F8F8] overflow-hidden transition-all duration-200 hover:shadow-md rounded-lg">
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
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Desktop */}
        <div className="flex w-[85%] mx-auto text-black max-sm:hidden">
          {testimonials.map((item, index) => (
            <Testimonial key={index} logo={item.logo} text={item.text} name={item.name} position={item.position} />
          ))}
        </div>

        {/* Testimonials Mobile — FIXED with modules */}
        <div className="sm:hidden pl-5">
          <Swiper
            slidesPerView={1.1}
            spaceBetween={35}
            pagination={false}
            navigation={false}
            className="pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Testimonial {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
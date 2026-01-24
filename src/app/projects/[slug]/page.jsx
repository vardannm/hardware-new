"use client";

import Image from "next/image";
import Highlight from "@/components/ui/Highlight";
import PerkCard from "@/components/ui/PerkCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from "react";
import { PROJECT_DETAILS } from "../../../data/projectDetail";
import { notFound } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function ProjectPage({ params }) {
  const resolvedParams = React.use(params);

  const slug = resolvedParams.slug;
  const project = PROJECT_DETAILS[slug];

  const swiperRef = useRef(null);

  const updateSlideOpacities = (swiper) => {
    swiper.slides.forEach((slide, i) => {
      slide.style.opacity = i === swiper.activeIndex ? 1 : 0.5;
    });
  };

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-10 m-auto max-sm:mt-0">
      <div className="w-[1098px] mx-auto max-lg:w-auto">
        <div className="flex justify-end gap-3 items-center  ">
          <Image
            src={project.hero.icon}
            alt={project.hero.imageAlt}
            title={project.hero.imageTitle}
            className="max-[500px]:w-[250px] max-[500px]:h-[250px] max-[500px]:object-cover max-[500px]:rounded-[20px] max-[380px]:h-[170px]" 
          />
          <div className="flex flex-col gap-5 w-[358px] z-10 bg-transparent max-sm:gap-1 max-sm:pt-4 max-sm:pr-4">
            <h1 className="text-[56px] font-bold leading-14 max-sm:text-4xl max-sm:leading-10">
              {project.hero.title}
            </h1>
            <h2 className="font-bold text-2xl">{project.hero.subtitle}</h2>
            <h3 className="max-sm:hidden">{project.hero.text}</h3>
          </div>
        </div>
        <p className="hidden max-sm:block p-4">{project.hero.text}</p>
      </div>
     <div className="bg-[#dfdfe4] mx-[171px] flex gap-[38px] rounded-[30px] p-8
                max-sm:p-0 max-xl:flex-col max-sm:mx-0 ">
  

  <div className="relative w-[396px] h-[426px] shrink-0
                  max-xl:w-full max-sm:h-[280px]">
    <Image
      src={project.technicalApproach.image}
      alt={project.technicalApproach.title}
      fill
      className="object-cover "
      sizes="(max-width: 1280px) 100vw, 396px"
    />
  </div>
  <div className="flex flex-col gap-[38px] max-sm:p-4">
    <p className="font-bold text-3xl">
      {project.technicalApproach.title}
    </p>
    <p>{project.technicalApproach.text}</p>
  </div>
</div>

      <div className="m-auto p-1 rounded-[10px] border-[#dedede] border bg-[#f1f1f1]">
        <Image src={project.boxImage} alt="" />
      </div>
      <p className="m-auto text-3xl font-bold">Process Highlights</p>
      <div className="flex gap-6 m-auto max-xl:flex-col max-sm:mx-3">
        <div className="flex flex-col gap-3">
          {project.processHighlights
            .filter((_, i) => i % 2 === 0)
            .map((item, i) => (
              <Highlight key={i} {...item} />
            ))}
        </div>
        <div className="flex flex-col gap-3">
          {project.processHighlights
            .filter((_, i) => i % 2 === 1)
            .map((item, i) => (
              <Highlight key={i} {...item} />
            ))}
        </div>
      </div>
      <div className="m-auto w-[1098px] max-sm:w-auto">
        <p className="font-bold text-[32px] text-left">Perks</p>
      </div>
      {project.perks.length < 5 ? (
        <div className="hidden sm:flex flex-wrap justify-center gap-5 m-auto">
          {project.perks.map((perk, i) => (
            <PerkCard key={i} {...perk} />
          ))}
        </div>
      ) : (
        <>
          <div className="hidden sm:flex flex-wrap justify-center gap-5 m-auto max-sm:hidden">
            {project.perks.slice(0, 3).map((perk, i) => (
              <PerkCard key={i} {...perk} />
            ))}
          </div>
          <div className="flex gap-5 m-auto max-sm:hidden">
            {project.perks.slice(3).map((perk, i) => (
  <PerkCard key={i} {...perk} />
))}
          </div>
        </>
      )}

      <div className="sm:hidden pl-5">
        <Swiper slidesPerView={1.3} spaceBetween={1}>
          {project.perks.map((perk, i) => (
            <SwiperSlide key={i}>
              <PerkCard {...perk} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p className="font-bold text-3xl mx-auto">Product Gallery</p>
      <div className="relative m-auto w-full mt-5">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={0}
          className="mySwiper"
         
          initialSlide={2}
          centeredSlides={true}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            0: { slidesPerView: 1, centeredSlides: true },
            640: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: "auto", centeredSlides: true },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateSlideOpacities(swiper);
          }}
          onSlideChange={(swiper) => updateSlideOpacities(swiper)}
        >
         {project.galleryImages.map((img, i) => (
    <SwiperSlide key={i} className="!w-[100vw] sm:!w-[400px] lg:!w-[430px] xl:!w-[480px]">  
      <div className="relative w-full pb-[calc(400/430*100%)] overflow-hidden"> 
        <Image
          src={img}
          alt={`Gallery image ${i + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 430px"
        />
      </div>
    </SwiperSlide>
  ))}
        </Swiper>
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-1/3 cursor-pointer top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#FFFFFF66] rounded-full flex items-center justify-center shadow z-50 hover:bg-gray-400 transition-all duration-75
                 max-sm: max-sm:top-[88%] max-sm:-translate-x-30
                 "
        >
          <FaArrowLeft size={14} className="text-white" />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-1/3 top-1/2 transform  cursor-pointer -translate-y-1/2 w-10 h-10 bg-[#FFFFFF66] rounded-full flex items-center justify-center shadow z-50 hover:bg-gray-400 transition-all duration-75
                 max-sm: max-sm:top-[88%] max-sm:translate-x-30"
        >
          <FaArrowRight size={14} className="text-white" />
        </button>
      </div>
      <p className="font-bold text-4xl mx-auto">Final Result</p>
      <p className="mx-auto font-medium w-[491px] text-center mb-14 max-sm:w-[82%]">
        {project.finalText}
      </p>
    </div>
  );
}

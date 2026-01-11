"use client";
import Image from "next/image";
import HomeCard from "../components/ui/HomeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Autoplay ,Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import { HOME_DATA } from "../data/home";

function StructuredData() {
  return (
    <>
      {HOME_DATA.structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}

export default function HomeClient() {
  const {
    heroes,
    services,
    industries,
    projects,
    partners,
    about,
    welcomeDescription,
    welcomeTitle
  } = HOME_DATA;

  return (
    <div className="flex flex-col">
      <StructuredData />
       <Swiper
      modules={[Autoplay, Pagination]}
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className="w-full hero-swiper"
    >
      {heroes.map((hero, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-[645px] relative max-md:h-[400px]">
            <Image
              src={hero.image}
              alt={hero.alt}
              title={hero.title}
              fill
              unoptimized
              priority={index === 0}
              className="hero-background"
            />
            {hero.welcomeText && (
<div
  className={`absolute left-[10%] bottom-[10%] flex flex-col justify-start gap-2 text-white ${
    index === 0 ? "max-md:hidden" : ""
  }`} >
                <p className="text-[56px] font-bold w-[70%] max-xl:text-[32px] max-xl:w-[80%] max-lg:text-[22px] max-lg:w-[84%]  text-white">
                  {hero.welcomeText}
                </p>
                <p className="text-[22px] max-lg:text-[18px]  w-[70%] text-white max-sm:w-[90%]">{hero.subText}</p>
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
      <div className="mx-auto flex flex-col gap-60 w-76 my-60 max-md:w-[87%] max-md:my-6">
        <p className="md:hidden text-[32px] font-bold">{welcomeTitle}</p>
        <p className="text-xl">{welcomeDescription}</p>
        <div>
          <p className="text-start font-bold text-3xl max-md:mb-5">
            {services.title}
          </p>
          <div className="flex gap-10 mt-4 max-md:hidden">
            {services.items.map((item, idx) => (
              <HomeCard
                key={idx}
                src={item.image}
                SectionH={
                  "h-[220px] max-[1290px]:h-[270px] max-[1090px]:h-[350px] max-[840px]:h-[360px] max-[790px]:h-[420px]"
                }
                alt={item.alt}
                imageTitle={item.imageTitle}
                title={item.title}
                text={item.text}
                href={item.href}
              />
            ))}
          </div>
          <div className="md:hidden h-full">
            <Swiper slidesPerView={1.2} spaceBetween={20}>
              {services.items.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <HomeCard
                    src={item.image}
                    alt={item.alt}
                    imageTitle={item.imageTitle}
                    title={item.title}
                    text={item.text}
                    href={item.href}
                    SectionH={"h-[280px]"}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="flex items-center w-full gap-4">
          <div className="flex-1 border-t border-black/50"></div>
          <Link href={services.allLink}>
            <button className="text-[16px] px-4 py-1 text-sm font-medium bg-[#F8F8F8] rounded-md hover:bg-gray-100 cursor-pointer">
              {services.allButtonText}
            </button>
          </Link>
          <div className="flex-1 border-t border-black/50"></div>
        </div>
        <div>
          <p className="text-start font-bold text-3xl max-md:mb-5">
            {industries.title}
          </p>
          <div className="flex gap-10 mt-4 max-md:hidden">
            {industries.items.map((item, idx) => (
              <HomeCard
                key={idx}
                src={item.image}
                SectionH={
                  "h-[240px] max-[1290px]:h-[310px] max-[1090px]:h-[380px] max-[880px]:h-[450px] max-[790px]:h-[420px]"
                }
                alt={item.alt}
                imageTitle={item.imageTitle}
                title={item.title}
                text={item.text}
                href={item.href}
              />
            ))}
          </div>
          <div className="md:hidden h-full">
            <Swiper slidesPerView={1.2} spaceBetween={20}>
              {industries.items.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <HomeCard
                    src={item.image}
                    alt={item.alt}
                    imageTitle={item.imageTitle}
                    title={item.title}
                    text={item.text}
                    href={item.href}
                    SectionH={"h-[300px]"}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="flex items-center w-full gap-4">
          <div className="flex-1 border-t border-black/50"></div>
          <Link href={industries.allLink}>
            <button className="text-[16px] px-4 py-1 text-sm font-medium bg-[#F8F8F8] rounded-md hover:bg-gray-100 cursor-pointer">
              {industries.allButtonText}
            </button>
          </Link>
          <div className="flex-1 border-t border-black/50"></div>
        </div>
        <div>
          <p className="text-start font-bold text-3xl max-md:mb-5">
            {projects.title}
          </p>
          <div className="flex gap-10 mt-4 max-md:hidden">
            {projects.items.map((item, idx) => (
              <HomeCard
                key={idx}
                src={item.image}
                cardMaxW={item.cardMaxW}
                SectionH={item.sectionH}
                alt={item.alt}
                imageTitle={item.imageTitle}
                title={item.title}
                text={item.text}
                href={item.href}
              />
            ))}
          </div>
          <div className="md:hidden pl-5 h-full">
            <Swiper slidesPerView={1.2} spaceBetween={20}>
              {projects.items.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <HomeCard
                    src={idx === 0 ? item.mobileImage || item.image : item.image}
                    SectionH={idx === 0 ? "h-[308px]" : item.sectionH}
                    alt={item.alt}
                    imageTitle={item.imageTitle}
                    title={item.title}
                    text={item.text}
                    href={item.href}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="flex items-center w-full gap-4">
          <div className="flex-1 border-t border-black/50"></div>
          <Link href={projects.allLink}>
            <button className="text-[16px] px-4 py-1 text-sm font-medium bg-[#F8F8F8] rounded-md hover:bg-gray-100 cursor-pointer">
              {projects.allButtonText}
            </button>
          </Link>
          <div className="flex-1 border-t border-black/50"></div>
        </div>
        <div className="flex overflow-x-auto py-4">
          <Swiper
            loop={true}
            slidesPerView={2.5}
            spaceBetween={20}
            modules={[FreeMode, Mousewheel, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 10 },
              768: { slidesPerView: 4, spaceBetween: 20 },
              1024: { slidesPerView: 6, spaceBetween: 30 },
            }}
          >
            {partners.logos.map((logo, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex items-center justify-center h-full">
                  <Image src={logo.src} alt={logo.alt} title={logo.title} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col gap-60">
          <p className="text-start font-bold text-3xl">{about.title}</p>
          <div className="bg-secondary p-6 col-span-3 flex flex-col gap-6 max-md:col-span-1">
            <p>{about.description}</p>
            <p className="font-bold text-lg">{about.teamTitle}</p>
            <ul className="pl-6 list-disc">
              {about.teamPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <div className="w-[63%] flex gap-5 mx-auto max-md:hidden">
              {about.members.map((member, idx) => (
                <div key={idx} className="bg-white flex flex-col gap-6 p-6">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    title={member.title}
                  />
                  <p className="font-bold">{member.name}</p>
                  <p>{member.position}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5 mx-auto md:hidden">
            {about.members.map((member, idx) => (
              <div key={idx} className="bg-secondary flex flex-col gap-6 p-6">
                <Image src={member.image} alt={member.alt} title={member.title} />
                <p className="font-bold">{member.name}</p>
                <p>{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
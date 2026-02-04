'use client';
import Image from "next/image";
import { IoStorefrontOutline, IoSettingsOutline, IoMedkitOutline } from "react-icons/io5";
import ProjectsCard from "../../components/ui/ProjectsCard";
import { projectsData,pageContent } from "../../data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ProjectsClient() {
  const { categories } = projectsData;
const { title, subtitle, categoriesTitle } = pageContent;
  return (
    <main className="mt-[93px] flex flex-col gap-6 max-sm:mt-8">
      <div className="flex flex-col gap-6 mx-auto 2xl:w-[70%] max-2xl:w-[77%] max-sm:w-[92%] ">
        <p className="text-[56px] font-bold  max-sm:w-auto max-sm:text-[32px] max-xl:w-full">{title}</p>
        <p>{subtitle}</p>
        <p className="text-2xl font-bold">{categoriesTitle}</p>
      </div>
      <div className="bg-secondary  py-10 max-sm:px-0 max-sm:py-2">
        <div className="my-60 flex flex-col gap-6 mx-auto 2xl:w-[70%] max-2xl:w-[77%] max-sm:w-[92%] max-sm:my-4">
          <div className="flex gap-6 items-center">
            <IoStorefrontOutline className="text-primary text-3xl" />
            <p className="font-bold text-2xl">{categories.retail.title}</p>
          </div>
          <p>{categories.retail.description}</p>
        </div>
        <div className="flex  gap-8 justify-center mx-auto 2xl:w-[70%] max-2xl:w-[77%] max-sm:hidden">
          {categories.retail.projects.map((project, i) => (
            <ProjectsCard
              key={i}
              image={project.image}
              Imagetitle={project.Imagetitle}
              alt={project.alt}
              title={project.title}
              description={project.description}
              buttonText={project.buttonText}
              lines={"line-clamp-7 max-[1127px]:line-clamp-6"}
              href={project.href}
            />
          ))}
        </div>
        <div className="sm:hidden pl-5 h-full">
        <Swiper
          slidesPerView={1.3}
          spaceBetween={20}
          pagination={false}
          navigation={false}
        >
          {categories.retail.projects.map((project, index) => (
            <SwiperSlide key={index}>
             <ProjectsCard
              key={index}
              image={project.image}
              Imagetitle={project.Imagetitle}
              alt={project.alt}
              title={project.title}
              description={project.description}
              buttonText={project.buttonText}
              href={project.href}
              maxSmHeight="max-sm:h-[410px]"
              lines="max-[360px]:line-clamp-11"
            />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>

     <div className="bg-secondary  py-10 max-sm:px-0 max-sm:py-2">
        <div className="my-60 flex flex-col gap-6 mx-auto 2xl:w-[70%] max-2xl:w-[77%]  max-sm:w-90  max-sm:my-4">
          <div className="flex gap-6 items-center">
            <IoSettingsOutline className="text-primary text-3xl" />
            <p className="text-xl font-bold">{categories.industrial.title}</p>
          </div>
          <p>{categories.industrial.description}</p>
        </div>
        <div className="flex  gap-8 justify-start 2xl:w-[70%] max-2xl:w-[77%] mx-auto max-sm:hidden">
          {categories.industrial.projects.map((project, i) => (
            <ProjectsCard
              key={i}
              image={project.image}
              Imagetitle={project.Imagetitle}
              alt={project.alt}
              title={project.title}
              description={project.description}
              buttonText={project.buttonText}
              height="h-[430px]"
            />
          ))}
        </div>
        <div className="sm:hidden pl-5">
        <Swiper
          slidesPerView={1.3}
          spaceBetween={20}
          pagination={false}
          navigation={false}
        >
          {categories.industrial.projects.map((project, index) => (
            <SwiperSlide key={index}>
             <ProjectsCard
              key={index}
              image={project.image}
              Imagetitle={project.Imagetitle}
              alt={project.alt}
              title={project.title}
              description={project.description}
              buttonText={project.buttonText}
               maxSmHeight="max-sm:h-[560px]"
            />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
      <div className="bg-secondary  py-10 max-sm:px-0 max-sm:py-2">
        <div className="my-60 flex flex-col gap-6 mx-auto 2xl:w-[70%] max-2xl:w-[77%]  max-sm:w-90  max-sm:my-4">
          <div className="flex gap-6 items-center">
            <Image className="w-8 h-8" src={categories.private.icon} alt="Private" />
            <p className="text-xl font-bold">{categories.private.title}</p>
          </div>
          <p>{categories.private.description}</p>
        </div>
        <div className="flex  gap-8 justify-start 2xl:w-[70%] max-2xl:w-[77%] mx-auto  max-sm:hidden">
          {categories.private.projects.map((project, i) => (
            <ProjectsCard
              key={i}
              image={project.image}
              Imagetitle={project.Imagetitle}
              alt={project.alt}
              title={project.title}
              description={project.description}
              buttonText={project.buttonText}
              height="h-[340px]"
            />
          ))}
        </div>
        <div className="sm:hidden pl-5">
        <Swiper
          slidesPerView={1.3}
          spaceBetween={20}
          pagination={false}
          navigation={false}
        >
          {categories.private.projects.map((project, index) => (
            <SwiperSlide key={index}>
             <ProjectsCard
              key={index}
              image={project.image}
              Imagetitle={project.Imagetitle}
              alt={project.alt}
              title={project.title}
              description={project.description}
              buttonText={project.buttonText}
              height="h-[380px]"
              maxSmHeight="max-sm:h-[540px]"
            />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
      <div className="bg-secondary  py-10 max-sm:px-0 max-sm:py-2">
        <div className="my-60 flex flex-col gap-6 mx-auto 2xl:w-[70%] max-2xl:w-[77%]  max-sm:w-90  max-sm:my-4">
          <div className="flex gap-6 items-center">
            <IoMedkitOutline className="text-primary text-3xl" />
            <p className="text-xl font-bold">{categories.medical.title}</p>
          </div>
          <p>{categories.medical.description}</p>
        </div>
        <div className="flex  gap-8 justify-start 2xl:w-[70%] max-2xl:w-[77%] mx-auto max-sm:hidden">
          {categories.medical.projects.map((project, i) => (
            <ProjectsCard
              key={i}
              image={project.image}
              Imagetitle={project.Imagetitle}
              alt={project.alt}
              title={project.title}
              description={project.description}
              buttonText={project.buttonText}
              height="h-[380px]"
            />
          ))}
        </div>
        <div className="sm:hidden pl-5">
        <Swiper
          slidesPerView={1.3}
          spaceBetween={20}
          pagination={false}
          navigation={false}
        >
          {categories.medical.projects.map((project, index) => (
            <SwiperSlide key={index}>
             <ProjectsCard
              key={index}
              image={project.image}
              Imagetitle={project.Imagetitle}
              alt={project.alt}
              title={project.title}
              description={project.description}
              buttonText={project.buttonText}
              maxSmHeight="max-sm:h-[540px]"
            />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
    </main>
  );
}
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ServiceHeading ,ServiceCards,ProjectSection ,SERVICES_STRUCTURED_DATA} from "../../data/services";
import ServiceCard from "../../components/ui/ServiceCard";
import ProjectsCard from "../../components/ui/ProjectsCard";
import Link from "next/link";
function _StructuredData() {
  const { collectionPage, itemList } = SERVICES_STRUCTURED_DATA;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPage)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemList)
        }}
      />
    </>
  );
}
function ServicesClient() {
  return (
    <div className="flex flex-col mx-[12%] my-[65px] gap-6 max-sm:mx-0 max-sm:my-8">
        <_StructuredData />
        {ServiceHeading.map((heading)=>(
      <div key={heading.title} className="flex flex-col gap-3 max-sm:mx-[3%]">
        <h1 className="text-5xl font-bold max-sm:text-2xl">
          {heading.title}
        </h1>
        <p className="w-[54%] font-normal text-xl max-sm:w-[95%]">
         {heading.description}
        </p>
      </div>))}
      <div className="flex flex-col gap-26 ">
        {ServiceCards.map((service,Index)=>(
            <ServiceCard key={Index}
            src={service.src}
            alt={service.alt}
            title={service.title}
            textTitle={service.textTitle}
             description={service.description}
             href={service.href}
             mobileBg={service.mobileBg}
            />
        ))}
        </div>
        <div className="flex flex-col gap-7 max-sm:mt-10">
<div className="flex justify-between max-sm:mx-3">
<h2 className="font-bold text-4xl max-sm:text-xl max-sm:w-2/3">{ProjectSection.title}</h2>
<div className="flex  w-[116px] mb-4">
            <Link
              href={ProjectSection.href}
              className="p-2.5 bg-transparent rounded-md  text-primary border border-primary rounded hover:bg-primary hover:text-white transition"
            >
              {ProjectSection.buttonText}
            </Link>
          </div>
</div>
          <div className="flex  gap-8 justify-center max-sm:hidden">
                    {ProjectSection.projects.map((project, i) => (
                      <ProjectsCard
                        key={i}
                        image={project.image}
                        Imagetitle={project.Imagetitle}
                        alt={project.alt}
                        title={project.title}
                        description={project.description}
                        buttonText={project.buttonText}
                        href={project.href}
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
          {ProjectSection.projects.map((project, index) => (
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
              lines="max-[400px]:line-clamp-8"
            />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
        </div>
    </div>
  );
}

export default ServicesClient;

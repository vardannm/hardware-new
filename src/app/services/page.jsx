"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ServiceHeading ,ServiceCards,ProjectSection } from "../../data/services";
import ServiceCard from "../../components/ui/ServiceCard";
import ProjectsCard from "../../components/ui/ProjectsCard";
import Link from "next/link";
function Services() {
  return (
    <div className="flex flex-col mx-[12%] my-[65px] gap-6">
        {ServiceHeading.map((heading)=>(
      <div key={heading.title} className="flex flex-col gap-3">
        <p className="text-5xl font-bold">
          {heading.title}
        </p>
        <p className="w-1/2 font-normal text-xl">
         {heading.description}
        </p>
      </div>))}
      <div className="flex flex-col gap-8">
        {ServiceCards.map((service,Index)=>(
            <ServiceCard key={Index}
            src={service.src}
            alt={service.alt}
            title={service.title}
            textTitle={service.textTitle}
             description={service.description}
             href={service.href}
            />
        ))}
        </div>
        <div className="flex flex-col gap-7">
<div className="flex justify-between">
<p className="font-bold text-4xl">{ProjectSection.title}</p>
<div className="flex  w-[116px] mb-4">
            <Link
              href={ProjectSection.href}
              className="p-2.5 bg-transparent rounded-md  text-primary border border-primary rounded hover:bg-primary hover:text-white transition"
            >
              {ProjectSection.buttonText}
            </Link>
          </div>
</div>
          <div className="flex flex-wrap gap-8 justify-center max-sm:hidden">
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
        </div>
    </div>
  );
}

export default Services;

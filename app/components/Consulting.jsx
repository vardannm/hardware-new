"use client";
import Image from "next/image";
import React from "react";
import { Share1Icon } from "@radix-ui/react-icons";
import { GlobeIcon } from "@radix-ui/react-icons";
import FlashIcon from "../../public/consulting/flash-outline.svg";
import HardwareChipIcon from "../../public/consulting/hardware-chip-outline.svg";
import ExtensionPuzzleIcon from "../../public/consulting/extension-puzzle-outline.svg";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import TauroTechnologies from "../../public/consulting/tauro-technologies-review.png";
import NuveReview from "../../public/consulting/nuve-review.png";
import QaylTech from "../../public/consulting/qayltech-review.png";
import { CodeIcon } from "@radix-ui/react-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Testimonial from "../components/Testimonial.jsx";
import ServiceCard from "../components/ServiceGridItem";
function Consulting() {
  const serviceCards = [
    {
      title: "Technology and Product Development Advisory",
      description:
        "HDH delivers tailored technology advisory services and product development consulting, supporting both startups and established companies. Our guidance helps optimize design choices, reduce technical risks, and accelerate time-to-market.",
      icon: <Image src={FlashIcon} alt="Flash" width={48} height={48} />,
    },
    {
      title: "Comprehensive Embedded System Architecture Services",
      description:
        "HDH provides end-to-end IoT consulting services and engineering consulting services, guiding clients through every stage of product development. From concept evaluation to system optimization, our expertise ensures projects are both technically sound and strategically aligned.",
      icon: <Share1Icon width={48} height={48} />,
    },
    {
      title: "Customized Technical Advisory Services",
      description:
        "Every client has unique requirements. HDH provides technical advisory services customized to project needs, including embedded software consulting, manufacturing engineering consulting, and industrial engineering consulting.",
      icon: <Image src={ExtensionPuzzleIcon} alt="Puzzle" width={48} height={48} />,
    },
    {
      title: "Strategic IoT and Embedded Systems Consulting",
      description:
        "We offer IoT strategy consulting and engineering consulting that aligns technology with business goals. HDH helps clients identify opportunities, select the right platforms, and ensure seamless integration across complex systems.",
      icon: <Image src={HardwareChipIcon} alt="Chip" width={48} height={48} />,
    },
    {
      title: "Expertise Across Embedded Systems and IoT",
      description:
        "Our team of IoT consultants and embedded systems consulting experts brings deep experience in hardware and embedded systems with the right architecture to address any technical challenge and optimize product performance.",
      icon: <GlobeIcon width={43} height={48} />,
    },
    {
      title: "End-to-End Support from Concept to Production",
      description:
        "HDH bridges technical planning and operational execution. Our consulting ensures that insights are translated into actionable solutions, guiding projects from early concept through development, validation, and production.",
      icon: <CodeIcon width={43} height={48} />,
    },
  ];
  const faq = [
    {
      id: "consulting-services",
      question: "What consulting services does HDH provide?",
      answer:
        "HDH offers IoT consulting, engineering consulting services, and product development consulting, covering embedded systems, hardware, firmware, and manufacturing guidance.",
    },
    {
      id: "hdh-help ",
      question: "Can HDH help with IoT strategy and system planning?",
      answer:
        "Yes. HDH provides IoT consulting and system design advisory, helping clients plan, optimize, and implement connected solutions that are reliable, scalable, and aligned with business goals.",
    },
    {
      id: "hdh-assist ",
      question: "Does HDH assist with embedded software consulting?",
      answer:
        "Absolutely. We provide expert embedded systems consulting and embedded software consulting to ensure hardware and firmware operate seamlessly.",
    },
    {
      id: "hdh-support ",
      question:
        "Can HDH support manufacturing and industrial engineering consulting?",
      answer:
        "Yes. Our engineering consulting services help clients with production planning, workflow optimization, and scalable system design.",
    },
  ];
  const testimonials = [
    {
      logo: TauroTechnologies,
      text: `HDH is an amazing team with real engineering talent. These guys understand even the most complex tasks and somehow make everything look easy.
They’re incredibly flexible, truly listen to what the customer needs, and always come up with solutions that are both high-quality and affordable.
Working with HDH was an absolute pleasure. Big thanks to the whole team — you’re awesome, and I’d happily work with you again anytime!
`,
      name: "Gevorg Sargsyan",
      position: "Co-founder and CEO",
    },
    {
      logo: NuveReview,
      text: `HDH is a team that turns bold ideas into reality.
They bring metal to life and take on projects that initially seem impossible.
As a client, I can confidently say they have an exceptional sense of timing, precise risk assessment, and a deep understanding of technology.
I’ve been working with them for many years, and I highly recommend HDH to anyone who doubts whether complex engineering ideas can be turned into reality with them, it’s absolutely possible!
`,
      name: "Sergo Oganov",
      position: "Chief Operating Officer",
    },
    {
      logo: QaylTech,
      text: `Working with HDH on the Powered Exoskeleton project was outstanding. They understood the urgency of this medical initiative, acting quickly to deliver hardware that could help war-injured patients before nerve damage became irreversible. The timeline was extremely tight, and every hour counted as the team pushed to deliver results before the medical window closed. Their care, speed, and dedication produced a functional prototype already bringing hope to those at risk of long-term disability. We’re grateful for their partnership and excited to continue this vital work.`,
      name: "David Arsenyan",
      position: "Founder & CEO at QaylTech and Muvia",
    },
  ];
  
  return (
    <div className="flex flex-col">
      <div className="w-full h-[645px] relative max-sm:h-[400px]">
        <Image
          src="/consulting/consulting-background.png"
          alt="Consulting background"
          fill
          unoptimized
          className="hero-background"
        />
        <div className="absolute left-[60%] top-[10%] flex flex-col justify-start gap-6 text-white max-sm:hidden">
          <button className="self-start">{"< Back"}</button>
          <div className="flex flex-col gap-[7px]">
            <p className="text-4xl font-bold w-[37%]">
              Consulting & Technical Support
            </p>
            <p className="text-xl font-bold">What We Offer</p>
          </div>
          <p className="w-[50%]">
            HDH provides expert engineering consulting services throughout every
            stage of hardware development, from feasibility studies to
            troubleshooting during mass production. We support both startups and
            established companies with component selection, design reviews, and
            compliance strategy, offering technical advisory to ensure smooth
            product evolution and long-term market success.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[120px] mt-[60px] mb-16 mx-auto w-[90%] max-sm:gap-[60px]">
        <div className="sm:hidden">
          <button className="self-start text-2xl">{"< Back"}</button>
          <div className="flex flex-col gap-[7px]">
            <p className="text-3xl font-bold ">
              Consulting & Technical Support
            </p>
            <p className="text-xl font-bold">What We Offer</p>
          </div>
          <p >
            HDH provides expert engineering consulting services throughout every
            stage of hardware development, from feasibility studies to
            troubleshooting during mass production. We support both startups and
            established companies with component selection, design reviews, and
            compliance strategy, offering technical advisory to ensure smooth
            product evolution and long-term market success.
          </p>
        </div>
        <div className="mx-auto flex flex-col gap-6 text-center w-[37%] max-sm:w-full">
          <p className="font-bold text-3xl max-sm:text-start max-sm:text-2xl">Our Expertise</p>
          <div className="px-[18px] py-3.5 flex flex-col bg-[#F6F6F6] rounded-[10px] gap-2.5 text-start">
            <p className="font-bold text-2xl max-sm:text-xl">Embedded System Integration</p>
            <div className="pl-5">
              <li>Feasibility studies and risk assessment</li>
              <li>Component selection and architecture reviews</li>
              <li>Certification guidance (FCC, CE, RoHS, REACH)</li>
              <li>
                Troubleshooting and failure analysis for existing products
              </li>
              <li>Long-term technical support through product lifecycle</li>
            </div>
          </div>
        </div>
        <div className="bg-[#FAFAFA] flex justify-center gap-28 py-8 items-center max-sm:flex-col">
          <div className="flex flex-col gap-6 max-w-[27%] max-sm:max-w-[87%]">
            <p className="font-bold text-3xl">Process That We Follow</p>
            <p className="">
              HDH’s consulting team transforms complex technical challenges into
              practical, market-ready hardware solutions, including embedded
              systems consulting and IoT consulting where applicable.
            </p>
          </div>
          <div>
            <div className="flex flex-col items-start space-y-8 relative pl-6">
              <div className="absolute left-[11px] top-2 h-[94%] w-px bg-[#2FB66A]"></div>
              <div className="relative flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#2FB66A] ring-4 ring-[#2FB66A]/30 absolute -left-[17px] top-1/2 -translate-y-1/2 "></div>
                <p className="pl-[30px] font-bold">
                  Requirement and Technology Analysis
                </p>
              </div>
              <div className="relative flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#2FB66A] ring-4 ring-[#2FB66A]/30 absolute -left-[17px] top-1/2 -translate-y-1/2"></div>
                <p className="pl-[30px] font-bold">
                  Feasibility and Risk Assessment
                </p>
              </div>
              <div className="relative flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#2FB66A] ring-4 ring-[#2FB66A]/30  absolute -left-[17px] top-1/2 -translate-y-1/2"></div>
                <p className="pl-[30px] font-bold">
                  Strategy and Solution Planning
                </p>
              </div>
              <div className="relative flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#2FB66A] ring-4 ring-[#2FB66A]/30  absolute -left-[17px] top-1/2 -translate-y-1/2"></div>
                <p className="pl-[30px] font-bold">
                  Technical Guidance and Recommendations
                </p>
              </div>
              <div className="relative flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#2FB66A] ring-4 ring-[#2FB66A]/30  absolute -left-[17px] top-1/2 -translate-y-1/2"></div>
                <p className="pl-[30px] font-bold">Implementation Support</p>
              </div>
              <div className="relative flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#2FB66A] ring-4 ring-[#2FB66A]/30  absolute -left-[17px] top-1/2 -translate-y-1/2"></div>
                <p className="pl-[30px] font-bold">
                  Ongoing Advisory and Optimization
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto">
          <p className="text-2xl font-bold text-center mb-18 max-sm:mb-0">
            Why Choose HDH for Prototype Development?
          </p>
          <div className="grid grid-rows-13 grid-cols-5 gap-2 max-sm:hidden">
            <div className="row-span-7 bg-[#F6F6F6] p-3 rounded-md"></div>
            <div className="row-span-3 bg-[#F6F6F6] p-3 rounded-md"></div>
            <ServiceCard {...serviceCards[0]} className="row-span-4" />
            <div className="row-span-3 bg-[#F6F6F6] p-3 rounded-md"></div>
            <div className="row-span-7 bg-[#F6F6F6] p-3 rounded-md"></div>
            <ServiceCard {...serviceCards[1]} className="row-span-5" />
            <ServiceCard {...serviceCards[2]} className="row-span-6" />
            <ServiceCard {...serviceCards[3]} className="row-span-6" />
            <div className="row-span-2 bg-[#F6F6F6] p-3 rounded-md"></div>
            <div className="row-span-2 bg-[#F6F6F6] p-3 rounded-md"></div>
            <ServiceCard {...serviceCards[4]} className="row-span-5" />
            <div className="row-span-4 bg-[#F6F6F6] p-3 rounded-md"></div>
            <ServiceCard {...serviceCards[5]} className="row-span-4" />
            <div className="row-span-4 bg-[#F6F6F6] p-3 rounded-md"></div>
            <div className="row-span-3 bg-[#F6F6F6] p-3 rounded-md"></div>
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
              <div className="bg-[#F6F6F6] p-5 rounded-xl shadow-sm flex flex-col justify-between h-[270px]">
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
        <div className=" mx-auto flex flex-col gap-7 w-[63%] max-sm:w-[87%]">
          <p className="font-bold text-2xl text-center">
            FAQ - Product Testing and Validation
          </p>
          <div className="flex flex-col gap-2">
            {faq.map((item, index) => (
              <div key={index} className="space-y-4  ">
                <Accordion.Root
                  type="single"
                  collapsible
                  className="space-y-3 "
                >
                  <Accordion.Item
                    key={item.id}
                    value={item.id}
                    className="bg-[#F8F8F8] overflow-hidden transition-all duration-200 hover:shadow-md rounded-lg "
                  >
                    <Accordion.Trigger className="flex justify-between items-center w-full p-2 text-left font-bold text-lg text-black  hover:bg-gray-50 transition-colors duration-200 group">
                      <span className="text-left pr-4 ">{item.question}</span>
                      <ChevronDownIcon
                        className="transform transition-transform duration-300 group-data-[state=open]:rotate-180 text-[#31B56A] font-bold flex-shrink-0 ml-2"
                        width={35}
                        height={35}
                      />
                    </Accordion.Trigger>
                    <Accordion.Content className="px-6 pb-6 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                      <div className="border-t border-gray-100 pt-4 mt-4">
                        {item.answer}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion.Root>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-[85%] mx-auto text-black max-sm:hidden">
          {testimonials.map((item, index) => (
            <Testimonial
              key={index}
              logo={item.logo}
              text={item.text}
              name={item.name}
              position={item.position}
            />
          ))}
        </div>

        <div className="sm:hidden pl-5">
          <Swiper
            slidesPerView={1.1}
            spaceBetween={25}
            pagination={false}
            navigation={false}
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

export default Consulting;

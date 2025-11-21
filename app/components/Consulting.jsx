import React from "react";
import Image from "next/image";
import { Share1Icon  } from "@radix-ui/react-icons";
import { GlobeIcon  } from "@radix-ui/react-icons";
import FlashIcon from '../../public/consulting/flash-outline.svg'
import HardwareChipIcon from '../../public/consulting/hardware-chip-outline.svg'
import ExtensionPuzzleIcon from "../../public/consulting/extension-puzzle-outline.svg";
import {CodeIcon} from "@radix-ui/react-icons";
function Consulting() {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[645px] relative">
        <Image
          src="/consulting/consulting-background.png"
          alt="Consulting background"
          fill
          unoptimized
          className="object-cover"
        />
        <div className="absolute left-[60%] top-[10%] flex flex-col justify-start gap-6 text-white">
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
      <div className="flex flex-col gap-[120px] mt-[60px]">
        <div className="mx-auto flex flex-col gap-6 text-center w-[37%]">
          <p className="font-bold text-3xl">Our Expertise</p>
          <div className="px-[18px] py-3.5 bg-[#F6F6F6] rounded-[10px] gap-2.5 text-start">
            <p className="font-bold text-2xl">Embedded System Integration</p>
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
        <div className="bg-[#FAFAFA] flex justify-center gap-28 py-8 items-center">
          <div className="flex flex-col gap-6 max-w-[27%]">
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
          <p className="text-2xl font-bold text-center mb-18">
            Why Choose HDH for Prototype Development?
          </p>
          <div className="grid grid-rows-13 grid-cols-5 gap-2">
            <div className="row-span-7 bg-[#F6F6F6] p-3 rounded-md "></div>
            <div className="row-span-3 bg-[#F6F6F6] p-3 rounded-md "></div>
            <div className="row-span-4 bg-[#F6F6F6] p-3 rounded-md flex flex-col gap-5 ">
               <div className="flex gap-5 items-center">
              <Image src={FlashIcon} />
              <p className="text-2xl font-bold">
                Technology and Product Development Advisory
              </p>
              </div>
              <p>
                HDH delivers tailored technology advisory services and product
                development consulting, supporting both startups and established
                companies. Our guidance helps optimize design choices, reduce
                technical risks, and accelerate time-to-market.
              </p>
            </div>
            <div className="row-span-3 bg-[#F6F6F6] p-3 rounded-md "></div>
            <div className="row-span-7 bg-[#F6F6F6] p-3 rounded-md "></div>
            <div className="row-span-5 bg-[#F6F6F6] p-3 rounded-md  flex flex-col gap-4">
              <div className="flex gap-5 items-center">
              <Share1Icon 
              width={48} 
                      height={48} 
              />
              <p className="text-2xl font-bold">
                Comprehensive Embedded System Architecture Services
              </p>
              </div>
              <p>
                HDH provides end-to-end IoT consulting services and engineering
                consulting services, guiding clients through every stage of
                product development. From concept evaluation to system
                optimization, our expertise ensures projects are both
                technically sound and strategically aligned.
              </p>
            </div>
            <div className="row-span-6 bg-[#F6F6F6] p-3 rounded-md flex flex-col gap-5">
               <div className="flex gap-5 items-center">
              <Image src={ExtensionPuzzleIcon} />
              <p className="text-2xl font-bold">
                Customized Technical Advisory Services
              </p>
              </div>
              <p>
                Every client has unique requirements. HDH provides technical
                advisory services customized to project needs, including
                embedded software consulting, manufacturing engineering
                consulting, and industrial engineering consulting.
              </p>
            </div>
            <div className="row-span-6 bg-[#F6F6F6] p-3 rounded-md flex flex-col gap-5">
              <div className="flex gap-5 items-center">
              <Image src={HardwareChipIcon} />
              <p className="text-2xl font-bold">
                Strategic IoT and Embedded Systems Consulting
              </p>
              </div>
              <p>
                We offer IoT strategy consulting and engineering consulting that
                aligns technology with business goals. HDH helps clients
                identify opportunities, select the right platforms, and ensure
                seamless integration across complex systems.
              </p>
            </div>
            <div className="row-span-2 bg-[#F6F6F6] p-3 rounded-md "></div>
            <div className="row-span-2 bg-[#F6F6F6] p-3 rounded-md "></div>
            <div className="row-span-5 bg-[#F6F6F6] p-3 rounded-md  flex flex-col gap-5">
               <div className="flex gap-5 items-center">
              <GlobeIcon
              width={43} 
                      height={48} 
              />
              <p className="text-2xl font-bold">
                Expertise Across Embedded Systems and IoT
              </p>
              </div>
              <p>
                Our team of IoT consultants and embedded systems consulting
                experts brings deep experience in hardware and embedded systems
                with the right architecture to address any technical challenge
                and optimize product performance. We help clients design,
                implement, and scale IoT solutions and embedded systems
                efficiently.
              </p>
            </div>
            <div className="row-span-4 bg-[#F6F6F6] p-3 rounded-md "></div>
            <div className="row-span-4 bg-[#F6F6F6] p-3 rounded-md  flex flex-col gap-5">
               <div className="flex gap-5 items-center">
              <CodeIcon width={43} 
                      height={48}  />
              <p className="text-2xl font-bold">
                End-to-End Support from Concept to Production
              </p>
              </div>
              <p>
                HDH bridges technical planning and operational execution. Our
                consulting ensures that insights are translated into actionable
                solutions, guiding projects from early concept through
                development, validation, and production.
              </p>
            </div>
            <div className="row-span-4 bg-[#F6F6F6] p-3 rounded-md "></div>
            <div className="row-span-3 bg-[#F6F6F6] p-3 rounded-md "></div>
          </div>
          <div>
            <p className="font-bold text-2xl text-center">FAQ - Product Testing and Validation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consulting;

"use client";
import Image from "next/image";
import HardwareDesignCompany from "@/public/main/hardware-design-company.png";
import CustomGardwareDesign from "@/public/main/custom-hardware-design.png";
import ProductTestingValidation from "@/public/main/product-testing-validation.png";
import ConsultingTechnicalSupport from "@/public/main/consulting-technical-support.png";
import HomeCard from "../components/ui/HomeCard";
import SecurityAndCybersecurity from "@/public/main/security-and-cybersecurity.png";
import SmartHomeIotDevices from "@/public/main/smart-home-iot-devices.png";
import IndustrialAutomation from "@/public/main/industrial-automation.png";
import MoonSmartHomeTechnology from "@/public/main/moon-smart-home-technology.png";
import SmartThermostatSystems from "@/public/main/smart-thermostat-systems.png";
import ZlightSmartBedroomLightingHardware from "@/public/main/zlight-smart-bedroom-lighting-hardware.png";
import Nuve from "@/public/main/nuve.png";
import Instigate from "@/public/main/instigate.png";
import Lumiere from "@/public/main/lumiere.png";
import Lanar from "@/public/main/lanar.png";
import Is from "@/public/main/is.png";
import Teona from "@/public/main/teona.png";
import Link from "next/link";
import Arthur from "@/public/aboutus/arthur-movsesyan.png";
import Gevorg from "@/public/aboutus/gevorg-martirosyan.png";
import MoonByRing from "@/public/main/moon-by-ring.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
function _StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Hardware Design House",
            "alternateName": "HDH",
            "url": "https://www.hardwarehouses.com/",
            "description": "Hardware Design House (HDH) is a hardware design company delivering custom hardware development, prototyping, testing, and full-cycle engineering solutions for IoT, defense, healthcare, industrial automation, and more.",
            "email": "info@hardwarehouses.com",
            "telephone": [
              "+37455342262",
              "+37441777704"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3 Hakob Hakobyan Street",
              "addressLocality": "Yerevan",
              "postalCode": "0033",
              "addressCountry": "AM"
            },
            "sameAs": [
              "https://www.linkedin.com/company/hardware-design-house-hdh/",
              "https://www.facebook.com/hardwaredesignhouse/"
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://www.hardwarehouses.com/",
            "name": "Hardware Design House (HDH)",
            "description": "HDH is a hardware design company delivering custom product development, prototyping, testing, and full-cycle solutions for IoT, defense, healthcare, and more.",
            "inLanguage": "en"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "url": "https://www.hardwarehouses.com/",
            "name": "Leading Hardware Design Company | HDH",
            "headline": "Leading Hardware Design Company | HDH",
            "description": "HDH is a hardware design company delivering custom product development, prototyping, testing, and full-cycle solutions for IoT, defense, healthcare, and more.",
            "inLanguage": "en"
          })
        }}
      />
    </>
  );
}
export default function HomeClient() {
  return (
    <div className="flex flex-col">
      <_StructuredData />
      <div className="w-full h-[645px] relative max-md:h-[400px]">
        <Image
          src={HardwareDesignCompany}
          alt="Engineers working on electronic components at a hardware design company creating innovative devices and systems"
          title="Hardware Design Company"
          fill
          unoptimized
          className="hero-background"
        />
        <div className="absolute left-[10%] bottom-[10%] flex flex-col justify-start gap-6 text-white max-md:hidden">
          <p className="text-6xl font-bold w-[70%] text-white">
            Welcome to Hardware Design House
          </p>
        </div>
      </div>
      <div className="mx-auto flex flex-col gap-60 w-76 my-60 max-md:w-[87%] max-md:my-6">
        <p className="md:hidden text-[32px] font-bold">
          Welcome to Hardware Design House
        </p>
        <p className="text-xl">
          At HDH, we transform innovative ideas into real-world hardware
          solutions. As a leading hardware design company, we support each stage
          of development, from initial concept to full-scale production. Our
          team combines deep engineering expertise with cutting-edge technology
          to create devices and systems that are reliable, efficient, and
          market-ready. Whether it’s hardware design services, custom hardware
          development, or end-to-end hardware development, HDH is your trusted
          partner in turning ideas into reality.
        </p>
        <div>
          <p className="text-start font-bold text-3xl max-md:mb-5">Services</p>
          <div className="flex gap-10 mt-4 max-md:hidden">
            <HomeCard
              src={ProductTestingValidation}
              SectionH={"h-[220px] max-[1290px]:h-[270px] max-[1090px]:h-[350px] max-[840px]:h-[360px] max-[790px]:h-[420px] "}
              alt={
                "Engineers creating custom hardware design solutions at a hardware design company for innovative and durable devices"
              }
              imageTitle={"Custom Hardware Design"}
              title={"Custom Hardware Design"}
              text={
                "We develop tailored solutions that balance functionality, durability, and innovative design, engineered to meet your unique technical and business requirements."
              }
              href={"/services/custom-hardware-design"}
            />
            <HomeCard
              src={CustomGardwareDesign}
              SectionH={"h-[220px] max-[1290px]:h-[270px] max-[1090px]:h-[350px] max-[840px]:h-[360px] max-[790px]:h-[420px]"}
              alt={
                "Engineers conducting product testing and validation at a hardware design company to ensure performance and safety standards"
              }
              imageTitle={"Product Testing and Validation Services"}
              title={"Product Testing and Validation"}
              text={
                "From prototype to production, we perform rigorous product prototyping and testing to ensure top performance, compliance, and safety standards."
              }
              href={"/services/product-testing-and-validation"}
            />
            <HomeCard
              SectionH={"h-[220px] max-[1290px]:h-[270px] max-[1090px]:h-[350px] max-[840px]:h-[360px] max-[790px]:h-[420px]"}
              src={ConsultingTechnicalSupport}
              alt={
                "Hardware design company experts providing consulting and technical support to optimize hardware performance and product lifecycle"
              }
              imageTitle={"Consulting and Technical Support Services"}
              title={"Consulting and Technical Support"}
              text={
                "Our experts provide design reviews, performance upgrades, and optimization guidance. We help refine your product, extend its lifecycle, and keep it competitive, leveraging our extensive hardware engineering expertise."
              }
              href={"/services/iot-consulting-services"}
            />
          </div>
          <div className="md:hidden h-full">
            <Swiper
              slidesPerView={1.2}
              spaceBetween={20}
              pagination={false}
              navigation={false}
            >
              <SwiperSlide>
                <HomeCard
                  src={ProductTestingValidation}
                  alt={
                    "Engineers creating custom hardware design solutions at a hardware design company for innovative and durable devices"
                  }
                  imageTitle={"Custom Hardware Design"}
                  title={"Custom Hardware Design"}
                  text={
                    "We develop tailored solutions that balance functionality, durability, and innovative design, engineered to meet your unique technical and business requirements."
                  }
                  href={"/services/custom-hardware-design"}
                  SectionH={"h-[280px]"}
                  
                />
              </SwiperSlide>
              <SwiperSlide>
                <HomeCard
                  src={CustomGardwareDesign}
                  alt={
                    "Engineers conducting product testing and validation at a hardware design company to ensure performance and safety standards"
                  }
                  imageTitle={"Product Testing and Validation Services"}
                  title={"Product Testing and Validation"}
                  text={
                    "From prototype to production, we perform rigorous product prototyping and testing to ensure top performance, compliance, and safety standards."
                  }
                  href={"/services/product-testing-and-validation"}
                  SectionH={"h-[280px]"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <HomeCard
                  src={ConsultingTechnicalSupport}
                  alt={
                    "Hardware design company experts providing consulting and technical support to optimize hardware performance and product lifecycle"
                  }
                  imageTitle={"Consulting and Technical Support Services"}
                  title={"Consulting and Technical Support"}
                  text={
                    "Our experts provide design reviews, performance upgrades, and optimization guidance. We help refine your product, extend its lifecycle, and keep it competitive, leveraging our extensive hardware engineering expertise."
                  }
                  href={"/services/iot-consulting-services"}
                  SectionH={"h-[280px]"}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="flex items-center w-full gap-4">
          <div className="flex-1 border-t border-black/50"></div>
          <Link href="/services">
            <button className="text-[16px] px-4 py-1 text-sm font-medium bg-[#F8F8F8] rounded-md hover:bg-gray-100 cursor-pointer">
              See All Services
            </button>
          </Link>

          <div className="flex-1 border-t border-black/50"></div>
        </div>
        <div>
          <p className="text-start font-bold text-3xl max-md:mb-5">Industries</p>
          <div className="flex gap-10 mt-4 max-xl:hidden">
            <HomeCard
              src={SecurityAndCybersecurity}
              alt={
                "Security and cybersecurity hardware solutions for access control and threat detection"
              }
              imageTitle={"Security and Cybersecurity Hardware Solutions"}
              title={"Security and Cybersecurity"}
              text={
                "As a trusted electronic design company, we provide advanced hardware solutions for protection, monitoring, and secure communications. Our hardware design services include access control, surveillance, and threat detection systems to safeguard critical assets."
              }
              href={"/services/custom-hardware-design"}
                            SectionH={"h-[220px] max-[1290px]:h-[310px] max-[1090px]:h-[380px] max-[880px]:h-[450px] max-[790px]:h-[420px] "}

            />
            <HomeCard
              src={SmartHomeIotDevices}
              alt={
                "Smart home automation and IoT devices for connected, energy-efficient living"
              }
              imageTitle={"Smart Home Automation and IoT Device Solutions"}
              title={"Smart Home Automation and IoT Devices"}
              text={
                " From Wi-Fi to Zigbee and Z-Wave, we build intelligent connected devices that enhance comfort, convenience, and energy efficiency. Our custom hardware development ensures seamless integration into modern smart-home ecosystems."
              }
              href={"/services/product-testing-and-validation"}
                            SectionH={"h-[220px] max-[1290px]:h-[310px] max-[1090px]:h-[380px] max-[880px]:h-[450px] max-[790px]:h-[420px] "}

            />
            <HomeCard
              src={IndustrialAutomation}
              alt={
                "Industrial automation solutions for efficient control, monitoring, and process optimization"
              }
              imageTitle={"Industrial Automation Hardware"}
              title={"Industrial Automation Solutions"}
              text={
                "Our hardware engineering company expertise delivers robust systems for precise control, monitoring, and process optimization. With end-to-end hardware development and product prototyping and testing, we help industries increase efficiency and reliability."
              }
              href={"/services/iot-consulting-services"}
                            SectionH={"h-[220px] max-[1290px]:h-[310px] max-[1090px]:h-[380px] max-[880px]:h-[450px] max-[790px]:h-[420px] "}

            />
          </div>
          <div className="xl:hidden h-full">
            <Swiper
              slidesPerView={1.2}
              spaceBetween={20}
              pagination={false}
              navigation={false}
            >
              <SwiperSlide>
                <HomeCard
                  src={SecurityAndCybersecurity}
                  alt={
                    "Security and cybersecurity hardware solutions for access control and threat detection"
                  }
                  imageTitle={"Security and Cybersecurity Hardware Solutions"}
                  title={"Security and Cybersecurity"}
                  text={
                    "As a trusted electronic design company, we provide advanced hardware solutions for protection, monitoring, and secure communications. Our hardware design services include access control, surveillance, and threat detection systems to safeguard critical assets."
                  }
                  href={"/services/custom-hardware-design"}
                  SectionH={"h-[300px]"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <HomeCard
                  src={SmartHomeIotDevices}
                  alt={
                    "Smart home automation and IoT devices for connected, energy-efficient living"
                  }
                  imageTitle={"Smart Home Automation and IoT Device Solutions"}
                  title={"Smart Home Automation and IoT Devices"}
                  text={
                    " From Wi-Fi to Zigbee and Z-Wave, we build intelligent connected devices that enhance comfort, convenience, and energy efficiency. Our custom hardware development ensures seamless integration into modern smart-home ecosystems."
                  }
                  href={"/services/product-testing-and-validation"}
                  SectionH={"h-[300px]"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <HomeCard
                  src={IndustrialAutomation}
                  alt={
                    "Industrial automation solutions for efficient control, monitoring, and process optimization"
                  }
                  imageTitle={"Industrial Automation Hardware"}
                  title={"Industrial Automation Solutions"}
                  text={
                    "Our hardware engineering company expertise delivers robust systems for precise control, monitoring, and process optimization. With end-to-end hardware development and product prototyping and testing, we help industries increase efficiency and reliability."
                  }
                  href={"/services/iot-consulting-services"}
                  SectionH={"h-[300px]"}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="flex items-center w-full gap-4">
          <div className="flex-1 border-t border-black/50"></div>
          <Link href="/industries">
            <button className="text-[16px] px-4 py-1 text-sm font-medium bg-[#F8F8F8] rounded-md hover:bg-gray-100 cursor-pointer">
              See All Industries
            </button>
          </Link>

          <div className="flex-1 border-t border-black/50"></div>
        </div>
        <div>
          <p className="text-start font-bold text-3xl max-md:mb-5">Projects</p>
          <div className="flex gap-10 mt-4 max-md:hidden">
            <HomeCard
              src={MoonSmartHomeTechnology}
              cardMaxW={"max-w-[537px]"}
              
              alt={
                "Moon smart home technology for connected automation and secure home control"
              }
              imageTitle={"Moon Smart Home Technology"}
              title={"Moon by 1-Ring: Transforming Smart Home Technology"}
              text={
                "Moon by 1-Ring unifies all your devices, automates daily tasks, and keeps your home secure, connecting seamlessly via Wi-Fi, Bluetooth, Zigbee, and Z-Wave."
              }
              href={"/projects/moon-smart-home-technology"}
            />
            <HomeCard
              src={SmartThermostatSystems}
              cardMaxW={"max-w-[260px]"}
              SectionH={"h-[260px]"}
              alt={
                "Smart thermostat systems for precise home climate control and energy efficiency"
              }
              imageTitle={"Smart Thermostat Systems"}
              title={"Smart Thermostat System  "}
              text={
                " Effortless home climate control with a user-friendly design. Custom schedules, live weather updates, and air quality monitoring give you full control over heating, cooling, and ventilation."
              }
              href={"/projects/smart-thermostat-systems"}
            />
            <HomeCard
              src={ZlightSmartBedroomLightingHardware}
              cardMaxW={"max-w-[260px]"}
              SectionH={"h-[260px]"}
              alt={
                "zLight smart bedroom lighting system for automated lighting and environmental control"
              }
              imageTitle={"zLight Smart Bedroom Lighting System"}
              title={"zLight Smart Bedroom Lighting System"}
              text={
                "A compact, all-in-one device integrating wireless charging, smart lighting, and environmental sensing. Automatically adjusts light and temperature to promote relaxation and better sleep."
              }
              href={"/projects/zlight-smart-bedroom-lighting-hardware"}
            />
          </div>
          <div className="md:hidden pl-5 h-full">
            <Swiper
              slidesPerView={1.2}
              spaceBetween={20}
              pagination={false}
              navigation={false}
            >
              <SwiperSlide>
                <HomeCard
                  src={MoonByRing}
          
                  SectionH={"h-[315px]"}
                  alt={
                    "Moon smart home technology for connected automation and secure home control"
                  }
                  imageTitle={"Moon Smart Home Technology"}
                  title={"Moon by 1-Ring: Transforming Smart Home Technology"}
                  text={
                    "Moon by 1-Ring unifies all your devices, automates daily tasks, and keeps your home secure, connecting seamlessly via Wi-Fi, Bluetooth, Zigbee, and Z-Wave."
                  }
                  href={"/projects/moon-smart-home-technology"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <HomeCard
                  src={SmartThermostatSystems}
                  cardMaxW={"max-w-[260px]"}
                  SectionH={"h-[260px]"}
                  alt={
                    "Smart thermostat systems for precise home climate control and energy efficiency"
                  }
                  imageTitle={"Smart Thermostat Systems"}
                  title={"Smart Thermostat System  "}
                  text={
                    " Effortless home climate control with a user-friendly design. Custom schedules, live weather updates, and air quality monitoring give you full control over heating, cooling, and ventilation."
                  }
                  href={"/projects/smart-thermostat-systems"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <HomeCard
                  src={ZlightSmartBedroomLightingHardware}
                  cardMaxW={"max-w-[260px]"}
                  SectionH={"h-[260px]"}
                  alt={
                    "zLight smart bedroom lighting system for automated lighting and environmental control"
                  }
                  imageTitle={"zLight Smart Bedroom Lighting System"}
                  title={"zLight Smart Bedroom Lighting System"}
                  text={
                    "A compact, all-in-one device integrating wireless charging, smart lighting, and environmental sensing. Automatically adjusts light and temperature to promote relaxation and better sleep."
                  }
                  href={"/projects/zlight-smart-bedroom-lighting-hardware"}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="flex items-center w-full gap-4">
          <div className="flex-1 border-t border-black/50"></div>
          <Link href="/industries">
            <button className="text-[16px] px-4 py-1 text-sm font-medium bg-[#F8F8F8] rounded-md hover:bg-gray-100 cursor-pointer">
              See All Projects
            </button>
          </Link>

          <div className="flex-1 border-t border-black/50"></div>
        </div>
        <div>
        {/* 
          <p className="text-start font-bold text-3xl">Our Partners</p>
          <div className="flex  mt-4 w-full justify-between items-center gap-10 max-md:hidden">
            <Image src={Nuve} alt="Nuve company logo" title="Nuve" />
            <Image src={Lumiere} alt="Lumiere company logo" title="Lumiere" />
            <Image
              src={Instigate}
              alt="Instigate company logo"
              title="Instigate"
            />
            <Image src={Lanar} alt="Lanar company logo" title="Lanar" />
            <Image src={Is} alt="IS company logo" title="IS" />
            <Image src={Teona} alt="Teona company logo" title="Teona" />
          </div> */}
          <div className=" flex overflow-x-auto py-4">
  <Swiper
  loop={true}
    slidesPerView={2.5}
    spaceBetween={20}
    pagination={false}
    navigation={false}
    
                modules={[FreeMode, Mousewheel, Autoplay]}

    autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
  >
    <SwiperSlide>
      <div className="flex items-center justify-center h-full">
        <Image src={Nuve} alt="Nuve company logo" title="Nuve" />
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="flex items-center justify-center h-full">
        <Image src={Lumiere} alt="Lumiere company logo" title="Lumiere" />
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="flex items-center justify-center h-full">
        <Image src={Instigate} alt="Instigate company logo" title="Instigate" />
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="flex items-center justify-center h-full">
        <Image src={Lanar} alt="Lanar company logo" title="Lanar" />
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="flex items-center justify-center h-full">
        <Image src={Is} alt="IS company logo" title="IS" />
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="flex items-center justify-center h-full">
        <Image src={Teona} alt="Teona company logo" title="Teona" />
      </div>
    </SwiperSlide>
  </Swiper>
</div>

        </div>
        <div className="flex flex-col gap-60">
          <p className="text-start font-bold text-3xl">About us</p>
          <div className="bg-secondary p-6 col-span-3 flex flex-col gap-6 max-md:col-span-1">
            <p>
              HDH is a dedicated hardware design company focused on innovation,
              quality, and reliability. With years of experience across multiple
              industries, we provide complete hardware development, from concept
              design and prototyping to full-scale manufacturing and system
              optimization. Our multidisciplinary team of engineers, designers,
              and technical experts collaborates directly with clients to
              understand their goals, overcome complex challenges, and deliver
              hardware solutions that are powerful, scalable, and future-ready.
            </p>
            <p className="font-bold text-lg ">Meet Our Team</p>
            <div className="pl-6">
              <li>
                Skilled professionals with diverse expertise in hardware
                development.
              </li>
              <li>
                Engineers, designers, and innovators working together to turn
                your ideas into functional high-quality products.
              </li>
            </div>
            <div className="w-[63%] flex gap-5 mx-auto max-md:hidden">
              <div className="bg-white flex flex-col gap-6 p-6">
                <Image
                  src={Arthur}
                  alt="Arthur Movsesyan Co-Founder and CEO of HDH"
                  title="Arthur Movsesyan, Co-Founder and CEO of HDH"
                />
                <p className="font-bold">Arthur Movsesyan</p>
                <p>Co-Founder, CEO at Hardware Design House</p>
              </div>
              <div className="bg-white flex flex-col gap-6 p-6">
                <Image
                  src={Gevorg}
                  alt="Gevorg Martirosyan, Co-Founder and CTO of HDH"
                  title="Gevorg Martirosyan, Co-Founder and CTO of HDH"
                />
                <p className="font-bold">Gevorg Martirosyan</p>
                <p>Co-Founder, CTO at Hardware Design House</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-5 mx-auto md:hidden">
            <div className="bg-secondary flex flex-col gap-6 p-6">
              <Image
                src={Arthur}
                alt="Arthur Movsesyan Co-Founder and CEO of HDH"
                title="Arthur Movsesyan, Co-Founder and CEO of HDH"
              />
              <p className="font-bold">Arthur Movsesyan</p>
              <p>Co-Founder, CEO at Hardware Design House</p>
            </div>
            <div className="bg-secondary flex flex-col gap-6 p-6">
              <Image
                src={Gevorg}
                alt="Gevorg Martirosyan, Co-Founder and CTO of HDH"
                title="Gevorg Martirosyan, Co-Founder and CTO of HDH"
              />
              <p className="font-bold">Gevorg Martirosyan</p>
              <p>Co-Founder, CTO at Hardware Design House</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

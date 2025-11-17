"use client";
import ZlightIcon from "../../../public/zlight/smart-bedroom-lighting-system.jpg";
import Image from "next/image";
import SmartBedroomHub from "../../../public/zlight/smart-bedroom-hub.png";
import ZlightBox from "../../../public/zlight/ZlightBox.svg";
import Highlight from "../Highlight";
import WirelessThermostat from "../../../public/zlight/smart-bedroom-hub-second.png";
import SystemIntegration from "../../../public/zlight/smart-bedroom-lighting-system-engineering.png";
import SystemContractor from "../../../public/zlight/smart-bedroom-lighting-system-development.png";
import ModularHardware from "../../../public/zlight/smart-bedroom-lighting-system-sensor-design.png";
import PerkCard from "../PerkCard";
import EnergyEfficiency from "../../../public/zlight/smart-wake-up-lighting.png";
import WirelessCharging from "../../../public/zlight/wireless-charging-nightstand.png";
import SmartBedroom from "../../../public/zlight/app-controlled-smart-bedroom-lighting.png";
import SmartEnvironmental from "../../../public/zlight/smart-environmental-sensors.png";
import ModularScalable from "../../../public/thermostat/modular-and-scalable-hardware.png";
import ContractorSupport from "../../../public/thermostat/contractor-support.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import zlighSwipper from "../../../public/zlight/zlight-swiper.png";
import { useRef } from "react";
import "../../globals.css";
export default function Zlight() {
  const swiperRef = useRef(null);
  const updateSlideOpacities = (swiper) => {
    const slides = swiper.slides;
    slides.forEach((slide, index) => {
      if (index === swiper.activeIndex) {
        slide.style.opacity = 1;
      } else {
        slide.style.opacity = 0.5;
      }
    });
  };
const perks = [
  {
    headline: "Smart Wake-Up Lighting",
    text: "Gentle, comfortable light gradually activates to signal wake-up time, adjusting to ambient conditions and supporting your sleep-wake cycle.",
    src: EnergyEfficiency,
    alt: "Smart wake up lighting with gentle gradual brightness",
    title: "Smart Wake Up Lighting",
    width: 260,
  },
  {
    headline: "Wireless Charging",
    text: "Fast and convenient wireless charging for mobile devices, built into the nightstand for easy access.",
    src: WirelessCharging,
    alt: "Wireless charging nightstand with fast and convenient charging for mobile devices integrated into the smart bedroom system",
    title: "Wireless Charging Nightstand",
    width: 260,
  },
  {
    headline: "App-Controlled Lighting",
    text: "App-based control for scheduling, brightness adjustment, and color, adapting to ambient light and bedroom conditions.",
    src: SmartBedroom,
    alt: "App controlled smart bedroom lighting system for scheduling brightness and color adjustment based on ambient conditions",
    title: "App Controlled Smart Bedroom Lighting",
    width: 260,
  },
  {
    headline: "Smart Environmental Sensors",
    text: "Integrated sensors for precise measurements of air quality (CO₂e and TVOC), temperature, and humidity.",
    src: SmartEnvironmental,
    alt: "Smart bedroom lighting system with integrated sensors that monitor air quality temperature and humidity for a healthier environment",
    title: "Smart Environmental Sensors",
    width: 260,
  },
];

  return (
    <div className="flex flex-col  mt-[91px] gap-[40px] m-auto max-sm:mt-0">
      <div className="w-[1098px] mx-auto max-sm:w-auto">
     <div className="flex justify-end gap-3 items-center">
  <Image
    src={ZlightIcon}
    alt="A smart bedroom lighting system that gently guides your sleep and wake cycle with soothing light"
    title="Smart Bedroom Lighting System"
  />
 <div className="flex flex-col gap-5 w-[358px] z-10 bg-transparent max-sm:gap-1 max-sm:pt-4 max-sm:pr-4">
    <h1 className="text-[56px] font-bold leading-14 max-sm:text-4xl max-sm:leading-10">zLight</h1>
    <p className="font-bold text-2xl">
    Smart Bedroom Lighting System
    </p>
    <p className="max-sm:hidden">
      A sleep box that uses gentle light to guide your sleep and wake
      cycle.
    </p>
   
  </div>
</div>
   <p className="hidden max-sm:block p-4">
      A sleep box that uses gentle light to guide your sleep and wake
      cycle.
    </p>
      </div>
      <div className="bg-[#dfdfe4] h-[502px] mx-[171px] flex gap-[38px] rounded-[30px] p-8 max-sm:p-0 max-sm:flex-col max-sm:mx-0 max-sm:h-auto max-sm:rounded-xs">
        <Image
          src={SmartBedroomHub}
          width={396}
          height={426}
          className="max-sm:w-full"
          alt="Smart thermostat system with wireless sensors for HVAC control, featuring web access, display interface, and energy-efficient automation"
          title="Smart Thermostat System with Wireless Sensors and HVAC Control"
        />
        <div className="flex flex-col gap-[38px] max-sm:p-4">
          <p className="font-bold text-3xl">Technical approach</p>
          <p>
            The project was focused on developing a smart sleep-lighting system
            to improve sleep quality through gentle, controlled lighting. The
            system was designed to combine a number of functions into a compact
            and user-friendly nightstand device, including scheduled lighting,
            wireless charging, and environmental sensing. By reducing reliance
            on smartphones before bed and during the night, it helps create a
            healthier bedtime routine. When placed on a nightstand, zLight
            produces a gentle glow that is both bright enough to indicate when
            it is time to wake up and not so bright as to interfere with sleep.
            The original concept was developed by Mark Zuckerberg and later
            commercialized by other companies. To achieve accurate ambient
            temperature measurements, the sensor position was selected with
            consideration of the system's mechanical and electrical
            characteristics, ensuring laminar airflow around the sensor and
            minimizing measurement errors. In order to reduce the impact of
            possible humidity and temperature alterations, system mechanical
            components such as organic glass, an appropriate type of wood and
            glue were selected.
          </p>
        </div>
      </div>
      <div className="m-auto p-1 rounded-[10px] border-[#dedede] border bg-[#f1f1f1]">
        <Image src={ZlightBox} alt="" />
      </div>
      <p className="m-auto text-3xl font-bold">Process Highlights</p>
      <div className="flex gap-6 m-auto max-sm:flex-col max-sm:mx-3">
        <div className="flex flex-col gap-3">
          <Highlight
            src={WirelessThermostat}
            alt="Wireless Thermostat System with Upgraded Hardware and Software"
            title="Wireless Thermostat System with Upgraded Hardware and Software"
            text="In order to reduce the impact of possible humidity and temperature alterations, system mechanical components such as plexiglass, an appropriate type of wood and glue were selected."
            isLeft={true}
          />
          <Highlight
            src={SystemIntegration}
            alt="Home automation thermostat with seamless hardware and software integration"
            title="Seamless Hardware and Software Integration in Home Automation Thermostat System"
            text="Our team combined expertise in PCB design, firmware optimization, mechanical integration, and sensor calibration to bring the zLight to life. Careful hardware-software collaboration ensured seamless control through an app, while precision engineering allowed integration of sensors for temperature, humidity, and CO₂ monitoring. The system uses energy-efficient components, delivering reliable performance while fitting naturally in the bedroom environment."
            isLeft={true}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Highlight
            src={SystemContractor}
            alt="Training and support for installing and maintaining the smart thermostat system for efficient home automation"
            title="Contractor Training and Support for Smart Thermostat System"
            text="Our team of engineers, in collaboration with designers, put everything together from conception to delivery, paying close attention to every detail. We also developed a flatter, more lightweight version of the product."
            isLeft={false}
          />
          <Highlight
            src={ModularHardware}
            alt="Smart thermostat system with modular hardware design and scalable PCB layout"
            title="Modular Hardware Design and Scalable PCB in Smart Thermostat System"
            text="To achieve accurate ambient temperature measurements, the sensor position was selected with consideration of the system's mechanical and electrical characteristics, ensuring laminar airflow around the sensor and minimizing measurement errors."
            isLeft={false}
          />
        </div>
      </div>
      <div className="m-auto w-[1098px] max-sm:w-auto">
        <p className="font-bold text-[32px] text-left">Perks</p>
      </div>
     <div className="hidden sm:flex flex-wrap justify-center gap-5 m-auto max-sm:hidden">
        <PerkCard
          headline="Smart Wake-Up Lighting"
          text="Gentle, comfortable light gradually activates to signal wake-up time, adjusting to ambient conditions and supporting your sleep-wake cycle."
          src={EnergyEfficiency}
          alt="Smart wake up lighting with gentle gradual brightness"
          title="Smart Wake Up Lighting"
          width={260}
        />
        <PerkCard
          headline="Wireless Charging"
          text="Fast and convenient wireless charging for mobile devices, built into the nightstand for easy access."
          src={WirelessCharging}
          alt="Wireless charging nightstand with fast and convenient charging for mobile devices integrated into the smart bedroom system"
          title="Wireless Charging Nightstand"
          width={260}
        />
        <PerkCard
          headline="App-Controlled Lighting"
          text="App-based control for scheduling, brightness adjustment, and color, adapting to ambient light and bedroom conditions."
          src={SmartBedroom}
          alt="App controlled smart bedroom lighting system for scheduling brightness and color adjustment based on ambient conditions"
          title="App Controlled Smart Bedroom Lighting"
          width={260}
        />
        <PerkCard
          headline="Smart Environmental Sensors"
          text="Integrated sensors for precise measurements of air quality (CO₂e and TVOC), temperature, and humidity."
          src={SmartEnvironmental}
          alt="Smart bedroom lighting system with integrated sensors that monitor air quality temperature and humidity for a healthier environment"
          title="Smart Environmental Sensors"
          width={260}
        />
      </div>
         <div className="sm:hidden pl-5">
              <Swiper
                slidesPerView={1.3}
                spaceBetween={1}
                pagination={false}
                navigation={false}
              >
                {perks.map((perk, index) => (
                  <SwiperSlide key={index}>
                    <PerkCard {...perk} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
     <p className="font-bold text-3xl mx-auto">Product Gallery</p>
      <div className="relative m-auto w-full mt-5">
        <Swiper
      slidesPerView={5.5}
          spaceBetween={0}
          className="mySwiper"
          centeredSlides={true}
          pagination={{ clickable: true }}
          navigation={false} 
          modules={[Autoplay, Pagination]}
           breakpoints={{
    0: { slidesPerView: 1, centeredSlides: true },      
    640: { slidesPerView: 2, centeredSlides: false },  
    1024: { slidesPerView: 2.8, centeredSlides: true }, 
  }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateSlideOpacities(swiper);
          }}
          onSlideChange={(swiper) => updateSlideOpacities(swiper)}
        >
          <SwiperSlide>
            <Image
              src={zlighSwipper}
              alt="Smart thermostat system showcase"
              title="Smart Thermostat System"
              width={430}
              height={400}
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={zlighSwipper}
              alt="Smart thermostat system with HVAC control"
              title="HVAC Control Thermostat"
              width={430}
              height={400}
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={zlighSwipper}
              alt="Wireless thermostat system"
              title="Wireless Thermostat System"
              width={430}
              height={400}
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={zlighSwipper}
              alt="Thermostat system integration"
              title="System Integration"
              width={430}
              height={400}
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={zlighSwipper}
              alt="Contractor training for thermostat system"
              title="Contractor Training"
              width={430}
              height={400}
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={zlighSwipper}
              alt="Modular hardware design for thermostat"
              title="Modular Hardware Design"
              width={430}
              height={400}
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={zlighSwipper}
              alt="Modular hardware design for thermostat"
              title="Modular Hardware Design"
              width={430}
              height={400}
              className="object-cover"
            />
          </SwiperSlide>
        </Swiper>
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-1/3 cursor-pointer top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#FFFFFF66] rounded-full flex items-center justify-center shadow z-50 hover:bg-gray-400 transition-all duration-75
          max-sm: max-sm:top-[88%] max-sm:-translate-x-30
          "
        >
          <img src="/Arrow.svg" className=" w-5 h-5" />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-1/3 top-1/2 transform  cursor-pointer -translate-y-1/2 w-10 h-10 bg-[#FFFFFF66] rounded-full flex items-center justify-center shadow z-50 hover:bg-gray-400 transition-all duration-75
          max-sm: max-sm:top-[88%] max-sm:translate-x-30"
        >
          <img src="/Arrow.svg" className="w-5 h-5 rotate-180" />
        </button>
      </div>
      <p className="font-bold text-4xl mx-auto">Final Result</p>
           <p className="font-bold  mx-auto w-[491px] text-center mb-14 max-sm:w-auto">
        The zLight is a small, all-in-one device that brings together wireless
        charging, smart lighting, and environmental sensing. It contributes to a
        more restful and healthy bedtime routine. 
      </p>
    </div>
  );
}

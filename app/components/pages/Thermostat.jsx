"use client"
import ThermostatIcon from "../../../public/thermostat/smart-thermostat-system-copy.jpg";
import Image from "next/image";
import ThermostatHvac from "../../../public/thermostat/smart-thermostat-system-hvac-control.png";
import ThermoBox from "../../../public/thermostat/thermostatBox.svg";
import Highlight from "../Highlight";
import WirelessThermostat from "../../../public/thermostat/wireless-thermostat-system.png";
import SystemIntegration from "../../../public/thermostat/smart-thermostat-system-integration.png";
import SystemContractor from "../../../public/thermostat/smart-thermostat-system-contractor-training.png";
import ModularHardware from "../../../public/thermostat/modular-hardware-design.png";
import PerkCard from '../PerkCard';
import EnergyEfficiency from "../../../public/thermostat/energy-efficiency.png";
import PrecisionSensors from "../../../public/thermostat/precision-sensors.png";
import IntuitiveInterface from "../../../public/thermostat/intuitive-interface.png";
import ModularScalable from "../../../public/thermostat/modular-and-scalable-hardware.png";
import ContractorSupport from "../../../public/thermostat/contractor-support.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ThermostatSwiper from '../../../public/thermostat/ThermostatSwiper.png';
import { useEffect, useRef } from "react";

export default function Thermostat() {
  const swiperRef = useRef(null);

  // Function to update slide opacities
  const updateSlideOpacities = (swiper) => {
    const slides = swiper.slides;
    slides.forEach((slide, index) => {
      if (index === swiper.activeIndex) {
        slide.style.opacity = 1; // Middle slide full opacity
      } else {
        slide.style.opacity = 0.5; // Side slides reduced opacity
      }
    });
  };

  return (
    <div className="flex flex-col mx-[171px] mt-[91px] gap-[50px] m-auto">
      <div className="flex gap-3.5 m-auto">
        <Image
          src={ThermostatIcon}
          alt="Smart thermostat system for home climate control with energy-saving automation and wireless temperature management"
          title="Smart Thermostat System for Home Climate Control z-0"
        />
        <div className="flex flex-col gap-11 w-[358px] z-10 bg-transparent">
          <h1 className="text-[56px] font-bold leading-14">
            Smart Thermostat System
          </h1>
          <p>
            The Smart Thermostat System is a smart system that simplifies home
            climate control with an intuitive interface and optimized energy
            management. Featuring custom schedules, live weather updates, and
            air quality monitoring, it gives users complete control over
            heating, cooling, and ventilation.
            <br /> <br /> Designed with homeowners in mind, the system combines
            ease of use with accessible installation guides and troubleshooting
            tools, ensuring smooth setup and efficient operation.
          </p>
        </div>
      </div>
      <div className="bg-[#dfdfe4] h-[502px] flex gap-[38px] rounded-[30px] p-8">
        <Image
          src={ThermostatHvac}
          width={396}
          height={426}
          alt="Smart thermostat system with wireless sensors for HVAC control, featuring web access, display interface, and energy-efficient automation"
          title="Smart Thermostat System with Wireless Sensors and HVAC Control"
        />
        <div className="flex flex-col gap-[38px]">
          <p className="font-bold text-3xl">Technical approach</p>
          <p>
            The thermostat is designed to operate with standard HVAC systems. It
            offers two methods for user interaction and programming: through its
            built-in display and interface controls, over the Internet via web
            hosting. The thermostat operates using remote sensors that measure
            temperature and humidity. Even minor cosmetic enhancements
            introduced mechanical and electrical challenges, which were
            addressed and resolved during development. Additional features
            include a user interface with system status indicators, a
            self-diagnostics function for reliable operation across seasonal or
            climate changes, and integrated pressure sensors to detect open
            windows or possible duct damage. The thermostat is made up of a main
            unit and a backplate. The main unit includes the main processor and
            the user interface display, while the backplate provides connection
            with the HVAC system and represents the switching system. For
            switching, solid-state relays were used in pairs with overcurrent
            protection circuitry.
          </p>
        </div>
      </div>
      <div className="m-auto p-1 rounded-[10px] border-[#dedede] border bg-[#f1f1f1]">
        <Image src={ThermoBox} alt="" />
      </div>
      <p className="m-auto text-3xl font-bold">Process Highlights</p>
      <div className="flex gap-6 m-auto">
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
      <div className="m-auto w-[1098px]">
        <p className="font-bold text-[32px] text-left">Perks</p>
      </div>
      <div className="flex gap-5 m-auto">
        <PerkCard
          headline="Adaptive Control for Energy Efficiency"
          text="Regulates heating, cooling, and ventilation through smart scheduling, weather integration, and air quality feedback to enhance comfort and improve HVAC energy efficiency."
          src={EnergyEfficiency}
          alt="Smart thermostat system for home climate control with adaptive energy-saving thermostat features"
          title="Adaptive Control for Energy Efficiency in Smart Thermostat System"
        />
        <PerkCard
          headline="Precision Sensors and Reliable Connectivity"
          text="Equipped with multiple temperature and pressure sensors, adaptive algorithms, and optimized RF components to ensure accurate readings and stable communication."
          src={PrecisionSensors}
          alt="Smart thermostat system with thermostat sensors and wireless connectivity"
          title="Precision Sensors and Reliable Connectivity in Smart Thermostat System"
        />
        <PerkCard
          headline="Intuitive Interface and Self-Diagnostics"
          text="Features a clear, easy-to-use interface with real-time status indicators and built-in self-diagnostics for dependable operation across different seasons and environments."
          src={IntuitiveInterface}
          alt="Smart thermostat system with intuitive interface and self-diagnostics"
          title="Intuitive Interface and Self-Diagnostics in Smart Thermostat System"
        />
      </div>
      <div className="flex gap-5 m-auto">
        <PerkCard
          headline="Modular and Scalable Hardware Design"
          text="Built on a modular main unit and backplate structure for easy maintenance, future upgrades, and efficient power management to extend battery life in wireless versions."
          src={ModularScalable}
          alt="Smart thermostat system with modular and scalable thermostat hardware"
          title="Modular and Scalable Hardware Design in Smart Thermostat System"
        />
        <PerkCard
          headline="Contractor-Friendly Support and Integration"
          text="Designed with professionals in mind, offering clear installation guides, troubleshooting tools, and training to simplify setup, maintenance, and system updates."
          src={ContractorSupport}
          alt="Energy-saving thermostat with contractor-friendly support, installation guides, and troubleshooting tools"
          title="Contractor-Friendly Support and Integration in Smart Thermostat System"
        />
      </div>
      {/* Swiper Component */}
      <div className="m-auto w-[1098px] mt-[50px]">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateSlideOpacities(swiper);
          }}
          onSlideChange={(swiper) => updateSlideOpacities(swiper)}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src={ThermostatSwiper}
              alt="Smart thermostat system showcase"
              title="Smart Thermostat System"
              width={366}
              height={400}
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={ThermostatHvac}
              alt="Smart thermostat system with HVAC control"
              title="HVAC Control Thermostat"
              width={366}
              height={400}
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={WirelessThermostat}
              alt="Wireless thermostat system"
              title="Wireless Thermostat System"
              width={366}
              height={400}
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={SystemIntegration}
              alt="Thermostat system integration"
              title="System Integration"
              width={366}
              height={400}
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={SystemContractor}
              alt="Contractor training for thermostat system"
              title="Contractor Training"
              width={366}
              height={400}
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={ModularHardware}
              alt="Modular hardware design for thermostat"
              title="Modular Hardware Design"
              width={366}
              height={400}
              className="object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
"use client";
import MoonIcon from "../../../public/moon/smart-home-hub.jpg";
import Image from "next/image";
import SmartHomeHub from "../../../public/moon/smart-home-hub-360-degree-camera.png";
import MoonBox from "../../../public/moon/MoonBox.svg";
import Highlight from "../Highlight";
import MoonBy1Ring from "../../../public/moon/moon-by-1-ring.png";
import IntegratedSensors from "../../../public/moon/integrated-sensors.png";
import SmartDeviceIntegration from "../../../public/moon/smart-device-integration.png";
import MagneticLevitationDesign from "../../../public/moon/magnetic-levitation-design.png";
import PerkCard from "../PerkCard";
import SmartHomeSecuritySystem from "../../../public/moon/smart-home-security-system.png";
import MultiProtocolConnectivity from "../../../public/moon/multi-protocol-connectivity.png";
import SensorsAutomation from "../../../public/moon/sensors-automation.png";
import HomeAutomationSystem from "../../../public/moon/home-automation-system.png";
import CameraSystem from "../../../public/moon/camera-system.png";
import HomeAutomationController from "../../../public/moon/home-automation-controller.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ThermostatSwiper from "../../../public/thermostat/ThermostatSwiper.png";
import { useRef } from "react";
import "../../globals.css";
export default function moon() {
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

  return (
    <div className="flex flex-col  mt-[91px] gap-[50px] m-auto">
      <div className="w-[1098px]   mx-auto">
        <div className="flex justify-end gap-12">
          <Image
            src={MoonIcon}
            alt="Advanced smart home hub for home automation and security with 360-degree monitoring and centralized device control"
            title="Advanced Smart Home Hub for Automation and Security"
          />
          <div className="flex flex-col gap-5 w-[358px] z-10 bg-transparent">
            <h1 className="text-[56px] font-bold leading-14">Moon by 1-Ring</h1>
            <p className="font-bold text-2xl">
              Transforming Smart Home Technology
            </p>
            <p>
              Moon by 1-Ring is a smart home security and automation system that
              brings all your devices together in one place. It keeps an eye on
              your home, automates everyday tasks, and offers all-around
              coverage, while working with Wi-Fi, Bluetooth, Zigbee, and Z-Wave
              so everything just connects and works smoothly.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#dfdfe4] h-[502px] mx-[171px] flex gap-[38px] rounded-[30px] p-8">
        <Image
          src={SmartHomeHub}
          width={396}
          height={426}
          alt="Smart thermostat system with wireless sensors for HVAC control, featuring web access, display interface, and energy-efficient automation"
          title="Smart Thermostat System with Wireless Sensors and HVAC Control"
        />
        <div className="flex flex-col gap-[38px]">
          <p className="font-bold text-3xl">Technical approach</p>
          <p>
            The Moon project was designed to be the central home automation hub
            for a smart home system, bringing devices together in a seamless,
            intuitive way. From the start, our focus was on creating a system
            that was compact, efficient, and stable. To achieve this, we
            selected high-performance, low-power processors, advanced sensors,
            and a 360-degree HD camera to support security, automation, and
            environmental monitoring. The home automation controller also
            supported Wi-Fi, Bluetooth, Zigbee, and Z-Wave, making it compatible
            with a wide variety of devices. While the system was designed to be
            compact and efficient, integrating high-performance streaming
            hardware with a System on Module (SOM) required careful management
            of power and heat. This ensured smooth full-view video streaming
            while maintaining reliable performance for other smart home
            functions.
          </p>
        </div>
      </div>
      <div className="m-auto p-1 rounded-[10px] border-[#dedede] border bg-[#f1f1f1]">
        <Image src={MoonBox} alt="" />
      </div>
      <p className="m-auto text-3xl font-bold">Process Highlights</p>
      <div className="flex gap-6 m-auto">
        <div className="flex flex-col gap-3">
          <Highlight
            src={MoonBy1Ring}
            alt="Moon by 1-Ring smart home hub combining smart home sensors and automation features"
            title="Moon by 1-Ring Smart Home Hub with Sensors and Automation"
            text="The ball-shaped device includes a camera on one side and microphones on all four sides, giving it a complete view and awareness of its surroundings. It actively responds to sound, detecting nearby sounds and automatically sending alerts or starting live streaming to your phone when something happens."
            isLeft={true}
          />
          <Highlight
            src={IntegratedSensors}
            alt="Compact smart home hub with integrated sensors and camera optics"
            title="Compact Smart Home Hub with Integrated Sensors and Camera Optics"
            text="The hub’s small size required thoughtful integration of high-quality sensors, a proper matrix, and camera optics for streaming. Using a System on Module (SOM) helped address these constraints while enabling smooth live streaming. These experiences provided valuable lessons in hardware selection, thermal management, and system prioritization that continue to guide our work."
            isLeft={true}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Highlight
            src={SmartDeviceIntegration}
            alt="Moon by 1-Ring smart home hub designed for efficient smart device integration "
            title="Efficient Device Integration"
            text="The Moon hub was created to bring diverse smart devices together seamlessly and efficiently. During development, we focused on building a compact, high-performance system with full 360-degree coverage. Careful hardware selection involved extensive research and testing to balance power, reliability, and efficiency."
            isLeft={false}
          />
          <Highlight
            src={MagneticLevitationDesign}
            alt="Moon by 1-Ring smart home hub with levitating magnetic ball"
            title="Moon by 1-Ring Smart Home Hub with Magnetic Levitation Design"
            text="We carefully engineered and calculated the magnetic mechanics to make the levitation work precisely, allowing the ball to float steadily and move smoothly up and down as intended. The ball was compact and lightweight and also contained built-in magnets, making it easy to place on the fridge or any other metal surface, which added to the practicality and usability of the system."
            isLeft={false}
          />
        </div>
      </div>
      <div className="m-auto w-[1098px]">
        <p className="font-bold text-[32px] text-left">Perks</p>
      </div>
      <div className="flex gap-5 m-auto">
        <PerkCard
          headline="Central Processing Unit (CPU)"
          text="High-performance, low-power CPU for complex computations, seamless multitasking, and efficient automation."
          src={SmartHomeSecuritySystem}
          alt="Smart home security system with high-performance low-power CPU designed for efficient automation, seamless multitasking, and reliable smart home technology"
          title="High-Performance CPU for Smart Home Automation Hub"
          width={352}
        />
        <PerkCard
          headline="Connectivity"
          text="Supports Wi-Fi, Bluetooth, Zigbee, and Z-Wave, enabling seamless communication and compatibility with a wide range of smart devices."
          src={MultiProtocolConnectivity}
          alt="Smart device integration and reliable home automation"
          title="Smart Home Hub with Multi-Protocol Connectivity"
          width={352}
        />
        <PerkCard
          headline="Sensors"
          text="Ambient light, temperature, and motion sensors for real-time environmental monitoring, intelligent adjustments and automation across the smart home ecosystem."
          src={SensorsAutomation}
          alt="Smart home hub with ambient light, temperature, and motion sensors for intelligent automation and real-time monitoring across the smart home ecosystem"
          title="Smart Home Hub with Ambient Light, Temperature, and Motion Sensors"
          width={352}
        />
      </div>
      <div className="flex gap-5 m-auto">
        <PerkCard
          headline="Camera System"
          text="360-degree HD panoramic camera providing comprehensive home surveillance and activity monitoring."
          src={HomeAutomationSystem}
          alt="Smart home hub camera system with HD panoramic view for comprehensive home surveillance and intelligent monitoring within the smart home security system"
          title="HD Panoramic Camera System for Smart Home Security"
          width={352}
        />
        <PerkCard
          headline="Sound-Responsive Detection"
          text="Equipped with a camera on one side and microphones on all four sides, the device reacts to nearby sounds by sending alerts or starting a live stream to your phone."
          src={CameraSystem}
          alt="Smart home hub camera system with HD panoramic view for comprehensive home surveillance and intelligent monitoring within the smart home security system"
          title="HD Panoramic Camera System for Smart Home Security"
          width={352}
        />
        <PerkCard
          headline="Automation & Security"
          text="Customizable automation and security features that are energy-efficient and designed to protect your home."
          src={HomeAutomationController}
          alt="Home automation controller with customizable automation and energy-efficient smart home security features for reliable protection and home control"
          title="Customizable Automation and Security in Smart Home Hub"
          width={352}
        />
      </div>
      <p className="font-bold text-3xl mx-auto">Product Gallery</p>
      <div className="relative m-auto w-full mt-5">
        <Swiper
          slidesPerView={2.8}
          spaceBetween={10}
          className="mySwiper"
          centeredSlides={true}
          pagination={{ clickable: true }}
          navigation={false} 
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateSlideOpacities(swiper);
          }}
          onSlideChange={(swiper) => updateSlideOpacities(swiper)}
        >
          <SwiperSlide>
            <Image
              src={ThermostatSwiper}
              alt="Compact smart home hub with integrated sensors and camera"
              title="Compact Smart Home Hub with Sensors and Camera"
              width={366}
              height={400}
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={ThermostatSwiper}
              alt="Smart home hub showing seamless smart device integration within a home automation ecosystem"
              title="Smart Home Hub for Device Integration"
              width={366}
              height={400}
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={ThermostatSwiper}
              alt="Moon by 1-Ring providing home automation and smart home security system control in one device"
              title="Automation and Security"
              width={366}
              height={400}
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={ThermostatSwiper}
              alt="Thermostat system integration"
              title="System Integration"
              width={366}
              height={400}
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={ThermostatSwiper}
              alt="Contractor training for thermostat system"
              title="Contractor Training"
              width={366}
              height={400}
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={ThermostatSwiper}
              alt="Modular hardware design for thermostat"
              title="Modular Hardware Design"
              width={366}
              height={400}
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={ThermostatSwiper}
              alt="Modular hardware design for thermostat"
              title="Modular Hardware Design"
              width={366}
              height={400}
              className="object-cover"
            />
          </SwiperSlide>
        </Swiper>
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-1/3 cursor-pointer top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#FFFFFF66] rounded-full flex items-center justify-center shadow z-50 hover:bg-gray-400 transition-all duration-75"
        >
          <img src="/Arrow.svg" className=" w-5 h-5" />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-1/3 top-1/2 transform  cursor-pointer -translate-y-1/2 w-10 h-10 bg-[#FFFFFF66] rounded-full flex items-center justify-center shadow z-50 hover:bg-gray-400 transition-all duration-75"
        >
          <img src="/Arrow.svg" className="w-5 h-5 rotate-180" />
        </button>
      </div>
      <p className="font-bold text-4xl mx-auto">Final Result</p>
      <p className="font-bold  mx-auto w-[491px] text-center mb-14">
        The Moon project created a smart home hub that brings devices together,
        automates tasks, and provides all-around home monitoring. Its sensors,
        high-performance CPU, and innovative design show a practical and
        forward-thinking approach to smart home technology.<br/> <br/> The Moon project was
        fully developed and successfully completed on our side, including a
        working prototype, though production was not implemented due to
        marketing considerations. For future collaborators: We invite you to
        discover the potential for collaboration in bringing the Moon project to
        life and set new standards in smart home technology.
      </p>
    </div>
  );
}

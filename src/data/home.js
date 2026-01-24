import HardwareDesignCompany from "@/public/main/hardware-design-company.png";
import CustomGardwareDesign from "@/public/main/custom-hardware-design.png";
import ProductTestingValidation from "@/public/main/product-testing-validation.png";
import ConsultingTechnicalSupport from "@/public/main/consulting-technical-support.png";
import SecurityAndCybersecurity from "@/public/main/security-and-cybersecurity.png";
import SmartHomeIotDevices from "@/public/main/smart-home-iot-devices.png";
import IndustrialAutomation from "@/public/main/industrial-automation.png";
import MoonSmartHomeTechnology from "@/public/main/moon-smart-home-technology.png";
import SmartThermostatSystems from "@/public/main/smart-thermostat-systems.jpg";
import ZlightSmartBedroomLightingHardware from "@/public/main/zlight-smart-bedroom-lighting-hardware.png";
import Nuve from "@/public/main/nuve.png";
import Instigate from "@/public/main/instigate.png";
import Lumiere from "@/public/main/lumiere.png";
import Lanar from "@/public/main/lanar.png";
import Lucidtron from "@/public/main/lucidtron.png";
import Zlight from "@/public/main/zlight.png";
import Is from "@/public/main/is.png";
import Teona from "@/public/main/teona.png";
import Arthur from "@/public/aboutus/arthur-movsesyan.png";
import Gevorg from "@/public/aboutus/gevorg-martirosyan.png";
import MoonByRing from "@/public/main/moon-by-ring.png";
import SecondSlide from "@/public/main/SecondSlide.png";
import ThirdSlide from "@/public/main/ThirdSlide.png";
import FourthSlide from "@/public/main/FourthSlide.svg";
export const HOME_DATA = {
 heroes : [
  {
    image: HardwareDesignCompany,
    alt: "Engineers working on electronic components at a hardware design company creating innovative devices and systems",
    title: "Hardware Design Company",
    welcomeText: "Welcome to Hardware Design House",
   
  },
  {
    image: SecondSlide,
    alt: "Advanced PCB and electronic design solutions",
    title: "Advanced Hardware Engineering",
    welcomeText:"CES. January 6–9",
    subText:"Our team is heading to CES, ready to connect, exchange ideas, and get inspired by the newest shifts in technology. Open for meetings on future technology initiatives.",
  },
  {
    image: ThirdSlide,
    alt: "Prototype development and testing",
    title: "Prototype & Validation",
    welcomeText:"Embedded world. March 6–9",
    subText:"Meeting our partners and connecting with new ones in the embedded world.Let’s talk about embedded solutions and partnership opportunities.",
  },
  {
    image: FourthSlide,
    alt: "End-to-end hardware product development",
    title: "From Concept to Production",
    welcomeText:"Ongoing partnership since 2024",
    subText:"We have been official MediaTek partners since 2024.Working together to deliver advanced and innovative hardware solutions.",
  },
],
welcomeTitle:"Welcome to Hardware Design House",
welcomeDescription: "At HDH, we transform innovative ideas into real-world hardware solutions. As a leading hardware design company, we support each stage of development, from initial concept to full-scale production. Our team combines deep engineering expertise with cutting-edge technology to create devices and systems that are reliable, efficient, and market-ready. Whether it’s hardware design services, custom hardware development, or end-to-end hardware development, HDH is your trusted partner in turning ideas into reality.",
  services: {
    title: "Services",
    allLink: "/services",
    allButtonText: "See All Services",
    items: [
      {
        image: ProductTestingValidation,
        alt: "Engineers creating custom hardware design solutions at a hardware design company for innovative and durable devices",
        imageTitle: "Custom Hardware Design",
        title: "Custom Hardware Design",
        text: "We develop tailored solutions that balance functionality, durability, and innovative design, engineered to meet your unique technical and business requirements.",
        href: "/services/custom-hardware-design",
      },
      {
        image: CustomGardwareDesign,
        alt: "Engineers conducting product testing and validation at a hardware design company to ensure performance and safety standards",
        imageTitle: "Product Testing and Validation Services",
        title: "Product Testing and Validation",
        text: "From prototype to production, we perform rigorous product prototyping and testing to ensure top performance, compliance, and safety standards.",
        href: "/services/product-testing-and-validation",
      },
      {
        image: ConsultingTechnicalSupport,
        alt: "Hardware design company experts providing consulting and technical support to optimize hardware performance and product lifecycle",
        imageTitle: "Consulting and Technical Support Services",
        title: "Consulting and Technical Support",
        text: "Our experts provide design reviews, performance upgrades, and optimization guidance. We help refine your product, extend its lifecycle, and keep it competitive, leveraging our extensive hardware engineering expertise.",
        href: "/services/iot-consulting-services",
      },
    ],
  },
  industries: {
    title: "Industries",
    allLink: "/industries",
    allButtonText: "See All Industries",
    items: [
      {
        image: SecurityAndCybersecurity,
        alt: "Security and cybersecurity hardware solutions for access control and threat detection",
        imageTitle: "Security and Cybersecurity Hardware Solutions",
        title: "Security and Cybersecurity",
        text: "As a trusted electronic design company, we provide advanced hardware solutions for protection, monitoring, and secure communications. Our hardware design services include access control, surveillance, and threat detection systems to safeguard critical assets.",
        href: "/industries/security-and-cybersecurity/",
        
      },
      {
        image: SmartHomeIotDevices,
        alt: "Smart home automation and IoT devices for connected, energy-efficient living",
        imageTitle: "Smart Home Automation and IoT Device Solutions",
        title: "Smart Home Automation and IoT Devices",
        text: " From Wi-Fi to Zigbee and Z-Wave, we build intelligent connected devices that enhance comfort, convenience, and energy efficiency. Our custom hardware development ensures seamless integration into modern smart-home ecosystems.",
        href: "/industries/smart-home-automation/",
        
      },
      {
        image: IndustrialAutomation,
        alt: "Industrial automation solutions for efficient control, monitoring, and process optimization",
        imageTitle: "Industrial Automation Hardware",
        title: "Industrial Automation Solutions",
        text: "Our hardware engineering company expertise delivers robust systems for precise control, monitoring, and process optimization. With end-to-end hardware development and product prototyping and testing, we help industries increase efficiency and reliability.",
        href: "/industries/industrial-automation/",
        
      },
    ],
  },
  projects: {
    title: "Projects",
    allLink: "/projects",
    allButtonText: "See All Projects",
    items: [
      {
        image: MoonSmartHomeTechnology,
        alt: "Moon smart home technology for connected automation and secure home control",
        imageTitle: "Moon Smart Home Technology",
        title: "Moon by 1-Ring: Transforming Smart Home Technology",
        text: "Moon by 1-Ring unifies all your devices, automates daily tasks, and keeps your home secure, connecting seamlessly via Wi-Fi, Bluetooth, Zigbee, and Z-Wave.",
        href: "/projects/smart-home-hub",
        cardMaxW: "w-[40%]",
        sectionH: "h-[190px] max-xl:h-auto",
        mobileImage: MoonByRing,
      },
      {
        image: SmartThermostatSystems,
        alt: "Smart thermostat systems for precise home climate control and energy efficiency",
        imageTitle: "Smart Thermostat Systems",
        title: "Smart Thermostat System  ",
        text: " Effortless home climate control with a user-friendly design. Custom schedules, live weather updates, and air quality monitoring give you full control over heating, cooling, and ventilation.",
        href: "/projects/smart-thermostat-system",
        cardMaxW: "w-[30%] max-md:max-w-[353px]",
        sectionH: "h-[260px] max-xl:h-full",
      },
      {
        image: ZlightSmartBedroomLightingHardware,
        alt: "zLight smart bedroom lighting system for automated lighting and environmental control",
        imageTitle: "zLight Smart Bedroom Lighting System",
        title: "zLight Smart Bedroom Lighting System",
        text: "A compact, all-in-one device integrating wireless charging, smart lighting, and environmental sensing. Automatically adjusts light and temperature to promote relaxation and better sleep.",
        href: "/projects/smart-bedroom-lighting-system",
        cardMaxW: "w-[30%] max-md:max-w-[353px]",
        sectionH: "h-[260px] max-xl:h-full",
      },
    ],
  },
  partners: {
    title: "Our Partners",
    logos: [
      { src: Nuve, alt: "Nuve company logo", title: "Nuve" },
      { src: Lumiere, alt: "Lumiere company logo", title: "Lumiere" },
      { src: Instigate, alt: "Instigate company logo", title: "Instigate" },
      { src: Lanar, alt: "Lanar company logo", title: "Lanar" },
      { src: Is, alt: "IS company logo", title: "IS" },
      { src: Teona, alt: "Teona company logo", title: "Teona" },
      { src: Lucidtron, alt: "Lucidtron company logo", title: "Lucidtron" },
      { src: Zlight, alt: "Zlight company logo", title: "Zlight" },
    ],
  },
  about: {
    title: "About us",
    description:
      "HDH is a dedicated hardware design company focused on innovation, quality, and reliability. With years of experience across multiple industries, we provide complete hardware development, from concept design and prototyping to full-scale manufacturing and system optimization. Our multidisciplinary team of engineers, designers, and technical experts collaborates directly with clients to understand their goals, overcome complex challenges, and deliver hardware solutions that are powerful, scalable, and future-ready.",
    teamTitle: "Meet Our Team",
    teamPoints: [
      "Skilled professionals with diverse expertise in hardware development.",
      "Engineers, designers, and innovators working together to turn your ideas into functional high-quality products.",
    ],
    members: [
      {
        image: Arthur,
        alt: "Arthur Movsesyan Co-Founder and CEO of HDH",
        title: "Arthur Movsesyan, Co-Founder and CEO of HDH",
        name: "Arthur Movsesyan",
        position: "Co-Founder, CEO at Hardware Design House",
      },
      {
        image: Gevorg,
        alt: "Gevorg Martirosyan, Co-Founder and CTO of HDH",
        title: "Gevorg Martirosyan, Co-Founder and CTO of HDH",
        name: "Gevorg Martirosyan",
        position: "Co-Founder, CTO at Hardware Design House",
      },
    ],
  },
  structuredData: [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Hardware Design House",
      alternateName: "HDH",
      url: "https://www.hardwarehouses.com/",
      description:
        "Hardware Design House (HDH) is a hardware design company delivering custom hardware development, prototyping, testing, and full-cycle engineering solutions for IoT, defense, healthcare, industrial automation, and more.",
      email: "info@hardwarehouses.com",
      telephone: ["+37455342262", "+37441777704"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "3 Hakob Hakobyan Street",
        addressLocality: "Yerevan",
        postalCode: "0033",
        addressCountry: "AM",
      },
      sameAs: [
        "https://www.linkedin.com/company/hardware-design-house-hdh/",
        "https://www.facebook.com/hardwaredesignhouse/",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: "https://www.hardwarehouses.com/",
      name: "Hardware Design House (HDH)",
      description:
        "HDH is a hardware design company delivering custom product development, prototyping, testing, and full-cycle solutions for IoT, defense, healthcare, and more.",
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      url: "https://www.hardwarehouses.com/",
      name: "Leading Hardware Design Company | HDH",
      headline: "Leading Hardware Design Company | HDH",
      description:
        "HDH is a hardware design company delivering custom product development, prototyping, testing, and full-cycle solutions for IoT, defense, healthcare, and more.",
      inLanguage: "en",
    },
  ],
};
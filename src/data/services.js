import HardwareDesignServices from "@/public/services/custom-hardware-design-services.png";
import PrototypeDevelopmentServices from "@/public/services/prototype-development-services.png";
import SystemArchitectureOptimizationServices from "@/public/services/system-architecture-optimization-services.png";
import ProductTestingValidationServices from "@/public/services/product-testing-validation-services.png";
import FullCycleManufacturingSupport from "@/public/services/full-cycle-manufacturing-support.png";
import ConsultingTechnicalAdvisory from "@/public/services/consulting-technical-advisory.png";
import HardwareUpdatesImprovements from "@/public/services/hardware-updates-improvements.png";
import MoonBy1Ring from "@/public/services/moon-by-1-ring.png";
import SmartThermostatSystem from "@/public/services/smart-thermostat-system.jpg";
import ZlightSmartBedroomLightingSystem from "@/public/services/zlight-smart-bedroom-lighting-system.webp";
export const ServiceHeading = [
  {
    title: "Full-Cycle Hardware Engineering Services",
    description:
      "HDH provides full-cycle hardware engineering services, combining electronics design services and embedded systems engineering expertise to deliver reliable, production-ready solutions. From concept and prototyping to testing and manufacturing, we ensure every stage of hardware design and development meets the highest standards of performance and quality.",
  },
];

export const ServiceCards = [
  {
    src: HardwareDesignServices,
    alt: "Custom hardware design services including schematic design, rapid prototyping, and scalable hardware development",
    title: "",
    textTitle: "Custom Hardware Design",
    description:
      "HDH delivers full-cycle custom hardware design services, from concept and schematic design to production-ready prototypes. Our team ensures reliable, high-performance, and scalable hardware. With rapid prototyping and tailored solutions, we help clients bring innovative products to market efficiently.",
    href: "/services/custom-hardware-design",
    mobileBg: "#091832",
  },
  {
    src: PrototypeDevelopmentServices,
    alt: "Prototype development services for functional prototypes supporting design validation and hardware engineering improvements",
    title: "",
    textTitle: "Prototype Development",
    description:
      "We bring product concepts to life quickly and accurately through functional prototypes that support design validation, performance testing, and a smooth transition to production, enabling teams to refine designs and identify improvements early in the development process.",
    href: "/services/prototype-development-services",
    mobileBg: "#264653",
  },
  {
    src: SystemArchitectureOptimizationServices,
    alt: "System architecture and optimization services ensuring efficient hardware design and embedded systems engineering",
    title: "",
    textTitle: "System Architecture and Optimization",
    description:
      "HDH ensures hardware, software, and embedded systems work together smoothly from the start. Our system architecture and optimization services simplify complex designs, improve efficiency, and identify potential issues early, providing a dependable foundation for scalable development.",
    href: "/services/embedded-system-architecture",
    mobileBg: "#403C38",
  },
  {
    src: ProductTestingValidationServices,
    alt: "Product testing and validation services for hardware, firmware, and embedded systems ensuring reliable performance",
    title: "",
    textTitle: "Product Testing and Validation",
    description:
      "We verify hardware, firmware, and system performance using advanced testing methods, giving teams confidence in product quality before production. Our approach catches issues early and confirms compliance with industry standards.",
    href: "/services/product-testing-and-validation",
    mobileBg: "#1B2631",
  },
  {
    src: FullCycleManufacturingSupport,
    alt: "Full-cycle manufacturing support services including sourcing, assembly, testing, and quality control for hardware engineering",
    title: "",
    textTitle: "Full-Cycle Manufacturing Support",
    description:
      "From validated prototype to finished product, HDH manages sourcing, assembly, testing, and quality control to ensure each batch meets the required standards and stays on schedule. Our strong DFM practices reduce production risks and bring high-quality electronics to market efficiently.",
    href: "/services/electronics-manufacturing-services",
    mobileBg: "#345070",
  },
  {
    src: ConsultingTechnicalAdvisory,
    alt: "Consulting and technical advisory services for embedded systems engineering and IoT hardware design",
    title: "",
    textTitle: "Consulting and Technical Advisory",
    description:
      "HDH offers practical IoT and engineering consulting to help teams make informed technical decisions. With deep experience in embedded systems and IoT architecture, we guide clients in refining designs, solving technical challenges, and selecting the right technologies for each project.",
    href: "/services/iot-consulting-services",
    mobileBg: "#1E261E",
  },
  {
    src: HardwareUpdatesImprovements,
    alt: "Hardware updates and improvements services including PCB redesigns and component upgrades for reliable hardware engineering",
    title: "",
    textTitle: "Hardware Updates and Improvements",
    description:
      "We keep your hardware modern, reliable, and efficient through smart upgrades, PCB redesigns, and component improvements. Updates are thoroughly tested for smooth integration and long-term reliability, whether refreshing legacy systems or enhancing current products.",
    href: "/services/hardware-updates-and-improvements",
    mobileBg: "#2D284D",
  },
];
export const ProjectSection = {
  title: "Explore the projects where we used these services",
  href: "/projects",
  buttonText: "All Projects",
  projects: [
    {
      image: ZlightSmartBedroomLightingSystem,
      Imagetitle: "",
      alt: "Smart bedroom lighting hardware design project with wireless charging and environmental sensing",
      title: "zLight Smart Bedroom Lighting System",
      description:
        "The zLight is a compact, all-in-one device that brings together wireless charging, smart lighting, and environmental sensing. It contributes to a more restful and healthy bedtime routine by automatically adjusting light and temperature conditions to promote relaxation and better sleep quality.",
      buttonText: "Learn more",
      href: "/projects/smart-bedroom-lighting-system",
    },
    {
      image: SmartThermostatSystem,
      Imagetitle: "",
      alt: "Smart thermostat hardware design project for climate control with scheduling and air quality monitoring",
      title: "Smart Thermostat System",
      description:
        "The Smart Thermostat System makes home climate control effortless with an intuitive, user-friendly design. With features like custom schedules, live weather updates, and air quality monitoring, it gives you full control over heating, cooling, and ventilation, without the hassle.",
      buttonText: "Learn more",
      href: "/projects/smart-thermostat-system",
    },
    {
      image: MoonBy1Ring,
      Imagetitle: "",
      alt: "Smart home hardware design projects with integrated system prototype development",
      title: "Moon by 1-Ring: Transforming Smart Home Technology",
      description:
        "The project aimed to be a big step forward in smart home technology, and it progressed to a working prototype phase. Even though it was paused at that stage due to technical constraints, it gave us a lot of valuable insights into system integration that we still carry into our projects today.",
      buttonText: "Learn more",
      href: "/projects/smart-home-hub",
    },
  ],
};
export const SERVICES_STRUCTURED_DATA = {
  collectionPage: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: "https://www.hardwarehouses.com/services/",
    name: "Full-Cycle Hardware Engineering Services | HDH",
    headline: "Full-Cycle Hardware Engineering Services",
    description:
      "Discover full-cycle hardware engineering services, including custom hardware design, prototyping, system architecture, testing and manufacturing support.",
    inLanguage: "en",
  },
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Core Hardware Engineering Services",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Custom Hardware Design",
        url: "https://www.hardwarehouses.com/services/custom-hardware-design",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Prototype Development",
        url: "https://www.hardwarehouses.com/services/prototype-development-services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "System Architecture and Optimization",
        url: "https://www.hardwarehouses.com/services/embedded-system-architecture",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Product Testing and Validation",
        url: "https://www.hardwarehouses.com/services/product-testing-and-validation",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Full-Cycle Manufacturing Support",
        url: "https://www.hardwarehouses.com/services/electronics-manufacturing-services",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Consulting and Technical Advisory",
        url: "https://www.hardwarehouses.com/services/iot-consulting-services",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Hardware Updates and Improvements",
        url: "https://www.hardwarehouses.com/services/hardware-updates-and-improvements",
      },
    ],
  },
};

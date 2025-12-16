import SmartHomeAutomationSystems from "@/public/industries/smart-home-automation-systems.png";
import SmartHomeAutomation from "@/public/industries/smart-home-automation.png";
import SecurityAndCybersecurity from "@/public/industries/security-and-cybersecurity.png";
import IndustrialAutomation from "@/public/industries/industrial-automation.png";
import HardwareSecurityAndCybersecurity from "@/public/industries/hardware-security-and-cybersecurity.png";
import HardwareSecuritySolutions from "@/public/industries/hardware-security-solutions.png";
import SmartHomeIot from "@/public/industries/smart-home-iot.png";
import IndustrialAutomationSystem from "@/public/industries/industrial-automation-system.png";
import IndustrialAutomationSolutions from "@/public/industries/industrial-automation-solutions.png";
import SolutionsForIndustrialAutomation from "@/public/industries/solutions-for-industrial-automation.png";
import SmartHomeIotDevices from "@/public/industries/smart-home-iot-devices.png";
import SecurityAndCybersecuritySolutions from "@/public/industries/security-and-cybersecurity-solutions.png";
export const INDUSTRY_DETAILS = {
  "smart-home-automation": {
    slug: "smart-home-automation",
    metaTitle: "Smart Home Automation and IoT Devices",
    hero:{
      icon: SmartHomeAutomationSystems,
      imageTitle: "Smart Home Automation Systems and Innovative loT Devices",
      imageAlt:"Smart home automation systems and innovative loT devices",
    },
    metaDescription:"Smart home automation, IoT devices and product development services by HDH. We build smart home systems, software and IoT hardware from concept to launch.",
    mainImage:{
      src: SmartHomeAutomation,
      imageTitle:"Smart Home Automation",
      imageAlt:"Smart home automation and loT devices"
},
    title: "Smart Home Automation and IoT Devices",
    description: `We specialize in developing smart home automation systems and innovative IoT devices that transform living spaces into connected, intelligent environments. Our team combines deep technical expertise with thoughtful design to deliver systems that are reliable, secure, and intuitive to use. From concept through prototype, we ensure every solution is scalable and built for the future.`,
    technologiesTitle: "Technologies and Expertise",
    technologiesText: `Our team combines cutting-edge smart home engineering with IoT software development, delivering seamless connectivity and smart functionality. We focus on product design and full-cycle development to ensure your IoT devices integrate perfectly into modern homes.`,
    expertiseList: [
      "Embedded systems and firmware for smart home IoT devices",
      "Architecture Design and Planning",
      "Wireless communication Wi-Fi, Zigbee, Bluetooth (BLE), Z-Wave, Lora, Thread, Cellular, RFID and custom radio solutions.",
      "Cloud integration, custom radio solutions and IoT software development",
      "Sensor integration for home automation products",
      "Energy management and automation protocols",
    ],
    benefitsTitle: "Benefits of Our Smart Home Automation and IoT Devices services",
    benefitsText: `Custom home automation systems tailored to your vision 
High reliability and security for smart home IoT devices 
Scalable automation solutions for future expansions 
Full-cycle support: smart home product design, prototyping, testing, and deployment`,
    otherIndustries: [
      {
        src: SecurityAndCybersecurity,
        text: "Security and Cybersecurity",
        alt: "Security and cybersecurity protection",
        title: "Security and Cybersecurity",
        href: "/industries/security-and-cybersecurity",
      },
      {
        src: IndustrialAutomation,
        text: "Industrial Automation Solutions",
        alt: "Hardware security solutions for industrial automation systems",
        title: "Industrial Automation",
        href: "/industries/industrial-automation",
      },

    ],
    faq: [
      {
        id: "ioi-devices",
        question: "What types of smart home IoT devices can HDH develop?",
        answer: "HDH develops a wide range of smart home IoT devices and home automation products, including connected lighting, thermostats, sensors, smart switches, controllers, and other custom solutions.",
      },
      {
        id: "hdh-handle",
        question: "Does HDH handle both hardware and software for smart home technology?",
        answer: "Yes. We provide end-to-end home IoT development, covering embedded systems, IoT software, mobile integration, and full smart home product development.",
      },
      {
        id: "project-timelines",
        question: "How secure are the smart home IoT devices you develop?",
        answer: "Security is a top priority. Our devices feature encrypted communication, secure firmware, and robust authentication protocols when needed.",
      },
    ],
  },


  "security-and-cybersecurity": {
    slug: "security-and-cybersecurity",
    metaTitle: "Hardware Security Solutions",
    hero:{
      icon: HardwareSecurityAndCybersecurity,
      imageTitle: "Security and Cybersecurity",
      imageAlt:"Hardware security solutions and access control systems protecting devices networks and physical spaces",
    },
    metaDescription:"Custom hardware security solutions for embedded systems, access control, TPM modules, firewalls, and IoT devices designed for trusted digital protection.",
    mainImage:{
      src: HardwareSecuritySolutions,
      imageTitle:"Hardware Security and Cybersecurity",
      imageAlt:"Secure embedded systems and modern authentication technologies"
},
    title: "Security and Cybersecurity",
    description: `We specialize in developing hardware security solutions and access control systems that protect devices, networks, and physical spaces. Our team combines expertise in secure embedded systems, cybersecurity hardware, and modern authentication technologies to deliver reliable and scalable protection. From concept to prototype, we ensure your products are future-ready, resilient, and fully aligned with industry standards.`,
    technologiesTitle: "Technologies and Expertise",
    technologiesText: `Our engineers leverage advanced embedded security solutions, encryption hardware, and security chips to create high-performance, secure systems. We focus on access control hardware, biometric access solutions, and hardware firewalls to secure both physical and digital assets.`,
   expertiseList: [
  "Access control systems and physical access control solutions",
  "Biometric security devices and biometric authentication systems",
  "Secure embedded systems and embedded security architectures",
  "Hardware firewalls and dedicated encryption hardware",
  "IoT security solutions and secure communication protocols",
],

    benefitsTitle: "Benefits of Our Security and Cybersecurity Services",
benefitsText: `Enhanced protection through hardware-based security and dedicated cybersecurity components
Advanced access control solutions for securing both physical and digital environments
Secure embedded systems and specialized security chips for connected devices
Scalable access control platforms and IoT protection technologies for evolving requirements
Full-cycle support: security system design, prototyping, testing, and deployment`,

    otherIndustries: [
      {
        src: SmartHomeIot,
        text: "Smart Home Automation and IoT Devices",
        alt: "Smart home and IoT security systems",
        title: "Smart Home and IoT",
        href: "/industries/security-and-cybersecurity",
      },
      {
        src: IndustrialAutomationSystem,
        text: "Industrial Automation Solutions",
        alt: "Industrial automation and IoT security systems",
        title: "Industrial Automation",
        href: "/industries/industrial-automation",
      },

    ],
    faq: [
  {
    id: "security-devices",
    question: "What types of security devices does HDH develop?",
    answer:
      "HDH develops hardware-based security devices designed to protect sensitive data and systems. This includes secure storage solutions, access control hardware, and custom security devices with built-in encryption.",
  },
  {
    id: "hardware-software-security",
    question: "Does HDH handle both hardware and software security solutions?",
    answer:
      "Yes. We provide end-to-end security solutions, covering secure hardware design, embedded protection technologies, firmware, and integrated access control systems.",
  },
  {
    id: "device-system-protection",
    question: "How do HDH security solutions protect devices and systems?",
    answer:
      "Our technologies combine hardware firewalls, secure embedded systems, and dedicated encryption components to deliver strong cybersecurity and reliable physical and digital access control.",
  },
],
  },


  "industrial-automation": {
    slug: "industrial-automation",
    metaTitle: "Industrial Automation Solutions",
    hero:{
      icon: IndustrialAutomationSolutions,
      imageTitle: "Industrial Automation Solutions",
      imageAlt:"Industrial automation and automotive systems ensuring precision and reliability",
    },
    metaDescription:"Custom hardware security solutions for embedded systems, access control, TPM modules, firewalls, and IoT devices designed for trusted digital protection.",
    mainImage:{
      src: SolutionsForIndustrialAutomation,
      imageTitle:"Industrial Automation Solutions",
      imageAlt:"Industrial automation and embedded systems in automotive HVAC and smart manufacturing"
},
    title: "Industrial Automation Solutions",
    description: `Our engineering team delivers advanced electronic and embedded solutions that perform flawlessly in demanding environments. 
With strong expertise across hardware, embedded software, sensing technologies, and industrial control systems, we deliver tailored solutions for automotive, industrial automation solutions, HVAC, environmental monitoring, and smart manufacturing. `,
    technologiesTitle: "Technologies and Expertise",
    technologiesText: `HDH brings together advanced electronics design, embedded intelligence, precision sensing, and industrial-grade system engineering to solve complex technical challenges. We specialize in building reliable, high-  platforms for industrial automation systems and industrial control systems, ensuring seamless integration into demanding industrial environments.`,
   expertiseList: [
  "Automation equipment design and robotics control",
  "Wired and wireless industrial communication protocols",
  "Cloud data acquisition, process monitoring, and analytics",
],

    benefitsTitle: "Benefits of Our Industrial automation solutions services",
benefitsText: `Rapid prototyping of industrial automation systems for faster deployment


Custom industrial automation solutions tailored to your workflows


Reliable, rugged industrial automation hardware for harsh environments


Scalable industrial automation control systems for expanding operations


Full-cycle support: industrial automation engineering, prototyping, testing, and deployment`,

    otherIndustries: [
      {
        src: SmartHomeIotDevices,
        text: "Smart Home Automation and IoT Devices",
        alt: "Smart home automation and IoT",
        title: "Smart Home and IoT Devices",
        href: "/industries/smart-home-automation",
      },
      {
        src: SecurityAndCybersecuritySolutions,
        text: "Security and Cybersecurity",
        alt: "Security and cybersecurity protection solutions",
        title: "Security and Cybersecurity Solutions",
        href: "/industries/security-and-cybersecurity",
      },

    ],
    faq: [
  {
    id: "industrial-automation-solutions",
    question: "What industrial automation solutions does HDH offer?",
    answer:
      "HDH builds industrial automation systems, automation equipment, and embedded systems designed for demanding industrial and automotive environments.",
  },
  {
    id: "custom-industrial-solutions",
    question: "Can HDH customize solutions for specific industrial needs?",
    answer:
      "Yes. We tailor industrial automation control systems, hardware, and embedded solutions to meet each client’s exact requirements and operating conditions.",
  },
  {
    id: "precision-reliability",
    question: "How do HDH solutions ensure precision and reliability?",
    answer:
      "Our systems combine advanced sensing, custom algorithms, and embedded intelligence to maintain high accuracy, reliability, and smooth operation in real-world industrial settings.",
  },
],
  },

};
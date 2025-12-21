import Zlight from "@/public/projects/smart-bedroom-lighting-hardware.png";
import Thermostat from "@/public/projects/smart-thermostat-hardware-design-project.png";
import Moon from "@/public/projects/smart-home-hardware-design-project.png";
import HighPrecision from "@/public/projects/high-precision-autonomous-navigation.png";
import HighSensitive from "@/public/projects/high-sensitive-vibration-tracking.png";
import EncryptedCommunications from "@/public/projects/encrypted-communications-hardware-design-project.png";
import SecureUsb from "@/public/projects/secure-usb-flash-drive-hardware-design-project.png";
import PoweredExoskeleton from "@/public/projects/powered-exoskeleton-hardware-design-project.png";
import Incognito from "@/public/projects/incognito.svg";

export const pageContent = {
  title: "Our Hardware Design Projects",
  subtitle:
    "At Hardware Design House, we specialize in delivering end-to-end hardware design projects, from concept and electronics engineering to embedded firmware, prototyping, and production support. Our team has built solutions across industrial, medical, consumer electronics, and secure communication systems, helping businesses turn innovative ideas into reliable, market-ready devices.",
  categoriesTitle: "Categories and Projects",
};

export const projectsData = {
  categories: {
    retail: {
      icon: "storefront",
      title: "Retail Hardware Design Projects",
      description:
        "Our retail projects deliver smart, practical solutions that blend innovative technology, precision sensing, and thoughtful design. We create connected devices that enhance comfort, well-being, and safety, while optimizing energy use and everyday convenience. Each solution is built to be reliable, intuitive, and seamlessly integrated into daily life, making homes smarter and more efficient.",
      projects: [
        {
          image: Zlight,
          Imagetitle: "Smart Bedroom Lighting",
          alt: "Smart bedroom lighting hardware design project with wireless charging and environmental sensing",
          title: "zLight Smart Bedroom Lighting System",
          description:
            "The zLight is a compact, all-in-one device that brings together wireless charging, smart lighting, and environmental sensing. It contributes to a more restful and healthy bedtime routine by automatically adjusting light and temperature conditions to promote relaxation and better sleep quality.",
          buttonText: "Learn more",
          href: "/projects/smart-bedroom-lighting-system",
        },
        {
          image: Thermostat,
          Imagetitle: "Smart Thermostat Hardware Design Project",
          alt: "Smart thermostat hardware design project for climate control with scheduling and air quality monitoring",
          title: "Smart Thermostat System",
          description:
            "The Smart Thermostat System makes home climate control effortless with an intuitive, user-friendly design. With features like custom schedules, live weather updates, and air quality monitoring, it gives you full control over heating, cooling, and ventilation, without the hassle.",
          buttonText: "Learn more",
          href: "/projects/smart-thermostat-system",
        },
        {
          image: Moon,
          Imagetitle: "Smart Home Hardware Design Project",
          alt: "Smart home hardware design projects with integrated system prototype development",
          title: "Moon by 1-Ring: Transforming Smart Home Technology",
          description:
            "The project aimed to be a big step forward in smart home technology, and it progressed to a working prototype phase. Even though it was paused at that stage due to technical constraints, it gave us a lot of valuable insights into system integration that we still carry into our projects today.",
          buttonText: "Learn more",
          href: "/projects/smart-home-hub",
        },
      ],
    },

    industrial: {
      icon: "settings",
      title: "Industrial Embedded Hardware Projects",
      description:
        "Our industrial projects focus on advancing hardware design with intelligent, data-driven solutions. We develop reliable, high-performance systems built for demanding environments, improving precision, safety, and operational efficiency. From vibration tracking in high-power motors to autonomous navigation for emergency responders, our embedded hardware projects combine durable engineering with real-time data analysis to support smarter, more dependable operations.",
      projects: [
        {
          image: HighSensitive,
          Imagetitle: "High Sensitive Vibration Tracking",
          alt: "High sensitive vibration tracking hardware design projects for monitoring high power motors with predictive analytics",
          title: "High-Sensitive Vibration Tracking System for High-Power Motors",
          description:
            "A high-sensitive vibration tracking system designed for precision monitoring of high-power motors. Combining robust hardware with AI-driven analytics, the system detects potential issues early, enables predictive maintenance, identifies anomalies, and optimizes motor performance. Built for demanding industrial environments, it reduces downtime, extends equipment lifespan, and provides real-time, actionable insights for smarter operational decisions.",
        },
        {
          image: HighPrecision,
          Imagetitle: "High Precision Autonomous Navigation",
          alt: "High precision autonomous navigation hardware design projects for emergency responders with real time tracking",
          title: "High-Precision Autonomous Navigation Systems for U.S.",
          description:
            "The high-precision autonomous navigation system is designed to help U.S. emergency responders, especially firefighters, navigate safely and efficiently through the toughest conditions. By combining advanced location tracking, real-time data, and rugged hardware, the system gives teams the guidance they need when every second counts. It can pinpoint the exact location of individual firefighters with an accuracy of up to 5 centimeters, providing unmatched situational awareness and safety in critical moments.",
        },
      ],
    },

    private: {
      icon: Incognito,
      title: "Private Hardware Design Projects",
      description:
        "At Hardware Design House, we are dedicated to building the next generation of secure, intelligent hardware systems. Our private projects focus on advancing encrypted communication and data protection through a blend of cutting-edge encryption, smart automation, and biometric technology. Every development is designed with reliability, flexibility, and future scalability in mind. By combining strong technical expertise with forward-thinking innovation, we are working toward a future where security and connectivity come together effortlessly, protecting information and empowering seamless communication across all environments.",
      projects: [
        {
          image: EncryptedCommunications,
          Imagetitle: "Encrypted Communications Hardware Design Project",
          alt: "Encrypted communications hardware design projects for secure autonomous wireless connectivity",
          title: "Autonomous System of Encrypted Communications",
          description:
            "The Highly Secure Wireless Autonomous Communication System (HSWACS) sets a new benchmark in secure, autonomous connectivity. Designed for demanding environments, it delivers reliable communication, advanced data protection, and intelligent control, all within a modular, future-ready framework. Built to perform when stability and security matter most, HSWACS represents the next step in resilient communication technology.",
        },
        {
          image: SecureUsb,
          Imagetitle: "Secure USB Flash Drive Hardware Design Project",
          alt: "Secure USB flash drive hardware design projects with advanced fingerprint recognition for sensitive data",
          title: "Highly Secure USB Flash Drive with Fingerprint Technology",
          description:
            "The primary objective of this project is to engineer a highly secure USB flash drive that incorporates advanced fingerprint recognition technology, aimed specifically at meeting the stringent security requirements of special services. This development project focuses on creating a hardware solution that ensures the utmost protection and privacy for sensitive data.",
        },
      ],
    },

    medical: {
      icon: "medkit",
      title: "Medical Hardware Development Projects",
      description:
        "Our medical projects focus on developing advanced hardware that supports rehabilitation and recovery. By combining precise engineering with medical expertise, we create reliable technologies that enhance mobility, strengthen therapy outcomes, and improve quality of life. We design each solution for safety, effectiveness, and real-world impact, ranging from powered exoskeletons to intelligent rehabilitation systems.",
      projects: [
        {
          image: PoweredExoskeleton,
          Imagetitle: "Powered Exoskeleton Hardware Design Project",
          alt: "Powered exoskeleton hardware design projects for movement disabilities and nervous system rehabilitation",
          title: "Powered Exoskeleton for Mobility and Neural Recovery",
          description:
            "The advancement of rehabilitation technology presents a new frontier in the treatment and support of individuals with movement disabilities and nervous system impairments. This project is a cutting-edge rehabilitation device designed to help individuals regain mobility and independence. Combining advanced sensors, responsive actuators, and an intuitive control interface, it adapts to each user's movements while supporting personalized therapy programs.",
        },
      ],
    },
  },
};
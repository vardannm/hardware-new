import IotHardwareDesign from "@/public/blog/iot-hardware-design.jpg";
import PcbLayoutGuidelines from "@/public/blog/pcb-layout-guidelines.jpg";
import PocEvtDvtPvt from "@/public/blog/poc-evt-dvt-pvt.jpg";
import HardwareRapidPrototyping from "@/public/blog/hardware-rapid-prototyping.jpg";
import HardwareProductLifecycle from "@/public/blog/hardware-product-lifecycle.jpg";
export const blogStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.hardwarehouses.com/#organization",
      "name": "Hardware Design House",
      "alternateName": "HDH",
      "url": "https://www.hardwarehouses.com/",
      "email": "info@hardwarehouses.com",
      "telephone": ["+37455342262", "+37441777704"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3 Hakob Hakobyan Street",
        "addressLocality": "Yerevan",
        "postalCode": "0033",
        "addressCountry": "AM"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.hardwarehouses.com/#website",
      "url": "https://www.hardwarehouses.com/",
      "name": "Hardware Design House",
      "publisher": {
        "@id": "https://www.hardwarehouses.com/#organization"
      },
      "inLanguage": "en"
    },
    {
      "@type": "Blog",
      "@id": "https://www.hardwarehouses.com/blog#blog",
      "url": "https://www.hardwarehouses.com/blog",
      "name": "Hardware Engineering Blog | HDH",
      "description": "Expert insights, practical guides, and in-depth articles on hardware design, prototyping, PCB layout, and product development.",
      "publisher": {
        "@id": "https://www.hardwarehouses.com/#organization"
      },
      "inLanguage": "en"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.hardwarehouses.com/blog#webpage",
      "url": "https://www.hardwarehouses.com/blog",
      "name": "Hardware Engineering Blog | HDH",
      "description": "Explore our hardware engineering blog for expert insights, practical tips, and in-depth guides on hardware design, prototyping, PCB layout, and product development.",
      "isPartOf": {
        "@id": "https://www.hardwarehouses.com/#website"
      },
      "about": {
        "@id": "https://www.hardwarehouses.com/blog#blog"
      },
      "mainEntity": {
        "@id": "https://www.hardwarehouses.com/blog#blog"
      },
      "inLanguage": "en"
    },
    {
      "@type": "ItemList",
      "@id": "https://www.hardwarehouses.com/blog#featured-articles",
      "name": "Featured Blog Articles",
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "numberOfItems": 5,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "url": "https://www.hardwarehouses.com/blog/hardware-product-lifecycle"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "url": "https://www.hardwarehouses.com/blog/iot-hardware-design"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "url": "https://www.hardwarehouses.com/blog/pcb-layout-guidelines"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "url": "https://www.hardwarehouses.com/blog/poc-evt-dvt-pvt-stages"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "url": "https://www.hardwarehouses.com/blog/hardware-rapid-prototyping"
        }
      ]
    }
  ]
};
export const blogMetadata = {
  title: "Hardware Engineering Blog | HDH",
  description:
    "Explore our hardware engineering blog for expert insights, practical tips, and in-depth guides on hardware design, prototyping, PCB layout, and product development.",
};
export const blogHeader = {
    title:"Welcome to Our Hardware Engineering Blog",
    description:"Stay ahead in the fast-paced world of hardware design with expert guidance, practical tips, and in-depth resources. Whether you’re an engineer, designer, or tech enthusiast, our hardware engineering blog offers the latest hardware design articles, hardware development guides covering the full spectrum of development, from initial concepts to market-ready products."
} 
export const blogCards = [
  {
    src: IotHardwareDesign,
    alt: "Comprehensive guide on IoT hardware design from architecture and prototyping to testing and mass production",
    imageTitle: "IoT Hardware Design",
    title: "From Circuit to Customer: Managing the End-to-End Hardware Product Lifecycle",
    description: "Explore the complete journey of a hardware product, from initial concept and prototyping to manufacturing and delivery. Learn strategies to streamline development, reduce costs, and bring your ideas to market efficiently. A must-read among our hardware design articles.",
    href: "/blog/hardware-product-lifecycle"
  },
  {
    src: HardwareProductLifecycle,
    alt: "Comprehensive guide on hardware product lifecycle from concept to market",
    imageTitle: "Hardware Product Lifecycle",
    title: "Hardware Design for IoT Projects: A Complete Guide",
    description: "Unlock the potential of Internet of Things (IoT) devices with a comprehensive hardware development guide. Dive into essential considerations for connectivity, power efficiency, and device reliability in today’s interconnected world.",
    href: "/blog/iot-hardware-design"
  },
  {
    src: PcbLayoutGuidelines,
    alt: "Practical PCB layout guidelines and best practices for component placement, trace routing, and thermal management",
    imageTitle: "PCB Layout Guidelines",
    title: "PCB Design Layout Guidelines and Best Practices for Engineers",
    description: "Master the art of printed circuit board (PCB) design with practical layout tips, common pitfalls to avoid, and techniques to optimize performance. Ideal for engineers looking for actionable hardware design insights.",
    href: "/blog/pcb-layout-guidelines"
  },
  {
    src: PocEvtDvtPvt,
    alt: "Guide to POC EVT DVT PVT stages in hardware product development from concept to production",
    imageTitle: "POC EVT DVT PVT",
    title: "Hardware Product Development Stages: POC – EVT – DVT – PVT Explained",
    description: "Gain a clear understanding of critical stages of hardware product development: Proof of Concept (POC), Engineering Validation Test (EVT), Design Validation Test (DVT), and Production Validation Test (PVT). Learn what each stage involves and why it’s essential for successful product launches.",
    href: "/blog/poc-evt-dvt-pvt-stages"
  },
  {
    src: HardwareRapidPrototyping,
    alt: "Guide to hardware rapid prototyping for faster product development and early design validation",
    imageTitle: "Hardware Rapid Prototyping",
    title: "The Importance of Rapid Prototyping in the Product Development Lifecycle",
    description: "Rapid prototyping accelerates product development by turning ideas into functional models quickly. Explore its benefits, methods, and role in reducing risk, improving design, and bringing products to market faster. Featured as a key hardware development guide in our blog.",
    href: "/blog/hardware-rapid-prototyping"
  },
];
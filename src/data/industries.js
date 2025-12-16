import SmartHomeAndIotIndustry from "@/public/industries/smart-home-and-iot-industry.png";
import AccessControlFirewalls from "@/public/industries/access-control-firewalls.png";
import IndustrialOperations from "@/public/industries/industrial-operations.png";
export const industriesData = {
  header: {
    title: "Industries We Serve",
    description:
      "At HDH, we deliver cutting-edge hardware design solutions across a wide range of hardware engineering industries. Our expertise helps businesses innovate, streamline operations, and bring reliable, future-ready products to market.",
  },

  industries: [
    {
      id: "smart-home",
      image: SmartHomeAndIotIndustry,
      imageAlt:
        "Smart home and IoT devices ensuring secure and reliable home automation",
      imageTitle: "Smart Home and IoT",
      title: "Smart Home & IoT",
      description:
        "We design connected devices that make homes smarter and more efficient. Leveraging our background in embedded systems and electronics engineering, we deliver smart lighting, sensors, and home automation systems that are secure, reliable, and seamlessly integrated.",
      link: "/industries/smart-home-automation",
      linkLabel: "Learn more",
    },
    {
      id: "security-cybersecurity",
      image: AccessControlFirewalls,
      imageAlt:
        "Access control systems biometric devices and hardware firewalls protecting physical and digital assets",
      imageTitle: "Security and Cybersecurity",
      title: "Security and Cybersecurity",
      description:
        "We provide hardware to protect physical and digital assets. Our solutions, including access control systems, biometric devices, and hardware firewalls, deliver secure, resilient, and future-ready protection. With expertise in hardware industries, we integrate advanced security practices to safeguard every stage of your system’s operation.",
      link: "/industries/security-and-cybersecurity",
      linkLabel: "Learn more",
    },
    {
      id: "industrial-operations",
      image: IndustrialOperations,
      imageAlt:
        "Industrial operations with robotics control systems and IoT monitoring devices",
      imageTitle: "Industrial Solution",
      title: "Industrial Solution",
      description:
        "HDH delivers hardware that streamlines industrial operations and improves productivity. Our solutions, including robotics, control systems, and IoT-enabled monitoring devices, are designed for efficiency, durability, and easy deployment across the hardware engineering industries.",
      link: "/industries/industrial-solutions",
      linkLabel: "Learn more",
    },


  ],
};
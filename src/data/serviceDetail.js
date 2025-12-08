import ConsultingBg from "@/public/consulting/consulting-and-technical-support.png";
import { IoFlashOutline } from "react-icons/io5";
import {
  IoHardwareChipOutline,
  IoExtensionPuzzleOutline,
} from "react-icons/io5";
import TauroTechnologies from "@/public/consulting/tauro-technologies-review.png";
import NuveReview from "@/public/consulting/nuve-review.png";
import QaylTech from "@/public/consulting/qayltech-review.png";
import { Share1Icon, GlobeIcon, CodeIcon } from "@radix-ui/react-icons";
import EmbeddedSystemArchitecture from "@/public/services/servicePage/embedded-system-architecture.png";
import ElectronicsManufacturingServices from "@/public/services/servicePage/electronics-manufacturing-services.png";
import PrototypeDevelopmentServices from "@/public/services/servicePage/prototype-development-services.png";
import HardwareUpdatesAndImprovements from "@/public/services/servicePage/hardware-updates-and-improvements.png";
import ProductTestingAndValidation from "@/public/services/servicePage/product-testing-and-validation.png";
import HardwareDesignServices from "@/public/services/servicePage/hardware-design-services.png";
export const SERVICE_DETAILS = {
  "iot-consulting-services": {
    slug: "iot-consulting-services",
    pageTitle: "Consulting & Technical Advisory Services",
    hero: {
      backgroundImage: ConsultingBg,
      title: "IoT Consulting Services and Technical Advisory",
      alt: "IoT consulting services and technical advisory",
      desktopTitle: "Consulting & Technical Support",
      desktopSubtitle: "What We Offer",
      mobileTitle: "Consulting & Technical Support",
      mobileSubtitle: "What We Offer",
      text: "HDH provides expert engineering consulting services throughout every stage of hardware development, from feasibility studies to troubleshooting during mass production. We support both startups and established companies with component selection, design reviews, and compliance strategy, offering technical advisory to ensure smooth product evolution and long-term market success.",
    },
    expertise: {
      title: "Our Expertise",
      highlightTitle: "Embedded System Integration",
      items: [
        "Feasibility studies and risk assessment",
        "Component selection and architecture reviews",
        "Certification guidance (FCC, CE, RoHS, REACH)",
        "Troubleshooting and failure analysis for existing products",
        "Long-term technical support through product lifecycle",
      ],
    },
    process: {
      title: "Process That We Follow",
      description:
        "HDH’s consulting team transforms complex technical challenges into practical, market-ready hardware solutions, including embedded systems consulting and IoT consulting where applicable.",
      steps: [
        "Requirement and Technology Analysis",
        "Feasibility and Risk Assessment",
        "Strategy and Solution Planning",
        "Technical Guidance and Recommendations",
        "Implementation Support",
        "Ongoing Advisory and Optimization",
      ],
    },
    whyChoose: "Why Choose HDH for Prototype Development?",
    serviceCards: [
      {
        title: "Technology and Product Development Advisory",
        description:
          "HDH delivers tailored technology advisory services and product development consulting, supporting both startups and established companies. Our guidance helps optimize design choices, reduce technical risks, and accelerate time-to-market.",
        icon: <IoFlashOutline size={48} />,
      },
      {
        title: "Comprehensive Embedded System Architecture Services",
        description:
          "HDH provides end-to-end IoT consulting services and engineering consulting services, guiding clients through every stage of product development. From concept evaluation to system optimization, our expertise ensures projects are both technically sound and strategically aligned.",
        icon: <Share1Icon width={48} height={48} />,
      },
      {
        title: "Customized Technical Advisory Services",
        description:
          "Every client has unique requirements. HDH provides technical advisory services customized to project needs, including embedded software consulting, manufacturing engineering consulting, and industrial engineering consulting.",
        icon: <IoExtensionPuzzleOutline size={48} />,
      },
      {
        title: "Strategic IoT and Embedded Systems Consulting",
        description:
          "We offer IoT strategy consulting and engineering consulting that aligns technology with business goals. HDH helps clients identify opportunities, select the right platforms, and ensure seamless integration across complex systems.",
        icon: <IoHardwareChipOutline size={48} />,
      },
      {
        title: "Expertise Across Embedded Systems and IoT",
        description:
          "Our team of IoT consultants and embedded systems consulting experts brings deep experience in hardware and embedded systems with the right architecture to address any technical challenge and optimize product performance.",
        icon: <GlobeIcon width={43} height={48} />,
      },
      {
        title: "End-to-End Support from Concept to Production",
        description:
          "HDH bridges technical planning and operational execution. Our consulting ensures that insights are translated into actionable solutions, guiding projects from early concept through development, validation, and production.",
        icon: <CodeIcon width={43} height={48} />,
      },
    ],
    faq: {
      title: "FAQ - Product Testing and Validation",
      items: [
        {
          question: "What consulting services does HDH provide?",
          answer:
            "HDH offers IoT consulting, engineering consulting services, and product development consulting, covering embedded systems, hardware, firmware, and manufacturing guidance.",
        },
        {
          question: "Can HDH help with IoT strategy and system planning?",
          answer:
            "Yes. HDH provides IoT consulting and system design advisory, helping clients plan, optimize, and implement connected solutions that are reliable, scalable, and aligned with business goals.",
        },
        {
          question: "Does HDH assist with embedded software consulting?",
          answer:
            "Absolutely. We provide expert embedded systems consulting and embedded software consulting to ensure hardware and firmware operate seamlessly.",
        },
        {
          question:
            "Can HDH support manufacturing and industrial engineering consulting?",
          answer:
            "Yes. Our engineering consulting services help clients with production planning, workflow optimization, and scalable system design.",
        },
      ],
    },
    testimonials: [
      {
        logo: TauroTechnologies,
        text: `HDH is an amazing team with real engineering talent. These guys understand even the most complex tasks and somehow make everything look easy.\nThey’re incredibly flexible, truly listen to what the customer needs, and always come up with solutions that are both high-quality and affordable.\nWorking with HDH was an absolute pleasure. Big thanks to the whole team — you’re awesome, and I’d happily work with you again anytime!`,
        name: "Gevorg Sargsyan",
        position: "Co-founder and CEO",
      },
      {
        logo: NuveReview,
        text: `HDH is a team that turns bold ideas into reality.\nThey bring metal to life and take on projects that initially seem impossible.\nAs a client, I can confidently say they have an exceptional sense of timing, precise risk assessment, and a deep understanding of technology.\nI’ve been working with them for many years, and I highly recommend HDH to anyone who doubts whether complex engineering ideas can be turned into reality with them, it’s absolutely possible!`,
        name: "Sergo Oganov",
        position: "Chief Operating Officer",
      },
      {
        logo: QaylTech,
        text: `Working with HDH on the Powered Exoskeleton project was outstanding. They understood the urgency of this medical initiative, acting quickly to deliver hardware that could help war-injured patients before nerve damage became irreversible. The timeline was extremely tight, and every hour counted as the team pushed to deliver results before the medical window closed. Their care, speed, and dedication produced a functional prototype already bringing hope to those at risk of long-term disability. We’re grateful for their partnership and excited to continue this vital work.`,
        name: "David Arsenyan",
        position: "Founder & CEO at QaylTech and Muvia",
      },
    ],
  },
  "embedded-system-architecture": {
    slug: "embedded-system-architecture",
    pageTitle: "IoT Consulting Services",
    hero: {
      backgroundImage: EmbeddedSystemArchitecture,
      title: "Embedded System Architecture Services",
      alt: "Embedded system architecture design",
      desktopTitle: "System Architecture and Optimization",
      desktopSubtitle: "What We Offer",
      mobileTitle: "System Architecture and Optimization",
      mobileSubtitle: "What We Offer",
      text: "We design embedded systems that combine performance, cost, reliability, and efficiency. Our team brings hardware, firmware, and connectivity together into well-integrated architectures, from sensors and gateways to cloud interfaces.By optimizing power, communication, and processing flow, we ensure your product achieves its full potential.",
    },
    expertise: {
      title: "Our Expertise",
      highlightTitle: "Embedded System Integration",
      items: [
        "Modular hardware platforms and communication interfaces (I²C, SPI, CAN, Ethernet, Wi-Fi, BLE, etc.)",
        "Hardware-firmware co-design for optimized power and processing balance",
        "Seamless integration of multiple subsystems (displays, touch panels, sensors, wireless modules)",
        "Thermal and mechanical optimization for compact electronic assemblies",
        "Enhanced security and reliability for IoT and industrial environments",
      ],
    },
    process: {
      title: "Process That We Follow",
      description:
        "Our architectural approach ensures systems remain scalable, easy to maintain, and optimized for top performance.",
      steps: [
        "Requirement and System Analysis",
        "Architecture Design and Planning",
        "Component and Technology Selection",
        "System Integration and Simulation",
        "Optimization and Validation",
        "Documentation and Handoff",
      ],
    },
    whyChoose: "Why Choose HDH for System Architecture and Optimization?",
    serviceCards: [
      {
        title: "Comprehensive Embedded System Architecture Services",
        description:
          "HDH delivers end-to-end embedded system architecture and system architecture design services, ensuring your products are optimized for performance, scalability, and reliability. From initial concept to production-ready design, we provide a solid architecture foundation for your embedded systems architecture.",
        icon: <IoFlashOutline size={48} />,
      },
      {
        title: "Experience Across Embedded Systems and IoT",
        description:
          "Our team of embedded systems engineers specializes in embedded system design, embedded system development, IoT system design, and hardware architecture of embedded systems, ensuring seamless integration of hardware and software for complex applications.",
        icon: <Share1Icon width={48} height={48} />,
      },
      {
        title: "Optimized Design for Performance and Reliability",
        description:
          "HDH focuses on system design and architecture, optimizing both embedded software development services and hardware to deliver efficient, stable, and high-performing systems tailored to your needs.",
        icon: <IoExtensionPuzzleOutline size={48} />,
      },
      {
        title: "Custom Embedded System Development",
        description:
          "We provide custom embedded system development and embedded system development services, offering scalable and flexible solutions for diverse industries, from consumer electronics to industrial automation, as an experienced embedded system development company.",
        icon: <IoHardwareChipOutline size={48} />,
      },
      {
        title: "Cross-Functional System Integration",
        description:
          "Our architects collaborate closely with software and firmware teams, aligning software architecture of embedded systems with hardware design. This ensures fully integrated solutions that operate reliably in real-world conditions.",
        icon: <GlobeIcon width={43} height={48} />,
      },
      {
        title: "From Architecture to Production",
        description:
          "HDH supports the full lifecycle of embedded systems, from architecture of embedded systems through design validation and optimization, helping clients transition from concept to production with confidence.",
        icon: <CodeIcon width={43} height={48} />,
      },
    ],
    faq: {
      title: "FAQ",
      items: [
        {
          question:
            "What services does HDH offer for embedded system architecture?",
          answer:
            "HDH provides full system architecture and design services, including embedded system design, hardware architecture of embedded systems, and software architecture of embedded systems.",
        },
        {
          question: "Can HDH develop custom embedded systems?",
          answer:
            "Yes. We offer custom embedded system development, tailored to your project requirements, including both hardware and software integration.",
        },
        {
          question: "Does HDH provide IoT system design services?",
          answer:
            "Absolutely. Our team specializes in IoT system design, system design engineering, and system architecture and design for connected devices and industrial applications.",
        },
        {
          question: "Can I hire embedded systems engineers through HDH?",
          answer:
            "Yes. You can hire embedded systems engineers directly or collaborate with HDH as your embedded system development partner for complete project support.",
        },
      ],
    },
    testimonials: [
      {
        logo: TauroTechnologies,
        text: `HDH is an amazing team with real engineering talent. These guys understand even the most complex tasks and somehow make everything look easy.\nThey’re incredibly flexible, truly listen to what the customer needs, and always come up with solutions that are both high-quality and affordable.\nWorking with HDH was an absolute pleasure. Big thanks to the whole team — you’re awesome, and I’d happily work with you again anytime!`,
        name: "Gevorg Sargsyan",
        position: "Co-founder and CEO",
      },
      {
        logo: NuveReview,
        text: `HDH is a team that turns bold ideas into reality.\nThey bring metal to life and take on projects that initially seem impossible.\nAs a client, I can confidently say they have an exceptional sense of timing, precise risk assessment, and a deep understanding of technology.\nI’ve been working with them for many years, and I highly recommend HDH to anyone who doubts whether complex engineering ideas can be turned into reality with them, it’s absolutely possible!`,
        name: "Sergo Oganov",
        position: "Chief Operating Officer",
      },
      {
        logo: QaylTech,
        text: `Working with HDH on the Powered Exoskeleton project was outstanding. They understood the urgency of this medical initiative, acting quickly to deliver hardware that could help war-injured patients before nerve damage became irreversible. The timeline was extremely tight, and every hour counted as the team pushed to deliver results before the medical window closed. Their care, speed, and dedication produced a functional prototype already bringing hope to those at risk of long-term disability. We’re grateful for their partnership and excited to continue this vital work.`,
        name: "David Arsenyan",
        position: "Founder & CEO at QaylTech and Muvia",
      },
    ],
  },
  "electronics-manufacturing-services": {
    slug: "electronics-manufacturing-services",
    pageTitle: "Electronics Manufacturing Services",
    hero: {
      backgroundImage: ElectronicsManufacturingServices,
      title: "Electronics Manufacturing Services and Manufacturing Support",
      alt: "Electronics manufacturing services and manufacturing support",
      desktopTitle: "Manufacturing Full Cycle",
      desktopSubtitle: "What We Offer",
      mobileTitle: "Manufacturing Full Cycle",
      mobileSubtitle: "What We Offer",
      text: "HDH supports full manufacturing readiness, providing DFM services, BOM optimization, and manufacturing support services from prototype to production. We collaborate closely with trusted fabrication and assembly partners to ensure cost-effective, high-quality electronics manufacturing processes. Clients receive end-to-end transparency, from manufacturing logistics and component sourcing to final testing and packaging, ensuring high-quality electronic product manufacturing.",
    },
    expertise: {
      title: "Our Expertise",
      highlightTitle: "Production Management",
      items: [
        "DFM, DFA, and DFT optimization for scalable assembly",
        "eBOM finalization, component availability, and lifecycle checks",
        "Vendor selection and production coordination (Asia & EU partners)",
        "Pilot batch testing and statistical quality control",
        "Final functional testing, programming, and packaging",
      ],
    },
    process: {
      title: "Process That We Follow",
      description:
        "Our manufacturing management ensures predictable lead times, high yield, and transparent supply chain control, guaranteeing that every product reaches mass production efficiently and reliably.",
      steps: [
        "Component Sourcing and Supply Chain Planning",
        "Production Setup and Workflow Optimization",
        "Prototype-to-Production Transition",
        "Quality Control and Compliance Testing",
        "Delivery and Post-Production Support",
      ],
    },
    whyChoose:
      "Why Choose HDH for Full-Cycle Electronics Manufacturing and Support",
    serviceCards: [
      {
        title: "Comprehensive Electronics Manufacturing Services",
        description:
          "HDH provides end-to-end electronics manufacturing services, covering every stage from prototype to production. We help clients transform validated prototypes into high-quality electronic products with efficient and scalable manufacturing processes.",
        icon: <IoFlashOutline size={48} />,
      },
      {
        title: "Expertise Across Electronics and OEM Production",
        description:
          "Our team specializes in electronic contract manufacturing, electronics contract manufacturing, and original equipment manufacturing (OEM). HDH ensures manufacturing aligns with design specifications, meets quality standards, and adheres to delivery timelines.",
        icon: <Share1Icon width={48} height={48} />,
      },
      {
        title: "Seamless Manufacturing Process Management",
        description:
          "We oversee the entire manufacturing process, from sourcing components to assembly, testing, and final delivery. Our integrated approach minimizes delays, reduces costs, and ensures consistency across manufacturing batches.",
        icon: <IoExtensionPuzzleOutline size={48} />,
      },
      {
        title: "Tailored Manufacturing Support Services",
        description:
          "HDH provides customized manufacturing support services, including design for manufacturing (DFM), workflow optimization, and supply chain management. These services ensure products are optimized for production efficiency and long-term reliability.",
        icon: <IoHardwareChipOutline size={48} />,
      },
      {
        title: "High-Quality Electronic Product Manufacturing",
        description:
          "As a trusted electronics manufacturing company, we combine professional assembly, thorough testing, and quality assurance to deliver reliable electronic product manufacturing outcomes. Every board and device meets the highest industry standards, and we can adjust quality levels to your needs. whether you require top-tier precision or a more flexible, cost-effective approach.",
        icon: <GlobeIcon width={43} height={48} />,
      },
      {
        title: "From Prototype to Production",
        description:
          "HDH bridges the gap between product development and manufacturing, ensuring seamless transition from prototypes to mass production. Through Design for Manufacturing (DFM) practices, we optimize designs for efficient assembly, reduced production risks, and consistent quality.Our services help reduce production risks and ensure timely delivery of market-ready electronics.",
        icon: <CodeIcon width={43} height={48} />,
      },
    ],
    faq: {
      title: "FAQ",
      items: [
        {
          question: "What electronics manufacturing services does HDH provide?",
          answer:
            "HDH offers complete electronic product manufacturing, including electronic contract manufacturing, prototype-to-production support, and full lifecycle manufacturing services.",
        },
        {
          question: "Can HDH support design for manufacturing?",
          answer:
            "Yes. Our DFM services optimize product designs for efficient production, cost savings, and improved reliability.",
        },
        {
          question: "Does HDH manage manufacturing logistics?",
          answer:
            "Absolutely. We handle sourcing, workflow planning, and supply chain management to ensure smooth manufacturing support from start to finish.",
        },
        {
          question: "Can HDH scale from prototypes to mass production?",
          answer:
            "Yes. HDH specializes in smoothly transitioning products from prototype development to full-scale production, while maintaining quality, compliance, and performance standards.",
        },
      ],
    },
    testimonials: [
      {
        logo: TauroTechnologies,
        text: `HDH is an amazing team with real engineering talent. These guys understand even the most complex tasks and somehow make everything look easy.\nThey’re incredibly flexible, truly listen to what the customer needs, and always come up with solutions that are both high-quality and affordable.\nWorking with HDH was an absolute pleasure. Big thanks to the whole team — you’re awesome, and I’d happily work with you again anytime!`,
        name: "Gevorg Sargsyan",
        position: "Co-founder and CEO",
      },
      {
        logo: NuveReview,
        text: `HDH is a team that turns bold ideas into reality.\nThey bring metal to life and take on projects that initially seem impossible.\nAs a client, I can confidently say they have an exceptional sense of timing, precise risk assessment, and a deep understanding of technology.\nI’ve been working with them for many years, and I highly recommend HDH to anyone who doubts whether complex engineering ideas can be turned into reality with them, it’s absolutely possible!`,
        name: "Sergo Oganov",
        position: "Chief Operating Officer",
      },
      {
        logo: QaylTech,
        text: `Working with HDH on the Powered Exoskeleton project was outstanding. They understood the urgency of this medical initiative, acting quickly to deliver hardware that could help war-injured patients before nerve damage became irreversible. The timeline was extremely tight, and every hour counted as the team pushed to deliver results before the medical window closed. Their care, speed, and dedication produced a functional prototype already bringing hope to those at risk of long-term disability. We’re grateful for their partnership and excited to continue this vital work.`,
        name: "David Arsenyan",
        position: "Founder & CEO at QaylTech and Muvia",
      },
    ],
  },
  "prototype-development-services": {
    slug: "prototype-development-services",
    pageTitle: "Prototype Development Services",
    hero: {
      backgroundImage: PrototypeDevelopmentServices,
      title: "Prototype Development Services",
      alt: "Prototype development services",
      desktopTitle: "Prototype Development",
      desktopSubtitle: "What We Offer",
      mobileTitle: "Prototype Development",
      mobileSubtitle: "What We Offer",
      text: "Turning ideas into real products is  what we do best. We offer full product prototyping services and prototype development, creating and testing prototypes that closely match the final production design. This allows early verification, design tuning, and investor demonstrations. Our fast-iteration approach minimizes development cycles and bridges the gap between concept and manufacturing readiness.",
    },
    expertise: {
      title: "Our Expertise",
      highlightTitle: "Prototype Design & Validation",
      items: [
        "Rapid prototype fabrication and assembly (SMT & THT)",
        "Low-volume pilot runs for pre-production validation",
        "Firmware integration and feature testing on real hardware",
        "Design reviews and feedback loops with client teams",
        "Demonstration-ready units for investors or certification labs",
      ],
    },
    process: {
      title: "Process That We Follow",
      description:
        "HDH’s prototype development workflow bridges concept and manufacturing, shortening time-to-market and ensuring each iteration moves closer to a production-ready design",
      steps: [
        "Requirement Analysis",
        "Concept and Design Planning",
        "Component Selection and Sourcing",
        "Prototype Fabrication and Assembly",
        "Testing and Optimization",
        "Final Review and Documentation",
      ],
    },
    whyChoose:
      "Why Choose HDH for Full-Cycle Electronics Manufacturing and Support",
    serviceCards: [
      {
        title: "Comprehensive Prototype Development Services",
        description:
          "HDH provides end-to-end prototype development services, transforming concepts into functional prototypes ready for validation and production. From circuit design to enclosure fabrication, our prototype development company ensures every detail reflects real-world performance and manufacturability.",
        icon: <IoFlashOutline size={48} />,
      },
      {
        title: "Expertise in Hardware and Electronics Prototyping",
        description:
          "Our prototype developers specialize in hardware prototyping, electronics prototyping, and embedded system integration, enabling fast and reliable iterations of product concepts. Whether for consumer electronics or industrial systems, HDH brings engineering precision and innovation to every prototype.",
        icon: <Share1Icon width={48} height={48} />,
      },
      {
        title: "Rapid Prototyping and Iterative Design",
        description:
          "We use rapid prototyping services to accelerate development timelines. By combining 3D modeling, PCB prototyping, and electronic assembly, HDH enables clients to quickly evaluate design feasibility and functionality before committing to full-scale production.",
        icon: <IoExtensionPuzzleOutline size={48} />,
      },
      {
        title: "Tailored Product Prototype Development",
        description:
          "Every project is unique and HDH adapts its product prototyping services to meet each client’s technical and business requirements. Our customized approach supports early design validation, reduces risk, and optimizes performance for the final product.",
        icon: <IoHardwareChipOutline size={48} />,
      },
      {
        title: "Engineering-Driven Prototype Design",
        description:
          "As a trusted prototype design company, we integrate mechanical, electrical, and firmware expertise into every build. Our engineering prototyping process ensures precision in layout, power optimization, and system architecture, resulting in reliable, production-ready prototypes.",
        icon: <GlobeIcon width={43} height={48} />,
      },
      {
        title: "From Prototype to Production Readiness",
        description:
          "HDH bridges the gap between prototype development and mass manufacturing. Our electronic prototype manufacturing capabilities verify design intent, identify areas for improvement, and streamline transition into full-scale production.",
        icon: <CodeIcon width={43} height={48} />,
      },
    ],
    faq: {
      title: "FAQ",
      items: [
        {
          question: "What prototype development services does HDH provide?",
          answer:
            "HDH offers comprehensive product prototyping services, including hardware prototyping, electronics prototyping, and embedded system prototype development, ensuring seamless concept-to-product transformation.",
        },
        {
          question: "How fast can HDH deliver prototypes?",
          answer:
            "With our rapid prototyping services, HDH can deliver early-stage prototypes within short development cycles, depending on complexity and component availability.",
        },
        {
          question:
            "Does HDH handle both product and electronic design development?",
          answer:
            "Yes. As a full-service prototype design and development company, HDH manages electronic prototype manufacturing, hardware design, and integration under one roof.",
        },
        {
          question: "Can HDH customize prototypes to specific requirements?",
          answer:
            "Yes. HDH works closely with clients to tailor prototypes to precise specifications, ensuring the final product meets functional, aesthetic, and performance requirements.",
        },
      ],
    },
    testimonials: [
      {
        logo: TauroTechnologies,
        text: `HDH is an amazing team with real engineering talent. These guys understand even the most complex tasks and somehow make everything look easy.\nThey’re incredibly flexible, truly listen to what the customer needs, and always come up with solutions that are both high-quality and affordable.\nWorking with HDH was an absolute pleasure. Big thanks to the whole team — you’re awesome, and I’d happily work with you again anytime!`,
        name: "Gevorg Sargsyan",
        position: "Co-founder and CEO",
      },
      {
        logo: NuveReview,
        text: `HDH is a team that turns bold ideas into reality.\nThey bring metal to life and take on projects that initially seem impossible.\nAs a client, I can confidently say they have an exceptional sense of timing, precise risk assessment, and a deep understanding of technology.\nI’ve been working with them for many years, and I highly recommend HDH to anyone who doubts whether complex engineering ideas can be turned into reality with them, it’s absolutely possible!`,
        name: "Sergo Oganov",
        position: "Chief Operating Officer",
      },
      {
        logo: QaylTech,
        text: `Working with HDH on the Powered Exoskeleton project was outstanding. They understood the urgency of this medical initiative, acting quickly to deliver hardware that could help war-injured patients before nerve damage became irreversible. The timeline was extremely tight, and every hour counted as the team pushed to deliver results before the medical window closed. Their care, speed, and dedication produced a functional prototype already bringing hope to those at risk of long-term disability. We’re grateful for their partnership and excited to continue this vital work.`,
        name: "David Arsenyan",
        position: "Founder & CEO at QaylTech and Muvia",
      },
    ],
  },
  "hardware-updates-and-improvements": {
    slug: "hardware-updates-and-improvements",
    pageTitle: "Hardware Updates and Improvements",
    hero: {
      backgroundImage: HardwareUpdatesAndImprovements,
      title: "Hardware Updates and Improvements",
      alt: "Hardware updates and improvements",
      desktopTitle: "Hardware Updates and Improvements",
      desktopSubtitle: "What We Offer",
      mobileTitle: "Hardware Updates and Improvements",
      mobileSubtitle: "What We Offer",
      text: "We provide continuous product enhancement and hardware updates, redesigning legacy systems for improved performance, cost reduction, and modern component availability. From hardware prototyping and PCB optimization to complete hardware architecture upgrades, HDH ensures your devices stay efficient, scalable, and compliant with the latest technologies.",
    },
    expertise: {
      title: "Our Expertise",
      highlightTitle: "Hardware Lifecycle Management",
      items: [
        "Component replacement and cost-down redesigns (EOL parts or supply chain issues)",
        "Layout re-optimization for signal integrity and thermal performance",
        "EMC mitigation and noise reduction tuning",
        "Conversion of legacy designs to modern microcontrollers or FPGAs",
        "Power-efficiency and size optimization for next-generation versions",
      ],
    },
    process: {
      title: "Process That We Follow",
      description:
        "To increase reliability, reduce costs, and extend product lifespan through continuous hardware improvements, all without compromising quality.",
      steps: [
        "Requirement and Performance Analysis",
        "Design Review and Optimization Plan",
        "Hardware Improvement and Product Iteration",
        "Validation and Verification Testing",
        "Post-Production Support",
      ],
    },
    whyChoose: "Why Choose HDH for Hardware Updates and Improvements?",
    serviceCards: [
      {
        title: "End-to-End Hardware Enhancement Expertise",
        description:
          "At HDH, we specialize in hardware updates and improvements across the full product lifecycle. From hardware development and embedded hardware upgrades to product enhancement and hardware lifecycle management, our team ensures every update improves performance, reliability, and longevity.",
        icon: <IoFlashOutline size={48} />,
      },
      {
        title: "Experienced Engineering Team",
        description:
          "Our engineers excel in hardware prototyping, PCB redesign, and hardware modifications. We deliver optimized, scalable solutions that combine innovation with practical experience, ensuring your products stay competitive.",
        icon: <Share1Icon width={48} height={48} />,
      },
      {
        title: "Performance Optimization and Modernization",
        description:
          "We perform hardware upgrades and hardware refresh cycles, optimizing legacy systems with PCB optimization, enhanced components, and improved embedded systems. Our iterative development approach ensures your hardware evolves with modern standards and technological advancements.",
        icon: <IoExtensionPuzzleOutline size={48} />,
      },
      {
        title: "Seamless Integration and Testing",
        description:
          "All updates undergo structured validation and verification testing to guarantee reliability and compliance. HDH manages hardware version control and ensures smooth integration with existing systems.",
        icon: <IoHardwareChipOutline size={48} />,
      },
      {
        title: "Tailored Solutions for Every Product",
        description:
          "Each project is unique. HDH develops custom hardware improvements and product enhancements aligned with your technical and business goals, maximizing performance and efficiency.",
        icon: <GlobeIcon width={43} height={48} />,
      },
      {
        title: "Long-Term Support and Reliability",
        description:
          "We provide ongoing hardware maintenance services and post-production servicing, including troubleshooting, monitoring, and continuous improvements. Our goal is to keep your hardware robust, efficient, and ready for future hardware advancements.",
        icon: <CodeIcon width={43} height={48} />,
      },
    ],
    faq: {
      title: "FAQ",
      items: [
        {
          question: "What types of hardware updates do you provide?",
          answer:
            "We offer a complete range of updates, including PCB redesign, embedded hardware enhancements, and full hardware modernization for both consumer electronics and industrial systems.",
        },
        {
          question: "How do you approach hardware improvement projects?",
          answer:
            "We begin with a detailed analysis of the hardware to identify opportunities for hardware modifications and product iteration. Each update is then prototyped, tested, and validated before final integration.",
        },
        {
          question:
            "Can you improve the performance of older hardware products?",
          answer:
            "Yes. HDH performs hardware refresh cycles to optimize older systems through hardware improvements, PCB optimization, and embedded hardware updates, ensuring they remain compatible with modern standards.",
        },
        {
          question: "Do you provide testing and validation for system updates?",
          answer:
            "Absolutely. We perform thorough validation testing to ensure safe, reliable performance.",
        },
        {
          question:
            "Can you support long-term hardware maintenance after updates?",
          answer:
            "Yes. We provide ongoing maintenance and iterative updates to ensure your products remain efficient and up-to-date.",
        },
      ],
    },
    testimonials: [
      {
        logo: TauroTechnologies,
        text: `HDH is an amazing team with real engineering talent. These guys understand even the most complex tasks and somehow make everything look easy.\nThey’re incredibly flexible, truly listen to what the customer needs, and always come up with solutions that are both high-quality and affordable.\nWorking with HDH was an absolute pleasure. Big thanks to the whole team — you’re awesome, and I’d happily work with you again anytime!`,
        name: "Gevorg Sargsyan",
        position: "Co-founder and CEO",
      },
      {
        logo: NuveReview,
        text: `HDH is a team that turns bold ideas into reality.\nThey bring metal to life and take on projects that initially seem impossible.\nAs a client, I can confidently say they have an exceptional sense of timing, precise risk assessment, and a deep understanding of technology.\nI’ve been working with them for many years, and I highly recommend HDH to anyone who doubts whether complex engineering ideas can be turned into reality with them, it’s absolutely possible!`,
        name: "Sergo Oganov",
        position: "Chief Operating Officer",
      },
      {
        logo: QaylTech,
        text: `Working with HDH on the Powered Exoskeleton project was outstanding. They understood the urgency of this medical initiative, acting quickly to deliver hardware that could help war-injured patients before nerve damage became irreversible. The timeline was extremely tight, and every hour counted as the team pushed to deliver results before the medical window closed. Their care, speed, and dedication produced a functional prototype already bringing hope to those at risk of long-term disability. We’re grateful for their partnership and excited to continue this vital work.`,
        name: "David Arsenyan",
        position: "Founder & CEO at QaylTech and Muvia",
      },
    ],
  },
  "product-testing-and-validation": {
    slug: "product-testing-and-validation",
    pageTitle: "Product Testing and Validation Services",
    hero: {
      backgroundImage: ProductTestingAndValidation,
      title: "Product Testing and Validation Services",
      alt: "Product testing and validation services",
      desktopTitle: "Product Testing and Validation",
      desktopSubtitle: "What We Offer",
      mobileTitle: "Product Testing and Validation",
      mobileSubtitle: "What We Offer",
      text: "Every product we design undergoes a thorough product testing and validation process to ensure performance, reliability, and compliance. This includes electronic product testing and, when applicable, IoT product testing, supported by comprehensive product validation services.",
    },
    expertise: {
      title: "Our Expertise",
      highlightTitle: "Testing Capabilities",
      items: [
        "Functional, thermal, and electrical testing under load",
        "Automated test fixtures and custom jigs for mass-production coverage (ICT, JTAG, HALT / HASS)",
        "EMI / EMC pre-compliance analysis and power efficiency measurements",
        "Reliability tests: vibration, drop, temperature cycling, humidity",
        "Firmware validation and hardware-in-the-loop",
      ],
    },
    process: {
      title: "Process That We Follow",
      description:
        "HDH ensures that every board shipped to production undergoes thorough verification aligned with international standards, guaranteeing flawless performance before mass production.",
      steps: [
        "Requirement Analysis",
        "Test Planning and Setup",
        "Prototype Testing",
        "Data Analysis and Validation",
        "Iteration and Optimization",
        "Final Validation and Reporting",
      ],
    },
    whyChoose: "Why Choose HDH for Product Testing and Validation?",
    serviceCards: [
      {
        title: "Comprehensive Product Testing and Validation",
        description:
          "HDH offers end-to-end product testing and validation services, ensuring every electronic or IoT product meets performance, reliability, and safety standards prior to production.",
        icon: <IoFlashOutline size={48} />,
      },
      {
        title: "Expertise Across Embedded Systems and Electronics",
        description:
          "Our team specializes in embedded systems verification, electronic product testing, and design validation, covering both hardware and firmware to ensure seamless operation.",
        icon: <Share1Icon width={48} height={48} />,
      },
      {
        title: "Advanced Validation Methods",
        description:
          "HDH employs automated test fixtures, custom jigs, and advanced techniques, including HALT, HASS, ICT, and JTAG, to ensure thorough product validation and accurate design verification for every project.",
        icon: <IoExtensionPuzzleOutline size={48} />,
      },
      {
        title: "Focus on Quality and Compliance",
        description:
          "Every board and device undergoes compliance verification and validation, ensuring reliable product quality for both prototypes and mass production.",
        icon: <IoHardwareChipOutline size={48} />,
      },
      {
        title: "Tailored Product Validation Solutions",
        description:
          "HDH adapts its validation process to each client’s needs, providing actionable insights and confidence that your product, whether a consumer IoT or an industrial embedded system, is production-ready.",
        icon: <GlobeIcon width={43} height={48} />,
      },
      {
        title: "Data-Driven Insights and Reporting",
        description:
          "We provide detailed reports and analytics, offering clear insights into product performance and reliability. This ensures any issues are identified and addressed before mass production, giving clients full confidence in their products.",
        icon: <CodeIcon width={43} height={48} />,
      },
    ],

    faq: {
      title: "FAQ",
      items: [
        {
          question:
            "What product testing and validation services does HDH provide?",
          answer:
            "HDH offers comprehensive product testing and validation services, including electronic product testing and IoT product testing, to ensure performance, reliability, and compliance before production.",
        },
        {
          question: "What expertise does HDH have in embedded systems?",
          answer:
            "Our team specializes in embedded systems testing, design verification and validation, and system integration testing, covering both hardware and firmware to ensure seamless operation.",
        },
        {
          question: "What types of testing does HDH perform?",
          answer:
            "We conduct system testing, electrical safety tests, functional, thermal, and design validation testing. Our services also include automated test fixtures, ICT, JTAG, HALT/HASS, and hardware-in-the-loop validation.",
        },
        {
          question: "Can HDH tailor testing for different product types?",
          answer:
            "Yes. We provide customized product qualification and validation services for prototypes and production units, whether for consumer electronics, IoT devices, or industrial embedded systems.",
        },
      ],
    },
    testimonials: [
      {
        logo: TauroTechnologies,
        text: `HDH is an amazing team with real engineering talent. These guys understand even the most complex tasks and somehow make everything look easy.\nThey’re incredibly flexible, truly listen to what the customer needs, and always come up with solutions that are both high-quality and affordable.\nWorking with HDH was an absolute pleasure. Big thanks to the whole team — you’re awesome, and I’d happily work with you again anytime!`,
        name: "Gevorg Sargsyan",
        position: "Co-founder and CEO",
      },
      {
        logo: NuveReview,
        text: `HDH is a team that turns bold ideas into reality.\nThey bring metal to life and take on projects that initially seem impossible.\nAs a client, I can confidently say they have an exceptional sense of timing, precise risk assessment, and a deep understanding of technology.\nI’ve been working with them for many years, and I highly recommend HDH to anyone who doubts whether complex engineering ideas can be turned into reality with them, it’s absolutely possible!`,
        name: "Sergo Oganov",
        position: "Chief Operating Officer",
      },
      {
        logo: QaylTech,
        text: `Working with HDH on the Powered Exoskeleton project was outstanding. They understood the urgency of this medical initiative, acting quickly to deliver hardware that could help war-injured patients before nerve damage became irreversible. The timeline was extremely tight, and every hour counted as the team pushed to deliver results before the medical window closed. Their care, speed, and dedication produced a functional prototype already bringing hope to those at risk of long-term disability. We’re grateful for their partnership and excited to continue this vital work.`,
        name: "David Arsenyan",
        position: "Founder & CEO at QaylTech and Muvia",
      },
    ],
  },
  "custom-hardware-design": {
    slug: "custom-hardware-design",
    pageTitle: "Custom Hardware Design Services",
    hero: {
      backgroundImage: HardwareDesignServices,
      title: "Custom Hardware Design Services",
      alt: "Custom hardware design services",
      desktopTitle: "Custom Hardware Design",
      desktopSubtitle: "What We Offer",
      mobileTitle: "Custom Hardware Design",
      mobileSubtitle: "What We Offer",
      text: "HDH provides end-to-end electronic and hardware design services, from initial concept and schematic design to production-ready custom hardware. Our hardware engineering team develops high-performance digital, analog, RF and embedded systems for consumer electronics, industrial controllers, and high-speed communication devices, all meeting the strictest IPC, IEEE, and GOST standards. Whether it is a low-power IoT device, an industrial controller, or a high-speed communication system, we ensure every design is optimized for performance, manufacturability, and long-term reliability.",
    },
    expertise: {
      title: "Our Expertise",
      highlightTitle: "Testing Capabilities",
      items: [
        "Functional, thermal, and electrical testing under load",
        "Automated test fixtures and custom jigs for mass-production coverage (ICT, JTAG, HALT / HASS)",
        "EMI / EMC pre-compliance analysis and power efficiency measurements",
        "Reliability tests: vibration, drop, temperature cycling, humidity",
        "Firmware validation and hardware-in-the-loop",
      ],
    },
    process: {
      title: "Process That We Follow",
      description:
        "All designs follow DFM, DFT, and DFx best practices and are optimized for long-term reliability, performance efficiency, and scalable production, showcasing HDH’s expertise in hardware design and development.",
      steps: [
        "Requirement Analysis",
        "Concept and Schematic Design",
        "Hardware Development and Prototyping",
        "Testing and Validation",
        "Final Product Development",
        "Support and Iteration",
      ],
    },
    whyChoose: "Why Choose HDH for Product Testing and Validation?",
    serviceCards: [
      {
        title: "End-to-End Hardware Expertise",
        description:
          "From initial concept and schematic design to production-ready prototypes, HDH delivers full-cycle custom hardware design services. Our experienced team manages every stage to ensure reliability, optimized performance, and seamless manufacturability.",
        icon: <IoFlashOutline size={48} />,
      },
      {
        title: "Skilled Engineering Team",
        description:
          "Our engineers specialize in hardware engineering, embedded design, and electronic design services. We build optimized, scalable solutions across consumer electronics and IoT devices.",
        icon: <Share1Icon width={48} height={48} />,
      },
      {
        title: "High Standards and Quality",
        description:
          "Every project meets strict engineering standards. From complex RF boards to low-power embedded systems, our hardware development services ensure lasting performance and safety.",
        icon: <IoExtensionPuzzleOutline size={48} />,
      },
      {
        title: "Rapid Prototyping and Validation",
        description:
          "We use rapid hardware prototyping to help clients validate and optimize designs early, minimizing risks and accelerating time-to-market.",
        icon: <IoHardwareChipOutline size={48} />,
      },
      {
        title: "Tailored Solutions for Every Project",
        description:
          "Each project is treated individually. HDH adapts its custom electronics design approach to meet the specific requirements of your device, ensuring solutions that fit both technical and business needs.",
        icon: <GlobeIcon width={43} height={48} />,
      },
      {
        title: "Trusted Partner for Innovation",
        description:
          "With extensive experience in custom hardware design, hardware engineering, and hardware product design, HDH delivers solutions that are cutting-edge today and ready to scale for the future.",
        icon: <CodeIcon width={43} height={48} />,
      },
    ],

    faq: {
      title: "FAQ",
      items: [
        {
          question: "What types of custom hardware solutions do you provide?",
          answer:
            "We provide flexible custom hardware design solutions, including embedded systems, electronic devices, and hardware prototypes, designed to meet your unique requirements.",
        },
        {
          question: "How does your hardware prototyping process work?",
          answer:
            "In our hardware prototyping process, we use market-available modules to create functional concepts based on your requirements, proving the device’s feasibility. Once the design is validated, we move to hardware product development and DFM, where the final custom design may differ from the prototype but maintains the same functionality.",
        },
        {
          question: "What areas do your hardware engineering services cover?",
          answer:
            "Our hardware engineering services include hardware design and development, embedded hardware design, electronic design services, and hardware product design. We combine deep technical expertise with practical experience to deliver efficient, scalable, and innovative custom hardware solutions.",
        },
        {
          question:
            "Can you support hardware development for consumer electronics?",
          answer:
            "Yes. We provide end-to-end hardware design services for consumer electronics, from initial hardware design and embedded systems to final product development. Our solutions are tailored to your specifications, ensuring a smooth path from concept to production.",
        },
      ],
    },
    testimonials: [
      {
        logo: TauroTechnologies,
        text: `HDH is an amazing team with real engineering talent. These guys understand even the most complex tasks and somehow make everything look easy.\nThey’re incredibly flexible, truly listen to what the customer needs, and always come up with solutions that are both high-quality and affordable.\nWorking with HDH was an absolute pleasure. Big thanks to the whole team — you’re awesome, and I’d happily work with you again anytime!`,
        name: "Gevorg Sargsyan",
        position: "Co-founder and CEO",
      },
      {
        logo: NuveReview,
        text: `HDH is a team that turns bold ideas into reality.\nThey bring metal to life and take on projects that initially seem impossible.\nAs a client, I can confidently say they have an exceptional sense of timing, precise risk assessment, and a deep understanding of technology.\nI’ve been working with them for many years, and I highly recommend HDH to anyone who doubts whether complex engineering ideas can be turned into reality with them, it’s absolutely possible!`,
        name: "Sergo Oganov",
        position: "Chief Operating Officer",
      },
      {
        logo: QaylTech,
        text: `Working with HDH on the Powered Exoskeleton project was outstanding. They understood the urgency of this medical initiative, acting quickly to deliver hardware that could help war-injured patients before nerve damage became irreversible. The timeline was extremely tight, and every hour counted as the team pushed to deliver results before the medical window closed. Their care, speed, and dedication produced a functional prototype already bringing hope to those at risk of long-term disability. We’re grateful for their partnership and excited to continue this vital work.`,
        name: "David Arsenyan",
        position: "Founder & CEO at QaylTech and Muvia",
      },
    ],
  },
};

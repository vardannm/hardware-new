import BlogCard from "../../components/ui/BlogCard";
import IotHardwareDesign from "@/public/blog/iot-hardware-design.jpg";
import PcbLayoutGuidelines from "@/public/blog/pcb-layout-guidelines.jpg";
import PocEvtDvtPvt from "@/public/blog/poc-evt-dvt-pvt.jpg";
import HardwareRapidPrototyping from "@/public/blog/hardware-rapid-prototyping.png";
import HardwareProductLifecycle from "@/public/blog/hardware-product-lifecycle.jpg";
export const metadata = {
  title: "Hardware Engineering Blog | HDH",
  description:
    "Explore our hardware engineering blog for expert insights, practical tips, and in-depth guides on hardware design, prototyping, PCB layout, and product development.",
};

function Blog() {
    const blogCards = [
        {
            src: IotHardwareDesign,
            alt: "Comprehensive guide on IoT hardware design from architecture and prototyping to testing and mass production",
            imageTitle: "IoT Hardware Design",
            title: "From Circuit to Customer: Managing the End-to-End Hardware Product Lifecycle",
            description: "Explore the complete journey of a hardware product, from initial concept and prototyping to manufacturing and delivery. Learn strategies to streamline development, reduce costs, and bring your ideas to market efficiently. A must-read among our hardware design articles.",
            href: "/blog/from-circuit-to-customer"
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
        {
            src: HardwareProductLifecycle,
            alt: "Comprehensive guide on hardware product lifecycle from concept to market",
            imageTitle: "Hardware Product Lifecycle",
            title: "Hardware Design for IoT Projects: A Complete Guide",
            description: "Unlock the potential of Internet of Things (IoT) devices with a comprehensive hardware development guide. Dive into essential considerations for connectivity, power efficiency, and device reliability in today’s interconnected world.",
            href: "/blog/from-circuit-to-customer"
        },

    ];
  return (
    <div className="  flex flex-col gap-60  max-xl:gap-10 max-md:gap-8 max-sm:gap-6 mb-5">
        <div className="flex flex-col py-4 gap-[26px] max-sm:gap-4 padding-responsive">
      <h1 className="heading-responsive ">
        Welcome to Our Hardware Engineering Blog
      </h1>
      <h4 className="text-[20px] mb-6 max-sm:text-[14px]">
        Stay ahead in the fast-paced world of hardware design with expert
        guidance, practical tips, and in-depth resources. Whether you’re an
        engineer, designer, or tech enthusiast, our hardware engineering blog
        offers the latest hardware design articles, hardware development guides
        covering the full spectrum of development, from initial concepts to
        market-ready products.
      </h4>
      </div>
        <div className="flex flex-col gap-60 max-sm:gap-20">
        {blogCards.map((card, index) => (
            <BlogCard 
            key={index}
            src={card.src}
            alt={card.alt}
            imageTitle={card.imageTitle}
            title={card.title}
            description={card.description}
            href={card.href}
            />
        ))}
        </div>
    </div>
  );
}

export default Blog;

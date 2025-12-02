import Image from "next/image";
import SmartHomeAutomationSystems from "@/public/industries/smart-home-automation-systems.png";
import SmartHomeAutomation from "@/public/industries/smart-home-automation.png";
import BackButton from "../../../components/ui/BackButton";
import SecurityAndCybersecurity from "@/public/industries/security-and-cybersecurity.png";
import IndustrialAutomation from "@/public/industries/industrial-automation.png";
import IndustryCard from "../../../components/ui/IndustryCard";
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
function SmartHome() {
  const otherIndustries = [
    {
      src: SecurityAndCybersecurity,
      text: "Security and Cybersecurity",
      alt: "Security and cybersecurity protection",
      title: "Security and Cybersecurity",
      href: "/product/sss",
    },
    {
      src: IndustrialAutomation,
      text: "Industrial Automation Solutions",
      alt: "Hardware security solutions for industrial automation systems",
      title: "Industrial Automation",
      href: "/product/rrr",
    },
  ];
  const faq =[
        {
          id: 'ioi-devices',
          question: 'What types of smart home IoT devices can HDH develop?',
          answer: 'HDH develops a wide range of smart home IoT devices and home automation products, including connected lighting, thermostats, sensors, smart switches, controllers, and other custom solutions..'
        },
        {
          id: 'hdh-handle',
          question: 'Does HDH handle both hardware and software for smart home technology?',
          answer: 'Yes. We provide end-to-end home IoT development, covering embedded systems, IoT software, mobile integration, and full smart home product development.'
        },
        {
          id: 'project-timelines',
          question: 'How secure are the smart home IoT devices you develop?',
          answer: 'Security is a top priority. Our devices feature  encrypted communication, secure firmware, and robust authentication protocols when needed.'
        }
      ];
  return (
    <div className="flex flex-col gap-60 mb-60">
      <div className="w-full h-[645px] relative max-sm:h-[400px]">
        <Image
          src={SmartHomeAutomationSystems}
          alt="Consulting background"
          fill
          unoptimized
          className="hero-background"
        />
      </div>
      <div className="w-[60%] flex flex-col mx-auto gap-8 max-sm:w-[95%] max-sm:gap-4">
        <BackButton />
        <p className="text-5xl font-bold w-2/3 max-sm:text-2xl">
          Smart Home Automation and IoT Devices
        </p>
        <div className="flex gap-6">
          <Image
            src={SmartHomeAutomation}
            unoptimized
            alt="Smart home automation and loT devices"
            title="Smart Home Automation"
            className="max-sm:hidden"
          />
          <p className="text-xl">
            We specialize in developing smart home automation systems and
            innovative IoT devices that transform living spaces into connected,
            intelligent environments. Our team combines deep technical expertise
            with thoughtful design to deliver systems that are reliable, secure,
            and intuitive to use. From concept through prototype, we ensure
            every solution is scalable and built for the future.
          </p>
        </div>
      </div>
      <div className="bg-[#FAFAFA] max-sm:bg-white">
        <div className="w-[55%] flex justify-center gap-16 py-8 items-center max-sm:flex-col  mx-auto max-sm:w-[95%]">
          <div className="flex flex-col gap-6 w-[80%] max-sm:w-[95%]">
            <p className="font-bold text-3xl">Technologies and Expertise</p>
            <p className="">
              Our team combines cutting-edge smart home engineering with IoT
              software development, delivering seamless connectivity and smart
              functionality. We focus on product design and full-cycle
              development to ensure your IoT devices integrate perfectly into
              modern homes.
            </p>
          </div>
          <div>
            <div className="flex flex-col items-start space-y-8 relative pl-6 max-sm:text-2xl">
              <div className="absolute left-[10px] top-8 h-[88%] w-0.5 bg-primary sm:hidden"></div>
              <div className="relative flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary ring-4 ring-primary/30 absolute -left-[17px] top-1/2 -translate-y-1/2 "></div>
                <p className="pl-[30px] font-bold">
                  Embedded systems and firmware for smart home IoT devices
                </p>
              </div>
              <div className="relative flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary ring-4 ring-primary/30 absolute -left-[17px] top-1/2 -translate-y-1/2"></div>
                <p className="pl-[30px] font-bold">
                  Architecture Design and Planning
                </p>
              </div>
              <div className="relative flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary ring-4 ring-primary/30  absolute -left-[17px] top-1/2 -translate-y-1/2"></div>
                <p className="pl-[30px] font-bold">
                  Wireless communication Wi-Fi, Zigbee, Bluetooth (BLE), Z-Wave,
                  Lora, Thread, Cellular, RFID and custom radio solutions.
                </p>
              </div>
              <div className="relative flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary ring-4 ring-primary/30  absolute -left-[17px] top-1/2 -translate-y-1/2"></div>
                <p className="pl-[30px] font-bold">
                  Cloud integration,custom radio solutions and IoT software
                  development
                </p>
              </div>
              <div className="relative flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary ring-4 ring-primary/30  absolute -left-[17px] top-1/2 -translate-y-1/2"></div>
                <p className="pl-[30px] font-bold">
                  Sensor integration for home automation products
                </p>
              </div>
              <div className="relative flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary ring-4 ring-primary/30  absolute -left-[17px] top-1/2 -translate-y-1/2"></div>
                <p className="pl-[30px] font-bold">
                  Energy management and automation protocols
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[40%] mx-auto text-center  justify-center items-center">
        <p className="font bold text-3xl">
          Benefits of Our Smart Home Automation and IoT Devices services
        </p>
        <p className="leading-12 w-[80%]">
          Custom home automation systems tailored to your vision High
          reliability and security for smart home IoT devices Scalable
          automation solutions for future expansions Full-cycle support: smart
          home product design, prototyping, testing, and deployment
        </p>
      </div>
      <div className="mx-auto flex flex-col gap-6">
        <p className="text-3xl font-bold mx-auto">Other Industries We Serve</p>
        <div className="flex gap-6">
          {otherIndustries.map((industry, i) => (
            <IndustryCard 
            key={i}
            href={industry.href}
            alt={industry.alt}
            title={industry.title}
            text={industry.text}
            src={industry.src}
            />
          ))}
        </div>
      </div>
      <div className="mx-auto flex flex-col gap-6 w-[53%]">
        <p className="text-3xl font-bold mx-auto">FAQ</p>
<div className="flex flex-col gap-2">
            {faq.map((item, index) => (
              <div key={index} className="space-y-4  ">
                <Accordion.Root
                  type="single"
                  collapsible
                  className="space-y-3 "
                >
                  <Accordion.Item
                    key={item.id}
                    value={item.id}
                    className="bg-[#F8F8F8] overflow-hidden transition-all duration-200 hover:shadow-md rounded-lg "
                  >
                    <Accordion.Trigger className="flex justify-between items-center w-full p-2 text-left font-bold text-lg text-black  hover:bg-gray-50 transition-colors duration-200 group">
                      <span className="text-left pr-4 ">{item.question}</span>
                      <ChevronDownIcon
                        className="transform transition-transform duration-300 group-data-[state=open]:rotate-180 text-[#31B56A] font-bold flex-shrink-0 ml-2"
                        width={35}
                        height={35}
                      />
                    </Accordion.Trigger>
                    <Accordion.Content className="px-6 pb-6 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                      <div className="border-t border-gray-100 pt-4 mt-4">
                        {item.answer}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion.Root>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}

export default SmartHome;

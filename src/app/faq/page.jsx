import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { faqCategories, faqHeader } from '../../data/faq';

export const metadata = {
  alternates: {
      canonical: `https://www.hardwarehouses.com/faq/`,
    },
  title: "Hardware Design FAQ | HDH",
  description:
    "Find answers to common questions about hardware design services, custom solutions, prototyping, testing, compliance, project management, and support at Hardware Design House.",
     openGraph: {
      title: "Hardware Design FAQ | HDH",
      description:"Explore our Hardware Design FAQ to get answers on custom hardware design, prototyping, testing, and project support. Learn more about our expert services at Hardware Design House.",
      type:"website",
    },
};

function _StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Hardware Design House",
            "alternateName": "HDH",
            "url": "https://www.hardwarehouses.com/",
            "description": "Hardware Design House (HDH) is a hardware design company delivering custom hardware development, prototyping, testing, and full-cycle engineering solutions for IoT, defense, healthcare, industrial automation, and more.",
            "email": "info@hardwarehouses.com",
            "telephone": ["+37455342262", "+37441777704"],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3 Hakob Hakobyan Street",
              "addressLocality": "Yerevan",
              "postalCode": "0033",
              "addressCountry": "AM"
            },
            "sameAs": [
              "https://www.linkedin.com/company/hardware-design-house-hdh/",
              "https://www.facebook.com/hardwaredesignhouse/"
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://www.hardwarehouses.com/",
            "name": "Hardware Design House (HDH)",
            "description": "HDH is a hardware design company delivering custom product development, prototyping, testing, and full-cycle solutions for IoT, defense, healthcare, and more.",
            "inLanguage": "en"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "url": "https://www.hardwarehouses.com/faq",
            "name": "Hardware Design FAQ | HDH",
            "headline": "Frequently Asked Questions – Hardware Design House",
            "description": "Find answers to common questions about hardware design services, custom solutions, prototyping, testing, compliance, project management, and support at Hardware Design House.",
            "inLanguage": "en",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What does Hardware Design House do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hardware Design House provides end-to-end hardware development services, including custom hardware design, PCB layout, embedded systems, prototyping, testing, and project management. We deliver customized solutions for industries such as healthcare, IoT, defense, and industrial automation."
                }
              },
              {
                "@type": "Question",
                "name": "What services do you offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our core services include Custom Hardware Design, Prototype Development, System Architecture and Optimization, Product Testing and Validation, Manufacturing Full Cycle, Consulting and Technical Support, and Hardware Updates and Improvements."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide custom hardware development solutions and prototyping services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Every project is tailored to our clients’ specific requirements. We support all stages of hardware development, from concept and design to prototyping, testing, and full-scale production, ensuring solutions meet your technical and business goals."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer hardware design consulting or advisory services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Our experts help clients validate concepts, select appropriate technologies, optimize performance, and reduce costs, ensuring your product is ready for market success."
                }
              },
              {
                "@type": "Question",
                "name": "How do you ensure quality in hardware design and development services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Quality is built into every stage of our process through rigorous hardware testing and validation, using electronic components that can be certified for safety electrical standards such as UL, CSA, CE, and FCC, and for environmental compliance such as RoHS and REACH. We also rely on continuous client feedback, iterative improvements, and post-delivery support and updates."
                }
              },
              {
                "@type": "Question",
                "name": "Can you update or improve existing hardware products?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We provide hardware upgrades, improvements, and optimization services to extend product lifespan, improve efficiency, and integrate new technologies into existing products."
                }
              },
              {
                "@type": "Question",
                "name": "What industries do you serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We have experience serving a wide range of industries, including Healthcare and Medical Technology, Smart Home and IoT, Education and EdTech, Industrial Automation, Green Energy and Sustainability, Security and Cybersecurity, and Creative and Cultural Technology."
                }
              },
              {
                "@type": "Question",
                "name": "Can you provide a project quote and flexible pricing options?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. If you share your project requirements with us, we will provide a detailed proposal outlining timelines, costs, and recommended solutions. Our pricing adapts to the scale and scope of your project, whether you are a startup, scale-up, or enterprise."
                }
              },
              {
                "@type": "Question",
                "name": "How are project timelines managed, and do you provide post-project support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Project timelines vary depending on complexity, industry, and required certifications. During the initial consultation, we provide a clear estimate for your specific project. After completion, we continue to offer updates, troubleshooting, and product improvements as needed."
                }
              },
              {
                "@type": "Question",
                "name": "Do you comply with international standards?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We ensure that hardware components meet relevant safety, electrical, and environmental standards based on project requirements. This includes certifications such as UL, CSA, CE, and FCC for safety and electrical compliance, and RoHS and REACH for environmental compliance."
                }
              },
              {
                "@type": "Question",
                "name": "Can you help optimize hardware for performance and cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Our system architecture and optimization services are designed to balance performance, reliability, and cost-effectiveness for your hardware solutions."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer free consultations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Consultation availability depends on the project scope. Small preliminary consultations may be free, while larger or more complex projects are typically scoped with a detailed proposal."
                }
              },
              {
                "@type": "Question",
                "name": "What are the first steps for starting a project?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To start a project, reach out via our contact form or email, share your project details, and our team will guide you through the next steps, including consultation, proposal preparation, and project kickoff."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}

export default function FAQ() {
  const formatAnswer = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.startsWith('•')) {
        return (
          <div key={index} className="flex items-start mt-1">
            <span className="mr-2">•</span>
            <span>{line.substring(1).trim()}</span>
          </div>
        );
      }
      return (
        <div key={index} className={index > 0 ? 'mt-2' : ''}>
          {line}
        </div>
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <_StructuredData />

      <h1 className="text-4xl md:text-5xl font-bold text-start mb-6 text-black">
        {faqHeader.pageTitle}
      </h1>
      <h3 className="text-xl md:text-2xl text-start text-black mb-12">
        {faqHeader.pageDescription}
      </h3>

      <div className="space-y-8">
        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-4">
            <h2 className="text-3xl font-semibold ">
              {category.title}
            </h2>
            <Accordion.Root type="single" collapsible className="space-y-3">
              {category.items.map((item) => (
                <Accordion.Item
                  key={item.id}
                  value={item.id}
                  className="bg-[#F8F8F8] rounded-lg shadow-sm border border-[#d0d0d0] overflow-hidden transition-all duration-200 hover:shadow-md"
                >
                  <Accordion.Trigger className="flex justify-between items-center w-full p-6 text-left font-semibold text-lg  hover:bg-gray-50 transition-colors duration-200 group">
                    <h3 className="text-left pr-4">{item.question}</h3>
                    <ChevronDownIcon
                      className="transform transition-transform duration-300 group-data-[state=open]:rotate-180 text-[#31B56A] font-bold flex-shrink-0 ml-2"
                      width={35}
                      height={35}
                    />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 pb-6 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                    <div className="border-t border-gray-100 pt-4">
                      {formatAnswer(item.answer)}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        ))}
      </div>
    </div>
  );
}
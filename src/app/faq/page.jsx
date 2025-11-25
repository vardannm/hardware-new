import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'

function FAQ() {
  const faqCategories = [
    {
      title: "About Us",
      items: [
        {
          id: 'what-does-hdh-do',
          question: 'What does Hardware Design House do?',
          answer: 'Hardware Design House provides end-to-end hardware development services, including custom design, PCB layout, embedded systems, prototyping, testing, and project management. We deliver customized solutions for industries such as healthcare, IoT, defense, and industrial automation.'
        }
      ]
    },
    {
      title: "Our Services & Solutions",
      items: [
        {
          id: 'services-offered',
          question: 'What services do you offer?',
          answer: `Our core services include:
• Custom Hardware Design
• Prototype Development
• System Architecture and Optimization
• Product Testing and Validation
• Manufacturing Full Cycle
• Consulting, Technical Support
• Hardware Updates and Improvements`
        },
        {
          id: 'custom-development',
          question: 'Do you provide custom hardware development solutions and prototyping services?',
          answer: 'Absolutely. Every project is tailored to our clients\' specific requirements. We support all stages of hardware development, from concept and design to prototyping, testing, and full-scale production, ensuring solutions meet your technical and business goals.'
        },
        {
          id: 'consulting-services',
          question: 'Do you offer hardware design consulting or advisory services?',
          answer: 'Yes. Our experts help clients validate concepts, select appropriate technologies, optimize performance, and reduce costs, ensuring your product is ready for market success.'
        },
        {
          id: 'quality-assurance',
          question: 'How do you ensure quality in hardware design and development services?',
          answer: `Quality is built into every stage of our process through:
• Rigorous hardware testing and validation
• Electronic components can be certified for safety electrical standards (UL, CSA, CE, FCC) and for environmental compliance (RoHS, REACH)
• Continuous client feedback and iterative improvements
• Post-delivery support and updates`
        },
        {
          id: 'hardware-updates',
          question: 'Can you update or improve existing hardware products?',
          answer: 'Yes. We provide hardware upgrades, improvements, and optimization services to extend product lifespan, improve efficiency, and integrate new technologies.'
        },
        {
          id: 'industries-served',
          question: 'What industries do you serve?',
          answer: `We have experience serving a wide range of industries, including:
• Healthcare & Medical Technology
• Smart Home & IoT
• Education & EdTech
• Industrial Automation
• Green Energy & Sustainability
• Security & Cybersecurity
• Creative & Cultural Technology`
        }
      ]
    },
    {
      title: "Project Management & Pricing",
      items: [
        {
          id: 'pricing-options',
          question: 'Can you provide a project quote and flexible pricing options?',
          answer: 'Yes. Simply share your project requirements, and we will provide a detailed proposal outlining timelines, costs, and recommended solutions. Our pricing adapts to the scale and scope of your project, whether you are a startup, scale-up, or enterprise.'
        },
        {
          id: 'project-timelines',
          question: 'How are project timelines managed, and do you provide post-project support?',
          answer: 'Project timelines vary depending on complexity, industry, and required certifications. During the initial consultation, we provide a clear estimate for your specific project. After completion, we continue to offer updates, troubleshooting, and product improvements as needed.'
        }
      ]
    },
    {
      title: "Technical Performance & Compliance",
      items: [
        {
          id: 'compliance-standards',
          question: 'Do you comply with international standards?',
          answer: 'Yes. We ensure that hardware components meet relevant safety, electrical, and environmental standards based on project requirements. This includes certifications such as UL, CSA, CE, and FCC for safety and electrical compliance, and RoHS, REACH for environmental compliance.'
        },
        {
          id: 'performance-optimization',
          question: 'Can you help optimize hardware for performance and cost?',
          answer: 'Yes. Our system architecture and optimization services are designed to balance performance, reliability, and cost-effectiveness.'
        }
      ]
    },
    {
      title: "Getting Started with Your Project",
      items: [
        {
          id: 'free-consultations',
          question: 'Do you offer free consultations?',
          answer: 'Consultation availability depends on the project scope. Small preliminary consultations may be free, while larger projects are scoped with a detailed proposal.'
        },
        {
          id: 'project-start',
          question: 'What are the first steps for starting a project?',
          answer: 'Simply reach out via our contact form or Email, share your project details, and our team will guide you through the next steps, including consultation, proposal, and project kickoff.'
        }
      ]
    }
  ]

  const formatAnswer = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.startsWith('•')) {
        return (
          <div key={index} className="flex items-start mt-1">
            <span className="mr-2">•</span>
            <span>{line.substring(1).trim()}</span>
          </div>
        )
      }
      return (
        <div key={index} className={index > 0 ? 'mt-2' : ''}>
          {line}
        </div>
      )
    })
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className='text-4xl md:text-5xl font-bold text-start mb-6 text-gray-900'>
        Hardware Design FAQ
      </h1>
      <p className='text-xl md:text-2xl text-start text-gray-600 mb-12'>
        Find answers to common questions about hardware design services, custom solutions, and project support
      </p>
      
      <div className="space-y-8">
        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-4">
            <h2 className="text-3xl font-semibold text-gray-800  ">
              {category.title}
            </h2>
            <Accordion.Root 
              type="single" 
              collapsible 
              className="space-y-3"
            >
              {category.items.map((item) => (
                <Accordion.Item 
                  key={item.id}
                  value={item.id}
                   className="bg-[#F8F8F8] rounded-lg shadow-sm border border-[#d0d0d0] overflow-hidden transition-all duration-200 hover:shadow-md"
                >
                  <Accordion.Trigger className="flex justify-between items-center w-full p-6 text-left font-semibold text-lg text-gray-800 hover:bg-gray-50 transition-colors duration-200 group">
                    <span className="text-left pr-4">{item.question}</span>
                    <ChevronDownIcon 
                      className="transform transition-transform duration-300 group-data-[state=open]:rotate-180 text-[#D0D0D0] flex-shrink-0 ml-2" 
                      width={35} 
                      height={35} 
                    />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 pb-6  data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                    <div className=" border-t border-gray-100">
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
  )
}

export default FAQ
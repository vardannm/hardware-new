import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { faqCategories , faqHeader } from '../../data/faq'
function FAQ() {

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
        {faqHeader.pageTitle}
      </h1>
      <p className='text-xl md:text-2xl text-start text-gray-600 mb-12'>
        {faqHeader.pageDescription}
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
                        className="transform transition-transform duration-300 group-data-[state=open]:rotate-180 text-[#31B56A] font-bold flex-shrink-0 ml-2"
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
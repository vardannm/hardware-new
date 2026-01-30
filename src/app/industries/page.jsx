import Image from "next/image";
import Link from "next/link";
import { industriesData } from "../../data/industries";

export const metadata = {
  title: "Industries We Serve | HDH",
  description:
    "Explore the industries Hardware Design House serves, from Smart Home and Industrial Automation to Security, Defense, Healthcare, Education, and Green Energy.",
    openGraph: {
      title: "Industries We Serve | HDH",
     description: "Discover the full range of industries supported by HDH, including Smart Home, Industrial Automation, Security, Defense, Healthcare, Transportation, and more.",
     type: "website",
    }
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
            "description": "Hardware Design House (HDH) provides hardware engineering and embedded systems solutions across multiple industries, including smart home IoT, industrial automation, security, and healthcare.",
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
            "description": "End-to-end hardware engineering services and industry-focused product development for smart home, industrial automation, security, healthcare, and more.",
            "inLanguage": "en"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "url": "https://www.hardwarehouses.com/industries",
            "name": "Industries We Serve | HDH",
            "headline": "Industries We Serve",
            "description": "Explore the industries Hardware Design House serves, from Smart Home and Industrial Automation to Security, Defense, Healthcare, Education, and Green Energy.",
            "inLanguage": "en"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Industries Served by Hardware Design House",
            "itemListOrder": "https://schema.org/ItemListOrderAscending",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Smart Home and IoT",
                "url": "https://www.hardwarehouses.com/industries/smart-home-iot"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Industrial Automation Solutions",
                "url": "https://www.hardwarehouses.com/industries/industrial-automation"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Security and Cybersecurity",
                "url": "https://www.hardwarehouses.com/industries/security-and-cybersecurity"
              }
            ]
          })
        }}
      />
    </>
  );
}

export default function Industries() {
  const { header, industries } = industriesData;

  return (
    <div className="flex flex-col mt-60 max-sm:mt-5">
      <_StructuredData />

      <div className="w-[73%] flex flex-col mx-auto gap-8 mb-20 max-sm:w-[95%] max-sm:gap-4 text-start">
        <p className="font-bold text-[56px] max-sm:text-[32px]">{header.title}</p>
        <p className="text-[20px] w-2/3 max-sm:w-90">{header.description}</p>
      </div>
      {industries.map((industry) => (
        <div key={industry.id} className="flex flex-col w-full">
          {industry.image && (
            <Image
              src={industry.image}
              alt={industry.imageAlt}
              title={industry.imageTitle}
              className="object-cover w-full h-[610px]"
            />
          )}
          <div className="px-[13%] bg-[#FAFAFA] py-6 flex flex-col mx-auto gap-8 mb-20 max-sm:px-[5%] max-sm:gap-4 text-start">
            <p className="font-bold text-[32px]">{industry.title}</p>
            <p className="text-[20px]">{industry.description}</p>

            <Link href={industry.link}>
              <button className="px-4 py-2 text-sm text-green-600 border border-green-500 rounded-md hover:bg-green-50 transition cursor-pointer">
                {industry.linkLabel}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
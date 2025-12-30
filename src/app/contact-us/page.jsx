export const metadata = {
  title: "Contact Hardware Design Company | HDH",
  description:
    "Contact Hardware Design House for hardware design services and consultations. Reach out to our experts to discuss your project ideas, technical challenges, and hardware needs, or request a detailed hardware design quote.",
   keywords:["contact","hardware","design","company"],
    robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Contact Hardware Design Company | HDH",
    description:
      "Get in touch with Hardware Design House for expert hardware design services and consultations. Discuss your project ideas and hardware requirements with our experienced team.",
    url: "https://www.hardwarehouses.com/contact-us",
    siteName: "Hardware Design House",
    type: "website",
  },
    alternates: {
    canonical: "https://www.hardwarehouses.com/contact-us",
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
            "@id": "https://www.hardwarehouses.com/#organization",
            name: "Hardware Design House",
            alternateName: "HDH",
            url: "https://www.hardwarehouses.com/",
            description:
              "Hardware Design House (HDH) is a hardware design company delivering custom hardware development, prototyping, testing, and full-cycle engineering solutions for IoT, defense, healthcare, and industrial automation.",
            email: "info@hardwarehouses.com",
            telephone: ["+37455342262", "+37441777704"],
            address: {
              "@type": "PostalAddress",
              streetAddress: "3 Hakob Hakobyan Street",
              addressLocality: "Yerevan",
              postalCode: "0033",
              addressCountry: "AM",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: "info@hardwarehouses.com",
              telephone: "+37455342262",
              areaServed: "Worldwide",
              availableLanguage: ["English"],
            },
            sameAs: [
              "https://www.linkedin.com/company/hardware-design-house-hdh/",
              "https://www.facebook.com/hardwaredesignhouse/",
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.hardwarehouses.com/#website",
            url: "https://www.hardwarehouses.com/",
            name: "Hardware Design House (HDH)",
            description:
              "HDH is a hardware design company delivering custom product development, prototyping, testing, and full-cycle engineering solutions.",
            inLanguage: "en",
            publisher: {
              "@id": "https://www.hardwarehouses.com/#organization",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": "https://www.hardwarehouses.com/contact-us#contactpage",
            url: "https://www.hardwarehouses.com/contact-us",
            name: "Contact Hardware Design Company | HDH",
            headline: "Contact Hardware Design House",
            description:
              "Contact Hardware Design House for hardware design services and consultations. Reach out to our experts to discuss your project ideas, technical challenges, and hardware needs, or request a detailed hardware design quote.",
            inLanguage: "en",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.hardwarehouses.com/contact-us",
            },
            about: {
              "@id": "https://www.hardwarehouses.com/#organization",
            },
          }),
        }}
      />
    </>
  );
}


export default function Contactus() {
  return (
    <div className="mx-auto text-center pt-16 flex flex-col gap-6 w-[50%] pb-60 max-sm:w-[95%] max-sm:text-start max-sm:gap-2">
      <_StructuredData />

      <p className="font-bold text-4xl max-sm:text-xl">Contact Hardware Design House</p>
      <p>
        Get in touch with our team of experienced hardware design experts to
        discover effective, innovative solutions focused on your project needs.
        Whether you are developing a new concept or enhancing an existing
        product, our engineers are here to guide you at every stage of
        development. You can request a detailed hardware design quote or schedule
        a personalized consultation with our specialists to discuss your ideas,
        technical challenges, and potential solutions in depth. We value clear
        communication and timely collaboration, ensuring every project moves
        forward with confidence and precision. <br /> <br /> At Hardware Design
        House, we are dedicated to turning your vision into a high-quality,
        market-ready product, built on innovation, reliability, and trusted
        expertise. <br /> <br /> info@hardwarehouses.com +374 55 342 262 | +374
        41 777 704
      </p>
      <p className="font-bold text-3xl">Drop Us a Message</p>
      <div className="flex flex-col gap-3 pt-[15px] mx-auto max-sm:mx-0">
        <input placeholder="Name Surname" className="w-[334px] h-10 rounded-md bg-[#F3F3F3] px-4 max-sm:w-full" />
        <input placeholder="Email Address" className="w-[334px] h-10 rounded-md bg-[#F3F3F3] px-4 max-sm:w-full" />
        <textarea placeholder="Message" className="w-[334px] rounded-md bg-[#F3F3F3] px-4 max-sm:w-full" rows="4" />
        <button className="bg-[#31B56A] rounded-md px-4 py-3 mx-auto text-white w-[43%]">
          Send message
        </button>
      </div>
    </div>
  );
}
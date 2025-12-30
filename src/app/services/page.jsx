import ServicesClient from "./page.client";

export const metadata = {
  title: "Full-Cycle Hardware Engineering Services | HDH",
  description:
    "Discover full-cycle hardware engineering services, including custom hardware design, prototyping, system architecture, testing and manufacturing support.",
};

function CommonStructuredData() {
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
            "description": "Hardware Design House (HDH) provides full-cycle hardware engineering services including electronics design, prototyping, testing, manufacturing support, and embedded systems engineering for production-ready products.",
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
            "description": "End-to-end hardware engineering services, electronics design, prototyping, testing, and manufacturing support for production-ready electronic products.",
            "inLanguage": "en"
          })
        }}
      />
    </>
  );
}

export default function Services() {
  return (
    <>
      <CommonStructuredData />
      <ServicesClient />
    </>
  );
}
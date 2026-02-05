import ProjectsClient from "./page.client";

export const metadata = {
    alternates: { canonical: "https://www.hardwarehouses.com/projects/" },
  title: "Hardware Design Projects | HDH",
  description:
    "Explore our hardware design projects across industrial, medical, consumer, and secure systems. From electronics and firmware to prototyping and testing.",
openGraph:{
  title: "Hardware Design Projects | Hardware Design House",
  description:"See how HDH develops market-ready hardware solutions across industrial, medical, consumer, and secure systems — electronics, embedded and prototyping.",
  type:"website",
}
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
            "@id": "https://www.hardwarehouses.com/#organization",
            name: "Hardware Design House",
            alternateName: "HDH",
            url: "https://www.hardwarehouses.com/",
            email: "info@hardwarehouses.com",
            telephone: ["+37455342262", "+37441777704"],
            address: {
              "@type": "PostalAddress",
              streetAddress: "3 Hakob Hakobyan Street",
              addressLocality: "Yerevan",
              postalCode: "0033",
              addressCountry: "AM",
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
            publisher: {
              "@id": "https://www.hardwarehouses.com/#organization",
            },
            inLanguage: "en",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": "https://www.hardwarehouses.com/projects#collectionpage",
            url: "https://www.hardwarehouses.com/projects",
            name: "Hardware Design Projects | HDH",
            headline: "Our Hardware Design Projects",
            description:
              "Explore our hardware design projects across industrial, medical, consumer, and secure systems. From electronics and firmware to prototyping and testing.",
            isPartOf: {
              "@id": "https://www.hardwarehouses.com/#website",
            },
            about: {
              "@id": "https://www.hardwarehouses.com/#organization",
            },
            inLanguage: "en",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Featured Hardware Design Projects",
            itemListOrder: "https://schema.org/ItemListOrderAscending",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Smart Thermostat System",
                url: "https://www.hardwarehouses.com/projects/smart-thermostat-system",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "zLight Smart Bedroom Lighting System",
                url: "https://www.hardwarehouses.com/product/smart-bedroom-lighting-system",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Moon by 1-Ring",
                url: "https://www.hardwarehouses.com/product/smart-home-hub",
              },
            ],
          }),
        }}
      />
    </>
  );
}
export default function Projects() {
  return (
    <>
      <CommonStructuredData />
      <ProjectsClient />
    </>
  );
}
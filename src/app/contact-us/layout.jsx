export const metadata = {
  title: "Contact Hardware Design Company | HDH",
  description:
    "Contact Hardware Design House for hardware design services and consultations.",
  keywords: ["contact", "hardware", "design", "company"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact Hardware Design Company | HDH",
    description:
      "Get in touch with Hardware Design House for expert hardware design services.",
    url: "https://www.hardwarehouses.com/contact-us",
    siteName: "Hardware Design House",
    type: "website",
  },
  alternates: {
    canonical: "https://www.hardwarehouses.com/contact-us",
  },
};

export default function ContactLayout({ children }) {
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

      {children}
    </>
  );
}

import { SERVICE_DETAILS } from "../../../data/serviceDetail";

export async function generateStaticParams() {
  return Object.keys(SERVICE_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug; 
   const service = SERVICE_DETAILS[slug];

  if (!service) {
    return { title: "Service Not Found | HDH" };
  }

  return {
    title: `${service.pageTitle} | HDH`,
    description: service.hero.text.slice(0, 160),
    openGraph: {
      title: `${service.pageTitle} | HDH`,
      description: service.hero.text.slice(0, 160),
    },
  };
}

function CommonStructuredData({ slug, service }) {
  const baseUrl = "https://www.hardwarehouses.com";
  const pageUrl = `${baseUrl}/services/${slug}`;

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
            "url": baseUrl,
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
            "url": baseUrl,
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
            "@type": "WebPage",
            "url": pageUrl,
            "name": `${service?.pageTitle || "Service"} | HDH`,
            "headline": service?.hero.desktopTitle || service?.hero.mobileTitle || "Service",
            "description": service?.hero.text.slice(0, 160) || "",
            "inLanguage": "en"
          })
        }}
      />
    </>
  );
}

export default async function ServiceLayout({ children, params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = SERVICE_DETAILS[slug];

  return (
    <>
      <CommonStructuredData slug={slug} service={service} />
      {children}
    </>
  );
}
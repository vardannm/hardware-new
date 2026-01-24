import { INDUSTRY_DETAILS } from "../../../data/industryDetail";

export async function generateStaticParams() {
  return Object.keys(INDUSTRY_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const industry = INDUSTRY_DETAILS[slug];

  if (!industry) {
    return { title: "Industry Not Found | HDH" };
  }

  return {
    title: `${industry.metaTitle} | HDH`,
    description: industry.metaDescription,
    openGraph: {
      title: `${industry.metaTitle} | HDH`,
      description: industry.metaDescription,
    },
  };
}

function CommonStructuredData({ slug, industry }) {
  const baseUrl = "https://www.hardwarehouses.com";
  const pageUrl = `${baseUrl}/industries/${slug}`;

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
            "description": "Hardware Design House (HDH) provides custom hardware engineering solutions including secure embedded systems, IoT devices, access control hardware, and cybersecurity-focused electronics for multiple industries.",
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
            "description": "End-to-end hardware engineering services and industry-specific hardware solutions for secure, reliable, and scalable electronic products.",
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
            "name": `${industry?.metaTitle || "Industry"} | HDH`,
            "headline": industry?.title || "Industry",
            "description": industry?.metaDescription || "",
            "inLanguage": "en"
          })
        }}
      />
    </>
  );
}

export default function IndustryLayout({ children, params }) {
  const { slug } = params;
  const industry = INDUSTRY_DETAILS[slug];

  return (
    <>
      <CommonStructuredData slug={slug} industry={industry} />
      {children}
    </>
  );
}
import { BLOG_DETAILS } from "../../../data/blogDetail";

export async function generateStaticParams() {
  return Object.keys(BLOG_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = BLOG_DETAILS[slug];

  if (!blog) {
    return { title: "Blog Not Found | HDH" };
  }

  return {
    title: `${blog.metaTitle} | HDH`,
    description: blog.metaDescription,
    openGraph: {
      title: `${blog.metaTitle} | HDH`,
      description: blog.metaDescription,
      type: "article",
    },
  };
}

function CommonStructuredData({ slug, blog }) {
  const baseUrl = "https://www.hardwarehouses.com";
  const pageUrl = `${baseUrl}/blog/${slug}`;

  return (
    <>
      {/* Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Hardware Design House",
            alternateName: "HDH",
            url: baseUrl,
            description:
              "Hardware Design House (HDH) is a hardware design company delivering custom hardware development, prototyping, testing, and full-cycle engineering solutions for IoT, defense, healthcare, industrial automation, and more.",
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

      {/* WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: baseUrl,
            name: "Hardware Design House (HDH)",
            description:
              "HDH is a hardware design company delivering custom product development, prototyping, testing, and full-cycle solutions for IoT, defense, healthcare, and more.",
            inLanguage: "en",
          }),
        }}
      />

      {/* WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            url: pageUrl,
            name: `${blog?.metaTitle || "Blog Post"} | HDH`,
            headline: blog?.metaTitle || "Blog Post",
            description: blog?.metaDescription || "",
            inLanguage: "en",
          }),
        }}
      />
    </>
  );
}

export default async function BlogLayout({ children, params }) {
  const { slug } = await params;
  const blog = BLOG_DETAILS[slug];

  return (
    <>
      <CommonStructuredData slug={slug} blog={blog} />
      {children}
    </>
  );
}

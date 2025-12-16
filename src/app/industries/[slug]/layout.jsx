import { INDUSTRY_DETAILS } from "../../../data/industryDetail";

export async function generateStaticParams() {
  return Object.keys(INDUSTRY_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const industry = INDUSTRY_DETAILS[slug];

  if (!industry) {
    return {
      title: "Industry Not Found | HDH",
    };
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

export default function IndustryLayout({ children }) {
  return <>{children}</>;
}
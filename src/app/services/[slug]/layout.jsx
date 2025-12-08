import { SERVICE_DETAILS } from "../../../data/serviceDetail";

export async function generateStaticParams() {
  return Object.keys(SERVICE_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const service = SERVICE_DETAILS[slug];

  if (!service) {
    return {
      title: "Service Not Found | HDH",
    };
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

export default function ServiceLayout({ children }) {
  return <>{children}</>;
}
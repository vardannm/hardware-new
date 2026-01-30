import { PROJECT_DETAILS } from "../../../data/projectDetail";

export async function generateStaticParams() {
  return Object.keys(PROJECT_DETAILS).map((slug) => ({ slug }));
}
console.log("PROJECT PARAMS:", Object.keys(PROJECT_DETAILS));

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const project = PROJECT_DETAILS[slug];

  if (!project) {
    return { title: "Project Not Found | HDH" };
  }

  return {
    title: project.pageTitle + " | HDH",
    description: project.hero.text.slice(0, 160),
    openGraph: {
      title: project.og.title,
      description: project.og.descrition,
      type: "website",
    },
  };
}

export default function ProjectLayout({ children }) {
  return <>{children}</>;
}
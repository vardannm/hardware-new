import HomeClient from "./page.client";

export const metadata = {
   alternates: {
    canonical: "https://www.hardwarehouses.com/",
  },
  title: "Leading Hardware Design Company | HDH",
  description:
    "HDH is a hardware design company delivering custom product development, prototyping, testing, and full-cycle solutions for IoT, defense, healthcare, and more.",
  openGraph: {
    title: "Leading Hardware Design Company | HDH",
    description:
      "HDH delivers custom hardware design, product development, prototyping, testing, and full-cycle engineering solutions for IoT, defense, healthcare, and more.",
    type: "website",
  },
};

export default function Home() {
  return <HomeClient />;
}

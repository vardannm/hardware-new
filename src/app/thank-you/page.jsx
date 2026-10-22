import ThankYouClient from "./ThankYouClient";

export const metadata = {
  title: "Thank You | Hardware Design House",
  description: "Thank you for contacting Hardware Design House.",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}

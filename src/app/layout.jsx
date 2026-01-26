import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "../components/layout/ScrollToTop";
export const metadata = {
  title: "Hardware Projects",
  description: "Basic informative site for the shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 font-gilroy" suppressHydrationWarning>
        <Navbar />
        <ScrollToTop />
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
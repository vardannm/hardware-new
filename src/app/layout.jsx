import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollManager from "@/components/layout/scroll-restoration";
import Script from "next/script";

export const metadata = {
  title: "Hardware Projects",
  description: "Basic informative site for the shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 font-gilroy" suppressHydrationWarning>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7MMNDMV7VV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7MMNDMV7VV');
          `}
        </Script>

        <ScrollManager />
        <Navbar />
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

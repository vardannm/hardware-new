import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Shop Website",
  description: "Basic informative site for the shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 font-sans">
        <Navbar />
        <main className="min-h-[80vh] p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

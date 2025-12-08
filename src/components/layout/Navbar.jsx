import { Menu } from "lucide-react";
import Image from "next/image";
import Hardware from "@/public/hardware.svg";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white sticky top-0 z-50 border-b border-[#DCDBE1] shadow-sm">
      <div className="flex items-center order-1 max-sm:order-3">
        <Menu className="bg-[rgba(194,194,194,0.4)] w-8 h-8 cursor-pointer p-1 border border-[#C2C2C2] rounded" />
      </div>


        <a href="/" className="order-2 max-sm:order-1">
          <Image src={Hardware} alt="Hardware Icon" className="w-[49px]" />
        </a>


      <ul className="flex gap-6 order-3 max-sm:hidden">
        <li>
          <a
            href="/contact"
            className="hover:text-gray-400 rounded-full text-white p-3 bg-primary transition-colors"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}

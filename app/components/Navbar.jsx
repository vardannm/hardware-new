import { Menu } from "lucide-react";
import Image from "next/image";
import Hardware from "../../public/hardware.svg";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white sticky top-0 z-50 border-b border-[#DCDBE1] shadow-sm">
      <div className="flex items-center">
        <Menu className="bg-[rgba(194,194,194,0.4)] w-8 h-8 cursor-pointer p-1 border border-[#C2C2C2] rounded" />
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <a href="/">
          <Image src={Hardware} alt="Hardware Icon" className="w-[49px]" />
        </a>
      </div>

      <ul className="flex gap-6">
        <li>
          <a
            href="/contact"
            className="hover:text-gray-400 rounded-full text-white p-3 bg-[#2FB66A] transition-colors"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}

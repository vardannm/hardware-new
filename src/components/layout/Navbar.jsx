"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Hardware from "@/public/hardware.svg";
import NavbarIcon from "@/public/navbarIcon.png"
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>

      <nav className="flex justify-between items-center px-8 py-4 bg-white sticky top-0 z-50 border-b border-[#DCDBE1] shadow-sm">

        <div
          onClick={() => setOpen(true)}
          className="flex items-center order-1 max-sm:order-3"
        >
          <Menu className="bg-[rgba(194,194,194,0.4)] w-8 h-8 cursor-pointer p-1 border border-[#C2C2C2] rounded" />
        </div>

        <a href="/" className="order-2 max-sm:order-1">
          <Image src={NavbarIcon} alt="Hardware Icon" className="w-[240px]" />
        </a>

        <ul className="flex gap-6 order-3 max-sm:hidden">
          <li>
            <a
              href="/contact-us"
              className="hover:text-gray-400 rounded-full text-white p-3 bg-primary transition-colors"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 h-full w-[85%] max-w-xs bg-white z-50 p-6 shadow-xl transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between mb-6">
        <div className="sm:hidden">
          <Image src={Hardware} alt="Hardware Icon" className="w-[49px]" />
        </div>
        <div className=" mb-6 ">
          <X
            className="w-11 h-11 bg-gray-200 p-3 rounded-[10px] border border-[#C2C2C2] cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>
</div>
        <ul className="flex flex-col gap-6 text-[18px] font-bold">
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/industries">Industries</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/about-us">About us</a></li>
          <li><a href="/contact-us">Contact us</a></li>
        </ul>

        <div className="absolute bottom-6 text-sm text-black">
          <p>info@hardwarehouses.com</p>
          <p>+374 55 342 262</p>
          <p>+374 41 777 704</p>
        </div>
      </div>
    </>
  );
}

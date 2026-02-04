"use client";
import Image from "next/image";
import Hardware from "@/public/navbarIcon.png";
import { useSelectedLayoutSegment } from "next/navigation";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
export default function Footer() {
  const segment = useSelectedLayoutSegment();
  const isContactPage = segment === "contact-us";
  console.log(isContactPage);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSend = () => {
    const subject = encodeURIComponent("Contact request from website");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:info@hardwarehouses.com?subject=${subject}&body=${body}`;
  };
  return (
    <footer className="text-center py-[54px]  bg-[#DFDFDF] text-gray-400 text-sm flex flex-col ">
      <div className="w-[45%] max-xl:w-[55%] max-lg:w-[65%] max-md:w-[80%] max-sm:w-[97&] mx-auto">
        <Image src={Hardware} alt="Hardware Icon" className="w-[170px]" />
        <div className="flex text-black justify-between max-sm:flex-col-reverse pl-2">
          <div className="flex flex-col items-start ">
            <div
              className={`flex ${
                isContactPage ? "flex-row " : "flex-col  max-sm:gap-18"
              } max-sm:flex-row  pt-[15px] gap-4 `}
            >
              <div
                className={`flex ${
                  isContactPage ? "flex-row" : "flex-col"
                } gap-4 align-start items-start`}
              >
                <a className="font-medium" href="/">
                  Home
                </a>
                <a className="font-medium" href="/projects">
                  Projects
                </a>
                <a className="font-medium" href="/services">
                  Services
                </a>
              </div>
              <div
                className={`flex ${
                  isContactPage ? "flex-row" : "flex-col"
                } gap-4 align-start items-start`}
              >
                <a className="font-medium" href="/industries">
                  Industries
                </a>
                <a className="font-medium" href="/blog">
                  Blog
                </a>
                <a className="font-medium" href="/faq">
                  FAQ
                </a>
              </div>
              <div
                className={`flex ${
                  isContactPage ? "flex-row" : "flex-col"
                } gap-4 align-start items-start max-[350px]:hidden`}
              >
                <a className="font-medium" href="/about-us">
                  About
                </a>
                {!isContactPage && (
                  <a className="font-medium" href="/contact-us">
                    Contact
                  </a>
                )}
              </div>
            </div>
          </div>
          {!isContactPage && (
            <div className="flex flex-col">
              <div className="flex flex-col items-start pt-[8px]">
                <a className="text-[24px] font-bold">Contact Us</a>
                <div className="flex flex-col align-start items-start gap-3 pt-[15px] max-sm:w-full">
                  <input
                    className="w-[334px] max-sm:w-full h-12 rounded-md bg-[#F3F3F3] pl-2
             placeholder:font-medium placeholder:text-[#5e5e5e] placeholder:font-inter
             focus:placeholder-transparent"
                    placeholder="Name Surname"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <input
                    className="w-[334px] max-sm:w-full h-12 rounded-md bg-[#F3F3F3] pl-2
             placeholder:font-medium placeholder:text-[#5e5e5e] placeholder:font-inter
             focus:placeholder-transparent"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <textarea
                    className="w-[334px] max-sm:w-full rounded-md bg-[#F3F3F3] pl-2 pt-2 resize-none
             placeholder:font-medium placeholder:text-[#5e5e5e] placeholder:font-inter
             focus:placeholder-transparent"
                    rows="6"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />

                  {!isContactPage && (
                    <button
                      className="bg-[#31B56A] rounded-md px-4 py-3 text-white sm:hidden self-end mt-4 cursor-pointer"
                      onClick={handleSend}
                    >
                      Send message
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-between my-10 max-sm:mx-auto">
          <div className="flex gap-9 pl-2 max-sm:pl-0 max-sm:mx-auto">
            <a
              href="https://www.facebook.com/hardwaredesignhouse/."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hardware Design House on Facebook"
            >
              <FaFacebookF color="black" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/hardware-design-house-hdh/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hardware Design House on LinkedIn"
            >
              <FaLinkedin color="black" size={20} />
            </a>
          </div>
          {!isContactPage && (
            <button
              className="bg-[#31B56A] rounded-md px-4 py-3 text-white max-sm:hidden cursor-pointer"
              onClick={handleSend}
            >
              Send message
            </button>
          )}
        </div>
        <div className="flex justify-between border-t-1 border-t-[#cecece] max-sm:border-t-2 max-sm:flex-col max-sm:justify-center max-sm:pt-4 max-sm:gap-2">
          <p className="text-[#52525B]">
            © Copyright {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-black text-right max-sm:text-center">
            +37455342262 <br /> info@hardwarehouses.com
          </p>
        </div>
      </div>
    </footer>
  );
}

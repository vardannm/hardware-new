"use client";
import Image from "next/image";
import Link from "next/link";
import Hardware from "@/public/navbarIcon.png";
import { useSelectedLayoutSegment } from "next/navigation";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useContactForm } from "@/lib/useContactForm";
export default function Footer() {
  const segment = useSelectedLayoutSegment();
  const isContactPage = segment === "contact-us";
  const {
    name, setName, email, setEmail, message, setMessage,
    website, setWebsite, sending, feedback, handleSend,
  } = useContactForm("Footer form");

  return (
    <footer className="text-center py-[54px]  bg-[#DFDFDF] text-gray-400 text-sm flex flex-col ">
      <form onSubmit={handleSend} className="w-[45%] max-xl:w-[55%] max-lg:w-[65%] max-md:w-[80%] max-sm:w-[97&] mx-auto">
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
                <Link className="font-medium" href="/">
                  Home
                </Link>
                <Link className="font-medium" href="/projects">
                  Projects
                </Link>
                <Link className="font-medium" href="/services">
                  Services
                </Link>
              </div>
              <div
                className={`flex ${
                  isContactPage ? "flex-row" : "flex-col"
                } gap-4 align-start items-start`}
              >
                <Link className="font-medium" href="/industries">
                  Industries
                </Link>
                <Link className="font-medium" href="/blog">
                  Blog
                </Link>
                <Link className="font-medium" href="/faq">
                  FAQ
                </Link>
              </div>
              <div
                className={`flex ${
                  isContactPage ? "flex-row" : "flex-col"
                } gap-4 align-start items-start max-[350px]:hidden`}
              >
                <Link className="font-medium" href="/about-us">
                  About
                </Link>
                {!isContactPage && (
                  <Link className="font-medium" href="/contact-us">
                    Contact
                  </Link>
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
                    name="name" required maxLength={150} autoComplete="name" aria-label="Name Surname" placeholder="Name Surname"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <input
                    className="w-[334px] max-sm:w-full h-12 rounded-md bg-[#F3F3F3] pl-2
             placeholder:font-medium placeholder:text-[#5e5e5e] placeholder:font-inter
             focus:placeholder-transparent"
                    name="email" type="email" required maxLength={254} autoComplete="email" aria-label="Email Address" placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <textarea
                    className="w-[334px] max-sm:w-full rounded-md bg-[#F3F3F3] pl-2 pt-2 resize-none
             placeholder:font-medium placeholder:text-[#5e5e5e] placeholder:font-inter
             focus:placeholder-transparent"
                    rows="6"
                    name="message" required maxLength={10000} aria-label="Message" placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />

                  <input name="website" value={website} onChange={(e) => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                  {feedback && <p role={feedback.success ? "status" : "alert"} className={feedback.success ? "text-green-700 max-w-[334px]" : "text-red-700 max-w-[334px]"}>{feedback.text}</p>}
                  {!isContactPage && (
                    <button
                      className="bg-[#31B56A] rounded-md px-4 py-3 text-white sm:hidden self-end mt-4 cursor-pointer disabled:opacity-60 disabled:cursor-wait"
                      type="submit" disabled={sending}
                    >
                      {sending ? "Sending…" : "Send message"}
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
              className="bg-[#31B56A] rounded-md px-4 py-3 text-white max-sm:hidden cursor-pointer disabled:opacity-60 disabled:cursor-wait"
              type="submit" disabled={sending}
            >
              {sending ? "Sending…" : "Send message"}
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
      </form>
    </footer>
  );
}

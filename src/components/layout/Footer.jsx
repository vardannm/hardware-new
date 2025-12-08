'use client';
import Image from "next/image";
import Hardware from "@/public/hardware.svg";
import { usePathname } from "next/navigation";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact-us";

  return (
    <footer className="font-gilroy text-center py-[54px] px-[200px] bg-[#DFDFDF] text-gray-400 text-sm flex flex-col max-sm:px-5.5">
                <Image src={Hardware} alt="Hardware Icon" className="w-[76px]" />
                <div className="flex text-black justify-between max-sm:flex-col-reverse">
                  <div className="flex flex-col items-start pt-[38px]">
                    <a className="text-[24px] font-bold">Learn More</a>
                  <div className="flex flex-col max-sm:flex-row  gap-4 pt-[15px] max-sm:gap-18">
                    <div className="flex flex-col gap-4 align-start items-start">
                    <a>About</a>
                    <a>Features</a>
                    <a>Works</a>
                    </div>
                    <div className="flex flex-col gap-4 align-start items-start">
                    <a>Support</a>
                    <a>Privacy Policy</a>
                    <a>Terms & Conditions</a>
                    </div>
                  </div>
                  </div>
                  {!isContactPage && (
                  <div className="flex flex-col">
                    <div className="flex flex-col items-start pt-[38px]">
                    <a className="text-[24px]">Contact Us</a>
                  <div className="flex flex-col align-start items-start gap-3 pt-[15px]">
                    <input className="w-[334px] h-10 rounded-md bg-white"/>
                    <input className="w-[334px] h-10 rounded-md bg-white"/>
                    <textarea className="w-[334px]  rounded-md bg-white" rows="4" />
                  </div>
                  </div>
                  </div>)}
                </div>
                <div className="flex justify-between my-10 max-sm:mx-auto">
                 <div className="flex gap-9">
                  <BsGithub color="black" size={20}/>
                  <FaInstagram color="black" size={20}/>
                  <FaFacebookF color="black" size={20}/>
                  <FaTwitter color="black" size={20}/>
                 </div>
                  {!isContactPage && (<button className="bg-[#31B56A] rounded-md px-4 py-3 text-white">Send message</button>)}
                </div>
                <div className="flex justify-between max-sm:border-t-[#cecece] max-sm:border-t-2 max-sm:flex-col max-sm:justify-center max-sm:pt-4">
      <p className="text-[#52525B]">©  Copyright {new Date().getFullYear()} All rights reserved.</p>
      <p className="text-black text-right max-sm:text-center">+37455342262 <br/> info@hardwarehouses.com</p>
      </div>
    </footer>
  );
}

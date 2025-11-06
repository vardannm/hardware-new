import Image from "next/image";
import Hardware from "../../public/hardware.svg";
import fbIcon from "../../public/facebook.svg";
import linkedin from "../../public/linkedin.svg";
export default function Footer() {
  return (
    <footer className="text-center py-[54px] px-[200px] bg-[#DFDFDF] text-gray-400 text-sm flex flex-col max-sm:px-1.5">
                <Image src={Hardware} alt="Hardware Icon" className="w-[76px]" />
                <div className="flex text-black justify-between max-sm:flex-col-reverse">
                  <div className="flex flex-col items-start pt-[38px]">
                    <a className="text-[24px]">Learn More</a>
                  <div className="flex flex-col align-start items-start gap-4 pt-[15px]">
                    <a>About</a>
                    <a>Features</a>
                    <a>Works</a>
                    <a>Support</a>
                    <a>Privacy Policy</a>
                    <a>Terms & Conditions</a>
                  </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-col items-start pt-[38px]">
                    <a className="text-[24px]">Contact Us</a>
                  <div className="flex flex-col align-start items-start gap-3 pt-[15px]">
                    <input className="w-[334px] h-10 rounded-md bg-white"/>
                    <input className="w-[334px] h-10 rounded-md bg-white"/>
                    <textarea className="w-[334px]  rounded-md bg-white" rows="4" />
                  </div>
                  </div>
                  </div>
                </div>
                <div className="flex justify-between ">
                 <div className="flex gap-9">
                  <Image src={fbIcon}/>
                  <Image src={linkedin}/>
                 </div>
                 <button className="bg-[#31B56A] rounded-md px-4 py-3 text-white">Send message</button>
                </div>
                <div className="flex justify-between">
      <p className="text-[#52525B]">©  Copyright {new Date().getFullYear()} All rights reserved.</p>
      <p className="text-[#52525B] text-right">+37455342262 <br/> info@hardwarehouses.com</p>
      </div>
    </footer>
  );
}

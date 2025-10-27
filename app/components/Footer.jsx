import Image from "next/image";
import Hardware from "../../public/hardware.svg";

export default function Footer() {
  return (
    <footer className="text-center py-[54px] px-[364px] bg-[#DFDFDF] text-gray-400 text-sm flex flex-col">
                <Image src={Hardware} alt="Hardware Icon" className="w-[76px]" />
                <div className="flex text-black gap-[146px]">
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
                <div className="flex align-baseline">
                 <div className="flex gap-9"></div>
                </div>
      <p>© {new Date().getFullYear()} The Shop. All rights reserved.</p>
    </footer>
  );
}

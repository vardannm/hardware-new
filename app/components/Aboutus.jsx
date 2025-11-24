import Arthur from "../../public/aboutus/arthur-movsesyan.png";
import Gevorg from "../../public/aboutus/gevorg-martirosyan.png";
import Image from "next/image";
function Aboutus() {
  return (
    <div className="w-[76%] mx-auto text-start mt-[93px] gap-[60px] flex flex-col mb-[60px] max-sm:mt-6">
      <div className="flex flex-col gap-[60px] max-sm:gap-0">
      <p className="text-4xl font-bold text-black max-sm:text-2xl">
        About Hardware Design House
      </p>
      <p className=" text-black">
        We are a leading hardware design company with over 10 years of
        experience delivering innovative, high-quality solutions, from
        military-grade systems to consumer products loved by thousands.
        <br /> Our full-cycle approach covers everything from concept to
        shipping, ensuring reliability, quality, and innovation at every stage.
      </p>
      </div>
      <div className="grid grid-cols-3 gap-6 max-sm:grid-cols-1">
      <div className="bg-[#F6F6F6] text-center rounded-md col-span-3 max-sm:col-auto">
       <p className="font-bold p-6">With over <span className="text-[#2FB66A]">10+</span> years of experience, we’ve built a reputation as a trusted partner in hardware design across diverse industries.</p>
      </div>
      <div className="bg-[#F6F6F6] p-6 flex flex-col gap-6 rounded-md">
       <p className="font-bold">Who We Are</p>
       <p>Hardware Design House is a passionate hardware design company of engineers, designers, and innovators. We tackle complex hardware challenges with creativity and precision, combining deep industry knowledge with a problem-solving mindset to deliver impactful results.</p>
      </div>
      <div className="bg-[#F6F6F6] p-6 flex flex-col gap-6 rounded-md">
       <p className="font-bold">What We Do</p>
       <p>Turn innovative ideas into high-quality hardware solutions. We approach every product with a focus on innovation, precision, and long-term reliability, ensuring each design moves seamlessly from concept to market-ready product</p>
      </div>
      <div className="bg-[#F6F6F6] p-6 flex flex-col gap-6 rounded-md">
       <p className="font-bold">Our Mission and Values</p>
       <p>Values</p>
       <div className="pl-6">
       <li>Excellence in every project</li>
       <li>Innovation and forward-thinking solutions</li>
       <li>Integrity and transparency in collaboration</li>
       <li>Partnership built on trust and shared goals</li>
       </div>
      </div>
      <div className="bg-[#F6F6F6] p-6 col-span-3 flex flex-col gap-6 max-sm:col-span-1">
        <p className="font-bold text-lg ">Meet Our Team</p>
        <div className="pl-6">
            <li>Skilled professionals with diverse expertise in hardware development.</li>
            <li>Engineers, designers, and innovators working together to turn your ideas into functional high-quality products.</li>
        </div>
        <div className="w-[63%] flex gap-5 mx-auto max-sm:hidden">
        <div className="bg-white flex flex-col gap-6 p-6">
          <Image src={Arthur} 
          alt="Arthur Movsesyan Co-Founder and CEO of HDH"
          title="Arthur Movsesyan, Co-Founder and CEO of HDH"
          />
          <p className="font-bold">Arthur Movsesyan</p>
          <p>Co-Founder, CEO at Hardware Design House</p>
        </div>
        <div className="bg-white flex flex-col gap-6 p-6">
          <Image src={Gevorg} 
          alt="Gevorg Martirosyan, Co-Founder and CTO of HDH"
          title="Gevorg Martirosyan, Co-Founder and CTO of HDH"
          />
          <p className="font-bold">Gevorg Martirosyan</p>
          <p>Co-Founder, CTO at Hardware Design House</p>
        </div>
        </div>
      </div>
      <div className=" flex flex-col gap-5 mx-auto sm:hidden">
        <div className="bg-[#F6F6F6] flex flex-col gap-6 p-6">
          <Image src={Arthur} 
          alt="Arthur Movsesyan Co-Founder and CEO of HDH"
          title="Arthur Movsesyan, Co-Founder and CEO of HDH"
          />
          <p className="font-bold">Arthur Movsesyan</p>
          <p>Co-Founder, CEO at Hardware Design House</p>
        </div>
        <div className="bg-[#F6F6F6] flex flex-col gap-6 p-6">
          <Image src={Gevorg} 
          alt="Gevorg Martirosyan, Co-Founder and CTO of HDH"
          title="Gevorg Martirosyan, Co-Founder and CTO of HDH"
          />
          <p className="font-bold">Gevorg Martirosyan</p>
          <p>Co-Founder, CTO at Hardware Design House</p>
        </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 mx-auto text-center ">
       <p className="font-bold">Ready to Collaborate?</p>
       <p>Partner with a trusted hardware design company to <br /> bring your product to life, delivering solutions that<br />  exceed expectations.</p>
      </div>
    </div>
  );
}

export default Aboutus;

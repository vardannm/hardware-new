import Arthur from "@/public/aboutus/arthur-movsesyan.png";
import Gevorg from "@/public/aboutus/gevorg-martirosyan.png";
import Image from "next/image";

export const metadata = {
  alternates: {
      canonical: `https://www.hardwarehouses.com/about-us/`,
    },
  title: "Leading Hardware Design Company | HDH",
  description:
    "Learn about Hardware Design House, a leading hardware design company with over 10 years of experience in custom hardware, electronic design, and full-cycle product development for industries ranging from defense to consumer electronics.",
  openGraph: {
    title:"Leading Hardware Design Company | HDH",
    description:"Discover Hardware Design House, a leading hardware design company with over 10 years of experience in custom hardware, electronic design, and product development solutions.",
    type:"website",
  },
      keywords: [ "hardware design house", "hardware engineering company", "electronic design experts","custom hardware development","end-to-end product design"]

  };

function _StructuredData() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Hardware Design House",
          "alternateName": "HDH",
          "url": "https://www.hardwarehouses.com/",
          "description": "Hardware Design House (HDH) is a hardware design company delivering custom hardware development, prototyping, testing, and full-cycle engineering solutions for IoT, defense, healthcare, industrial automation, and more.",
          "email": "info@hardwarehouses.com",
          "telephone": [
            "+37455342262",
            "+37441777704"
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3 Hakob Hakobyan Street",
            "addressLocality": "Yerevan",
            "postalCode": "0033",
            "addressCountry": "AM"
          },
          "sameAs": [
            "https://www.linkedin.com/company/hardware-design-house-hdh/",
            "https://www.facebook.com/hardwaredesignhouse/"
          ]
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://www.hardwarehouses.com/",
          "name": "Hardware Design House (HDH)",
          "description": "HDH is a hardware design company delivering custom product development, prototyping, testing, and full-cycle solutions for IoT, defense, healthcare, and more.",
          "inLanguage": "en"
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "url": "https://www.hardwarehouses.com/about-us/",
          "name": "Leading Hardware Design Company | HDH",
          "headline": "About Hardware Design House",
          "description": "Learn about Hardware Design House, a leading hardware design company with over 10 years of experience in custom hardware, electronic design, and full-cycle product development for industries ranging from defense to consumer electronics.",
          "inLanguage": "en"
        })}
      </script>
    </>
  );
}

function Aboutus() {
  return (
    <div className="w-[76%] mx-auto text-start mt-[37px] gap-60 flex flex-col mb-60 max-sm:mt-6">
      <_StructuredData />
      <div className="flex flex-col gap-60 max-sm:gap-0">
      <h1 className=" text-black h1-h3-bold">
        About Hardware Design House
      </h1>
      <p className=" text-black h4-text-mobile whitespace-pre-lin max-sm:whitespace-normal">
       {`We are a leading hardware design company with over 10 years of experience delivering innovative, high-quality solutions, from military-grade systems to consumer products loved by thousands.
Our full-cycle approach covers everything from concept to shipping, ensuring reliability, quality, and innovation at every stage.`}
      </p>
      </div>
      <div className="grid grid-cols-3 gap-6 max-sm:grid-cols-1">
      <div className="bg-secondary text-center rounded-md col-span-3 max-sm:col-auto max-sm:text-center">
       <h2 className="h4-text-bold p-6">With over <span className="text-primary">10+</span> years of experience, we’ve built a reputation as a trusted partner in hardware design across diverse industries.</h2>
      </div>
      <div className="bg-secondary p-6 flex flex-col gap-6 rounded-md max-sm:text-center max-sm:gap-1">
       <h2 className="h3-text-bold">Who We Are</h2>
       <p className="h4-mobile-text-regular">Hardware Design House is a passionate hardware design company of engineers, designers, and innovators. We tackle complex hardware challenges with creativity and precision, combining deep industry knowledge with a problem-solving mindset to deliver impactful results.</p>
      </div>
      <div className="bg-secondary p-6 flex flex-col gap-6 rounded-md max-sm:text-center max-sm:gap-1">
       <h2 className="h3-text-bold">What We Do</h2>
       <p className="h4-mobile-text-regular">Turn innovative ideas into high-quality hardware solutions. We approach every product with a focus on innovation, precision, and long-term reliability, ensuring each design moves seamlessly from concept to market-ready product</p>
      </div>
      <div className="bg-secondary p-6 flex flex-col gap-6 rounded-md  max-sm:gap-1">
       <h2 className="h3-text-bold max-sm:text-center">Our Mission and Values</h2>
       <p className="h4-mobile-text-regular">Values:</p>
       <div className="pl-6 h4-mobile-text-regular">
       <li>Excellence in every project</li>
       <li>Innovation and forward-thinking solutions</li>
       <li>Integrity and transparency in collaboration</li>
       <li>Partnership built on trust and shared goals</li>
       </div>
      </div>
      <div className="bg-secondary p-6 col-span-3 flex flex-col gap-6 max-sm:col-span-1 max-sm:text-center max-sm:gap-1">
        <h2 className="h3-text-bold">Meet Our Team</h2>
        <div className="pl-6 h4-mobile-text-regular">
            <li>Skilled professionals with diverse expertise in hardware development.</li>
            <li>Engineers, designers, and innovators working together to turn your ideas into functional high-quality products.</li>
        </div>
        <div className="w-[63%] flex gap-5 mx-auto max-sm:hidden justify-center ">
        <div className="bg-white flex flex-col gap-6 p-6">
          <Image src={Arthur} 
          alt="Arthur Movsesyan Co-Founder and CEO of HDH"
          title=""
          />
          <p className="font-bold">Arthur Movsesyan</p>
          <p>Co-Founder, CEO at Hardware Design House</p>
        </div>
        <div className="bg-white flex flex-col gap-6 p-6">
          <Image src={Gevorg} 
          alt="Gevorg Martirosyan, Co-Founder and CTO of HDH"
          title=""
          />
          <p className="font-bold">Gevorg Martirosyan</p>
          <p>Co-Founder, CTO at Hardware Design House</p>
        </div>
        </div>
      </div>
      <div className=" flex flex-col gap-5 mx-auto sm:hidden">
        <div className="bg-secondary flex flex-col gap-6 p-6 ">
          <Image src={Arthur} 
          alt="Arthur Movsesyan Co-Founder and CEO of HDH"
          title=""
          />
          <h3 className="h3-bold">Arthur Movsesyan</h3>
          <p className="h4-regular">Co-Founder, CEO at Hardware Design House</p>
        </div>
        <div className="bg-secondary flex flex-col gap-6 p-6">
          <Image src={Gevorg} 
          alt="Gevorg Martirosyan, Co-Founder and CTO of HDH"
          title=""
          />
          <h3 className="h3-bold">Gevorg Martirosyan</h3>
          <p className="h4-regular">Co-Founder, CTO at Hardware Design House</p>
        </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 mx-auto text-center ">
       <h2 className="h3-text-bold">Ready to Collaborate?</h2>
       <p className="h4-mobile-text-regular">Partner with a trusted hardware design company to <br /> bring your product to life, delivering solutions that<br />  exceed expectations.</p>
      </div>
    </div>
  );
}

export default Aboutus;

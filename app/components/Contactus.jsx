import React from "react";

function Contactus() {
  return (
    <div className="mx-auto  text-center pt-16 flex flex-col gap-6 w-[50%] pb-[60px] max-sm:w-[95%] max-sm:text-start max-sm:gap-2">
      <p className="font-bold text-4xl max-sm:text-xl">Contact Hardware Design House</p>
      <p>
        Get in touch with our team of experienced hardware design experts to
        discover effective, innovative solutions focused on your project needs.
        Whether you are developing a new concept or enhancing an existing
        product, our engineers are here to guide you at every stage of
        development.You can request a detailed hardware design quote or schedule
        a personalized consultation with our specialists to discuss your ideas,
        technical challenges, and potential solutions in depth. We value clear
        communication and timely collaboration, ensuring every project moves
        forward with confidence and precision. <br /> <br /> At Hardware Design
        House, we are dedicated to turning your vision into a high-quality,
        market-ready product, built on innovation, reliability, and trusted
        expertise. <br /> <br /> info@hardwarehouses.com +374 55 342 262 | +374
        41 777 704
      </p>
      <p className="font-bold text-3xl">Drop Us a Message</p>
      <div className="flex flex-col   gap-3 pt-[15px] mx-auto">
        <input placeholder="Name Surname" className="w-[334px] h-10 rounded-md bg-[#F3F3F3] px-4 " />
        <input placeholder="Email Address" className="w-[334px] h-10 rounded-md bg-[#F3F3F3] px-4 " />
        <textarea placeholder="Message" className="w-[334px]  rounded-md bg-[#F3F3F3] px-4 " rows="4" />
                         <button className="bg-[#31B56A] rounded-md px-4 py-3 mx-auto text-white w-[43%]">Send message</button>

      </div>
    </div>
  );
}

export default Contactus;

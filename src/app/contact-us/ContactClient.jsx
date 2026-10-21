'use client';

import { useContactForm } from "@/lib/useContactForm";
import ContactSuccess from "@/components/ui/ContactSuccess";

export default function ContactClient() {
  const {
    name, setName, email, setEmail, message, setMessage,
    website, setWebsite, sending, feedback, handleSend,
  } = useContactForm("Contact page form");

  if (feedback?.success) {
    return <ContactSuccess />;
  }

  return (
    <div className="mx-auto text-center pt-16 flex flex-col gap-6 w-[50%] pb-60 max-sm:w-[95%] max-sm:text-start max-sm:gap-2">
      <h1 className="font-bold text-4xl max-sm:text-xl">Contact Hardware Design House</h1>
    <p>
      Get in touch with our team of experienced hardware design experts to
      discover effective, innovative solutions focused on your project needs.
      Whether you are developing a new concept or enhancing an existing
      product, our engineers are here to guide you at every stage of
      development. You can request a detailed hardware design quote or schedule
      a personalized consultation with our specialists to discuss your ideas,
      technical challenges, and potential solutions in depth. We value clear
      communication and timely collaboration, ensuring every project moves
      forward with confidence and precision. <br /> <br /> At Hardware Design
      House, we are dedicated to turning your vision into a high-quality,
      market-ready product, built on innovation, reliability, and trusted
      expertise. <br /> <br /> info@hardwarehouses.com +374 55 342 262 | +374
      41 777 704
    </p>
      <h2 className="font-bold text-3xl">Drop Us a Message</h2>

      <form onSubmit={handleSend} className="flex flex-col gap-3 pt-[15px] mx-auto max-sm:mx-0">
        <input
          name="name" required maxLength={150} autoComplete="name" aria-label="Name Surname" placeholder="Name Surname"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-[334px] h-10 rounded-md bg-[#F3F3F3] px-4 max-sm:w-full placeholder:text-[#5e5e5e] placeholder:font-inter
             focus:placeholder-transparent"
        />

        <input
          name="email" type="email" required maxLength={254} autoComplete="email" aria-label="Email Address" placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[334px] h-10 rounded-md bg-[#F3F3F3] px-4 max-sm:w-full placeholder:text-[#5e5e5e] placeholder:font-inter
             focus:placeholder-transparent"
        />

        <textarea
          name="message" required maxLength={10000} aria-label="Message" placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-[334px] rounded-md bg-[#F3F3F3] pl-4 pt-2 max-sm:w-full placeholder:text-[#5e5e5e] placeholder:font-inter
             focus:placeholder-transparent"
        />

        <input name="website" value={website} onChange={(e) => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        {feedback && <p role={feedback.success ? "status" : "alert"} className={feedback.success ? "text-green-700 max-w-[334px]" : "text-red-700 max-w-[334px]"}>{feedback.text}</p>}
        <button
          type="submit" disabled={sending}
          className="bg-[#31B56A] rounded-md px-4 py-3 mx-auto text-white w-[43%] disabled:opacity-60 disabled:cursor-wait"
        >
          {sending ? "Sending…" : "Send message"}
        </button>
      </form>
    </div>
  );
}

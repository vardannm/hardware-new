"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Check, LockKeyhole } from "lucide-react";

const nextSteps = [
  {
    title: "Review",
    description: "We study your project requirements and technical details.",
  },
  {
    title: "Call",
    description: "We schedule a short call to discuss details and answer your questions.",
  },
  {
    title: "Proposal",
    description: "You receive a clear estimate with timeline and cost.",
  },
];

export default function ContactSuccess() {
  const headingRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    headingRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <section aria-labelledby="contact-success-title" className="bg-[#F4FAF6] px-5 py-12 font-gilroy text-[#10251A] sm:px-8 sm:py-16">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#DCFCE7] text-[#168343]">
          <Check aria-hidden="true" className="h-10 w-10" strokeWidth={3} />
        </div>
        <h1
          id="contact-success-title"
          ref={headingRef}
          tabIndex={-1}
          className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight outline-none sm:text-4xl lg:text-5xl"
        >
          Thank You! Your Request Has Been Received
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-[#374151]">
          Our team is reviewing your project details and will contact you within 1–2
          business days to discuss your requirements and next steps.
        </p>

        <h2 className="mb-5 mt-12 text-sm font-bold tracking-[0.15em] text-[#168343] sm:mt-14">
          WHAT HAPPENS NEXT
        </h2>
        <ol className="grid gap-5 text-left sm:grid-cols-3">
          {nextSteps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-[#E2E8E4] bg-white p-6 sm:p-7">
              <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#168343] text-lg font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mb-2 text-2xl font-bold">{step.title}</h3>
              <p className="text-base font-medium leading-relaxed text-[#4B5563]">{step.description}</p>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-10 flex max-w-4xl items-start justify-center gap-2 text-sm font-medium leading-relaxed text-[#4B5563]">
          <LockKeyhole aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#168343]" />
          <span>Your information is kept confidential. We’re happy to sign an NDA before discussing technical details.</span>
        </p>
        <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link href="/projects" className="inline-flex items-center justify-center gap-3 rounded-xl border border-transparent bg-primary px-7 py-3.5 text-base font-bold text-white transition-colors hover:border-primary hover:bg-white hover:text-primary">
            View Our Projects <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <Link href="/" className="inline-flex items-center justify-center rounded-xl border-2 border-[#168343] bg-white px-7 py-3.5 text-base font-bold text-[#168343] transition-colors hover:bg-[#DCFCE7]">
            Back to Home
          </Link>
        </div>
        <p className="mt-6 text-sm font-medium leading-relaxed text-[#4B5563]">
          Need to talk sooner? Email{" "}
          <a href="mailto:info@hardwarehouses.com" className="break-words font-bold text-[#168343] underline underline-offset-2">info@hardwarehouses.com</a>
          {" "}or call{" "}
          <a href="tel:+37455342262" className="inline-block font-bold text-[#168343] underline underline-offset-2">+374 55 342 262</a>
        </p>
      </div>
    </section>
  );
}

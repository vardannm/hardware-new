"use client";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import NavbarIcon from "@/public/navbarIcon.png";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ServiceCards } from "@/data/services";
import { industriesData } from "@/data/industries";

const dropdownLinks = {
  "/projects": Object.values(projectsData.categories)
    .flatMap((category) => category.projects)
    .filter((project) => project.href)
    .map((project) => ({ href: project.href, label: project.title })),
  "/services": ServiceCards.map((service) => ({
    href: service.href,
    label: service.textTitle,
  })),
  "/industries": industriesData.industries.map((industry) => ({
    href: industry.link,
    label: industry.title,
  })),
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/about-us", label: "About us" },
  { href: "/contact-us", label: "Contact us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <>
      <nav className="flex justify-between items-center px-8 py-4 bg-white sticky top-0 z-50 border-b border-[#DCDBE1] shadow-sm">
        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(true)}
          className="flex items-center order-1 max-sm:order-3 xl:hidden"
        >
          <Menu className="bg-[rgba(194,194,194,0.4)] w-8 h-8 cursor-pointer p-1 border border-[#C2C2C2] rounded" />
        </button>

        <Link href="/" className="order-2 max-sm:order-1 xl:order-1 shrink-0">
          <Image src={NavbarIcon} alt="Hardware Icon" className="w-[240px] max-sm:w-[140px]" />
        </Link>

        <ul
          className="hidden xl:flex items-center gap-6 2xl:gap-12 order-2 ml-auto text-xl font-bold"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.currentTarget.querySelector('[aria-expanded="true"]')?.focus();
              setActiveDropdown(null);
            }
          }}
        >
          {navLinks.map((link) => {
            const children = dropdownLinks[link.href];
            const expanded = activeDropdown === link.href;
            const dropdownId = `desktop-${link.href.slice(1)}-links`;

            return (
                <li
                  key={link.href}
                  className={link.href === "/contact-us" ? "ml-8 2xl:ml-12 shrink-0" : "relative py-3"}
                  onMouseEnter={() => setActiveDropdown(children ? link.href : null)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  onFocus={() => setActiveDropdown(children ? link.href : null)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setActiveDropdown(null);
                    }
                  }}
                >
                  <Link
                    href={link.href}
                    aria-expanded={children ? expanded : undefined}
                    aria-controls={children ? dropdownId : undefined}
                    onClick={() => setActiveDropdown(null)}
                    className={link.href === "/contact-us"
                      ? "inline-flex rounded-full border border-transparent bg-primary px-4 py-3 text-white transition-colors hover:border-primary hover:bg-white hover:text-primary"
                      : "inline-flex items-center gap-1 whitespace-nowrap transition-colors hover:text-primary focus-visible:text-primary"}
                  >
                    {link.label}
                    {children && <ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />}
                  </Link>
                  {children && (
                    <div
                      className={`absolute left-0 top-full w-80 pt-2 ${expanded ? "visible" : "invisible pointer-events-none"}`}
                    >
                      <ul
                        id={dropdownId}
                        aria-label={`${link.label} pages`}
                        className="max-h-[calc(100dvh-120px)] overflow-y-auto rounded-xl border border-[#DCDBE1] bg-white p-2 text-base font-medium shadow-lg"
                      >
                        {children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setActiveDropdown(null)}
                              className="block rounded-lg px-4 py-3 transition-colors hover:bg-[#F3F3F3] hover:text-primary focus-visible:bg-[#F3F3F3] focus-visible:text-primary"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
            );
          })}
        </ul>

        <ul className="flex gap-6 order-3 max-sm:hidden xl:hidden">
          <li>
            <Link
              href="/contact-us"
              className="hover:text-primary hover:bg-white hover:border hover:border-primary rounded-full text-white p-3 bg-primary transition-colors"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity xl:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        id="mobile-navigation"
        inert={!open}
        className={`fixed top-0 left-0 h-full w-[85%] max-w-xs max-md:w-full max-md:max-w-full bg-white z-50 p-6 shadow-xl transition-transform duration-300 xl:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between mb-6">
          <div className="sm:hidden">
            <Image src={NavbarIcon} alt="Hardware Icon" className="w-[60%]" />
          </div>
          <div className=" mb-6 ">
            <X
              className="w-11 h-11 bg-gray-200 p-3 rounded-[10px] border border-[#C2C2C2] cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
        </div>
        <ul className="flex flex-col gap-6 text-[18px] font-bold">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-6 text-sm text-black">
          <p>info@hardwarehouses.com</p>
          <p>+374 55 342 262</p>
          <p>+374 41 777 704</p>
        </div>
      </div>
    </>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaUsers, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/programs",
    label: "Our Programs",
    dropdown: [
      { href: "/programs#education", label: "Education & Scholarships" },
      { href: "/programs#healthcare", label: "Healthcare & Welfare" },
      { href: "/programs#culture", label: "Culture & Community" },
      { href: "/programs#social", label: "Social Development" },
    ],
  },
  { href: "/initiatives", label: "Initiatives" },
  { href: "/gallery", label: "Gallery" },
  { href: "/trust-deed", label: "Trust Deed" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileScreen, setMobileScreen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  // This handles the screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setMobileScreen(true);
      }

      handleResize();

      window.addEventListener("resize", handleResize);
      console.log(mobileScreen);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    };
  });

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-gold-light/40">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white p-0.5 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Sarbojonin Welfare Association logo"
              width={48}
              height={48}
              className="object-contain p-1"
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold text-maroon">
              Sarbojonin
            </span>
            <span className="text-[10px] tracking-[0.25em] text-forest font-semibold">
              WELFARE ASSOCIATION
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.dropdown ?
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-ink/80 hover:text-maroon transition-colors">
                  {link.label}
                  <FaChevronDown size={10} />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 pt-3 w-64">
                    <div className="bg-white rounded-xl shadow-lg border border-gold-light/30 py-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-ink/80 hover:bg-cream hover:text-maroon transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            : <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href ?
                    "text-maroon"
                  : "text-ink/80 hover:text-maroon"
                }`}
              >
                {link.label}
              </Link>,
          )}
        </nav>

<div className="hidden lg:block">
  <Link href="/admin" className="btn-primary text-sm">
    <FaUsers size={14} />
    Members Area
  </Link>
</div>

        <button
          className="lg:hidden text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ?
            <FaTimes size={22} />
          : <FaBars size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-cream border-t border-gold-light/40 px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-sm font-medium text-ink/80 hover:text-maroon"
              >
                {link.label}
              </Link>
              {link.dropdown && (
                <div className="pl-4 border-l border-gold-light/50 ml-1 mb-2 space-y-1">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-1.5 text-sm text-ink/60 hover:text-maroon"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary text-sm w-full justify-center mt-3"
          >
            <FaUsers size={14} />
            Join Our Community
          </Link>

          <Link
            href="/admin"
            onClick={() => setOpen(false)}
            className="btn-primary text-sm w-full justify-center mt-3"
          >
            <FaUsers size={14} />
            Members Area
          </Link>
        </div>
      )}
    </header>
  );
}

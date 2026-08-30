"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="hidden lg:block bg-dark-lighter border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-xs text-cream/60">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone size={12} className="text-gold" />
              +91 97989 56743
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={12} className="text-gold" />
              Patliputra Colony, Patna
            </span>
          </div>
          <span className="flex items-center gap-1.5">
            <Clock size={12} className="text-gold" />
            Mon–Sun: 11:00 AM – 11:00 PM
          </span>
        </div>
      </div>

      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark/95 backdrop-blur-xl shadow-lg shadow-gold/5 border-b border-gold/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Persona"
                width={160}
                height={48}
                className="h-12 w-auto"
                style={{ mixBlendMode: "lighten" }}
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-cream/70 hover:text-gold transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-3/4 rounded-full" />
                </Link>
              ))}
              <Link
                href="/reservations"
                className="ml-4 px-6 py-2.5 bg-gold text-dark text-sm font-semibold rounded hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/25"
              >
                Book a Table
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gold p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass mx-4 mb-4 rounded-xl p-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-cream/70 hover:text-gold hover:bg-gold/5 rounded-lg transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/reservations"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 bg-gold text-dark font-semibold rounded-lg text-center mt-2 hover:bg-gold-light transition-all duration-300"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

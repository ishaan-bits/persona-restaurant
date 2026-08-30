"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  Share2,
  AtSign,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-lighter border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Persona"
                width={140}
                height={42}
                className="h-10 w-auto"
                style={{ mixBlendMode: "lighten" }}
              />
            </Link>
            <p className="text-cream/50 text-sm leading-relaxed mb-6">
              An upscale fine-dining experience in the heart of Patna.
              Where culinary artistry meets elegant ambiance.
            </p>
            <div className="flex gap-4">
              {[Globe, Share2, AtSign].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold hover:bg-gold/10 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gold mb-6">
              Quick Links
            </h4>
            <div className="space-y-3">
              {[
                { href: "/menu", label: "Our Menu" },
                { href: "/about", label: "About Us" },
                { href: "/gallery", label: "Gallery" },
                { href: "/events", label: "Events & Parties" },
                { href: "/reservations", label: "Reservations" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-cream/50 text-sm hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gold mb-6">
              Contact Info
            </h4>
            <div className="space-y-4">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-cream/50 hover:text-gold transition-colors duration-300 text-sm"
              >
                <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                <span>
                  Plot 39/A, Ward 22/B, Patliputra Colony, Patna, Bihar –
                  800013
                </span>
              </a>
              <a
                href="tel:+919798956743"
                className="flex items-center gap-3 text-cream/50 hover:text-gold transition-colors duration-300 text-sm"
              >
                <Phone size={18} className="text-gold shrink-0" />
                +91 97989 56743 / +91 92416 02606
              </a>
              <a
                href="mailto:info@personapatna.com"
                className="flex items-center gap-3 text-cream/50 hover:text-gold transition-colors duration-300 text-sm"
              >
                <Mail size={18} className="text-gold shrink-0" />
                info@personapatna.com
              </a>
              <div className="flex items-start gap-3 text-cream/50 text-sm">
                <Clock size={18} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p>Mon–Wed, Fri–Sun: 11:00 AM – 11:00 PM</p>
                  <p>Thursday: 11:30 AM – 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gold mb-6">
              Newsletter
            </h4>
            <p className="text-cream/50 text-sm mb-4">
              Stay updated with our latest offers, events, and seasonal menus.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-dark rounded-lg text-sm placeholder:text-cream/30 focus:ring-2 focus:ring-gold/50"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gold text-dark font-semibold text-sm rounded-lg hover:bg-gold-light transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs">
            &copy; {new Date().getFullYear()} Persona Fine Dining & Lounge.
            All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-cream/30">
            <span>Served on platforms:</span>
            <div className="flex gap-4 text-gold/50">
              <span className="hover:text-gold transition-colors cursor-pointer">
                EazyDiner
              </span>
              <span className="hover:text-gold transition-colors cursor-pointer">
                Swiggy
              </span>
              <span className="hover:text-gold transition-colors cursor-pointer">
                District
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

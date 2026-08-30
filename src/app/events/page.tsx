"use client";

import {
  Cake,
  Users,
  Briefcase,
  Heart,
  PartyPopper,
  Star,
  CheckCircle,
  Phone,
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const eventTypes = [
  {
    icon: Cake,
    title: "Birthday Parties",
    desc: "Celebrate your special day with custom decorations, themed menus, and a dedicated event coordinator.",
    features: [
      "Custom cake arrangements",
      "Themed decorations",
      "Special menu packages",
      "Photo-friendly setups",
    ],
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    desc: "Impress clients and colleagues with our professional setting, AV equipment, and business-friendly menus.",
    features: [
      "AV equipment available",
      "Business lunch packages",
      "Private dining rooms",
      "Flexible seating arrangements",
    ],
  },
  {
    icon: Heart,
    title: "Anniversaries",
    desc: "Make your milestone memorable with intimate table settings, champagne, and personalized service.",
    features: [
      "Intimate table setups",
      "Champagne packages",
      "Custom floral arrangements",
      "Complimentary dessert",
    ],
  },
  {
    icon: PartyPopper,
    title: "Family Gatherings",
    desc: "Bring the whole family together for a feast. Kid-friendly menu options and spacious seating available.",
    features: [
      "Kid-friendly menus",
      "Spacious seating",
      "Group discounts",
      "Private area available",
    ],
  },
];

const packages = [
  {
    name: "Intimate",
    guests: "2–8 Guests",
    price: "Starting ₹5,000",
    features: [
      "Reserved table setup",
      "Customized menu card",
      "Complimentary dessert",
      "Basic decorations",
    ],
  },
  {
    name: "Classic",
    guests: "8–20 Guests",
    price: "Starting ₹15,000",
    features: [
      "Private dining area",
      "3-course menu",
      "Basic AV setup",
      "Themed decorations",
      "Dedicated server",
    ],
    popular: true,
  },
  {
    name: "Grand",
    guests: "20–50 Guests",
    price: "Starting ₹35,000",
    features: [
      "Full venue booking",
      "5-course menu",
      "Full AV setup",
      "Premium decorations",
      "Event coordinator",
      "Live music option",
    ],
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-events.jpg"
            alt="Celebration event"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Events & Parties
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
            <span className="gold-text">Celebrate</span>{" "}
            <span className="text-cream">With Us</span>
          </h1>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            From intimate dinners to grand celebrations, Persona is the
            perfect venue for your special moments.
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              What We Host
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="text-cream">Perfect for</span>{" "}
              <span className="gold-text">Every Occasion</span>
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((event, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-dark-card border border-gold/10 hover:border-gold/30 transition-all duration-500 card-hover"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <event.icon size={28} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-cream">
                      {event.title}
                    </h3>
                    <p className="text-cream/50 text-sm mt-1">{event.desc}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:ml-18">
                  {event.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-cream/50 text-sm"
                    >
                      <CheckCircle size={14} className="text-gold shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Packages
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="text-cream">Event</span>{" "}
              <span className="gold-text">Packages</span>
            </h2>
            <p className="text-cream/60 max-w-2xl mx-auto">
              Choose from our curated packages or let us customize one for your
              specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`relative p-8 rounded-2xl border transition-all duration-500 card-hover ${
                  pkg.popular
                    ? "bg-dark-card border-gold/40 shadow-lg shadow-gold/10"
                    : "bg-dark-card border-gold/10 hover:border-gold/30"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1 px-4 py-1 bg-gold text-dark text-xs font-bold rounded-full">
                      <Star size={12} />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-gold mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-cream/50 text-sm mb-3">{pkg.guests}</p>
                  <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-cream">
                    {pkg.price}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-cream/60 text-sm"
                    >
                      <CheckCircle size={16} className="text-gold shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? "bg-gold text-dark hover:bg-gold-light"
                      : "border border-gold/30 text-gold hover:bg-gold/10"
                  }`}
                >
                  Enquire Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              How It Works
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="text-cream">Simple</span>{" "}
              <span className="gold-text">Steps</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Phone,
                step: "01",
                title: "Contact Us",
                desc: "Call or fill out the enquiry form with your event details.",
              },
              {
                icon: Calendar,
                step: "02",
                title: "Plan Together",
                desc: "Our team will work with you to plan every detail.",
              },
              {
                icon: Sparkles,
                step: "03",
                title: "Customize",
                desc: "Choose your menu, decorations, and special touches.",
              },
              {
                icon: PartyPopper,
                step: "04",
                title: "Celebrate!",
                desc: "Enjoy your event while we handle everything.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gold/10 flex items-center justify-center relative">
                  <item.icon size={28} className="text-gold" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold text-dark text-xs font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-cream mb-2">
                  {item.title}
                </h3>
                <p className="text-cream/50 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-12 rounded-2xl bg-dark-card border border-gold/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-green/5" />
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-6 text-sm text-cream/50">
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-gold" />
                  11 AM – 11 PM
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-gold" />
                  Patliputra Colony, Patna
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-cream mb-4">
                Ready to <span className="gold-text">Host Your Event?</span>
              </h2>
              <p className="text-cream/60 mb-8 max-w-xl mx-auto">
                Let us make your celebration extraordinary. Contact us today
                to discuss your event requirements.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gold text-dark font-semibold rounded-lg hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/25"
                >
                  Enquire Now
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <a
                  href="tel:+919798956743"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-gold/40 text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all duration-300"
                >
                  <Phone size={18} />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

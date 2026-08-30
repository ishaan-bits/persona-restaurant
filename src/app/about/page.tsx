"use client";

import Image from "next/image";
import Link from "next/link";
import {
  UtensilsCrossed,
  Heart,
  Star,
  Users,
  Award,
  Leaf,
  Wine,
  Sparkles,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion for Flavor",
    desc: "Every dish is a labor of love, prepared with the finest ingredients and time-honored techniques.",
  },
  {
    icon: Star,
    title: "Uncompromising Quality",
    desc: "From farm-fresh produce to premium spirits, we never cut corners on what matters.",
  },
  {
    icon: Users,
    title: "Warm Hospitality",
    desc: "Our team ensures every guest feels at home with attentive, genuine service.",
  },
  {
    icon: Award,
    title: "Elegant Ambiance",
    desc: "Signature ring-light ceilings, lush greenery, and curated interiors create the perfect setting.",
  },
];

const stats = [
  { number: "5000+", label: "Happy Guests Monthly" },
  { number: "200+", label: "Menu Items" },
  { number: "4.5", label: "Average Rating" },
  { number: "3+", label: "Cuisines Served" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green/5 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Our Story
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-bold mt-4 mb-6">
            <span className="gold-text">About</span>{" "}
            <span className="text-cream">Persona</span>
          </h1>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            Where culinary artistry meets elegant ambiance – Patna&apos;s
            premier destination for fine dining and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
                The Beginning
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mt-4 mb-6">
                <span className="text-cream">A Vision of</span>{" "}
                <span className="gold-text">Excellence</span>
              </h2>
              <div className="space-y-4 text-cream/60 leading-relaxed">
                <p>
                  Persona was born from a simple yet ambitious vision: to bring
                  world-class fine dining to the heart of Patna. Located in the
                  vibrant Patliputra Colony, we set out to create a space where
                  culinary excellence meets artistic ambiance.
                </p>
                <p>
                  Our name &ldquo;Persona&rdquo; reflects the unique identity we bring to
                  every aspect of the dining experience – from the carefully
                  curated interiors featuring our signature ring-light ceiling
                  installations to the innovative menus that span multiple
                  cuisines.
                </p>
                <p>
                  Every detail matters – the lush indoor greenery that brings
                  life to our spaces, the warm ambient lighting that sets the
                  perfect mood, and the impeccable service that makes every
                  guest feel special.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/interior-1.jpg"
                  alt="Persona Restaurant Interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl glass-light border border-gold/20">
                <div className="font-[family-name:var(--font-display)] text-3xl font-bold gold-text">
                  Est. 2024
                </div>
                <div className="text-cream/50 text-sm">Patna, Bihar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold gold-text mb-2">
                  {stat.number}
                </div>
                <div className="text-cream/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Our Values
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="text-cream">What We</span>{" "}
              <span className="gold-text">Stand For</span>
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-dark-card border border-gold/10 hover:border-gold/30 transition-all duration-500 card-hover text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <value.icon size={32} className="text-gold" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-cream mb-3">
                  {value.title}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Our Space
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="text-cream">Experience</span>{" "}
              <span className="gold-text">Persona</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/images/interior-1.jpg", label: "Main Dining" },
              { src: "/images/interior-2.jpg", label: "Table Setting" },
              { src: "/images/interior-3.jpg", label: "Lush Greenery" },
              { src: "/images/entrance.jpg", label: "Entrance" },
              { src: "/images/buffet.jpg", label: "Buffet" },
              { src: "/images/event-celebration.jpg", label: "Events" },
            ].map((photo, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl overflow-hidden relative group"
              >
                <Image
                  src={photo.src}
                  alt={photo.label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-gold text-sm font-medium">{photo.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cuisines */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Our Cuisines
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="text-cream">A World of</span>{" "}
              <span className="gold-text">Flavors</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: UtensilsCrossed,
                title: "North Indian & Mughlai",
                items: [
                  "Biryani",
                  "Kadhai Paneer",
                  "Rara Chicken",
                  "Tandoori Breads",
                ],
              },
              {
                icon: Wine,
                title: "Continental & Italian",
                items: ["Gourmet Burgers", "Pasta", "Steaks", "Pizzas"],
              },
              {
                icon: Leaf,
                title: "Chinese & Pan-Asian",
                items: [
                  "Manchurian",
                  "Chili Paneer",
                  "Noodles",
                  "Fried Rice",
                ],
              },
            ].map((cuisine, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-dark-card border border-gold/10 hover:border-gold/30 transition-all duration-500 card-hover"
              >
                <cuisine.icon
                  size={36}
                  className="text-gold mb-4 group-hover:scale-110 transition-transform"
                />
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-cream mb-4">
                  {cuisine.title}
                </h3>
                <ul className="space-y-2">
                  {cuisine.items.map((item) => (
                    <li
                      key={item}
                      className="text-cream/50 text-sm flex items-center gap-2"
                    >
                      <div className="w-1 h-1 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Visit Us
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="text-cream">Experience</span>{" "}
              <span className="gold-text">Persona</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-dark-card border border-gold/10 text-center">
              <MapPin size={28} className="text-gold mx-auto mb-3" />
              <h4 className="font-semibold text-cream mb-2">Location</h4>
              <p className="text-cream/50 text-sm">
                Plot 39/A, Patliputra Colony, Patna – 800013
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-dark-card border border-gold/10 text-center">
              <Clock size={28} className="text-gold mx-auto mb-3" />
              <h4 className="font-semibold text-cream mb-2">Hours</h4>
              <p className="text-cream/50 text-sm">
                Mon–Sun: 11:00 AM – 11:00 PM
                <br />
                Thu: 11:30 AM – 11:00 PM
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-dark-card border border-gold/10 text-center">
              <Phone size={28} className="text-gold mx-auto mb-3" />
              <h4 className="font-semibold text-cream mb-2">Contact</h4>
              <p className="text-cream/50 text-sm">
                +91 97989 56743
                <br />
                +91 92416 02606
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/reservations"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-dark font-semibold rounded-lg hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/25"
            >
              Reserve Your Table
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

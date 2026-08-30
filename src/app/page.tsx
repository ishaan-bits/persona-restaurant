"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  UtensilsCrossed,
  Wine,
  Star,
  Users,
  ArrowRight,
  Leaf,
  Clock,
  MapPin,
  Phone,
  ChevronRight,
  Sparkles,
  ChevronDown,
  Quote,
} from "lucide-react";

const features = [
  {
    icon: UtensilsCrossed,
    title: "Multi-Cuisine Mastery",
    desc: "North Indian, Continental, Chinese, Italian – each dish a masterpiece by our expert chefs.",
  },
  {
    icon: Wine,
    title: "Signature Sips",
    desc: "Handcrafted cocktails and premium spirits, mixed by our skilled mixologists.",
  },
  {
    icon: Star,
    title: "Signature Ambiance",
    desc: "Ring-light ceilings, lush greenery, and golden glow that defines Persona.",
  },
  {
    icon: Users,
    title: "Private Celebrations",
    desc: "Birthdays, anniversaries, corporate events – we make every occasion extraordinary.",
  },
];

const highlights = [
  { name: "Biryani", desc: "Aromatic rice layered with tender meat and exotic spices", tag: "Chef's Special", price: "₹450" },
  { name: "Paneer Tikka Masala", desc: "Spiced cottage cheese in rich tomato gravy", tag: "Bestseller", price: "₹525" },
  { name: "Persona Special Burger", desc: "Crispy chicken, lettuce, cheese, inhouse spice sauce", tag: "Must Try", price: "₹570" },
  { name: "Tandoori Jhinga", desc: "Sea food marinated with Indian spices, tandoor grilled", tag: "Premium", price: "₹950" },
];

const testimonials = [
  { name: "Priya S.", text: "The ambiance is unreal. Ring-light ceiling, greenery everywhere – felt like dining in a dream.", rating: 5 },
  { name: "Rahul M.", text: "Best biryani in Patna, hands down. The Mutton Dum Biryani is absolutely worth the visit.", rating: 5 },
  { name: "Anjali K.", text: "Celebrated my birthday here. The staff went above and beyond. Truly memorable experience.", rating: 5 },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".observe-fade");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/ambiance-wide.jpg"
            alt="Persona Restaurant Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-dark/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/50 via-transparent to-dark/50" />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-[15%] w-64 h-64 bg-gold/5 rounded-full blur-[100px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-[10%] w-48 h-48 bg-green/8 rounded-full blur-[80px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/20 bg-gold/5 backdrop-blur-sm mb-8">
            <Sparkles size={14} className="text-gold animate-glow-pulse" />
            <span className="text-gold/80 text-sm font-medium tracking-wide">
              Patna&apos;s Premier Fine Dining
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] mb-8">
            <span className="text-stroke">Where</span>{" "}
            <span className="gold-text-shine">Every</span>
            <br />
            <span className="text-cream">Moment is</span>{" "}
            <span className="gold-text-shine">Crafted</span>
          </h1>

          <p className="text-cream/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Step into a world where culinary artistry meets golden elegance.
            Every dish, every detail, every moment – designed to captivate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              href="/reservations"
              className="group relative px-10 py-4 bg-gold text-dark font-bold rounded-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gold/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Table
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
            <Link
              href="/menu"
              className="px-10 py-4 border border-gold/30 text-gold font-bold rounded-lg hover:bg-gold/10 transition-all duration-500 backdrop-blur-sm"
            >
              Explore Menu
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-cream/40">
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-gold/60" />
              Patliputra Colony, Patna
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-gold/60" />
              11 AM – 11 PM
            </span>
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-gold/60" />
              +91 97989 56743
            </span>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gold/30" />
        </div>
      </section>

      {/* Features */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 observe-fade opacity-0">
            <span className="text-gold/50 text-xs tracking-[0.4em] uppercase font-medium">
              The Persona Difference
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mt-4 mb-4">
              <span className="text-cream">Why We</span>{" "}
              <span className="gold-text">Stand Apart</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="observe-fade opacity-0 group relative p-8 rounded-2xl bg-dark-card border border-gold/8 hover:border-gold/25 transition-all duration-500 overflow-hidden"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/3 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="w-12 h-12 rounded-xl bg-gold/8 flex items-center justify-center mb-5 group-hover:bg-gold/15 transition-colors duration-300">
                  <feature.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-cream mb-2">
                  {feature.title}
                </h3>
                <p className="text-cream/40 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Showcase - Unique Masonry */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 observe-fade opacity-0">
            <span className="text-gold/50 text-xs tracking-[0.4em] uppercase font-medium">
              Our Space
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mt-4 mb-4">
              <span className="text-cream">Step Into</span>{" "}
              <span className="gold-text">Persona</span>
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-4 observe-fade opacity-0">
            <div className="col-span-12 md:col-span-8 aspect-[16/10] rounded-2xl overflow-hidden relative group">
              <Image src="/images/interior-1.jpg" alt="Main Dining" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-gold/60 text-[10px] tracking-[0.3em] uppercase">Main Dining</span>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-cream mt-1">Where Magic Happens</h3>
              </div>
            </div>
            <div className="col-span-6 md:col-span-4 aspect-square rounded-2xl overflow-hidden relative group">
              <Image src="/images/interior-2.jpg" alt="Table Setting" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-gold/60 text-[10px] tracking-[0.3em] uppercase">Intimate</span>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-cream mt-0.5">Table Settings</h3>
              </div>
            </div>
            <div className="col-span-6 md:col-span-4 aspect-square rounded-2xl overflow-hidden relative group">
              <Image src="/images/entrance.jpg" alt="Entrance" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-gold/60 text-[10px] tracking-[0.3em] uppercase">Welcome</span>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-cream mt-0.5">The Entrance</h3>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 aspect-[16/10] rounded-2xl overflow-hidden relative group">
              <Image src="/images/interior-3.jpg" alt="Greenery" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-gold/60 text-[10px] tracking-[0.3em] uppercase">Nature</span>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-cream mt-1">Lush Indoor Greenery</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-dark-lighter" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/3 rounded-full blur-[150px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 observe-fade opacity-0">
            <span className="text-gold/50 text-xs tracking-[0.4em] uppercase font-medium">
              Fan Favorites
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mt-4 mb-4">
              <span className="text-cream">Most </span>
              <span className="gold-text">Ordered</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="observe-fade opacity-0 group flex items-center gap-5 p-5 rounded-2xl bg-dark-card/50 border border-gold/8 hover:border-gold/20 transition-all duration-500"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gold/8 flex items-center justify-center shrink-0 group-hover:bg-gold/15 transition-colors">
                  <Leaf size={24} className="text-gold" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-cream truncate">
                      {item.name}
                    </h3>
                    <span className="text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-full bg-gold/8 text-gold/70 border border-gold/15 shrink-0">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-cream/35 text-xs truncate">{item.desc}</p>
                </div>
                <div className="shrink-0 text-right">
                  <span className="text-gold font-semibold text-sm">{item.price}</span>
                </div>
                <ChevronRight size={16} className="text-cream/15 group-hover:text-gold/50 transition-colors shrink-0" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 observe-fade opacity-0">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-gold/25 text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all duration-300 text-sm"
            >
              View Complete Menu
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 observe-fade opacity-0">
            <span className="text-gold/50 text-xs tracking-[0.4em] uppercase font-medium">
              What Our Guests Say
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mt-4">
              <span className="gold-text">Voices</span>
            </h2>
          </div>

          <div className="observe-fade opacity-0 relative">
            <Quote size={40} className="text-gold/10 absolute -top-2 left-0" />
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8"
              >
                <p className="font-[family-name:var(--font-display)] text-xl md:text-2xl text-cream/80 italic leading-relaxed mb-8">
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-gold font-semibold text-sm">
                  {testimonials[currentTestimonial].name}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentTestimonial ? "bg-gold w-6" : "bg-gold/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative">
        <div className="absolute inset-0">
          <Image src="/images/buffet.jpg" alt="Persona Buffet" fill className="object-cover" />
          <div className="absolute inset-0 bg-dark/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/70 via-transparent to-dark/70" />
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] animate-glow-pulse" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="observe-fade opacity-0">
            <span className="text-gold/50 text-xs tracking-[0.4em] uppercase font-medium">
              Your Table Awaits
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="text-cream">Ready for an</span>{" "}
              <span className="gold-text-shine">Unforgettable Evening?</span>
            </h2>
            <p className="text-cream/60 text-lg mb-10 max-w-2xl mx-auto">
              Reserve your table today and immerse yourself in the Persona
              experience. Average cost: ₹1,200–₹1,600 for two.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/reservations"
                className="group relative px-10 py-4 bg-gold text-dark font-bold rounded-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gold/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book a Table
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
              <Link
                href="/contact"
                className="px-10 py-4 border border-gold/30 text-gold font-bold rounded-lg hover:bg-gold/10 transition-all duration-500 backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

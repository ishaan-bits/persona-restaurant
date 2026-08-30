"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

const galleryCategories = [
  "All",
  "Ambiance",
  "Dining",
  "Events",
  "Buffet",
];

const galleryItems = [
  {
    id: 1,
    src: "/images/ambiance-wide.jpg",
    category: "Ambiance",
    title: "Ring-Light Ceiling",
    desc: "Our signature ceiling installation with lush greenery",
  },
  {
    id: 2,
    src: "/images/interior-1.jpg",
    category: "Dining",
    title: "Main Dining Area",
    desc: "Elegant seating with ambient lighting",
  },
  {
    id: 3,
    src: "/images/interior-2.jpg",
    category: "Dining",
    title: "Table Setting",
    desc: "Intimate table arrangements",
  },
  {
    id: 4,
    src: "/images/interior-3.jpg",
    category: "Ambiance",
    title: "Lush Greenery",
    desc: "Indoor plants and natural elements",
  },
  {
    id: 5,
    src: "/images/entrance.jpg",
    category: "Ambiance",
    title: "Entrance",
    desc: "Welcome to Persona",
  },
  {
    id: 6,
    src: "/images/buffet.jpg",
    category: "Buffet",
    title: "Buffet Spread",
    desc: "Gold-standard buffet arrangements",
  },
  {
    id: 7,
    src: "/images/event-celebration.jpg",
    category: "Events",
    title: "Celebrations",
    desc: "Making special moments unforgettable",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const currentIndex = selectedItem
    ? filteredItems.findIndex((item) => item.id === selectedItem)
    : -1;

  const navigate = (direction: "prev" | "next") => {
    if (currentIndex === -1) return;
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
        : (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[newIndex].id);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-gallery.jpg"
            alt="Restaurant interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Gallery
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
            <span className="gold-text">Visual</span>{" "}
            <span className="text-cream">Journey</span>
          </h1>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            A glimpse into the world of Persona – our ambiance, cuisine, and
            the moments we create for our guests.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 sticky top-20 z-40 glass">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-3 overflow-x-auto pb-2 justify-center">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gold text-dark"
                    : "bg-dark-card text-cream/60 border border-gold/10 hover:border-gold/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedItem(item.id)}
                >
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden relative card-hover">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-gold/90 flex items-center justify-center">
                        <Camera size={18} className="text-dark" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-[10px] tracking-wider uppercase text-gold">
                        {item.category}
                      </span>
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-cream mt-1">
                        {item.title}
                      </h3>
                      <p className="text-cream/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark/95 backdrop-blur-xl"
            onClick={() => setSelectedItem(null)}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 text-cream/60 hover:text-gold transition-colors z-50"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("prev");
              }}
              className="absolute left-4 md:left-8 text-cream/60 hover:text-gold transition-colors z-50"
            >
              <ChevronLeft size={40} />
            </button>

            <motion.div
              key={selectedItem}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-5xl w-full mx-4 sm:mx-16 max-h-[85vh] overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems.find((item) => item.id === selectedItem)?.src}
                alt={filteredItems.find((item) => item.id === selectedItem)?.title}
                className="w-full h-full object-contain"
              />
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("next");
              }}
              className="absolute right-4 md:right-8 text-cream/60 hover:text-gold transition-colors z-50"
            >
              <ChevronRight size={40} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center z-50">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-cream">
                {filteredItems.find((item) => item.id === selectedItem)?.title}
              </h3>
              <p className="text-cream/50 text-sm">
                {filteredItems.find((item) => item.id === selectedItem)?.desc}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instagram CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="p-8 rounded-2xl bg-dark-card border border-gold/10">
            <Camera size={32} className="text-gold mx-auto mb-4" />
            <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-cream mb-2">
              Share Your Moments
            </h3>
            <p className="text-cream/50 text-sm">
              Tag us on Instagram @persona.patna with your dining photos and
              we&apos;ll feature the best ones here!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

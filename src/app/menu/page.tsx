"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ChevronDown, ChevronUp, Utensils } from "lucide-react";
import { menuData, menuCategories, type MenuItem, type MenuCategory } from "@/data/menu";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToMenu = useCallback(() => {
    setTimeout(() => {
      const el = document.getElementById("menu-content");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  }, []);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    scrollToMenu();
  };

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredCategories =
    activeCategory === "All"
      ? menuData
      : menuData.filter(
          (cat) =>
            cat.title === activeCategory ||
            (activeCategory === "Dessert" && cat.title === "Dessert") ||
            (activeCategory === "Mocktails & Shakes" && cat.title === "Mocktails & Shakes")
        );

  const applyFilters = (categories: MenuCategory[]) => {
    let result = categories;

    if (vegOnly) {
      result = result
        .map((cat) => ({
          ...cat,
          sections: cat.sections
            .map((sec) => ({
              ...sec,
              items: sec.items.filter((item) => item.veg),
            }))
            .filter((sec) => sec.items.length > 0),
        }))
        .filter((cat) => cat.sections.length > 0);
    }

    if (searchQuery) {
      result = result
        .map((cat) => ({
          ...cat,
          sections: cat.sections
            .map((sec) => ({
              ...sec,
              items: sec.items.filter(
                (item) =>
                  item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  item.description.toLowerCase().includes(searchQuery.toLowerCase())
              ),
            }))
            .filter((sec) => sec.items.length > 0),
        }))
        .filter((cat) => cat.sections.length > 0);
    }

    return result;
  };

  const displayedCategories = applyFilters(filteredCategories);

  const totalCount = displayedCategories.reduce(
    (acc, cat) => acc + cat.sections.reduce((a, sec) => a + sec.items.length, 0),
    0
  );

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-menu.jpg"
            alt="Fine dining dishes"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 mb-6">
            <Utensils size={14} className="text-gold" />
            <span className="text-gold/80 text-xs tracking-wider uppercase">
              {totalCount} Dishes Available
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
            <span className="gold-text-shine">Our Menu</span>
          </h1>
          <p className="text-cream/50 text-base sm:text-lg max-w-xl mx-auto">
            Every dish tells a story. Explore our curated culinary journey.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-5 sticky top-20 z-40 glass">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="relative flex-1 w-full">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40" />
                <input
                  type="text"
                  placeholder="Search dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-10 py-2.5 bg-dark-card rounded-xl text-sm border border-gold/15 focus:border-gold text-cream"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-cream/30 hover:text-gold"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              <button
                onClick={() => setVegOnly(!vegOnly)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap border ${
                  vegOnly
                    ? "bg-green/20 border-green-light/50 text-green-light"
                    : "bg-dark-card border-gold/10 text-cream/50 hover:border-gold/20"
                }`}
              >
                <div className={`w-3 h-3 rounded-sm border flex items-center justify-center ${vegOnly ? "border-green-light bg-green/30" : "border-cream/30"}`}>
                  {vegOnly && <div className="w-1.5 h-1.5 bg-green-light rounded-full" />}
                </div>
                Veg Only
              </button>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {menuCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-gold text-dark"
                      : "text-cream/40 hover:text-cream/70 hover:bg-dark-card"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section id="menu-content" className="py-10 scroll-mt-44 md:scroll-mt-36">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery + vegOnly}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-14"
            >
              {displayedCategories.map((category, catIdx) => (
                <div key={catIdx}>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
                    <div className="text-center">
                      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold gold-text">
                        {category.title}
                      </h2>
                      {category.subtitle && (
                        <p className="text-cream/30 text-xs tracking-[0.3em] uppercase mt-1">
                          {category.subtitle}
                        </p>
                      )}
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
                  </div>

                  {/* Sections */}
                  {category.sections.map((section, secIdx) => {
                    const sectionKey = `${catIdx}-${secIdx}`;
                    const isExpanded = expandedSections[sectionKey] !== false;

                    return (
                      <div key={secIdx} className="mb-6">
                        <button
                          onClick={() => toggleSection(sectionKey)}
                          className="flex items-center gap-3 mb-3 group w-full text-left"
                        >
                          <span className="text-gold/60 text-xs tracking-[0.2em] uppercase font-semibold">
                            {section.name}
                          </span>
                          <div className="flex-1 h-px bg-gold/8" />
                          <span className="text-cream/20 group-hover:text-gold/50 transition-colors text-xs">
                            {section.items.length} items
                          </span>
                          <span className="text-cream/20 group-hover:text-gold/50 transition-colors">
                            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                          </span>
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-0.5">
                                {section.items.map((item, itemIdx) => (
                                  <MenuItemRow key={itemIdx} item={item} index={itemIdx} />
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              ))}

              {displayedCategories.length === 0 && (
                <div className="text-center py-20">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/5 flex items-center justify-center">
                    <Utensils size={24} className="text-gold/30" />
                  </div>
                  <p className="text-cream/30 text-lg mb-2">No dishes found</p>
                  <p className="text-cream/20 text-sm">Try adjusting your filters</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Footer Note */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="p-6 rounded-2xl border border-gold/8">
            <p className="text-cream/25 text-xs leading-relaxed">
              Prices inclusive of taxes. Menu items subject to seasonal availability.
              Please inform your server of any allergies. Average cost for two: ₹1,200–₹1,600
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function MenuItemRow({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.02, 0.5) }}
      className="group flex items-start gap-3 py-3 px-4 rounded-xl hover:bg-white/[0.02] transition-colors duration-200"
    >
      <div className="mt-1 shrink-0">
        {item.veg ? (
          <div className="w-3 h-3 border border-green-light rounded-sm flex items-center justify-center">
            <div className="w-1 h-1 bg-green-light rounded-full" />
          </div>
        ) : (
          <div className="w-3 h-3 border border-red-500 rounded-sm flex items-center justify-center">
            <div className="w-1 h-1 bg-red-500 rounded-full" />
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-4">
          <h4 className="font-[family-name:var(--font-display)] text-[15px] font-semibold text-cream/90 group-hover:text-gold transition-colors leading-snug">
            {item.name}
          </h4>
          <div className="flex items-center gap-2 shrink-0">
            <div className="hidden sm:block w-8 h-px bg-gold/15" />
            <span className="text-gold font-semibold text-sm">
              ₹{item.price}
            </span>
          </div>
        </div>
        <p className="text-cream/30 text-xs mt-0.5 leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

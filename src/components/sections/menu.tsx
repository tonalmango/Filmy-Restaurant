"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { GlassCard } from "@/components/ui/glass-card";
import { RippleButton } from "@/components/ui/ripple-button";
import { menuItems, type MenuCategory } from "@/data/menu";

const categories: ("All" | MenuCategory)[] = ["All", "Indian", "Chinese", "Italian", "Fusion"];

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<("All" | MenuCategory)>("All");

  const filtered = useMemo(
    () => menuItems.filter((item) => (activeCategory === "All" ? true : item.category === activeCategory)),
    [activeCategory],
  );

  return (
    <section id="menu" className="px-6 py-8 sm:py-12 md:py-20 md:px-10">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionTitle
          eyebrow="Interactive Menu"
          title="Choose Your Genre, Curate Your Plate"
          subtitle="Filter by cuisine and build your order with chef-curated premium selections."
        />

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-sm transition ${
                activeCategory === category
                  ? "bg-gold text-black"
                  : "border border-white/20 bg-white/5 text-white hover:border-gold/70"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <GlassCard className="group overflow-hidden p-0 transition duration-300 hover:border-gold/40">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                    <span className="text-sm font-semibold text-gold">{item.price}</span>
                  </div>
                  <p className="text-sm text-muted">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">{item.category}</span>
                    <RippleButton className="px-4 py-2 text-xs">Add to Order</RippleButton>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

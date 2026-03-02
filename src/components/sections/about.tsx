"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { GlassCard } from "@/components/ui/glass-card";

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl space-y-12">
        <SectionTitle
          eyebrow="About The Experience"
          title="A Film-Like Evening Crafted Frame by Frame"
          subtitle="Every plate, light cue, soundtrack, and service flow is designed to feel like your own premiere night."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Act I: Arrival", "Velvet interiors, low-key cinematic lighting, and a welcome amuse-bouche."],
            ["Act II: Signature Tasting", "Chef-led courses inspired by global cinema and regional ingredients."],
            ["Act III: Encore", "Dessert theatrics, curated beverages, and personalized tasting recommendations."],
          ].map(([title, desc], idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, delay: idx * 0.15 }}
            >
              <GlassCard className="h-full">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { GlassCard } from "@/components/ui/glass-card";

const testimonials = [
  {
    quote: "Filmy Food feels like stepping into an award-winning set. Every course was cinematic.",
    name: "Aditi Mehra",
    role: "Food Critic",
  },
  {
    quote: "The ambiance, pacing, and plating are extraordinary. Perfect for premium date nights.",
    name: "Rohan Kapoor",
    role: "Lifestyle Blogger",
  },
  {
    quote: "Service precision and flavor depth were phenomenal. This is luxury dining reimagined.",
    name: "Neha Sinha",
    role: "Frequent Guest",
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="px-6 py-8 sm:py-12 md:py-20 md:px-10">
      <div className="mx-auto max-w-5xl space-y-10">
        <SectionTitle eyebrow="Testimonials" title="What Guests Say" />

        <GlassCard className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.45 }}
              className="space-y-5"
            >
              <p className="text-xl leading-relaxed text-white md:text-2xl">“{testimonials[index].quote}”</p>
              <div>
                <p className="font-semibold text-gold">{testimonials[index].name}</p>
                <p className="text-sm text-muted">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex gap-2">
            {testimonials.map((_, dot) => (
              <button
                key={dot}
                onClick={() => setIndex(dot)}
                className={`h-2 rounded-full transition ${dot === index ? "w-6 bg-gold" : "w-2 bg-white/30"}`}
                aria-label={`Show testimonial ${dot + 1}`}
              />
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

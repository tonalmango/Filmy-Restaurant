"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { RippleButton } from "@/components/ui/ripple-button";

const Hero3D = dynamic(() => import("@/components/sections/hero-3d").then((m) => m.Hero3D), {
  ssr: false,
});

export function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const [showThree, setShowThree] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowThree(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-10 pt-28 md:px-10">
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(212,175,55,0.25),transparent_45%),radial-gradient(circle_at_75%_65%,rgba(255,255,255,0.08),transparent_35%)]"
      />

      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 22 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold/60"
            style={{ left: `${(i * 13) % 100}%`, top: `${(i * 17) % 100}%` }}
            animate={{ y: [-10, 10, -10], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 5 + (i % 6), repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-7"
        >
          <p className="text-xs uppercase tracking-[0.34em] text-gold">Filmy Food · Fine Dining</p>
          <h1 className="text-5xl font-semibold leading-[1.05] text-white md:text-7xl">Where Cinema Meets Cuisine</h1>
          <p className="max-w-xl text-base text-muted md:text-lg">
            A curated luxury dining journey inspired by iconic storytelling, immersive ambiance, and chef-crafted artistry.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#reservation" aria-label="Book table now">
              <RippleButton>Book Table</RippleButton>
            </a>
            <a href="#menu" aria-label="View menu section">
              <RippleButton variant="ghost">View Menu</RippleButton>
            </a>
            <a href="https://wa.me/919999999999?text=Hi%20Filmy%20Food%2C%20I%20want%20to%20order%20now." target="_blank" rel="noopener noreferrer" aria-label="Order now on WhatsApp">
              <RippleButton variant="ghost">Order Now</RippleButton>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl shadow-glow"
        >
          {showThree ? (
            <Hero3D />
          ) : (
            <div className="h-[320px] w-full animate-pulse rounded-2xl bg-[radial-gradient(circle_at_40%_30%,rgba(212,175,55,0.28),rgba(12,12,12,0.7)_55%)] md:h-[500px]" />
          )}
        </motion.div>
      </div>
    </section>
  );
}

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
    <section className="relative w-full overflow-hidden px-3 pb-6 pt-24 sm:px-4 sm:pb-10 sm:pt-24 md:px-10 md:pb-10 md:pt-28 min-h-0 md:min-h-[100dvh]">
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(212,175,55,0.25),transparent_45%),radial-gradient(circle_at_75%_65%,rgba(255,255,255,0.08),transparent_35%)]"
      />

      <div className="pointer-events-none absolute inset-0 hidden sm:block">
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

      <div className="relative mx-auto grid w-full max-w-7xl items-start gap-4 sm:gap-4 md:items-center md:gap-6 md:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-3 sm:space-y-3 md:space-y-5 lg:space-y-7"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gold sm:tracking-[0.34em]">Filmy Food · Fine Dining</p>
          <h1 className="text-3xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl">Where Cinema Meets Cuisine</h1>
          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-sm md:text-base md:leading-7 lg:text-lg">
            A curated luxury dining journey inspired by iconic storytelling, immersive ambiance, and chef-crafted artistry.
          </p>
          <div className="flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-2 md:flex-nowrap md:gap-2 lg:gap-3">
            <a href="#reservation" aria-label="Book table now" className="w-full sm:w-auto">
              <RippleButton className="w-full justify-center px-3 py-2.5 text-sm sm:w-auto sm:px-3 sm:py-2 md:px-3 md:py-2 md:text-sm lg:px-4 lg:py-2.5 lg:text-base">Book Table</RippleButton>
            </a>
            <a href="#menu" aria-label="View menu section" className="w-full sm:w-auto">
              <RippleButton variant="ghost" className="w-full justify-center px-3 py-2.5 text-sm sm:w-auto sm:px-3 sm:py-2 md:px-3 md:py-2 md:text-sm lg:px-4 lg:py-2.5 lg:text-base">View Menu</RippleButton>
            </a>
            <a href="#menu" aria-label="View menu section" className="w-full sm:w-auto">
              <RippleButton variant="ghost" className="w-full justify-center px-3 py-2.5 text-sm sm:w-auto sm:px-3 sm:py-2 md:px-3 md:py-2 md:text-sm lg:px-4 lg:py-2.5 lg:text-base">Order Now</RippleButton>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="h-[220px] rounded-lg sm:h-[260px] sm:rounded-xl md:h-[380px] md:rounded-2xl lg:h-[500px] lg:rounded-3xl border border-white/10 bg-white/5 p-2 sm:p-3 backdrop-blur-xl shadow-glow overflow-hidden"
        >
          {showThree ? (
            <Hero3D />
          ) : (
            <div className="h-full w-full animate-pulse rounded bg-[radial-gradient(circle_at_40%_30%,rgba(212,175,55,0.28),rgba(12,12,12,0.7)_55%)]" />
          )}
        </motion.div>
      </div>
    </section>
  );
}

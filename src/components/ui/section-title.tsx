"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-gold">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base text-muted md:text-lg">{subtitle}</p> : null}
    </motion.div>
  );
}

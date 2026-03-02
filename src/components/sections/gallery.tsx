"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { galleryImages } from "@/data/gallery";

export function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionTitle
          eyebrow="Gallery"
          title="Scenes From The House"
          subtitle="A visual moodboard of lights, textures, and signature presentations."
        />

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((src, index) => (
            <motion.button
              key={src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative mb-4 block w-full overflow-hidden rounded-2xl"
              onClick={() => setLightboxIndex(index)}
            >
              <Image
                src={src}
                alt={`Filmy Food gallery image ${index + 1}`}
                width={900}
                height={1200}
                loading="lazy"
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <div className="relative h-[80vh] w-full max-w-5xl">
              <Image
                src={galleryImages[lightboxIndex]}
                alt="Selected gallery preview"
                fill
                className="rounded-2xl object-contain"
                sizes="100vw"
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

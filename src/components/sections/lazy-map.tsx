"use client";

import { useEffect, useRef, useState } from "react";

export function LazyMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px" },
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="h-[420px] w-full">
      {visible ? (
        <iframe
          title="Filmy Food location map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160997796!2d72.74109993937868!3d19.082177839000853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce2f6d7e95b7%3A0x22c0b6d3f7f7f7f7!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
          width="100%"
          height="420"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-white/5 text-sm text-muted">
          Loading map...
        </div>
      )}
    </div>
  );
}

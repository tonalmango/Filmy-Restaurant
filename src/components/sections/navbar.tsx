"use client";

import { RippleButton } from "@/components/ui/ripple-button";

const links = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Reservation", href: "#reservation" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="/" className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
          Filmy Food
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-white/85 transition hover:text-gold">
              {link.label}
            </a>
          ))}
        </div>

        <a href="#reservation">
          <RippleButton className="px-5 py-2 text-xs">Book Now</RippleButton>
        </a>
      </nav>
    </header>
  );
}

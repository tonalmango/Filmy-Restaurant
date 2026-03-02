"use client";

import { RippleButton } from "@/components/ui/ripple-button";

export function MobileBookCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/80 p-3 backdrop-blur-xl md:hidden">
      <a href="#reservation" className="mx-auto block w-full max-w-md" aria-label="Book table">
        <RippleButton className="w-full justify-center">Book Table</RippleButton>
      </a>
    </div>
  );
}

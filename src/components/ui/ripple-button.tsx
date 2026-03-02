"use client";

import { ButtonHTMLAttributes, MouseEvent, useState } from "react";
import clsx from "clsx";

type Ripple = { x: number; y: number; size: number; id: number };

type RippleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "gold" | "ghost";
};

export function RippleButton({ className, children, variant = "gold", onClick, ...props }: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple: Ripple = {
      x: event.clientX - rect.left - size / 2,
      y: event.clientY - rect.top - size / 2,
      size,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, ripple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((item) => item.id !== ripple.id));
    }, 650);

    onClick?.(event);
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      className={clsx(
        "relative overflow-hidden rounded-full px-6 py-3 text-sm font-medium uppercase tracking-[0.16em] transition duration-300",
        variant === "gold"
          ? "bg-gold text-black hover:bg-gold/90"
          : "border border-white/25 bg-white/5 text-white backdrop-blur-xs hover:border-gold/70 hover:bg-white/10",
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="pointer-events-none absolute rounded-full bg-white/35 animate-ripple"
          style={{ left: ripple.x, top: ripple.y, width: ripple.size, height: ripple.size }}
        />
      ))}
    </button>
  );
}

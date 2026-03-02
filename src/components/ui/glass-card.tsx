import { ReactNode } from "react";
import clsx from "clsx";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[0_10px_50px_rgba(0,0,0,0.35)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

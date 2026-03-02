import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        surface: "#101010",
        panel: "#161616",
        gold: "#D4AF37",
        muted: "#A7A7A7",
      },
      boxShadow: {
        glow: "0 0 40px rgba(212,175,55,0.15)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "0.6" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
      },
      animation: {
        shimmer: "shimmer 5s linear infinite",
        ripple: "ripple 600ms ease-out",
      },
    },
  },
  plugins: [],
};

export default config;

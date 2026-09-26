// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        // Custom color palette matching the reference image
        darkBg: "#0B0C0E",     // Ultra dark midnight background
        darkCard: "#131518",   // Secondary panel background
        neonLime: "#CCFF00",   // High-contrast Volt / Lime green accent
        neonLimeHover: "#B3DE00"
      },
    },
  },
};
export default config;

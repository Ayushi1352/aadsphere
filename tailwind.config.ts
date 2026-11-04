import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      borderColor: {
        DEFAULT: "currentColor",
      },
      // Font roles; app/layout.tsx sets the variables from templates.json (common.theme.fonts).
      fontFamily: {
        sans: ["var(--font-primary)"],
        main: ["var(--font-primary)"],
        text: ["var(--font-text)"],
        ui: ["var(--font-ui)"],
        article: ["var(--font-article)"],
        hero: ["var(--font-hero)"],
        alt: ["var(--font-alt)"],
      },
      transitionDuration: {
        450: "450ms",
        800: "800ms",
        900: "900ms",
        1100: "1100ms",
        1600: "1600ms",
      },
      transitionDelay: {
        250: "250ms",
        450: "450ms",
        600: "600ms",
      },
    },
  },
  plugins: [
    // Variant built into Tailwind v4 that v3 does not have.
    plugin(({ addVariant }) => {
      addVariant("starting", "@starting-style");
    }),
  ],
};
export default config;

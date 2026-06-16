import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: "#1D4ED8",
        navy: "#0B1220",
        ivory: "#F8F5EF",
        mist: "#EAF1FB",
        slatecopy: "#334155",
        gold: "#C8A24A",
      },
      boxShadow: {
        soft: "0 18px 55px rgba(11, 18, 32, 0.08)",
        crisp: "0 1px 0 rgba(11, 18, 32, 0.06)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "Manrope",
          "Geist",
          "Satoshi",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;

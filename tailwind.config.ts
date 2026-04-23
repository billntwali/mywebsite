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
        // Sampled from hero-night.png: dark twilight Rwandan lake
        bg: {
          void: "#060810",      // absolute dark — deep sky
          base: "#09091a",      // main background
          surface: "#0e1020",   // card surfaces
          elevated: "#151828",  // elevated elements
          border: "#1d2136",    // borders
          subtle: "#131625",    // subtle dividers
        },
        accent: {
          gold: "#c4883e",        // amber from village lights in image
          "gold-light": "#daa055", // lighter warm
          "gold-dim": "#7a5828",   // dimmer amber
          slate: "#4e6e9a",        // mountain blue-gray from the water
          green: "#3d6649",        // forest green from the hillside
        },
        text: {
          primary: "#ece5d8",    // warm cream — reads well on dark night bg
          secondary: "#8090a6",  // muted slate
          muted: "#404d62",      // very muted
          dim: "#252d3e",        // barely visible
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "0.9" }],
        "9xl": ["8rem", { lineHeight: "0.92" }],
        "8xl": ["6rem", { lineHeight: "0.94" }],
      },
      letterSpacing: {
        widest: "0.25em",
        "ultra-wide": "0.35em",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "grain": "grain 8s steps(10) infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "20%": { transform: "translate(3%, 1%)" },
          "30%": { transform: "translate(-1%, 4%)" },
          "40%": { transform: "translate(4%, -2%)" },
          "50%": { transform: "translate(-3%, 3%)" },
          "60%": { transform: "translate(2%, -4%)" },
          "70%": { transform: "translate(-4%, 1%)" },
          "80%": { transform: "translate(1%, -2%)" },
          "90%": { transform: "translate(3%, 4%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

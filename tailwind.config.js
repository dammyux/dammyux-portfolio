const path = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    path.join(__dirname, "src/**/*.{js,ts,jsx,tsx,mdx}"),
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#00ff87",
          50: "#e6fff3",
          100: "#b3ffe0",
          200: "#80ffcd",
          300: "#4dffba",
          400: "#1afff1",
          500: "#00ff87",
          600: "#00cc6c",
          700: "#009951",
          800: "#006636",
          900: "#00331b",
        },
        obsidian: {
          DEFAULT: "#070709",
          50: "#1d1e26",
          100: "#171820",
          200: "#121319",
          300: "#0d0e13",
          400: "#0a0a0e",
          500: "#070709",
          900: "#030304",
        },
        surface: {
          DEFAULT: "#0f1016",
          muted: "#151722",
          border: "rgba(255, 255, 255, 0.08)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Plus Jakarta Sans", "sans-serif"],
      },
      animation: {
        "marquee-left": "marqueeLeft 35s linear infinite",
        "marquee-right": "marqueeRight 35s linear infinite",
        "pulse-glow": "pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "floatSlow 6s ease-in-out infinite",
      },
      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

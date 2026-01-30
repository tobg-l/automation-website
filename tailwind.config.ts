import type { Config } from "tailwindcss";

const designSystem = require("./design-system.json");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Black/Gray palette
        black: {
          "000": designSystem.colors.black["000"],
          "010": designSystem.colors.black["010"],
          "020": designSystem.colors.black["020"],
          "030": designSystem.colors.black["030"],
        },
        // Foreground colors
        foreground: {
          white: designSystem.colors.foreground.white,
          light: designSystem.colors.foreground.light,
          medium: designSystem.colors.foreground.medium,
          dark: designSystem.colors.foreground.dark,
        },
        // Accent blue with opacity variants
        "accent-blue": {
          DEFAULT: designSystem.colors.accent.blue.base,
          "10": designSystem.colors.accent.blue["10"],
          "20": designSystem.colors.accent.blue["20"],
          "30": designSystem.colors.accent.blue["30"],
          "40": designSystem.colors.accent.blue["40"],
          "50": designSystem.colors.accent.blue["50"],
          "60": designSystem.colors.accent.blue["60"],
          "70": designSystem.colors.accent.blue["70"],
          "80": designSystem.colors.accent.blue["80"],
          "90": designSystem.colors.accent.blue["90"],
        },
        // Accent cyan with opacity variants
        "accent-cyan": {
          DEFAULT: designSystem.colors.accent.cyan.base,
          "10": designSystem.colors.accent.cyan["10"],
          "20": designSystem.colors.accent.cyan["20"],
          "30": designSystem.colors.accent.cyan["30"],
          "40": designSystem.colors.accent.cyan["40"],
          "50": designSystem.colors.accent.cyan["50"],
          "60": designSystem.colors.accent.cyan["60"],
          "70": designSystem.colors.accent.cyan["70"],
          "80": designSystem.colors.accent.cyan["80"],
          "90": designSystem.colors.accent.cyan["90"],
        },
      },
      fontFamily: {
        sans: designSystem.fonts.primary.family.split(", "),
        display: designSystem.fonts.display.family.split(", "),
        mono: designSystem.fonts.mono.family.split(", "),
      },
      fontSize: {
        hero: designSystem.typography.hero,
        h1: designSystem.typography.h1,
        h2: designSystem.typography.h2,
        h3: designSystem.typography.h3,
        h4: designSystem.typography.h4,
        body: designSystem.typography.body,
        small: designSystem.typography.small,
      },
      spacing: {
        // 8px grid system - multiply base (8px) by scale values
        "0": "0",
        "0.5": "4px", // 0.5 * 8px
        "1": "8px", // 1 * 8px
        "1.5": "12px", // 1.5 * 8px
        "2": "16px", // 2 * 8px
        "2.5": "20px", // 2.5 * 8px
        "3": "24px", // 3 * 8px
        "4": "32px", // 4 * 8px
        "5": "40px", // 5 * 8px
        "6": "48px", // 6 * 8px
        "8": "64px", // 8 * 8px
        "10": "80px", // 10 * 8px
        "12": "96px", // 12 * 8px
        "16": "128px", // 16 * 8px
        "20": "160px", // 20 * 8px
        "24": "192px", // 24 * 8px
        "32": "256px", // 32 * 8px
        "40": "320px", // 40 * 8px
        "48": "384px", // 48 * 8px
        "56": "448px", // 56 * 8px
        "64": "512px", // 64 * 8px
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      boxShadow: {
        "glow-blue": designSystem.effects.glow.blue,
        "glow-cyan": designSystem.effects.glow.cyan,
        "glow": designSystem.effects.glow.combined,
      },
    },
  },
  plugins: [],
};
export default config;


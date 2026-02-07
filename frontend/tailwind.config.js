import {
  backgrounds,
  accents,
  text,
  glass,
  borders,
  fonts,
  fontSize,
  fontWeight,
  letterSpacing,
  spacing,
  borderRadius,
  boxShadow,
  transitionDuration,
  transitionTimingFunction,
  keyframes,
  animation,
  zIndex,
  screens,
} from "./src/styles/designSystem.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens,
    extend: {
      // Colors
      colors: {
        // Background hierarchy
        bg: backgrounds,

        // Accent colors with variants
        cyan: accents.cyan,
        purple: accents.purple,
        amber: accents.amber,

        // Text
        text: text,

        // Glass
        glass: glass,

        // Borders
        border: {
          ...borders,
          DEFAULT: borders.glass,
        },
      },

      // Typography
      fontFamily: {
        display: fonts.display,
        body: fonts.body,
        mono: fonts.mono,
      },
      fontSize,
      fontWeight,
      letterSpacing,

      // Spacing
      spacing,

      // Border radius
      borderRadius,

      // Shadows & Glows
      boxShadow,

      // Transitions
      transitionDuration,
      transitionTimingFunction,

      // Animations
      keyframes,
      animation,

      // Z-index
      zIndex,

      // Background images for effects
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        scanline:
          "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px)",
        shimmer:
          "linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.3), transparent)",
      },

      // Backdrop blur values
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
    },
  },
  plugins: [],
};

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
        navy: {
          950: "#060B19", // Deepest navy for background
          900: "#0A1128", // Secondary navy
          800: "#142145", // Surface navy/cards
          700: "#1E3163", // Borders
        },
        gold: {
          400: "#F2E3C6", // Champagne highlight
          500: "#D4AF37", // Classic Gold Accent
          600: "#AA8C2C", // Darker Gold for hover
        },
        emerald: {
          500: "#22C55E", // Kept for WhatsApp
        },
        slate: {
          300: "#CBD5E1", // Secondary text
          100: "#F1F5F9", // Primary text
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.005) 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F2E3C6 0%, #D4AF37 100%)',
      }
    },
  },
  plugins: [],
};
export default config;

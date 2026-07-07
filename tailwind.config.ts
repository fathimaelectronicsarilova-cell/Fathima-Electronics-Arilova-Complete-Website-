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
        midnight: {
          950: "#050505", // Deepest black for background
          900: "#0a0a0a", // Secondary black
          800: "#141414", // Surface black/cards
          700: "#1f1f1f", // Borders
        },
        gold: {
          400: "#F5D061",
          500: "#D4AF37", // Primary Gold Accent
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
        heading: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.005) 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F5D061 0%, #D4AF37 100%)',
      }
    },
  },
  plugins: [],
};
export default config;

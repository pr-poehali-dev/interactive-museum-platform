
import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#9b87f5",
          foreground: "hsl(var(--primary-foreground))",
          50: "#F7F5FE",
          100: "#E5DEFF",
          200: "#C7BBFD",
          300: "#B4A4FA",
          400: "#9b87f5", // основной цвет
          500: "#7E69AB",
          600: "#6E59A5",
          700: "#4A3A71",
          800: "#332851",
          900: "#1A1F2C",
        },
        secondary: {
          DEFAULT: "#33C3F0",
          foreground: "hsl(var(--secondary-foreground))",
          50: "#E1F5FC",
          100: "#B3E5F7",
          200: "#81D4F2",
          300: "#4FC3ED",
          400: "#33C3F0", // основной цвет
          500: "#1EAEDB",
          600: "#1A9AC3",
          700: "#157A9B",
          800: "#105A73",
          900: "#0A3B4B",
        },
        accent: {
          DEFAULT: "#FEC6A1",
          foreground: "hsl(var(--accent-foreground))",
          50: "#FFF7F1",
          100: "#FEE9DA",
          200: "#FED8BC",
          300: "#FEC6A1", // основной цвет
          400: "#FDB483",
          500: "#FD9A5A",
          600: "#FC8031",
          700: "#F46608",
          800: "#C95106",
          900: "#8A3704", 
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "expand": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
        "expand": "expand 0.3s ease-out",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

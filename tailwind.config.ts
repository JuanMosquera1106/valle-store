import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        greenValle: {
          DEFAULT: "rgba(107, 152, 62, 1)", // Color principal
          light: "rgba(107, 152, 62, 0.8)", // Variante clara
          dark: "rgba(107, 152, 62, 1.2)", // Variante oscura
        },
        brownValle: {
          DEFAULT: "rgba(128, 72, 42, 1)", // Color principal
          light: "rgba(128, 72, 42, 0.8)", // Variante clara
          dark: "rgba(128, 72, 42, 1)", // Variante oscura
        },
        greenButtonValle: {
          DEFAULT: "rgba(112, 153, 77, 0.42)", // Color principal
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

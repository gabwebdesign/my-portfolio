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
        blue: "var(--blue)",
        orange: "var(--orange)",
        gray: "var(--gray)",
        dark: "var(--dark)",
        light: "var(--light)",},
        purple: "var(--purple)",
    },
  },
  plugins: [],
} satisfies Config;

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",                           // ✨ enable dark‑mode via class .dark
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      // colour tokens so you may also use in `bg-primary/80` etc.
      colors: {
        primary: "var(--color-primary)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        accent: "var(--color-accent)",
        muted: "var(--color-muted)",
      },
      boxShadow: {
        card: "0 2px 6px rgba(0,0,0,.15)",
      },
      borderRadius: {
        xl2: "1.25rem",                
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/animate")],
};
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      colors: {
        primary: "#ffffff", // white
        secondary: "#1e40af", // blue
        destructive: "#dc2626", // red
        accent: "#facc15", // yellow
        background: "#f8fafc", // light gray
        foreground: "#111827", // dark gray
        border: "#d1d5db", // light border
        input: "#e5e7eb", // input background
        ring: "#3b82f6", // blue ring
        card: "#ffffff",
        "card-foreground": "#1f2937",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

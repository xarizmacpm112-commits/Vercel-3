/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        background: "#f8fafc",
        border: "#e2e8f0"
      },
      boxShadow: {
        soft: "0 4px 20px rgba(15,23,42,0.06)"
      }
    }
  },
  plugins: [],
};

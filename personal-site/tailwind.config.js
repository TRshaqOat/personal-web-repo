/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        slab: ["Hepta Slab", "serif"],
      },
      animation: {
        "spin-slow": "spin 0.1s linear infinite",
        blob: "blob 7s infinite",
      },
      colors: {
        neutral: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0", // Define neutral-500 with the desired color code
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(20px, -20px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-10px, 5px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};

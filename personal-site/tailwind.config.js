/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scrollBehavior: {
        slow: "cubic-bezier(0.33, 0, 0.68, 1)",
      },
      fontFamily: {
        slab: ["Hepta Slab", "serif"],
      },
      animation: {
        "spin-slow": "spin 0.1s linear infinite",
        blob: "blob 7s infinite",
        newpulse: "newpulse 3s 0.5s ease-out infinite",
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
          "main-blue": "#101a24",
          "contact-blue": "#167d7f",
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
        blobtwo: {
          "0%": {
            transform: "scale(0.95)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        newpulse: {
          "0%": {
            boxShadow: "0 0 0 0 rgba(16, 26, 16, 1)",
          },
          "100%": {
            boxShadow: "0 0 0 65px rgba(16, 26, 16, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};

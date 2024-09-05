/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SF Pro Display"', 'sans-serif'],
        display: ["var(--font-sf)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fade-up 0.5s",
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
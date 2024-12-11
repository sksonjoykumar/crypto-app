/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Use the 'class' strategy for dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "serif"],
        inter: ["inter", "serif"],
      },
      animation: {
        bounceSlow: "bounce 8s infinite",
      },
      scale: {
        175: "1.02",
        200: "1.2",
      },
    },
  },
  plugins: [],
};

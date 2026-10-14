/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        void: "#050505",
        bone: "#f5f5f5",
        card: "#ffffff",
        signal: "#cf1c18",
        ink: {
          DEFAULT: "#050505",
          2: "#3a3a3a",
          3: "#8a8a8a",
        },
        surface: {
          1: "#050505",
          2: "#111111",
        },
        silver: "#f5f5f5",
      },
      fontFamily: {
        display: ["Clash Display", "sans-serif"],
        mono: ["Archivo", "sans-serif"],
        serif: ["Clash Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6D28D9",
        secondary: "#DB2777",
        dark: "#0F172A",
        light: "#F8FAFC",
        glass: "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


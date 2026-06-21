/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2453FF",
        secondary: "#193ED8",
        background: "#F7F9FC",
        text: "#202124",
        gray: "#8A8A8A",
      },
    },
  },
  plugins: [],
};
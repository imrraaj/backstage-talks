/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    colors: {
      copper: "#00c1b5",
      golden: "#ffbe00",
      red: "#e30512",
      orange: "#ff651a",
      blue: "#1d3fbb",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
};

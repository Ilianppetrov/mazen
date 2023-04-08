/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      laptop: "1440px",
    },
    container: {
      screens: {
        laptop: "1440px",
      },
    },
    extend: {
      colors: {
        "primary-bg": "#073B4C",
        "secondary-bg": "#00222E",
      },
      backgroundImage: {
        diagonalGradient:
          "linear-gradient(to top left , #073B4C 50%,  transparent 50%)",

        fadeToRight: "linear-gradient(to right,transparent 70%,#00222E 100%)",
      },
    },
  },
  plugins: [],
};

module.exports = config;

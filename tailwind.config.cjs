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
      dropShadow: {
        large: "0px 3.48px 3.48px rgba(0,0,0,0.25)",
        medium: "0px 1.9px 1.9px rgba(0,0,0,0.25)",
        small: "0px 0.88px 0.88px rgba(0,0,0,0.25)",
      },
      colors: {
        "primary-bg": "#073B4C",
        "secondary-bg": "#00222E",
      },
      backgroundImage: {
        spot: "url('/spot.svg')",
        diagonalGradient:
          "linear-gradient(to top left , #073B4C 50%,  transparent 50%)",

        fadeToRight: "linear-gradient(to right,transparent 70%,#00222E 100%)",
      },
    },
  },
  plugins: [],
};

module.exports = config;

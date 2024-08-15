/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "custom-dark": "#01000b", // Custom dark color
        gold: "#FFD700", // Add gold color
      },
      boxShadow: {
        card: "0px 35px 120px -15px #080414", // Existing shadow
        glow: "0 0 15px 5px rgba(255, 215, 0, 0.7)", // Gold glow effect
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondaryColor: "#C09562",
        authBgColor: "#efebea",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },

    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1100px",

      "2xl": "1536px",
    },
  },
  plugins: [],
};

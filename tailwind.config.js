module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        qanelas: ["Qanelas", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"],
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        nav: "#FDFAF5",
        hover: "#EC744F",
      }),
      textColor: (theme) => theme("colors"),
      textColor: {
        hover: "#EC744F",
        primary: "#2E4553",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

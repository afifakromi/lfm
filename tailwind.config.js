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
        primary: "#0a0028",
        crem: "#fcab63",
      }),
      textColor: (theme) => theme("colors"),
      textColor: {
        // hover: "#EC744F",
        // primary: "#2E4553",
        bg: "#0a0028",
        primary: "#ff5f7f",
        secondary: "#2641a1",
      },
      borderColor: (theme) => ({
        ...theme("colors"),
        DEFAULT: theme("colors.gray.300", "currentColor"),
        primary: "#20639B",
      }),
      boxShadow: {
        lg: "0 0 4px 2px #20639b",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

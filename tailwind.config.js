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
        nav: "#0F0023",
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
        secondary: "0F0023",
      }),
      boxShadow: {
        lg: "0 0 4px 2px #20639b",
      },
      gradientColorStops: (theme) => ({
        ...theme("colors"),
        first: "#2641A1",
        middle: "#FF5F7F",
        last: "#FCAB63",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

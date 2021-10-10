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
        customPink: "#FF5F7F",
        customError: "#DC3545",
        customSuccess: "#28a745",
        customArchive: "#EFE5E2",
        customArchiveItem: "#EBEAEA",
        customDropdownHead: "#f65c5c",
        customDropdown: "#F87171",
      }),
      textColor: (theme) => theme("colors"),
      textColor: {
        // hover: "#EC744F",
        // primary: "#2E4553",
        bg: "#0a0028",
        primary: "#ff5f7f",
        secondary: "#2641a1",
        customArchive: "#374770",
        customPink: "#FE6081",
        customCrem: "#fcab63",
        customGrey: "#EBEAEA",
      },
      borderColor: (theme) => ({
        ...theme("colors"),
        DEFAULT: theme("colors.gray.300", "currentColor"),
        primary: "#20639B",
        secondary: "0F0023",
        customGrey: "#AEA9A9",
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
      boxShadow: {
        white: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

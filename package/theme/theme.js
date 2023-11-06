const breakpoints = {
  values: {
    lg: 1200,
    md: 900,
    sm: 600,
    xl: 1536,
    xs: 0,
  },
};
const font = "'Rubik', sans-serif";

export const theme = {
  breakpoints: breakpoints, 
  palette    : {
    background: {
      default: "#FAFAFA",
      // -- default: "#F00",
    },
    primary: {
      contrastText: "#FFFFFF",
      dark        : "#FA385F",
      light       : "#FC7595",
      main        : "#FB607F",
    },
    secondary: {
      dark            : "#6D6C6C",
      light           : "#FAFAFA",
      main            : "#6D6C6C",
      transparentDark : "#6D6C6CAA",
      transparentLight: "#FAFAFAAA",
    },
    type: "light",
  },
  // same as mui guidelines
  typography: {
    button    : { textTransform: "none" },
    fontFamily: font,
  },
};

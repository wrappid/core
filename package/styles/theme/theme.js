import { createTheme } from "@mui/material";
import {
  PALETTE_ERROR,
  PALETTE_PRIMARY,
  PALETTE_SECONDARY,
  PALETTE_SUCCESS,
  PALETTE_WARNING,
} from "../../config/constants";

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};
const font = "'Rubik', sans-serif";

export const DEFAULT_THEME = {
  breakpoints: breakpoints, // same as mui guidelines
  typography: {
    fontFamily: font,
    button: {
      textTransform: "none",
    },
  },
  palette: {
    type: "light",
    background: {
      default: "#FAFAFA",
      // default: "#F00",
    },
    [PALETTE_PRIMARY]: {
      main: "#FB607F",
      light: "#FC7595",
      dark: "#FA385F",
      contrastText: "#FFFFFF",
    },
    [PALETTE_SECONDARY]: {
      main: "#6D6C6C",
      light: "#FAFAFA",
      dark: "#6D6C6C",
      transparentLight: "#FAFAFAAA",
      transparentDark: "#6D6C6CAA",
    },
    // [PALETTE_ERROR]: {
    //   main: "#d20909",
    // },
    // [PALETTE_WARNING]: {
    //   main: "#ffcc00",
    // },
    // [PALETTE_SUCCESS]: {
    //   main: "#34b233",
    // },
  },
};

export const theme = createTheme(DEFAULT_THEME);

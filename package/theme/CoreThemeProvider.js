import { ThemeProvider } from "@mui/material";
import React from "react";

export default function CoreThemeProvider(props) {
  /**
   * @todo should be able to handle ap and web
   */
  return (
    <ThemeProvider theme={props.theme || {}}>{props.children}</ThemeProvider>
  );
}

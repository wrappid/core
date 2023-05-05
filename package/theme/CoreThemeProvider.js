import { NativeThemeProvider } from "@wrappid/styled-components";
import React, { useContext } from "react";
import { ThemeContext } from "../config/contextHandler";

export default function CoreThemeProvider(props) {
  const theme = useContext(ThemeContext);

  return (
    <NativeThemeProvider theme={theme || {}}>
      {props.children}
    </NativeThemeProvider>
  );
}

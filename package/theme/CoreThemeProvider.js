import { useContext } from "react";

import { NativeThemeProvider } from "@wrappid/styled-components";

import { ThemeContext } from "../config/contextHandler";

export default function CoreThemeProvider(props) {
  const theme = props.theme || useContext(ThemeContext);

  return (
    <NativeThemeProvider theme={theme || {}}>
      {props.children}
    </NativeThemeProvider>
  );
}

// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useContext } from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeThemeProvider } from "@wrappid/native";
// eslint-disable-next-line import/no-unresolved
import { ThemeContext } from "@wrappid/styles";

export default function CoreThemeProvider(props) {
  const theme = props.theme || useContext(ThemeContext);

  return <NativeThemeProvider theme={theme || {}}>{props.children}</NativeThemeProvider>;
}

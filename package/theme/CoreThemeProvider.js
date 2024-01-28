// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useContext } from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeThemeProvider } from "@wrappid/native";
// eslint-disable-next-line import/no-unresolved, etc/no-commented-out-code
import { /* ThemeContext,  */WrappidDataContext } from "@wrappid/styles";

export default function CoreThemeProvider(props) {
  // eslint-disable-next-line etc/no-commented-out-code
  // const theme = props.theme || useContext(ThemeContext);
  const { themes, defaultTheme } = useContext(WrappidDataContext);

  return <NativeThemeProvider theme={themes[defaultTheme].theme || {}}>{props.children}</NativeThemeProvider>;
}

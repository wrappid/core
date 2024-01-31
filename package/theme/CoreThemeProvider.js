// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeThemeProvider } from "@wrappid/native";
// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";
import { useSelector } from "react-redux";

export default function CoreThemeProvider(props) {
  // eslint-disable-next-line etc/no-commented-out-code
  // const theme = props.theme || useContext(ThemeContext);
  const { themes, defaultTheme } = React.useContext(WrappidDataContext);
  const userTheme = useSelector((state) => state.app.userTheme);

  // return <NativeThemeProvider theme={themes[defaultTheme].theme}>{props.children}</NativeThemeProvider>;
  return <NativeThemeProvider theme={userTheme || themes[defaultTheme].theme}>{props.children}</NativeThemeProvider>;
}

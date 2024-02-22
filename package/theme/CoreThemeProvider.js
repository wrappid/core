// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useEffect } from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeThemeProvider } from "@wrappid/native";
// eslint-disable-next-line import/no-unresolved
import { UPDATE_DEFAULT_THEME, WrappidDataContext, WrappidDispatchContext } from "@wrappid/styles";
import { useDispatch, useSelector } from "react-redux";

import { setUserTheme } from "../store/action/appActions";

export default function CoreThemeProvider(props) {
  // eslint-disable-next-line etc/no-commented-out-code
  // const theme = props.theme || useContext(ThemeContext);
  const storeDispatch = useDispatch();
  const dispatch = React.useContext(WrappidDispatchContext);
  const { config, themes, defaultTheme } = React.useContext(WrappidDataContext);
  const userTheme = useSelector((state) => state.app.userTheme);

  useEffect(() => {
    if(!userTheme) {
      storeDispatch(setUserTheme(config?.defaultTheme || defaultTheme, themes[config?.defaultTheme || defaultTheme].theme));
      dispatch({ payload: config?.defaultTheme || defaultTheme, type: UPDATE_DEFAULT_THEME });

    }
  }, [userTheme]);

  // return <NativeThemeProvider theme={themes[defaultTheme].theme}>{props.children}</NativeThemeProvider>;
  return <NativeThemeProvider theme={userTheme || themes[config?.defaultTheme || defaultTheme].theme}>{props.children}</NativeThemeProvider>;
}
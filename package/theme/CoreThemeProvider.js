// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeThemeProvider } from "@wrappid/native";
// eslint-disable-next-line import/no-unresolved
import { UPDATE_DEFAULT_THEME, UPDATE_PAGE_THEME, WrappidDataContext, WrappidDispatchContext } from "@wrappid/styles";
import { useDispatch, useSelector } from "react-redux";

import { setUserTheme } from "../store/action/appActions";

export default function CoreThemeProvider(props) {
  const { themeID = undefined, children } = props || {};
  
  const storeDispatch = useDispatch();
  const dispatch = React.useContext(WrappidDispatchContext);
  
  const { config, themes } = React.useContext(WrappidDataContext);
  const { defaultTheme = "wrappidTheme" } = config || {};
  const { userThemeID } = useSelector((state) => state?.app);

  const [currentTheme, setCurrentTheme] = React.useState(themes[defaultTheme].theme);

  React.useEffect(() => {
    if (userThemeID && Object.keys(themes).includes(userThemeID)) {
      dispatch({ payload: userThemeID, type: UPDATE_DEFAULT_THEME });
      
      let mergedTheme = themes[userThemeID].theme;
      
      if (themeID && Object.keys(themes).includes(themeID)) {
        dispatch({ payload: userThemeID, type: UPDATE_PAGE_THEME });

        mergedTheme = { ...mergedTheme, ...(themes[themeID].theme) };
      } else {
        dispatch({ payload: undefined, type: UPDATE_PAGE_THEME });
      }
      setCurrentTheme(mergedTheme);
    } else {
      storeDispatch(setUserTheme(defaultTheme));
      setCurrentTheme(themes[defaultTheme].theme);
    }

  }, [defaultTheme, userThemeID]);

  return <NativeThemeProvider theme={currentTheme}>{children}</NativeThemeProvider>;
}
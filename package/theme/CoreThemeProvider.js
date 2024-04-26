// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeThemeProvider } from "@wrappid/native";
// eslint-disable-next-line import/no-unresolved
import { DEFAULT_THEME, UPDATE_DEFAULT_THEME, UPDATE_PAGE_THEME, WrappidDataContext, WrappidDispatchContext } from "@wrappid/styles";
import { useDispatch, useSelector } from "react-redux";

import { HTTP } from "../config/constants";
import { apiRequestAction } from "../store/action/appActions";
import { GET_THEMES_FAILURE, GET_THEMES_SUCCESS, SET_LOCAL_THEMES_SUCCESS } from "../store/types/themeTypes";

export default function CoreThemeProvider(props) {
  const { themeID = undefined, children } = props || {};
  
  const storeDispatch = useDispatch();
  const dispatch = React.useContext(WrappidDispatchContext);
  
  const { config, themes } = React.useContext(WrappidDataContext);
  const { defaultTheme = "wrappidTheme" } = config || {};
  const { themes: storedThemes } = useSelector((state) => state?.theme);
  const { local: localThemes, server: serverThemes } = storedThemes;
  const { userThemeID } = useSelector((state) => state?.app);
  const { uid, accessToken } = useSelector((state) => state?.auth || {});
  let authenticated = uid && accessToken ? true : false;

  const [combinedThemes, setCombinedThemes] = React.useState([]);
  const [currentTheme, setCurrentTheme] = React.useState(DEFAULT_THEME);

  React.useEffect(() => {
    // set local themes
    storeDispatch({ payload: Object.values(themes), type: SET_LOCAL_THEMES_SUCCESS });
    // get server themes
    storeDispatch(apiRequestAction(
      HTTP.GET,
      `${!authenticated ? "/noauth/" : "/"}business/all/ThemeSchemas`,
      authenticated,
      { _defaultFilter: encodeURIComponent(JSON.stringify({ authRequired: authenticated })) },
      GET_THEMES_SUCCESS,
      GET_THEMES_FAILURE
    ));
  }, []);

  React.useEffect(() => {
    setCombinedThemes([...localThemes, ...serverThemes]);    
  }, [localThemes, serverThemes]);

  const getTheme = (themeID) => {
    return combinedThemes?.find(theme => theme?.entityRef === themeID || theme?.name === themeID);
  };

  const isThemeExist = (themeID) => {
    let themeFound = getTheme(themeID);

    return themeFound ? true : false;
  };
  
  const getThemeObj = (themeID) => {
    let themeFound = getTheme(themeID);

    return themeFound?.theme || themeFound?.schema || {};
  };

  React.useEffect(() => {
    if (userThemeID && isThemeExist(userThemeID)) {
      dispatch({ payload: userThemeID, type: UPDATE_DEFAULT_THEME });
      
      let mergedTheme = getThemeObj(userThemeID);
      
      if (themeID && isThemeExist(userThemeID)) {
        dispatch({ payload: userThemeID, type: UPDATE_PAGE_THEME });

        mergedTheme = { ...mergedTheme, ...getThemeObj(themeID) };
      } else {
        dispatch({ payload: undefined, type: UPDATE_PAGE_THEME });
      }
      setCurrentTheme(mergedTheme);
    } else {
      setCurrentTheme(getThemeObj(defaultTheme));
    }
  }, [combinedThemes, defaultTheme, userThemeID]);

  return <NativeThemeProvider theme={currentTheme}>{children}</NativeThemeProvider>;
}
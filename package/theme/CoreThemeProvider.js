import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeThemeProvider } from "@wrappid/native";
// eslint-disable-next-line import/no-unresolved
import { DEFAULT_THEME, WrappidDataContext } from "@wrappid/styles";
import { useDispatch, useSelector } from "react-redux";

import { HTTP } from "../config/constants";
import { apiRequestAction } from "../store/action/appActions";
import { GET_THEMES_FAILURE, GET_THEMES_SUCCESS, SET_LOCAL_THEMES_SUCCESS } from "../store/types/themeTypes";

export default function CoreThemeProvider(props) {
  const { themeID = undefined, children } = props || {};
  
  const storeDispatch = useDispatch();
  // eslint-disable-next-line etc/no-commented-out-code
  // const dispatch = React.useContext(WrappidDispatchContext);
  
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

  const processLocalThemes = (themes) => {
    return themes?.map(theme => {
      return {
        id   : theme?.name,
        theme: theme?.theme
      };
    });
  };
  const processServerThemes = (themes) => {
    return themes?.map(theme => {
      return {
        id   : theme?.entityRef,
        theme: theme?.schema
      };
    });
  };

  React.useEffect(() => {
    let tempLocalThemes = processLocalThemes(localThemes);
    let tempServerThemes = processServerThemes(serverThemes);

    setCombinedThemes([...tempLocalThemes, ...tempServerThemes]);    
  }, [localThemes, serverThemes]);

  const getTheme = (themeID) => {
    return combinedThemes?.find(theme => theme?.id === themeID);
  };

  const isThemeExist = (themeID) => {
    let themeFound = getTheme(themeID);

    return themeFound ? true : false;
  };
  
  const getThemeObj = (themeID) => {
    let themeFound = getTheme(themeID);

    return themeFound?.theme || {};
  };

  React.useEffect(() => {
    let mergedTheme = { ...getThemeObj(defaultTheme) };
    
    /* user theme added */
    if (userThemeID && isThemeExist(userThemeID)) {
      mergedTheme = { ...getThemeObj(userThemeID) };
    }
    
    /* page theme added */
    if (themeID && isThemeExist(themeID)) {
      mergedTheme = { ...mergedTheme, ...getThemeObj(themeID) };
    }

    setCurrentTheme(mergedTheme);

  }, [combinedThemes, defaultTheme, userThemeID]);

  return <NativeThemeProvider theme={currentTheme}>{children}</NativeThemeProvider>;
}
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeThemeProvider } from "@wrappid/native";
import {
  DEFAULT_THEME, WrappidDataContext, WrappidDispatchContext 
  // eslint-disable-next-line import/no-unresolved
} from "@wrappid/styles";
import { useDispatch, useSelector } from "react-redux";

import { HTTP } from "../config/constants";
import { apiRequestAction } from "../store/action/appActions";
import { GET_THEMES_FAILURE, GET_THEMES_SUCCESS, SET_LOCAL_THEMES_SUCCESS, SET_COMBINED_THEMES } from "../store/types/themeTypes";
import { mergeJSON } from "../utils/jsonUtils";

export default function CoreThemeProvider(props) {
  const { themeID = undefined, children } = props || {};
  
  const storeDispatch = useDispatch();
  const dispatch = React.useContext(WrappidDispatchContext);
  
  const { config, themes, pageThemeID } = React.useContext(WrappidDataContext);
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
        id   : theme?.id,
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
    let combinedTempThemes = [...tempLocalThemes, ...tempServerThemes];

    dispatch({ payload: { themes: combinedTempThemes }, type: "UPDATE_DATA" });
    storeDispatch({ payload: combinedTempThemes, type: SET_COMBINED_THEMES });
    setCombinedThemes(combinedTempThemes);    
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
    let baseTheme = { ...DEFAULT_THEME };
    
    let tempTheme = {};

    /* app theme added */
    if (defaultTheme && isThemeExist(defaultTheme)) {
      tempTheme = getThemeObj(defaultTheme);
    }
    if (themeID && isThemeExist(themeID)) {
      tempTheme = getThemeObj(themeID);
    } else if (pageThemeID && isThemeExist(pageThemeID)) {
      /* page theme added */
      tempTheme = getThemeObj(pageThemeID);
    } else if (userThemeID && isThemeExist(userThemeID)) {
      /* user theme added */
      tempTheme = getThemeObj(userThemeID);
    } else {
      // do nothing
    }
    
    let mergedTheme = mergeJSON(tempTheme, baseTheme);

    setCurrentTheme(mergedTheme);
  }, [
    combinedThemes,
    defaultTheme,
    userThemeID,
    themeID,
    pageThemeID
  ]);
  return <NativeThemeProvider theme={currentTheme}>{children}</NativeThemeProvider>;
}
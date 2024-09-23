import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeThemeProvider } from "@wrappid/native";
import {
  DEFAULT_THEME,
  WrappidDataContext,
  WrappidDispatchContext,
  UPDATE_THEME
  // eslint-disable-next-line import/no-unresolved
} from "@wrappid/styles";
import { useDispatch, useSelector } from "react-redux";

import { HTTP } from "../config/constants";
import { apiRequestAction } from "../store/action/appActions";
import {
  GET_THEMES_FAILURE,
  GET_THEMES_SUCCESS,
  SET_LOCAL_THEMES_SUCCESS,
  SET_COMBINED_THEMES
} from "../store/types/themeTypes";
import { mergeJSON } from "../utils/jsonUtils";

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
  const [themeLoaded, setThemeLoading] = React.useState(false);

  React.useEffect(() => {
    // set local themes
    storeDispatch({
      payload: Object.values(themes),
      type   : SET_LOCAL_THEMES_SUCCESS
    });
    // get server themes
    storeDispatch(
      apiRequestAction(
        HTTP.GET,
        `${!authenticated ? "/noauth/" : "/"}business/all/ThemeSchemas`,
        authenticated,
        {
          _defaultFilter: encodeURIComponent(
            JSON.stringify({ authRequired: authenticated })
          )
        },
        GET_THEMES_SUCCESS,
        GET_THEMES_FAILURE
      )
    );
  }, []);

  const processLocalThemes = (themes) => {
    return themes?.map((theme) => {
      return {
        id   : theme?.id,
        theme: theme?.theme
      };
    });
  };
  const processServerThemes = (themes) => {
    return themes?.map((theme) => {
      return {
        id   : theme?.entityRef,
        theme: theme?.schema
      };
    });
  };

  React.useEffect(() => {
    let tempLocalThemes = processLocalThemes(localThemes);
    let tempServerThemes = processServerThemes(serverThemes);
    let combinedThemes = [...tempLocalThemes, ...tempServerThemes];

    storeDispatch({ payload: combinedThemes, type: SET_COMBINED_THEMES });
    setCombinedThemes(combinedThemes);
  }, [localThemes, serverThemes]);

  const getTheme = (themeID) => {
    return combinedThemes?.find((theme) => theme?.id === themeID);
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

    if (config?.defaultTheme === defaultTheme && themeLoaded) {
      setThemeLoading(true);
    }

    /* user theme added */
    if (userThemeID && isThemeExist(userThemeID)) {
      tempTheme = getThemeObj(userThemeID);
      // eslint-disable-next-line etc/no-commented-out-code
      // dispatch({ payload: userThemeID, type: UPDATE_DEFAULT_THEME });
    } else {
      // eslint-disable-next-line etc/no-commented-out-code
      // dispatch({ payload: defaultTheme, type: UPDATE_DEFAULT_THEME });
    }

    /* page theme added */
    if (themeID && isThemeExist(themeID)) {
      tempTheme = getThemeObj(themeID);
      // eslint-disable-next-line etc/no-commented-out-code
      // dispatch({ payload: themeID, type: UPDATE_PAGE_THEME });
    } else {
      // eslint-disable-next-line etc/no-commented-out-code
      // dispatch({ payload: null, type: UPDATE_PAGE_THEME });
    }
    let mergedTheme = mergeJSON(tempTheme, baseTheme);

    setCurrentTheme(mergedTheme);
    dispatch({ payload: mergedTheme, type: UPDATE_THEME });
  }, [combinedThemes, defaultTheme, userThemeID, themeID]);

  return (
    <NativeThemeProvider theme={currentTheme}>{children}</NativeThemeProvider>
  );
}

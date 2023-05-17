import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { nativeStorage } from "@wrappid/styled-components";
import thunk from "redux-thunk";
import coreReducer from "./reducers/rootReducer";
import { PersistGate } from "redux-persist/integration/react";
import {
  AppStylesContext,
  IconContext,
  ThemeContext,
} from "../config/contextHandler";
import { overrideThemeConfiguration, StylesProvider } from "@wrappid/styles";
import CoreThemeProvider from "../theme/CoreThemeProvider";
import CoreClasses from "../styles/CoreClasses";
import { defaultCoreStyles } from "../styles/DefaultCoreStyles";
import { smallCoreStyles } from "../styles/SmallCoreStyles";
import { mediumCoreStyles } from "../styles/MediumCoreStyles";
import { largeCoreStyles } from "../styles/LargeCoreStyles";
import { xLargeCoreStyles } from "../styles/XLargeCoreStyles";
import { xXLargeCoreStyles } from "../styles/XXLargeCoreStyles";

function createFullStore(appReducer, persistFlag = true) {
  var keys = Object.keys(coreReducer);

  let finalReducer = {};
  for (var i = 0; i < keys.length; i++) {
    finalReducer[keys[i]] = persistReducer(
      {
        timeout: 1000,
        key: keys[i],
        storage: nativeStorage,
      },
      coreReducer[keys[i]]
    );
  }

  if (persistFlag === true) {
    let appReducerKeys = Object.keys(appReducer);
    for (var i = 0; i < appReducerKeys.length; i++) {
      appReducer[appReducerKeys[i]] = persistReducer(
        {
          key: appReducerKeys[i],
          storage: nativeStorage,
        },
        appReducer[appReducerKeys[i]]
      );
    }
  }

  finalReducer = { ...finalReducer, ...appReducer };

  const store = configureStore({
    reducer: combineReducers(finalReducer),
    devTools: true,
    middleware: [thunk],
  });

  const persistor = persistStore(store);

  return { store, persistor };
}

export default function CoreProvider(props) {
  /**
   * @description
   *
   * props should have a json object for reducer
   *
   * like
   * {
   *  app: appReducer //appReducer is a reducer
   * }
   *
   * const modalReducer = (state = initState, action) => {
   *  ...
   * }
   */
  let { store, persistor } = createFullStore(
    props.appReducer,
    props?.persistFlag,
    props?.storage
  );

  let coreStyles = {
    classes: CoreClasses,
    styles: {
      default: defaultCoreStyles,
      small: smallCoreStyles,
      medium: mediumCoreStyles,
      large: largeCoreStyles,
      xLarge: xLargeCoreStyles,
      xxLarge: xXLargeCoreStyles,
    },
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeContext.Provider value={overrideThemeConfiguration()}>
          <AppStylesContext.Provider value={props.appStyles}>
            <StylesProvider appStyles={props.appStyles} coreStyles={coreStyles}>
              <CoreThemeProvider>
                <IconContext.Provider value={props.customIcons}>
                  {props.children}
                </IconContext.Provider>
              </CoreThemeProvider>
            </StylesProvider>
          </AppStylesContext.Provider>
        </ThemeContext.Provider>
      </PersistGate>
    </Provider>
  );
}

export { createFullStore };

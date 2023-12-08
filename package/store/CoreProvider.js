// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { configureStore } from "@reduxjs/toolkit";
// eslint-disable-next-line import/no-unresolved
import { nativeStorage } from "@wrappid/native";
// eslint-disable-next-line import/no-unresolved
import { StylesProvider } from "@wrappid/styles";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import thunk from "redux-thunk";

import CoreContextProvider from "./CoreContextProvider";
import coreReducer from "./reducers/rootReducer";
import { IconContext } from "../config/contextHandler";
import CoreClasses from "../styles/CoreClasses";
import { defaultCoreStyles } from "../styles/DefaultCoreStyles";
import { largeCoreStyles } from "../styles/LargeCoreStyles";
import { mediumCoreStyles } from "../styles/MediumCoreStyles";
import { smallCoreStyles } from "../styles/SmallCoreStyles";
import { xLargeCoreStyles } from "../styles/XLargeCoreStyles";
import { xXLargeCoreStyles } from "../styles/XXLargeCoreStyles";
import CoreThemeProvider from "../theme/CoreThemeProvider";

function createFullStore(appReducer, persistFlag = true) {
  let keys = Object.keys(coreReducer);

  let finalReducer = {};

  for (let i = 0; i < keys.length; i++) {
    finalReducer[keys[i]] = persistReducer(
      {
        key    : keys[i],
        storage: nativeStorage,
      },
      coreReducer[keys[i]]
    );
  }

  if (persistFlag === true) {
    let appReducerKeys = Object.keys(appReducer);

    for (let i = 0; i < appReducerKeys.length; i++) {
      appReducer[appReducerKeys[i]] = persistReducer(
        {
          key    : appReducerKeys[i],
          storage: nativeStorage,
        },
        appReducer[appReducerKeys[i]]
      );
    }
  }

  finalReducer = { ...finalReducer, ...appReducer };

  const store = configureStore({
    devTools  : true,
    middleware: [thunk],
    reducer   : combineReducers(finalReducer),
  });

  const persistor = persistStore(store);

  return { persistor, store };
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
  let { store, persistor } = createFullStore(props.appReducer, props?.persistFlag, props?.storage);

  let coreStyles = {
    classes: CoreClasses,
    styles : {
      default: defaultCoreStyles,
      large  : largeCoreStyles,
      medium : mediumCoreStyles,
      small  : smallCoreStyles,
      xLarge : xLargeCoreStyles,
      xxLarge: xXLargeCoreStyles,
    },
  };

  // eslint-disable-next-line no-console
  console.log("******************************************");
  // eslint-disable-next-line no-console
  console.log("THEME provider: ", props.theme);
  // eslint-disable-next-line no-console
  console.log("******************************************");

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StylesProvider appStyles={props.appStyles} coreStyles={coreStyles}>
          <CoreContextProvider
            applicationRegistry={props.applicationRegistry}
            validationsRegistry={props.validationsRegistry}
            functionsRegistry={props.functionsRegistry}
            componentRegistry={props.componentRegistry}
            resourceRegistry={props.resourceRegistry}
            menuRegistry={props.menuRegistry}
            appStyles={props.appStyles}
          >
            <CoreThemeProvider>
              <IconContext.Provider value={props.customIcons}>
                {props.children}
              </IconContext.Provider>
            </CoreThemeProvider>
          </CoreContextProvider>
        </StylesProvider>
      </PersistGate>
    </Provider>
  );
}

export { createFullStore };

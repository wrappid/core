// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { configureStore } from "@reduxjs/toolkit";
// eslint-disable-next-line import/no-unresolved
import { nativeStorage } from "@wrappid/native";
// eslint-disable-next-line import/no-unresolved
import { StylesProvider, ConfigProvider, StylesThemesContext } from "@wrappid/styles";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import thunk from "redux-thunk";

import CoreContextProvider from "./CoreContextProvider";
import coreReducer from "./reducers/rootReducer";
import { IconContext } from "../config/contextHandler";
import CoreClasses from "../styles/CoreClasses";
import DefaultCoreStyles from "../styles/DefaultCoreStyles";
import LargeCoreStyles from "../styles/LargeCoreStyles";
import MediumCoreStyles from "../styles/MediumCoreStyles";
import SmallCoreStyles from "../styles/SmallCoreStyles";
import XLargeCoreStyles from "../styles/XLargeCoreStyles";
import XXLargeCoreStyles from "../styles/XXLargeCoreStyles";
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
  const {
    applicationConfig,
    appStyles,
    customIcons,
    applicationRegistry,
    routesRegistry,
    menusRegistry,
    componentsRegistry,
    reducersRegistry,
    resourcesRegistry,
    functionsRegistry,
    validationsRegistry,
    themesRegistry,
    children
  } = props;

  const [store, setStore] = React.useState(null);
  const [persistor, setPersistor] = React.useState(null);

  React.useEffect(() => {
    let { store, persistor } = createFullStore(
      reducersRegistry,
      applicationRegistry?.persistFlag
    );

    setStore(store);
    setPersistor(persistor);
  }, []);

  let coreStyles = {
    classes: CoreClasses,
    styles : {
      default: DefaultCoreStyles,
      large  : LargeCoreStyles,
      medium : MediumCoreStyles,
      small  : SmallCoreStyles,
      xLarge : XLargeCoreStyles,
      xxLarge: XXLargeCoreStyles,
    },
  };

  return store && persistor && (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider config={applicationConfig}>{/** @todo need to wrap it in parent */}
          <StylesThemesContext.Provider value={themesRegistry}>
            <StylesProvider appStyles={appStyles} coreStyles={coreStyles}>
              <CoreContextProvider
                appStyles={appStyles}
                applicationRegistry={applicationRegistry}
                routesRegistry={routesRegistry}
                menusRegistry={menusRegistry}
                componentsRegistry={componentsRegistry}
                resourcesRegistry={resourcesRegistry}
                functionsRegistry={functionsRegistry}
                validationsRegistry={validationsRegistry}
              >
                <CoreThemeProvider>
                  <IconContext.Provider value={customIcons}>
                    {children}
                  </IconContext.Provider>
                </CoreThemeProvider>
              </CoreContextProvider>
            </StylesProvider>
          </StylesThemesContext.Provider>
        </ConfigProvider>
      </PersistGate>
    </Provider>);
}

export { createFullStore };

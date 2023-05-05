import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { nativeStorage } from "@wrappid/styled-components";
import thunk from "redux-thunk";
import coreReducer from "./reducers/rootReducer";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeContext } from "../config/contextHandler";
import { overrideThemeConfiguration } from "@wrappid/styles";
import CoreThemeProvider from "../theme/CoreThemeProvider";

function createFullStore(appReducer, persistFlag = true) {
  var keys = Object.keys(coreReducer);

  let finalReducer = {};
  for (var i = 0; i < keys.length; i++) {
    finalReducer[keys[i]] = persistReducer(
      {
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

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeContext.Provider value={overrideThemeConfiguration()}>
          <CoreThemeProvider>{props.children}</CoreThemeProvider>
        </ThemeContext.Provider>
      </PersistGate>
    </Provider>
  );
}

export { createFullStore };

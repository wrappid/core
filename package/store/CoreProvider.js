import React from "react";
import { Provider } from "react-redux/es/exports";
import CoreThemeProvider from "../theme/CoreThemeProvider";
import theme from "../utils/themeUtil";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import config from "../config/config";
import { ENV_PROD_MODE } from "../config/constants";
import coreReducer from "./reducers/rootReducer";

function createFullStore(appReducer) {
  var keys = Object.keys(coreReducer);

  let finalReducer = {};
  for (var i = 0; i < keys.length; i++) {
    finalReducer[keys[i]] = persistReducer(
      {
        key: keys[i],
        storage,
      },
      coreReducer[keys[i]]
    );
  }

  finalReducer = { ...finalReducer, ...appReducer };

  const store = configureStore({
    reducer: combineReducers(finalReducer),
    devTools: config.environment !== ENV_PROD_MODE,
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
  let { store, persistor } = createFullStore(props.appReducer);

  return (
    <Provider store={store}>
      <CoreThemeProvider theme={theme}>{props.children}</CoreThemeProvider>
    </Provider>
  );
}

export { createFullStore };

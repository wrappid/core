import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import coreReducer from "./reducers/rootReducer";
import { ENV_PROD_MODE } from "../config/constants";

function createFullStore(appReducer) {
  let keys = Object.keys(coreReducer);

  let finalReducer = {};

  for (let i = 0; i < keys.length; i++) {
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
    // eslint-disable-next-line no-undef
    devTools  : process.env.REACT_APP_ENV !== ENV_PROD_MODE,
    middleware: [thunk],
    reducer   : combineReducers(finalReducer),
  });

  const persistor = persistStore(store);

  return { persistor, store };
}

export { createFullStore };

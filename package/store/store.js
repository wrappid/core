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
    try {
      finalReducer[keys[i]] = persistReducer(
        {
          key: keys[i],
          storage,
        },
        coreReducer[keys[i]]
      );
    } catch (err) {
      console.warn("Persist reducer not possible");
      finalReducer[keys[i]] = coreReducer[keys[i]];
    }
  }

  finalReducer = { ...finalReducer, ...appReducer };

  const store = configureStore({
    reducer: combineReducers(finalReducer),
    devTools: config.environment !== ENV_PROD_MODE,
    middleware: [thunk],
  });

  let persistor = null;
  try {
    persistor = persistStore(store);
  } catch (err) {
    console.warn("Persist store not possible");
    persistor = store;
  }

  return { store, persistor };
}

export { createFullStore };

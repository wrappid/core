import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import coreReducer from "./reducers/rootReducer";

function createFullStore(appReducer, persistFlag = true, _storage = storage) {
  var keys = Object.keys(coreReducer);

  let finalReducer = {};
  for (var i = 0; i < keys.length; i++) {
    finalReducer[keys[i]] = persistReducer(
      {
        key: keys[i],
        _storage,
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
          _storage,
        },
        appReducer[appReducerKeys[i]]
      );
    }
  }

  finalReducer = { ...finalReducer, ...appReducer };

  const store = configureStore({
    reducer: combineReducers(finalReducer),
    devTools: false,
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

  return (<Provider store={store}>{props.children}</Provider>);
}

export { createFullStore };

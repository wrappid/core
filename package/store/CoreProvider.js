import React from "react";
import { Provider } from "react-redux/es/exports";
import { createFullStore } from "./store";

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

  return <Provider store={store}>{props.children}</Provider>;
}

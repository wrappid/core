import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { store } from "app-magic-core";
import { createFullStore } from "./package/store/store";
// import { Provider } from "react-redux";
import CoreProvider from "./package/store/CoreProvider";
import myReducer from "./store/reducers/rootReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CoreProvider store={createFullStore(myReducer)}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CoreProvider>
);

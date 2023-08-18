// import { combineReducers } from "redux";
import apiReducer from "./apiReducer";
import appReducer from "./appReducer";
import dataReducer from "./dataReducer";
import formReducer from "./formReducer";
import mdmReducer from "./mdmReducer";
import menuReducer from "./menuReducer";
import modalReducer from "./modalReducer";
import pendingRequestReducer from "./pendingRequestReducer";
import routeReducer from "./routeReducer";
import selectOptionsReducer from "./selectOptionsReducer";
import settingsReducer from "./settingsReducer";

/**
 *  Module specific reducers
 */

const coreReducer = {
  api            : apiReducer,
  app            : appReducer,
  data           : dataReducer,
  forms          : formReducer,
  mdm            : mdmReducer,
  menu           : menuReducer,
  modal          : modalReducer,
  pendingRequests: pendingRequestReducer,
  route          : routeReducer,
  selectOptions  : selectOptionsReducer,
  settings       : settingsReducer,
};

export default coreReducer;

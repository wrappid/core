// import { combineReducers } from "redux";
import appReducer from "./appReducer";
import dataReducer from "./dataReducer";
import apiReducer from "./apiReducer";
import formReducer from "./formReducer";
import selectOptionsReducer from "./selectOptionsReducer";
import mdmReducer from "./mdmReducer";
import modalReducer from "./modalReducer";
import routeReducer from "./routeReducer";
import menuReducer from "./menuReducer";
import settingsReducer from "./settingsReducer";
import pendingRequestReducer from "./pendingRequestReducer";

/**
 *  Module specific reducers
 */
import { reducers as authReducer } from "../../modules/auth/reducers.registry";

const coreReducer = {
  app: appReducer,
  data: dataReducer,
  forms: formReducer,
  selectOptions: selectOptionsReducer,
  api: apiReducer,
  mdm: mdmReducer,
  modal: modalReducer,
  route: routeReducer,
  menu: menuReducer,
  settings: settingsReducer,
  pendingRequests: pendingRequestReducer,
  ...(authReducer || {}),
};

export default coreReducer;

// import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import apiReducer from "./apiReducer";
import formReducer from "./formReducer";
import selectOptionsReducer from "./selectOptionsReducer";
import mdmReducer from "./mdmReducer";
import modalReducer from "./modalReducer";
import routeReducer from "./routeReducer";
import menuReducer from "./menuReducer";

/**
 *  Module specific reducers
 */
import { reducers as authReducer } from "../../modules/auth/reducers.registry";

const coreReducer = {
  data: dataReducer,
  forms: formReducer,
  selectOptions: selectOptionsReducer,
  api: apiReducer,
  mdm: mdmReducer,
  modal: modalReducer,
  route: routeReducer,
  menu: menuReducer,
  ...(authReducer || {}),
};

export default coreReducer;

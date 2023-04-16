// import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import apiReducer from "./apiReducer";
import formReducer from "./formReducer";
import selectOptionsReducer from "./selectOptionsReducer";
import authReducer from "./authReducer";
import mdmReducer from "./mdmReducer";
import modalReducer from "./modalReducer";

const coreReducer = {
  data: dataReducer,
  forms: formReducer,
  selectOptions: selectOptionsReducer,
  api: apiReducer,
  auth: authReducer,
  mdm: mdmReducer,
  modal: modalReducer,
};

export default coreReducer;

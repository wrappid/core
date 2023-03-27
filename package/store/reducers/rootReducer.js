// import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import apiReducer from "./apiReducer";
import formReducer from "./formReducer";
import selectOptionsReducer from "./selectOptionsReducer";
import authReducer from "./authReducer";

const coreReducer = {
  data: dataReducer,
  forms: formReducer,
  selectOptions: selectOptionsReducer,
  api: apiReducer,
  auth: authReducer,
};

export default coreReducer;

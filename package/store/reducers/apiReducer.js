import { FORM_SANITIZATOIN_FUNCTION_MAP } from "../../components/forms/coreFormConstants";
import { LOGOUT_SUCCESS } from "../../store/types/authTypes";
import { createInitialData } from "../../utils/formUtils";
import {
  FORM_DATA_READ_LOADING,
  FORM_DATA_SAVE,
  FORM_INIT_UPDATE,
  UPDATE_API_META
} from "../types/formTypes";

function getData(action, dataOb) {
  if (action.payload && action.payload.data && dataOb) {
    let d = action.payload.data;

    if (d?.data && typeof d?.data === "object") {
      if (d.data.rows) {
        dataOb.data.rows = d.data.rows;
        dataOb.data.totalRecords = d.data.totalRecords;
      } else if (Array.isArray(d.data)) {
        dataOb.data.rows = d.data;
        dataOb.data.totalRecords = d.data.length;
      } else {
        dataOb.data.rows = d.data;
      }
    } else if (d?.rows) {
      dataOb.data.rows = d.rows;
      dataOb.data.totalRecords = d.totalRecords;
    } else if (Array.isArray(d)) {
      dataOb.data.rows = d;
      dataOb.data.totalRecords = d.length;
    } else {
      // console.log("FORM DATA SAVE 1B", d);
      dataOb.data = { rows: d };
    }
  }
  // console.log("FORM DATA SAVE B", dataOb);
  return dataOb;
}
const initState = {};
const entityDefaultState = {
  api : null,
  data: {
    columns     : [],
    rows        : [],
    totalRecords: 0,
  },
  error    : false,
  filtering: false,
  loading  : false,
  query    : {
    currentRows : 0,
    filter      : {},
    maxRowInPage: 10,
    order       : {},
    page        : 0,
  },
  success  : false,
  timestamp: null,
};
const apiReducer = (state = initState, action) => {
  switch (action.type) {
    case FORM_DATA_SAVE:
      // console.log("FORM DATA SAVE A", action?.payload);
      var dataOb = { ...entityDefaultState };

      dataOb.timestamp = Date.now();
      dataOb.api = action?.payload?.apiDetails;
      dataOb.success = true;
      dataOb.loading = false;
      dataOb.error = false;

      dataOb = getData(action, dataOb);

      // console.log("FORM DATA SAVE C", dataOb);

      return {
        ...state,
        [action.payload.id]: { ...dataOb },
      };

    case FORM_DATA_READ_LOADING:
      return {
        ...state,
        [action.payload.formId]: {
          ...state[action.payload.formId],
          error    : false,
          loading  : true,
          success  : false,
          timestamp: Date.now(),
        },
      };

    case FORM_INIT_UPDATE:
      console.log("INIT UPDATE API------", state[action.payload.formId]);
      //TODO: haveto put support for created forms like in datatable forms
      var sanity = state[action.payload.formId]?.api?.onGetRefine;
      var sanitizedData = getData(action, state[action.payload.formId])?.data
        ?.rows;

      if (sanity) {
        sanitizedData = FORM_SANITIZATOIN_FUNCTION_MAP[
          state[action.payload.formId]?.api?.onGetRefine
        ](action?.payload?.data?.data, action?.payload?.data);
        console.log("API REDUCER sanity------", sanitizedData);
      }

      var initData = createInitialData(action.payload.formJson, sanitizedData);

      if (Array.isArray(initData) && initData.length === 0) {
        initData = state[action.payload.formId]?.data?.rows;
      }
      console.log("API REDUCER FORMINIT DATA------", initData);

      return {
        ...state,
        [action.payload.formId]: {
          ...state[action.payload.formId],
          data: {
            ...state[action.payload.formId]?.data,
            rows: initData,
          },
          error    : false,
          loading  : false,
          success  : true,
          timestamp: Date.now(),
        },
      };

    case UPDATE_API_META:
      let newApiMeta = {};
      let removeKeys = ["values", "reduxData", "files"];
      let keys = Object.keys(action.payload?.apiMeta);

      for(let i = 0;i < keys.length;i++){
        let key = keys[i];

        if(!removeKeys.includes(key)){
          newApiMeta[key] = action.payload?.apiMeta[key];
        }
      }
      return {
        ...state,
        [action.payload.formId]: {
          ...(state[action.payload.formId] || {}),
          api: newApiMeta
        }
      };

    case LOGOUT_SUCCESS:
      return initState;

    default:
      return state;
  }
};

export default apiReducer;

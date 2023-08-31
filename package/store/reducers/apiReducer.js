import { functionsRegistry } from "../../layout/PageContainer";
import { LOGOUT_SUCCESS } from "../../store/types/authTypes";
import { createInitialData } from "../../utils/formUtils";
import {
  FORM_DATA_READ_LOADING,
  FORM_DATA_SAVE,
  FORM_INIT_UPDATE,
  UPDATE_API_META
} from "../types/formTypes";

function getData(action, dataOb) {
  if (action?.payload && action?.payload?.data && dataOb) {
    let payloadData = action?.payload?.data;

    if (payloadData?.data && typeof payloadData?.data === "object") {
      if (payloadData?.data?.rows) {
        dataOb.data.rows = payloadData?.data?.rows;
        dataOb.data.totalRecords = payloadData?.data?.totalRecords || 0;
      } else if (Array.isArray(payloadData?.data)) {
        dataOb.data.rows = payloadData?.data;
        dataOb.data.totalRecords = payloadData?.data?.length || 0;
      } else {
        dataOb.data.rows = payloadData?.data || [];
      }
    } else if (payloadData?.rows) {
      dataOb.data.rows = payloadData?.rows;
      dataOb.data.totalRecords = payloadData?.totalRecords;
    } else if (Array.isArray(payloadData)) {
      dataOb.data.rows = payloadData;
      dataOb.data.totalRecords = payloadData?.length;
    } else {
      dataOb.data = { rows: payloadData };
    }
  }
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
    case FORM_DATA_SAVE: {
      let dataOb = { ...entityDefaultState };

      dataOb.timestamp = Date.now();
      dataOb.api = action?.payload?.apiDetails;
      dataOb.success = true;
      dataOb.loading = false;
      dataOb.error = false;

      dataOb = getData(action, dataOb);

      return {
        ...state,
        [action?.payload?.id]: { ...dataOb },
      };
    }

    case FORM_DATA_READ_LOADING:
      return {
        ...state,
        [action?.payload?.formId]: {
          ...state[action?.payload?.formId],
          error    : false,
          loading  : true,
          success  : false,
          timestamp: Date.now(),
        },
      };

    case FORM_INIT_UPDATE: {
      /** 
       * @TODO haveto put support for created forms like in datatable forms
       */
      let sanity = state[action.payload.formId]?.api?.onGetRefine;
      let sanitizedData = getData(action, state[action.payload.formId])?.data
        ?.rows;

      if (sanity) {
        sanitizedData = functionsRegistry [
          state[action.payload.formId]?.api?.onGetRefine
        ](action?.payload?.data?.data, action?.payload?.data);
      }

      let initData = createInitialData(action.payload.formJson, sanitizedData);

      if (Array.isArray(initData) && initData.length === 0) {
        initData = state[action.payload.formId]?.data?.rows;
      }

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
    }

    case UPDATE_API_META: {
      let newApiMeta = {};
      let removeKeys = ["values", "reduxData", "files"];
      let keys = Object.keys(action.payload?.apiMeta);

      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];

        if (!removeKeys.includes(key)) {
          newApiMeta[key] = action.payload?.apiMeta[key];
        }
      }
      return {
        ...state,
        [action.payload.formId]: {
          ...(state[action.payload.formId] || {}),
          api: newApiMeta,
        },
      };
    }

    case LOGOUT_SUCCESS:
      return initState;

    default:
      return state;
  }
};

export default apiReducer;

import { prepareColumns } from "../../utils/tableUtils";
import { LOGOUT_SUCCESS } from "../types/authTypes";
import {
  READ_DATA_LOADING,
  READ_DATA_SUCCESS,
  READ_DATA_ERROR,
  RESET_DATA,
  RESET_QUERY_DATA,
  UPDATE_COLUMNS_DATA,
  UPDATE_FILTER_DATA,
  FILTER_DATA,
  RESET_FILTER_DATA,
  UPDATE_QUERY_ORDER_DATA,
  RESET_QUERY_ORDER_DATA,
  UPDATE_QUERY_SEARCH_VALUE_DATA,
  UPDATE_QUERY_PAGE_DATA,
  UPDATE_QUERY_MAXROWINPAGE_DATA,
  CREATE_DATA_LOADING,
  CREATE_DATA_SUCCESS,
  CREATE_DATA_ERROR,
  UPDATE_DATA_LOADING,
  UPDATE_DATA_SUCCESS,
  UPDATE_DATA_ERROR,
  DELETE_DATA_LOADING,
  DELETE_DATA_SUCCESS,
  DELETE_DATA_ERROR,
  RESET_DATA_CUD_STATUS
} from "../types/dataManagementTypes";

const initState = {};
const entityDefaultState = {
  data: {
    columns     : [],
    rows        : [],
    totalRecords: 0,
  },
  error    : false,
  filtering: false,
  form     : {
    create: {
      error  : false,
      loading: false,
      success: false,
    },
    delete: {
      error  : false,
      loading: false,
      success: false,
    },
    update: {
      error  : false,
      loading: false,
      success: false,
    },
  },
  loading: true,
  query  : {
    _filter     : {},
    _order      : {},
    _searchValue: "",
    currentRows : 0,
    maxRowInPage: 10,
    page        : 0,
  },
  success: false,
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case READ_DATA_LOADING:
      return case_ReadDataLoading(state, action);

    case READ_DATA_SUCCESS:
      return case_ReadDataSuccess(state, action);

    case READ_DATA_ERROR:
      return case_ReadDataError(state, action);

    case UPDATE_QUERY_PAGE_DATA:
      return case_UpdateQueryPageData(state, action);

    case UPDATE_QUERY_MAXROWINPAGE_DATA:
      return case_UpdateQueryMaxRowInPageData(state, action);

    case UPDATE_COLUMNS_DATA:
      return case_updateColumnsData(state, action);

    case UPDATE_FILTER_DATA:
      return case_UpdateFilterData(state, action);

    case FILTER_DATA:
      return case_FilterData(state, action);

    case RESET_FILTER_DATA:
      return case_ResetFilterData(state, action);

    case UPDATE_QUERY_ORDER_DATA:
      return case_UpdateQueryOrderData(state, action);

    case RESET_QUERY_ORDER_DATA:
      return case_ResetQueryOrderData(state, action);

    case UPDATE_QUERY_SEARCH_VALUE_DATA:
      return case_UpdateQuerySearchValueData(state, action);

    case RESET_QUERY_DATA:
      return case_ResetQueryData(state, action);

    case RESET_DATA:

    case LOGOUT_SUCCESS:
      return initState;

    case CREATE_DATA_LOADING:
      return case_CreateDataLoading(state, action);

    case CREATE_DATA_SUCCESS:
      return case_CreateDataSuccess(state, action);

    case CREATE_DATA_ERROR:
      return case_CreateDataError(state, action);

    case UPDATE_DATA_LOADING:
      return case_UpdateDataLoading(state, action);

    case UPDATE_DATA_SUCCESS:
      return case_UpdateDataSuccess(state, action);

    case UPDATE_DATA_ERROR:
      return case_UpdateDataError(state, action);

    case DELETE_DATA_LOADING:
      return case_DeleteDataLoading(state, action);

    case DELETE_DATA_SUCCESS:
      return case_DeleteDataSuccess(state, action);

    case DELETE_DATA_ERROR:
      return case_DeleteDataError(state, action);

    case RESET_DATA_CUD_STATUS:
      return case_ResetDataCudStatus(state, action);

    default:
      return state;
  }
};

const case_ReadDataLoading = (state, action) => {
  console.log(
    `------READ_DATA_LOADING REDUCER TYPE CALLED FOR ${
      action?.payload?.entity || "UNKNOWN ENTITY"
    } ------`
  );
  console.log("WITH PAYLOAD = ", action?.payload);
  return {
    ...state,
    [action?.payload?.entity || "UNKNOWN"]: {
      ...entityDefaultState,
      data: {
        ...entityDefaultState.data,
        columns: action?.payload?.data?.columns,
      },
      query: {
        ...entityDefaultState.query,
        maxRowInPage: action?.payload?.query?.maxRowInPage,
      },
    },
  };
};

const case_ReadDataSuccess = (state, action) => {
  console.log(
    `------READ_DATA_SUCCESS REDUCER TYPE CALLED FOR ${
      action?.payload?.entity || "UNKNOWN ENTITY"
    } ------`
  );
  console.log("WITH PAYLOAD = ", action?.payload);
  if (!state[action?.payload?.entity || "UNKNOWN"]?.loading) {
    return state;
  }

  return {
    ...state,
    [action?.payload?.entity || "UNKNOWN"]: {
      ...state[action?.payload?.entity || "UNKNOWN"],
      data: {
        columns: prepareColumns(
          state[action?.payload?.entity || "UNKNOWN"].data,
          action?.payload?.data
        ),
        rows: state[action?.payload?.entity || "UNKNOWN"]?.filtering
          ? action?.payload?.data?.rows
          : [...state[action?.payload?.entity || "UNKNOWN"]?.data?.rows, ...action?.payload?.data?.rows],
        totalRecords: action?.payload?.data?.totalRecords,
      },
      error  : false,
      loading: false,
      query  : {
        ...state[action?.payload?.entity || "UNKNOWN"]?.query,
        currentRows:
          (state[action?.payload?.entity || "UNKNOWN"]?.data?.rows?.length || 0) +
          (action?.payload?.data?.rows?.length || 0),
      },
      success: true,
    },
  };
};

const case_ReadDataError = (state, action) => {
  console.log(
    `------READ_DATA_ERROR REDUCER TYPE CALLED FOR ${
      action?.payload?.entity || "UNKNOWN ENTITY"
    } ------`
  );
  console.log("WITH PAYLOAD = ", action?.payload);
  return {
    ...state,
    [action?.payload?.entity || "UNKNOWN"]: {
      ...state[action?.payload?.entity || "UNKNOWN"],
      ...(action?.payload?.data || {}, { error: true, loading: false, success: false }),
    },
  };
};

const case_UpdateQueryPageData = (state, action) => {
  console.log(
    `------UPDATE_QUERY_PAGE_DATA REDUCER TYPE CALLED FOR ${
      action?.payload?.entity || "UNKNOWN ENTITY"
    } ------`
  );
  console.log("WITH PAYLOAD = ", action?.payload);

  let currentRowsLength = state[action?.payload?.entity || "UNKNOWN"]?.data?.rows?.length;
  let totalRecords = state[action?.payload?.entity || "UNKNOWN"]?.data?.totalRecords;
  // TODO: what if table has no data
  let loading = totalRecords === 0 || currentRowsLength < totalRecords;

  return {
    ...state,
    [action?.payload?.entity || "UNKNOWN"]: {
      ...state[action?.payload?.entity || "UNKNOWN"],
      error  : false,
      loading: loading,
      query  : {
        ...state[action?.payload?.entity || "UNKNOWN"].query,
        page: action?.payload?.page,
      },
      success: false,
    },
  };
};

const case_UpdateQueryMaxRowInPageData = (state, action) => {
  console.log(
    `------UPDATE_QUERY_MAXROWINPAGE_DATA REDUCER TYPE CALLED FOR ${
      action?.payload?.entity || "UNKNOWN ENTITY"
    } ------`
  );
  console.log("WITH PAYLOAD = ", action?.payload);

  let currentRowsLength = state[action?.payload?.entity || "UNKNOWN"]?.data?.rows?.length;
  let totalRecords = state[action?.payload?.entity || "UNKNOWN"]?.data?.totalRecords;
  // TODO: what if table has no data
  let loading = totalRecords === 0 || currentRowsLength < totalRecords;

  return {
    ...state,
    [action?.payload?.entity || "UNKNOWN"]: {
      ...state[action?.payload?.entity || "UNKNOWN"],
      error  : false,
      loading: loading,
      query  : {
        ...state[action?.payload?.entity || "UNKNOWN"].query,
        maxRowInPage: action?.payload?.maxRowInPage,
      },
      success: false,
    },
  };
};

const case_updateColumnsData = (state, action) => {
  console.log(
    `------UPDATE_COLUMNS_DATA REDUCER TYPE CALLED FOR ${
      action?.payload?.entity || "UNKNOWN ENTITY"
    } ------`
  );
  console.log("WITH PAYLOAD = ", action?.payload);

  let updatedColumns =
    state[action?.payload?.entity || "UNKNOWN"]?.data?.columns?.map((col) => {
      return action?.payload?.filteredColumns?.includes(col.id)
        ? { ...col, hidden: true }
        : { ...col, hidden: false };
    }) || [];

  return {
    ...state,
    [action?.payload?.entity || "UNKNOWN"]: {
      ...state[action?.payload?.entity || "UNKNOWN"],
      data: {
        ...state[action?.payload?.entity || "UNKNOWN"]?.data,
        columns: updatedColumns,
      },
    },
  };
};

const case_UpdateFilterData = (state, action) => {
  console.log(
    `------UPDATE_FILTER_DATA REDUCER TYPE CALLED FOR ${
      action?.payload?.entity || "UNKNOWN ENTITY"
    } ------`
  );
  console.log("WITH PAYLOAD = ", action?.payload);
  let lastFilterOb = state[action?.payload?.entity || "UNKNOWN"]?.query?.filter;
  let presentFilterOb = Object.fromEntries(
    Object.entries(action?.payload?.filterValues).map(([k, v]) => [k, v.toLowerCase()])
  );
  let _loadingNotRequired = JSON.stringify(lastFilterOb) === JSON.stringify(presentFilterOb);
  let _filteringRequired = !_loadingNotRequired || !(Object.keys(presentFilterOb).length === 0);

  return {
    ...state,
    [action?.payload?.entity || "UNKNOWN"]: {
      ...state[action?.payload?.entity || "UNKNOWN"],
      filtering: _filteringRequired,
      query    : {
        ...state[action?.payload?.entity || "UNKNOWN"].query,
        _filter: action?.payload?.filterValues,
      },
    },
  };
};

const case_FilterData = (state, action) => {
  console.log(
    `------FILTER_DATA REDUCER TYPE CALLED FOR ${
      action?.payload?.entity || "UNKNOWN ENTITY"
    } ------`
  );
  console.log("WITH PAYLOAD = ", action?.payload);
  return {
    ...state,
    [action?.payload?.entity || "UNKNOWN"]: {
      ...state[action?.payload?.entity || "UNKNOWN"],
      // filtering: false,
      loading: state[action?.payload?.entity || "UNKNOWN"].filtering,
    },
  };
};

const case_ResetFilterData = (state, action) => {
  console.log(
    `------RESET_FILTER_DATA REDUCER TYPE CALLED FOR ${
      action?.payload?.entity || "UNKNOWN ENTITY"
    } ------`
  );
  console.log("WITH PAYLOAD = ", action?.payload);
  return {
    ...state,
    [action?.payload?.entity || "UNKNOWN"]: {
      ...state[action?.payload?.entity || "UNKNOWN"],
      filtering: true,
      loading  : true,
      query    : {
        ...state[action?.payload?.entity || "UNKNOWN"]?.query,
        _filter: {},
      },
    },
  };
};

const case_UpdateQueryOrderData = (state, action) => {
  console.log(
    `------UPDATE_QUERY_ORDER_DATA REDUCER TYPE CALLED FOR ${
      action?.payload?.entity || "UNKNOWN ENTITY"
    } ------`
  );
  console.log("WITH PAYLOAD = ", action?.payload);
  return {
    ...state,
    [action?.payload?.entity || "UNKNOWN"]: {
      ...state[action?.payload?.entity || "UNKNOWN"],
      filtering: true,
      loading  : true,
      query    : {
        ...state[action?.payload?.entity || "UNKNOWN"]?.query,
        _order: action?.payload?.order,
        page  : 0,
      },
    },
  };
};

const case_ResetQueryOrderData = (state, action) => {
  console.log(
    `------RESET_QUERY_ORDER_DATA REDUCER TYPE CALLED FOR ${
      action?.payload?.entity || "UNKNOWN ENTITY"
    } ------`
  );
  console.log("WITH PAYLOAD = ", action?.payload);
  return {
    ...state,
    [action?.payload?.entity || "UNKNOWN"]: {
      ...state[action?.payload?.entity || "UNKNOWN"],
      filtering: true,
      loading  : true,
      query    : {
        ...state[action?.payload?.entity || "UNKNOWN"]?.query,
        _order: {},
        page  : 0,
      },
    },
  };
};

const case_UpdateQuerySearchValueData = (state, action) => {
  console.log(
    `------UPDATE_QUERY_SEARCH_VALUE_DATA REDUCER TYPE CALLED FOR ${
      action?.payload?.entity || "UNKNOWN ENTITY"
    } ------`
  );
  console.log("WITH PAYLOAD = ", action?.payload);
  return {
    ...state,
    [action?.payload?.entity || "UNKNOWN"]: {
      ...state[action?.payload?.entity || "UNKNOWN"],
      filtering: true,
      loading  : true,
      query    : {
        ...state[action?.payload?.entity || "UNKNOWN"]?.query,
        _searchValue: action?.payload?.searchValue,
        page        : 0,
      },
    },
  };
};

const case_ResetQueryData = (state, action) => {
  console.log(
    `------RESET_QUERY_DATA REDUCER TYPE CALLED FOR ${
      action?.payload?.entity || "UNKNOWN ENTITY"
    } ------`
  );
  console.log("WITH PAYLOAD = ", action?.payload);
  return {
    ...state,
    [action?.payload?.entity || "UNKNOWN"]: {
      ...state[action?.payload?.entity || "UNKNOWN"],
      filtering: true,
      loading  : true,
      query    : entityDefaultState.query,
    },
  };
};

const case_CreateDataLoading = (state, action) => {
  console.log(
    `------CREATE_DATA_LOADING REDUCER TYPE CALLED FOR ${
      action?.payload?.entity || "UNKNOWN ENTITY"
    } ------`
  );
  console.log("WITH PAYLOAD = ", action?.payload);
  return {
    ...state,
    [action?.payload?.entity || "UNKNOWN"]: {
      ...state[action?.payload?.entity],
      form: {
        ...state[action?.payload?.entity]?.form,
        create: {
          error  : false,
          loading: true,
          success: false,
        },
      },
    },
  };
};
const case_CreateDataSuccess = (state, action) => {
  console.log(
    `------CREATE_DATA_SUCCESS REDUCER TYPE CALLED FOR ${
      action?.payload?.entity || "UNKNOWN ENTITY"
    } ------`
  );
  console.log("WITH PAYLOAD = ", action?.payload);
  return {
    ...state,
    [action?.payload?.entity || "UNKNOWN"]: {
      ...state[action?.payload?.entity],
      form: {
        ...state[action?.payload?.entity]?.form,
        create: {
          error  : false,
          loading: false,
          success: true,
        },
      },
    },
  };
};
const case_CreateDataError = (state, action) => {
  console.log(
    `------CREATE_DATA_ERROR REDUCER TYPE CALLED FOR ${
      action?.payload?.entity || "UNKNOWN ENTITY"
    } ------`
  );
  console.log("WITH PAYLOAD = ", action?.payload);
  return {
    ...state,
    [action?.payload?.entity || "UNKNOWN"]: {
      ...state[action?.payload?.entity],
      form: {
        ...state[action?.payload?.entity]?.form,
        create: {
          error  : true,
          loading: false,
          success: false,
        },
      },
    },
  };
};
const case_UpdateDataLoading = (state, action) => {
  console.log(
    `------UPDATE_DATA_LOADING REDUCER TYPE CALLED FOR ${
      action?.payload?.entity || "UNKNOWN ENTITY"
    } ------`
  );
  console.log("WITH PAYLOAD = ", action?.payload);
  return {
    ...state,
    [action?.payload?.entity || "UNKNOWN"]: {
      ...state[action?.payload?.entity],
      form: {
        ...state[action?.payload?.entity]?.form,
        update: {
          error  : false,
          loading: true,
          success: false,
        },
      },
    },
  };
};
const case_UpdateDataSuccess = (state, action) => {
  console.log(
    `------UPDATE_DATA_SUCCESS REDUCER TYPE CALLED FOR ${
      action?.payload?.entity || "UNKNOWN ENTITY"
    } ------`
  );
  console.log("WITH PAYLOAD = ", action?.payload);
  return {
    ...state,
    [action?.payload?.entity || "UNKNOWN"]: {
      ...state[action?.payload?.entity],
      form: {
        ...state[action?.payload?.entity]?.form,
        update: {
          error  : false,
          loading: false,
          success: true,
        },
      },
    },
  };
};
const case_UpdateDataError = (state, action) => {
  console.log(
    `------UPDATE_DATA_ERROR REDUCER TYPE CALLED FOR ${
      action?.payload?.entity || "UNKNOWN ENTITY"
    } ------`
  );
  console.log("WITH PAYLOAD = ", action?.payload);
  return {
    ...state,
    [action?.payload?.entity || "UNKNOWN"]: {
      ...state[action?.payload?.entity],
      form: {
        ...state[action?.payload?.entity]?.form,
        update: {
          error  : true,
          loading: false,
          success: false,
        },
      },
    },
  };
};
const case_DeleteDataLoading = (state, action) => {
  console.log(
    `------DELETE_DATA_LOADING REDUCER TYPE CALLED FOR ${
      action?.payload?.entity || "UNKNOWN ENTITY"
    } ------`
  );
  console.log("WITH PAYLOAD = ", action?.payload);
  return {
    ...state,
    [action?.payload?.entity || "UNKNOWN"]: {
      ...state[action?.payload?.entity],
      form: {
        ...state[action?.payload?.entity]?.form,
        delete: {
          error  : false,
          loading: true,
          success: false,
        },
      },
    },
  };
};
const case_DeleteDataSuccess = (state, action) => {
  console.log(
    `------DELETE_DATA_SUCCESS REDUCER TYPE CALLED FOR ${
      action?.payload?.entity || "UNKNOWN ENTITY"
    } ------`
  );
  console.log("WITH PAYLOAD = ", action?.payload);
  return {
    ...state,
    [action?.payload?.entity || "UNKNOWN"]: {
      ...state[action?.payload?.entity],
      form: {
        ...state[action?.payload?.entity]?.form,
        delete: {
          error  : false,
          loading: false,
          success: true,
        },
      },
    },
  };
};
const case_DeleteDataError = (state, action) => {
  console.log(
    `------DELETE_DATA_ERROR REDUCER TYPE CALLED FOR ${
      action?.payload?.entity || "UNKNOWN ENTITY"
    } ------`
  );
  console.log("WITH PAYLOAD = ", action?.payload);
  return {
    ...state,
    [action?.payload?.entity || "UNKNOWN"]: {
      ...state[action?.payload?.entity],
      form: {
        ...state[action?.payload?.entity]?.form,
        delete: {
          error  : true,
          loading: false,
          success: false,
        },
      },
    },
  };
};

const case_ResetDataCudStatus = (state, action) => {
  console.log(
    `------DELETE_DATA_ERROR REDUCER TYPE CALLED FOR ${
      action?.payload?.entity || "UNKNOWN ENTITY"
    } ------`
  );
  console.log("WITH PAYLOAD = ", action?.payload);
  return {
    ...state,
    [action?.payload?.entity || "UNKNOWN"]: {
      ...state[action?.payload?.entity],
      form: entityDefaultState.form,
    },
  };
};

export default dataReducer;

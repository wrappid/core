import { LOGOUT_SUCCESS } from "../types/authTypes";
import {
  SELECT_OPTION_ERROR,
  SELECT_OPTION_LOAD,
  SELECT_OPTION_SUCCESS
} from "../types/selectOptionsTypes";

const initState = { options: {} };

const selectOptionsReducer = (state = initState, action) => {
  switch (action.type) {
    case SELECT_OPTION_LOAD:
      return {
        ...state,
        options: {
          ...state.options,
          [action?.payload?.key]: {
            data   : [],
            error  : false,
            loading: true,
            success: false,
          },
        },
      };

    case SELECT_OPTION_SUCCESS:
      return {
        ...state,
        options:
          action?.payload?.data && action?.payload?.data[0]?.Children
            ? {
              ...state.options,
              [action?.payload?.data[0].name]: {
                data: action?.payload?.data
                  ? action?.payload?.data[0]?.Children || []
                  : [],
                error  : false,
                loading: false,
                success: true,
              },
            }
            : action?.payload?.data?.rows
              ? {
                ...state.options,
                [action.payload?.key]: {
                  data   : action?.payload?.data?.rows,
                  error  : false,
                  loading: false,
                  success: true,
                  total  : action?.payload?.data?.totalRecords,
                },
              }
              : {
                ...state.options,
                [action.payload?.key]: {
                  data   : action?.payload?.data,
                  error  : false,
                  loading: false,
                  success: true,
                },
              },
      };

    case SELECT_OPTION_ERROR:
      return {
        ...state,
        options: {
          ...state.options,
          [action?.payload?.data[0]?.name]: {
            data   : action?.payload?.data || [],
            error  : true,
            loading: false,
            success: false,
          },
        },
      };

    case LOGOUT_SUCCESS:
      return initState;

    default:
      return state;
  }
};

export default selectOptionsReducer;

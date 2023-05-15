import { LOGOUT_SUCCESS } from "../../modules/auth/types/authTypes";
import {
  SELECT_OPTION_ERROR,
  SELECT_OPTION_LOAD,
  SELECT_OPTION_SUCCESS,
} from "../types/selectOptionsTypes";

const initState = {
  options: {},
};

const selectOptionsReducer = (state = initState, action) => {
  switch (action.type) {
    case SELECT_OPTION_LOAD:
      return {
        ...state,
        options: {
          ...state.options,
          [action?.payload?.key]: {
            loading: true,
            success: false,
            error: false,
            data: [],
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
                  loading: false,
                  success: true,
                  error: false,
                  data: action?.payload?.data
                    ? action?.payload?.data[0]?.Children || []
                    : [],
                },
              }
            : action?.payload?.data?.rows
            ? {
                ...state.options,
                [action.payload?.key]: {
                  loading: false,
                  success: true,
                  error: false,
                  total: action?.payload?.data?.totalRecords,
                  data: action?.payload?.data?.rows,
                },
              }
            : {
                ...state.options,
                [action.payload?.key]: {
                  loading: false,
                  success: true,
                  error: false,
                  data: action?.payload?.data,
                },
              },
      };
    case SELECT_OPTION_ERROR:
      return {
        ...state,
        options: {
          ...state.options,
          [action?.payload?.data[0].name]: {
            loading: false,
            success: false,
            error: true,
            data: action?.payload?.data || [],
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

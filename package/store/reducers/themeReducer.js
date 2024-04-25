import {
  AUTHENTICATION_ERROR,
  LOGOUT_SUCCESS
} from "../types/authTypes";
import { GET_THEMES_FAILURE, GET_THEMES_SUCCESS, LOCAL_THEMES_SYNCED_FAILURE, LOCAL_THEMES_SYNCED_SUCCESS, SET_LOCAL_THEMES_SUCCESS } from "../types/themeTypes";

const initState = { sync: false, themes: { local: [], server: [] } };

const themeReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_THEMES_SUCCESS:
      return {
        ...state,
        themes: { ...state.themes, server: [...(action?.payload?.data?.rows || [])] },
      };

    case GET_THEMES_FAILURE:
      return {
        ...state,
        themes: { ...state.themes, server: [] },
      };

    case SET_LOCAL_THEMES_SUCCESS:
      return {
        ...state,
        themes: { ...state.themes, local: [...(action?.payload || [])] },
      };

    case LOCAL_THEMES_SYNCED_SUCCESS:
      return {
        ...state,
        sync: true
      };

    case LOCAL_THEMES_SYNCED_FAILURE:
      return {
        ...state,
        sync: false
      };

    case LOGOUT_SUCCESS:
      return { ...initState };

    case AUTHENTICATION_ERROR:
      return { ...initState };

    default:
      return state;
  }
};

export default themeReducer;

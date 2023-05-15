import { LOGOUT_SUCCESS, SAVE_NAV_DATA } from "../types/authTypes";

export const saveData = (body) => {
  return (dispatch) => {
    dispatch({
      type: SAVE_NAV_DATA,
      payload: body,
    });
  };
};

export const saveAuthData = (body) => {
  return (dispatch) => {
    dispatch({
      type: "AUTH_DATA_SAVED",
      data: body,
    });
  };
};

export const clearAuthState = (token) => {
  return (dispatch) => {
    dispatch({ type: LOGOUT_SUCCESS });
  };
};

import config from "../../config/config";
import { queryBuilder } from "../../utils/helper";
import {
  AUTH_LOADING,
  GET_ROLE_PERMISSION_ERROR,
  GET_ROLE_PERMISSION_LOADING,
  GET_ROLE_PERMISSION_SUCCESS,
  LOGOUT_SUCCESS,
  SAVE_NAV_DATA,
} from "../types/authTypes";
import { AUTHENTICATION_ERROR } from "../types/commonTypes";
import { BUILD_MENU_ROLE_PERMISSIONS } from "../types/menuTypes";

var backendUrl = config?.backendUrl || process.env.REACT_APP_BACKEND_URL;

export const signIn = (credentials) => {
  return (dispatch) => {
    dispatch({
      type: AUTH_LOADING,
    });
    fetch(backendUrl + "/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) =>
        response
          .json()
          .then((data) => {
            // console.error(data);
            if (response.status === 200) {
              dispatch({
                type: "LOGIN_SUCCESS",
                payload: data,
              });
            } else if (response.status === 403 || response.status === 401) {
              dispatch({
                type: "LOGIN_ERROR",
                message: data.message,
              });
            } else {
              dispatch({
                type: "LOGIN_ERROR",
                message: data.message,
              });
            }
          })
          .catch((err) => {
            dispatch({
              type: "LOGIN_ERROR",
              message: "Internal Error",
            });
          })
      )
      .catch((err) => {
        dispatch({
          type: "LOGIN_ERROR",
          message: "Internal Error",
        });
      });
  };
};

export const signOut = (token) => {
  return (dispatch) => {
    dispatch({ type: "LOGOUT_LOADING" });
    fetch(backendUrl + "/logout", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) =>
        response.json().then((data) => {
          if (response.status === 200) {
            dispatch({
              type: "LOGOUT_SUCCESS",
            });
          } else {
            dispatch({
              type: "LOGOUT_ERROR",
            });
          }
        })
      )
      .catch((err) => {
        dispatch({
          type: "LOGOUT_ERROR",
        });
      });
  };
};

export const refreshToken = (token, refreshToken) => {
  return (dispatch) => {
    dispatch({ type: "TOKEN_REFRESHING" });
    fetch(backendUrl + "/refreshtoken", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        refreshToken: refreshToken,
      }),
    })
      .then((response) =>
        response.json().then((data) => {
          if (response.status === 200) {
            // //console.log("refreshed token", data.accessToken);
            dispatch({
              type: "TOKEN_REFRESH_SUCCESS",
              payload: data,
            });
          } else if (response.status === 403 || response.status === 401) {
            dispatch({
              type: "AUTHENTICATION_ERROR",
            });
          } else {
            dispatch({
              type: "TOKEN_REFRESH_ERROR",
            });
          }
        })
      )
      .catch((err) => {
        dispatch({
          type: "TOKEN_REFRESH_ERROR",
        });
      });
  };
};

export const checkLoginOrRegister = (credentials, otpFlag, page) => {
  return (dispatch) => {
    dispatch({
      type: "CHECK_LOGIN_LOADING",
    });
    var url = otpFlag
      ? backendUrl + "/checkLoginOrRegister?loginWithOtp=1"
      : backendUrl + "/checkLoginOrRegister";
    fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) =>
        response
          .json()
          .then((data) => {
            // console.error(data);
            if (response.status === 200) {
              if (otpFlag)
                dispatch({
                  type: "CHECK_LOGIN_SUCCESS_REGISTERED_OTP",
                  message: data.message,
                  page: page,
                });
              else
                dispatch({
                  type: "CHECK_LOGIN_SUCCESS_REGISTERED",
                  payload: data,
                  page: page,
                });
            } else if (response.status === 201) {
              dispatch({
                type: "CHECK_LOGIN_SUCCESS_UNREGISTERED",
                message: data.message,
                page: page,
              });
            } else if (response.status === 403 || response.status === 401) {
              dispatch({
                type: "CHECK_LOGIN_ERROR",
                message: "Auth Error",
              });
            } else {
              dispatch({
                type: "CHECK_LOGIN_ERROR",
                message: data.message,
              });
            }
          })
          .catch((err) => {
            dispatch({
              type: "CHECK_LOGIN_ERROR",
            });
          })
      )
      .catch((err) => {
        dispatch({
          type: "CHECK_LOGIN_ERROR",
        });
      });
  };
};

export const loginWithOtp = (credentials, reset) => {
  return (dispatch) => {
    dispatch({
      type: AUTH_LOADING,
    });
    fetch(backendUrl + queryBuilder("/loginWithOtp", { reset }), {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) =>
        response
          .json()
          .then((data) => {
            // console.error(data);
            if (response.status === 200) {
              dispatch({
                type: "LOGIN_SUCCESS",
                payload: data,
              });
            } else if (response.status === 403 || response.status === 401) {
              dispatch({
                type: "LOGIN_ERROR",
                message: data.message,
              });
            } else {
              dispatch({
                type: "LOGIN_ERROR",
                message: data.message,
              });
            }
          })
          .catch((err) => {
            dispatch({
              type: "LOGIN_ERROR",
              message: "Internal Error",
            });
          })
      )
      .catch((err) => {
        dispatch({
          type: "LOGIN_ERROR",
          message: "Internal Error",
        });
      });
  };
};

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

export const getRolePermission = (query, token) => {
  return (dispatch) => {
    dispatch({ type: GET_ROLE_PERMISSION_LOADING });
    var newUrl = queryBuilder("/rolePermission", query);
    fetch(backendUrl + newUrl, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) =>
        res.json().then((data) => {
          if (res.status === 200) {
            dispatch({
              type: GET_ROLE_PERMISSION_SUCCESS,
              message: data.message,
              payload: data.data,
            });
            dispatch({
              type: BUILD_MENU_ROLE_PERMISSIONS,
              message: data.message,
              payload: data.data.permissions,
            });
          } else if (res.status === 403 || res.status === 401) {
            dispatch({
              type: AUTHENTICATION_ERROR,
            });
          } else {
            dispatch({
              type: GET_ROLE_PERMISSION_ERROR,
              message: data.message,
            });
          }
        })
      )
      .catch((err) => {
        dispatch({
          type: GET_ROLE_PERMISSION_ERROR,
          message: "Internal Error",
        });
      });
  };
};

export const clearAuthState = (token) => {
  return (dispatch) => {
    dispatch({ type: LOGOUT_SUCCESS });
  };
};

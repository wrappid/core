import config from "../../config/config";
import { queryBuilder } from "../../utils/helper";
import {
  MAIN_MASTER_DATA_ERROR,
  MAIN_MASTER_DATA_LOADING,
  MAIN_MASTER_DATA_SUCCESS,
  MASTER_DATA_LOADING
} from "../types/mdmTypes";

let backendUrl = process.env.REACT_APP_WRAPPID_backendUrl || config?.wrappid?.backendUrl;
let adminUrl = process.env.REACT_APP_ADMIN_URL || config?.adminUrl;

export const getScrappedDepartments = (query = {}, token = "") => {
  return (dispatch) => {
    dispatch({ type: MASTER_DATA_LOADING });
    let newUrl = queryBuilder("/", query);

    fetch(adminUrl + newUrl, {
      headers: {
        Accept        : "application/json",
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    })
      .then((res) =>
        res.json().then((data) => {
          if (res.status === 200) {
            dispatch({
              data   : data.data,
              message: data.message,
              type   : "GET_SCRAPPED_DEPARTMENTS_SUCCESS",
            });
          } else if (res.status === 403 || res.status === 401) {
            dispatch({ type: "AUTHENTICATION_ERROR" });
          } else {
            dispatch({
              message: data.message,
              type   : "GET_SCRAPPED_DEPARTMENTS_ERROR",
            });
          }
        })
      )
      .catch((err) => {
        dispatch({
          message: "Internal Error",
          type   : "GET_SCRAPPED_DEPARTMENTS_ERROR",
        });
      });
  };
};

export const getMainMasterData = (query = {}, token = "") => {
  return (dispatch) => {
    dispatch({ type: MAIN_MASTER_DATA_LOADING });
    let newUrl = queryBuilder("/masterData", query);

    fetch(backendUrl + newUrl, {
      headers: {
        Accept        : "application/json",
        Authorization : `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) =>
        res.json().then((data) => {
          if (res.status === 200) {
            dispatch({
              data   : data.data,
              message: data.message,
              type   : MAIN_MASTER_DATA_SUCCESS,
            });
          } else if (res.status === 403 || res.status === 401) {
            dispatch({ type: "AUTHENTICATION_ERROR" });
          } else {
            dispatch({
              message: data.message,
              type   : MAIN_MASTER_DATA_ERROR,
            });
          }
        })
      )
      .catch((err) => {
        dispatch({
          message: "Internal Error",
          type   : MAIN_MASTER_DATA_ERROR,
        });
      });
  };
};

export const getSettingMeta = (query, token) => {
  return (dispatch) => {
    dispatch({ type: "GET_SETTING_META_LOADING" });
    let newUrl = queryBuilder("/settingMeta", query);

    fetch(backendUrl + newUrl, {
      headers: {
        Accept        : "application/json",
        Authorization : `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) =>
        res.json().then((data) => {
          if (res.status === 200) {
            dispatch({
              data   : data.data,
              message: data.message,
              type   : "GET_SETTING_META_SUCCESS",
            });
          } else if (res.status === 403 || res.status === 401) {
            dispatch({ type: "AUTHENTICATION_ERROR" });
          } else {
            dispatch({
              message: data.message,
              type   : "GET_SETTING_META_ERROR",
            });
          }
        })
      )
      .catch((err) => {
        dispatch({
          message: "Internal Error",
          type   : "GET_SETTING_META_ERROR",
        });
      });
  };
};

export const createSettingMeta = (query, body, token) => {
  return (dispatch) => {
    dispatch({ type: "CREATE_SETTING_META_LOADING" });
    let newUrl = queryBuilder("/settingMeta", query);

    fetch(backendUrl + newUrl, {
      body   : JSON.stringify(body),
      headers: {
        Accept        : "application/json",
        Authorization : `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "post",
    })
      .then((res) =>
        res.json().then((data) => {
          if (res.status === 200) {
            dispatch({
              errList: data.errList,
              ids    : data.ids,
              message: data.message,
              type   : "CREATE_SETTING_META_SUCCESS",
            });
          } else if (res.status === 403 || res.status === 401) {
            dispatch({ type: "AUTHENTICATION_ERROR" });
          } else {
            dispatch({
              message: data.message,
              type   : "CREATE_SETTING_META_ERROR",
            });
          }
        })
      )
      .catch((err) => {
        dispatch({
          message: "Internal Error",
          type   : "CREATE_SETTING_META_ERROR",
        });
      });
  };
};

export const updateSettingMeta = (query, id, body, token) => {
  return (dispatch) => {
    dispatch({ type: "UPDATE_SETTING_META_LOADING" });
    let newUrl = queryBuilder("/settingMeta/" + id, query);

    fetch(backendUrl + newUrl, {
      body   : JSON.stringify(body),
      headers: {
        Accept        : "application/json",
        Authorization : `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "put",
    })
      .then((res) =>
        res.json().then((data) => {
          if (res.status === 200) {
            dispatch({
              message: data.message,
              type   : "UPDATE_SETTING_META_SUCCESS",
            });
          } else if (res.status === 403 || res.status === 401) {
            dispatch({ type: "AUTHENTICATION_ERROR" });
          } else {
            dispatch({
              message: data.message,
              type   : "UPDATE_SETTING_META_ERROR",
            });
          }
        })
      )
      .catch((err) => {
        dispatch({
          message: "Internal Error",
          type   : "UPDATE_SETTING_META_ERROR",
        });
      });
  };
};

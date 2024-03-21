// eslint-disable-next-line import/no-unresolved
import { WrappidData } from "@wrappid/styles";

import { queryBuilder } from "../../utils/helper";
import {
  READ_DATA_ERROR,
  READ_DATA_SUCCESS,
  UPDATE_DATA_ERROR,
  UPDATE_DATA_LOADING,
  UPDATE_DATA_SUCCESS
} from "../types/dataManagementTypes";

const { config } = WrappidData;

// eslint-disable-next-line no-undef
let backendUrl = config?.backendUrl || process.env.REACT_APP_BACKEND_URL;

export const getDataByModel = (model, query, token) => {
  return (dispatch) => {
    fetch(backendUrl + queryBuilder("/data/" + model, query), {
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
              payload: {
                data   : data.data,
                message: data.message,
                query  : query,
              },
              type: READ_DATA_SUCCESS,
            });
          }
        })
      )
      .catch((err) => {
        dispatch({
          message: `Internal Error: ${err?.message || "Unknown error occured"}`,
          type   : READ_DATA_ERROR,
        });
      });
  };
};

export const updateDataByModel = (model, id, data, token) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_DATA_LOADING });
    let apiUrl = backendUrl + queryBuilder("/data/" + model + "/" + id);

    fetch(apiUrl, {
      body   : JSON.stringify(data),
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
              type   : UPDATE_DATA_SUCCESS,
            });
          } else if (res.status === 403 || res.status === 401) {
            dispatch({ type: "AUTHENTICATION_ERROR" });
          } else {
            dispatch({
              message: data.message,
              type   : UPDATE_DATA_ERROR,
            });
          }
        })
      )
      .catch((err) => {
        dispatch({
          message: `Internal Error: ${err?.message || "Unknown error occured"}`,
          type   : UPDATE_DATA_ERROR,
        });
      });
  };
};

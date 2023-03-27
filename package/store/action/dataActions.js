import config from "../../config/config";
import { queryBuilder } from "../../utils/helper";
import {
  READ_DATA_ERROR,
  READ_DATA_SUCCESS,
  UPDATE_DATA_ERROR,
  UPDATE_DATA_LOADING,
  UPDATE_DATA_SUCCESS,
} from "../types/dataManagementTypes";

export const getDataByModel = (model, query, token) => {
  return (dispatch) => {
    fetch(config.backendUrl + queryBuilder("/data/" + model, query), {
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
              type: READ_DATA_SUCCESS,
              payload: {
                message: data.message,
                data: data.data,
                query: query,
              },
            });
          }
        })
      )
      .catch((err) => {
        dispatch({
          type: READ_DATA_ERROR,
          message: "Internal Error",
        });
      });
  };
};

export const updateDataByModel = (model, id, data, token) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_DATA_LOADING });
    console.log(data);
    var apiUrl = config.backendUrl + queryBuilder("/data/" + model + "/" + id);
    fetch(apiUrl, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) =>
        res.json().then((data) => {
          if (res.status === 200) {
            dispatch({
              type: UPDATE_DATA_SUCCESS,
              message: data.message,
            });
          } else if (res.status === 403 || res.status === 401) {
            dispatch({
              type: "AUTHENTICATION_ERROR",
            });
          } else {
            dispatch({
              type: UPDATE_DATA_ERROR,
              message: data.message,
            });
          }
        })
      )
      .catch((err) => {
        dispatch({
          type: UPDATE_DATA_ERROR,
          message: "Internal Error",
        });
      });
  };
};

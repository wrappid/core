import config from "../../config/config";
import { HANDLE_MODAL } from "../types/settingsTypes";

var scraperDBUrl = config.scraperDBUrl;
var adminUrl = config.adminUrl;
var backendUrl = config.backendUrl;

export const toggleModalState = (data) => {
  return (dispatch) => {
    console.log("---------------------action", data);
    dispatch({ type: HANDLE_MODAL, payload: data });
  };
};

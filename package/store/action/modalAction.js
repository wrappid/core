import { HANDLE_MODAL } from "../types/settingsTypes";

export const toggleModalState = (data) => {
  return (dispatch) => {
    console.log("---------------------action", data);
    dispatch({ payload: data, type: HANDLE_MODAL });
  };
};

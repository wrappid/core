import { HANDLE_MODAL } from "../types/settingsTypes";

export const toggleModalState = (data) => {
  return (dispatch) => {
    // eslint-disable-next-line etc/no-commented-out-code
    // console.log("---------------------action", data);
    dispatch({ payload: data, type: HANDLE_MODAL });
  };
};

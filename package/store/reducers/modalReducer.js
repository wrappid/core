/* eslint-disable no-console */
import { LOGOUT_SUCCESS } from "../types/authTypes";
import { HANDLE_MODAL } from "../types/settingsTypes";

const initState = {
  modalData: null,
  modalOpen: false,
};

const modalReducer = (state = initState, action) => {
  switch (action.type) {
    case HANDLE_MODAL:
      if (
        !state.modalOpen &&
        (!action?.payload?.data || !action?.payload?.data?.comp)
      ) {
        console.warn(
          "Modal payload dont have component data. This will render a empty modal"
        );
      }
      if (
        !state.modalOpen &&
        (!action?.payload?.data || !action?.payload?.data?.heading)
      ) {
        console.warn(
          "Modal payload dont have heading data. This will render empty heading of modal"
        );
      }
      return {
        ...state,
        modalData : action?.payload?.data ? action.payload.data : null,
        modalOpen : action?.payload?.data ? !state.modalOpen : false,
        modalStyle: action?.payload?.style ? action.payload.style : null,
      };

    case LOGOUT_SUCCESS:
      console.log("FORM LOGOUT_SUCCESS REDUCER------", action);
      return initState;

    default:
      return state;
  }
};

export default modalReducer;

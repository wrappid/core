import { LOGOUT_SUCCESS } from "../types/authTypes";

const initState = {
  commonOne:null,
  commonTwo:null
};

const commonReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return initState;
    default:
      return state;
  }
};
export default commonReducer;

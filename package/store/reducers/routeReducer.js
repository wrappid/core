import { GET_ROUTE_FAILURE, GET_ROUTE_SUCCESS } from "../types/appTypes";
import {
  AUTHENTICATION_ERROR,
  LOGOUT_SUCCESS
} from "../types/authTypes";

const initState = { routes: [] };

const routeReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ROUTE_SUCCESS:
      return {
        ...state,
        routes: action?.payload?.data?.rows || [],
      };

    case GET_ROUTE_FAILURE:
      return {
        ...state,
        routes: [],
      };

    case LOGOUT_SUCCESS:
      return {
        ...initState,
        routes: state?.routes?.filter((r) => !r.authRequired),
      };

    case AUTHENTICATION_ERROR:
      return {
        ...initState,
        routes: state?.routes?.filter((r) => !r.authRequired),
      };

    default:
      return state;
  }
};

export default routeReducer;

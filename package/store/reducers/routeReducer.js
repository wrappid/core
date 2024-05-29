import {
  GET_ROUTE_FAILURE, GET_ROUTE_SUCCESS,
  LOCAL_ROUTES_SYNCED_FAILURE,
  LOCAL_ROUTES_SYNCED_SUCCESS
} from "../types/appTypes";
import {
  AUTHENTICATION_ERROR,
  LOGOUT_SUCCESS
} from "../types/authTypes";

const initState = { routes: [], sync: false };

const routeReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ROUTE_SUCCESS:
      return {
        ...state,
        routes: [...(action?.payload?.data?.rows || [])],
      };

    case GET_ROUTE_FAILURE:
      return {
        ...state,
        routes: [],
      };

    case LOCAL_ROUTES_SYNCED_SUCCESS:
      return {
        ...state,
        sync: true
      };

    case LOCAL_ROUTES_SYNCED_FAILURE:
      return {
        ...state,
        sync: false
      };

    case LOGOUT_SUCCESS:
      return {
        ...initState,
        routes: state?.routes?.filter((route) => !route.authRequired),
      };

    case AUTHENTICATION_ERROR:
      return {
        ...initState,
        routes: state?.routes?.filter((route) => !route.authRequired),
      };

    default:
      return state;
  }
};

export default routeReducer;

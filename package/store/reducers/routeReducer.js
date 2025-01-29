import {
  GET_ROUTE_FAILURE, GET_ROUTE_SUCCESS,
  LOCAL_ROUTES_SYNCED_FAILURE,
  LOCAL_ROUTES_SYNCED_SUCCESS
} from "../types/appTypes";
import {
  AUTHENTICATION_ERROR,
  LOGOUT_SUCCESS
} from "../types/authTypes";

const initState = { routes: [], sync: { local: false, server: false } };

function checkIfRoutesExist(existingRoutes, eachRoute) {
  existingRoutes.forEach((route) => {
    if (route.url === eachRoute.url) {
      return true;
    }
  });
}

function transformData(existingRoutes, input) {
  return input.map(item => {
    if (!checkIfRoutesExist(existingRoutes, item)) {
      const { schema, extraInfo, Page, ...rest } = item;
      
      return {
        ...rest,
        ...schema,
        ...extraInfo,
        Page: Page ? {
          ...Page,
          ...Page.schema,
          ...Page.extraInfo
        } : null
      };
    }
  });
}

const routeReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ROUTE_SUCCESS:
      return {
        ...state,
        routes: [...state.routes, ...(transformData(state.routes, action?.payload?.data?.rows) || [])],
        sync  : {
          ...state.sync,
          server: true,
        }
      };

    case GET_ROUTE_FAILURE:
      return {
        ...state,
        routes: [],
        sync  : {
          ...state.sync,
          server: false,
        }
      };

    case LOCAL_ROUTES_SYNCED_SUCCESS:
      return {
        ...state,
        routes: [...state.routes, ...(Object.values(action?.payload || {}))],
        sync  : {
          ...state.sync,
          local: true,
        }
      };

    case LOCAL_ROUTES_SYNCED_FAILURE:
      return {
        ...state,
        sync: {
          ...state.sync,
          local: false,
        }
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

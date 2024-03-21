
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { useDispatch, useSelector } from "react-redux";

import { HTTP } from "../config/constants";
import { CoreRoutesContext } from "../config/contextHandler";
import { RoutesRegistry } from "../registry/RoutesRegistry";
import { apiRequestAction } from "../store/action/appActions";
import { GET_ROUTE_FAILURE, GET_ROUTE_SUCCESS } from "../store/types/appTypes";

export default function CoreRoutesProvider(props) {
  const { routes: registeredRoutes, children } = props;
  const dispatch = useDispatch();
  const { routes: storedRoutes } = useSelector((state) => state?.route);
  const { uid, accessToken } = useSelector((state) => state?.auth);
  let authenticated = uid && accessToken ? true : false;

  React.useEffect(() => {
    dispatch(
      apiRequestAction(
        HTTP.GET,
        `${!authenticated ? "/noauth/" : "/" }business/all/RoutePages`,
        authenticated,
        { _defaultFilter: encodeURIComponent(JSON.stringify({ authRequired: authenticated })) },
        GET_ROUTE_SUCCESS,
        GET_ROUTE_FAILURE
      )
    );
  }, [authenticated]);
    
  return (
    <CoreRoutesContext.Provider value={[...Object.values((registeredRoutes || {})), ...Object.values((RoutesRegistry || {})), ...(storedRoutes || [])]}>
      {children}
    </CoreRoutesContext.Provider>
  );
}

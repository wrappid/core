
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { useDispatch, useSelector } from "react-redux";

import { HTTP } from "../config/constants";
import { CoreRoutesContext } from "../config/contextHandler";
import { RoutesRegistry } from "../registry/RoutesRegistry";
import { apiRequestAction } from "../store/action/appActions";
import { GET_ROUTE_FAILURE, GET_ROUTE_SUCCESS, LOCAL_ROUTES_SYNCED_SUCCESS } from "../store/types/appTypes";

export default function CoreRoutesProvider(props) {
  const { routes: localRoutes = {}, children } = props;
  const dispatch = useDispatch();
  const { sync, routes: storedRoutes = {} } = useSelector((state) => state?.route);
  const { local: localSync = false, server: serverSync = false } = sync;
  const { accessToken } = useSelector((state) => state?.auth || {});
  let authenticated = accessToken ? true : false;

  const [contextSync, setContextSync] = React.useState(false);
  const [routesList, setRoutesList] = React.useState({});

  React.useEffect(() => {
    // @todo post sync
    if (!serverSync) {
      dispatch(
        apiRequestAction(
          HTTP.GET,
          `${!authenticated ? "/noauth/" : "/"}business/all/RoutePages`,
          authenticated,
          {}, // { _defaultFilter: encodeURIComponent(JSON.stringify({ "extraInfo.authRequired": authenticated })) },
          GET_ROUTE_SUCCESS,
          GET_ROUTE_FAILURE
        )
      );
    }
  }, [serverSync, authenticated]);

  React.useEffect(() => {
    /**
     * @todo call DATA_SYNC_API
     * 
    */
    if (!localSync && Object.keys(localRoutes)?.length > 0) {
      dispatch({ payload: { ...RoutesRegistry, ...localRoutes }, type: LOCAL_ROUTES_SYNCED_SUCCESS });
    }
  }, [localSync, localRoutes]);

  React.useEffect(() => {
    let _storedRoutes = {};
    
    if (localSync && serverSync && !contextSync) {
      setContextSync(true);

      storedRoutes.forEach(route => {
        _storedRoutes[route?.entityRef] = route;
      });
  
      setRoutesList(_storedRoutes);
    }
  }, [storedRoutes, localSync, serverSync, contextSync]);
    
  return (
    <CoreRoutesContext.Provider value={routesList}>
      {children}
    </CoreRoutesContext.Provider>
  );
}

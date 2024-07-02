
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { useDispatch, useSelector } from "react-redux";

import { HTTP } from "../config/constants";
import { CoreRoutesContext } from "../config/contextHandler";
import { apiRequestAction } from "../store/action/appActions";
import { GET_ROUTE_FAILURE, GET_ROUTE_SUCCESS } from "../store/types/appTypes";

export default function CoreRoutesProvider(props) {
  const { routes: localRoutes = {}, children } = props;
  const dispatch = useDispatch();
  const { sync, routes: storedRoutes = {} } = useSelector((state) => state?.route);
  const { uid, accessToken } = useSelector((state) => state?.auth || {});
  let authenticated = uid && accessToken ? true : false;

  const [routesList, setRoutesList] = React.useState({});

  React.useEffect(() => {
    // @todo post sync
    dispatch(
      apiRequestAction(
        HTTP.GET,
        `${!authenticated ? "/noauth/" : "/"}business/all/RoutePages`,
        authenticated,
        { _defaultFilter: encodeURIComponent(JSON.stringify({ authRequired: authenticated })) },
        GET_ROUTE_SUCCESS,
        GET_ROUTE_FAILURE
      )
    );
  }, [authenticated]);

  React.useEffect(() => {
    /**
     * @todo call DATA_SYNC_API
     * 
    */
    if (!sync && Object.keys(localRoutes)?.length > 0) {
      // eslint-disable-next-line etc/no-commented-out-code
      // dispatch(apiRequestAction(
      //   HTTP.POST,
      //   __SYSTEM_API_ROUTES.DATA_SYNC_API
      //     .replace(":model", __SYSTEM_MODEL.ROUTES_MODEL),
      //   false,
      //   Object.values(localRoutes) || [],
      //   LOCAL_ROUTES_SYNCED_SUCCESS,
      //   LOCAL_ROUTES_SYNCED_FAILURE
      // ));
    }
  }, [sync, localRoutes, authenticated]);

  React.useEffect(() => {
    let _storedRoutes = {};
    
    storedRoutes.forEach(route => {
      _storedRoutes[route?.entityRef] = route;
    });

    setRoutesList({ ...localRoutes, ..._storedRoutes });
  }, [localRoutes, storedRoutes]);
    
  return (
    <CoreRoutesContext.Provider value={routesList}>
      {children}
    </CoreRoutesContext.Provider>
  );
}

import React, { useContext, useEffect, useState } from "react";

// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";
import { useDispatch, useSelector } from "react-redux";

import CenteredBlankLayout from "./components/layouts/_system/CenteredBlankLayout";
import Logout from "./components/navigation/Logout";
import PageLoader from "./components/PageLoader";
import { HTTP } from "./config/constants";
import { CoreRoutesContext } from "./config/contextHandler";
import Error404 from "./error/Error404";
import Error500 from "./error/Error500";
import { CoreDomRoute, CoreDomRoutes } from "./helper/routerHelper";
import PageContainer from "./layout/PageContainer";
import { RoutesRegistry } from "./registry/RoutesRegistry";
import { apiRequestAction } from "./store/action/appActions";
import { GET_ROUTE_FAILURE, GET_ROUTE_SUCCESS } from "./store/types/appTypes";

const DEFAULT_ROUTE = {
  Page        : { appComponent: PageLoader.name, layout: CenteredBlankLayout.name },
  authRequired: false,
  entityRef   : "defaultAppRoute",
  url         : "defaultAppRoute"
};

export let globalAccessToken = null;
export let globalRefreshToken = null;
export let globalTokenRequested = null;
export let globalTokenRequestTimeStamp = null;

export default function CoreRoutes() {
  const dispatch = useDispatch();
  const routesRegistry = useContext(CoreRoutesContext);
  const { uid, accessToken, refreshToken } = useSelector((state) => state?.auth);
  const routesFromStore = useSelector((state) => state?.route?.routes);
  let authenticated = uid && accessToken ? true : false;
  const { config } = React.useContext(WrappidDataContext);
  const [defaultRoute, setDefaultRoute] = useState(DEFAULT_ROUTE);
  const { tokenRequested, tokenRequestTimeStamp } = useSelector(
    (state) => state?.pendingRequests
  );

  globalAccessToken = accessToken;
  globalRefreshToken = refreshToken;
  globalTokenRequested = tokenRequested;
  globalTokenRequestTimeStamp = tokenRequestTimeStamp;

  React.useEffect(() => {
    if (config?.backendUrl) {
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
    }
  }, [config, authenticated]);

  useEffect(() => {
    let defaultRouteName = (authenticated ? config?.defaultAuthenticatedRoute : config?.defaultRoute) || config?.defaultRoute || DEFAULT_ROUTE;

    if (defaultRouteName) {
      if (Object.keys(routesRegistry).includes(defaultRouteName)) {
        setDefaultRoute(routesRegistry[defaultRouteName]);
      } else if (routesFromStore?.filter((route) => route?.entityRef === defaultRouteName)?.length > 0) {
        setDefaultRoute(routesFromStore?.filter((route) => route?.entityRef === defaultRouteName)[0]);
      }
    }
  }, [config, routesFromStore]);

  return (
    <CoreDomRoutes>
      <CoreDomRoute
        key="core-default-route"
        exact
        path="/"
        element={
          <PageContainer
            route={defaultRoute} />
        }
        end
      />

      {/* App related routes */}
      {[...Object.values((routesRegistry || {})), ...Object.values((RoutesRegistry || {})), ...(routesFromStore || [])]?.map((route) => {
        return (
          <CoreDomRoute
            key={route.url}
            exact
            path={"/" + route.url}
            element={<PageContainer route={route} />}
          />
        );
      })}

      {/**
        * @todo
        * need to remove
        * LOGOUT PAGE
        */}
      <CoreDomRoute
        key="logout"
        exact
        path="/logout"
        element={
          <PageContainer
            route={{ Page: { appComponent: Logout.name, layout: CenteredBlankLayout.name }, authRequired: true }}
          />
        }
      />

      {/* 500: Server Error */}
      <CoreDomRoute
        key="error-500"
        path="/error"
        element={
          <PageContainer
            route={{ Page: { appComponent: Error500.name, layout: CenteredBlankLayout.name } }}
          />
        }
      />

      {/* 404: Not Found */}
      <CoreDomRoute
        key="error-404"
        path="*"
        element={
          <PageContainer
            route={{ Page: { appComponent: Error404.name, layout: CenteredBlankLayout.name } }}
          />
        }
      />
    </CoreDomRoutes>
  );
}

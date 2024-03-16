import React, { useContext, useEffect, useState } from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeDomRoute, NativeDomRoutes } from "@wrappid/native";
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

export default function CoreRoutes() {
  const dispatch = useDispatch();
  const routesRegistry = useContext(CoreRoutesContext);
  const auth = useSelector((state) => state?.auth);
  const routesFromStore = useSelector((state) => state?.route?.routes);
  let authenticated = auth?.uid ? true : false;
  const { config } = React.useContext(WrappidDataContext);
  const [defaultRoute, setDefaultRoute] = useState(DEFAULT_ROUTE);
  
  React.useEffect(() => {
    config?.backendUrl && dispatch(
      apiRequestAction(
        HTTP.GET,
        `${!authenticated ? "/noauth/" : "/" }business/all/RoutePages`,
        true,
        { _defaultFilter: encodeURIComponent(JSON.stringify({ authRequired: authenticated })) },
        GET_ROUTE_SUCCESS,
        GET_ROUTE_FAILURE
      )
    );

    let defaultRouteName = authenticated ? config?.defaultAuthenticatedRoute : config?.defaultRoute;

    if (defaultRouteName) {
      if (Object.keys(routesRegistry).includes(defaultRouteName)) {
        setDefaultRoute(routesRegistry[defaultRouteName]);
      } else if (routesFromStore?.filter((route) => route?.entityRef === defaultRouteName)?.length > 0) {
        setDefaultRoute(routesFromStore?.filter((route) => route?.entityRef === defaultRouteName)[0]);
      }
    }
  }, []);

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
  }, [authenticated]);

  useEffect(() => {
    let defaultRouteName = /* authenticated ? config?.defaultAuthenticatedRoute : */ config?.defaultRoute;

    if (defaultRouteName) {
      if (Object.keys(routesRegistry).includes(defaultRouteName)) {
        setDefaultRoute(routesRegistry[defaultRouteName]);
      } else if (routesFromStore?.filter((route) => route?.entityRef === defaultRouteName)?.length > 0) {
        setDefaultRoute(routesFromStore?.filter((route) => route?.entityRef === defaultRouteName)[0]);
      }
    }
  }, [config, routesFromStore]);

  return (
    <NativeDomRoutes>
      <NativeDomRoute
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
          <NativeDomRoute
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
      <NativeDomRoute
        exact
        path="/logout"
        element={
          <PageContainer
            route={{ Page: { appComponent: Logout.name, layout: CenteredBlankLayout.name }, authRequired: true }}
          />
        }
      />

      {/* 500: Server Error */}
      <NativeDomRoute
        path="/error"
        element={
          <PageContainer
            route={{ Page: { appComponent: Error500.name, layout: CenteredBlankLayout.name } }}
          />
        }
      />

      {/* 404: Not Found */}
      <NativeDomRoute
        path="*"
        element={
          <PageContainer
            route={{ Page: { appComponent: Error404.name, layout: CenteredBlankLayout.name } }}
          />
        }
      />
    </NativeDomRoutes>
  );
}

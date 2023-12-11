import React, { useContext, useEffect, useState } from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeDomRoutes, NativeDomRoute } from "@wrappid/native";
// eslint-disable-next-line import/no-unresolved
import { getConfigurationObject, CoreConfigContext } from "@wrappid/styles";
import { useDispatch, useSelector } from "react-redux";

import Logout from "./components/navigation/Logout";
import { HTTP } from "./config/constants";
import { CoreRoutesContext } from "./config/contextHandler";
import Error404 from "./error/Error404";
import Error500 from "./error/Error500";
import PageContainer from "./layout/PageContainer";
import { apiRequestAction } from "./store/action/appActions";
import { GET_ROUTE_FAILURE, GET_ROUTE_SUCCESS } from "./store/types/appTypes";

const DEFAULT_ROUTE = {
  Page        : { appComponent: "WrappidComponent", layout: "WrappidGuestLayout" },
  authRequired: false,
  entityRef   : "defaultAppRoute",
  url         : "defaultAppRoute"
};

export default function CoreRoutes() {
  const dispatch = useDispatch();
  const routesRegistry = useContext(CoreRoutesContext);
  const auth = useSelector((state) => state?.auth);
  const routesFromStore = useSelector((state) => state?.route?.routes);
  const [defaultRoute, setDefaultRoute] = useState(DEFAULT_ROUTE);
  let authenticated = auth?.uid ? true : false;
  // let appConfig = useContext(CoreConfigContext);
  let appConfig = getConfigurationObject();

  React.useEffect(() => {
    appConfig?.wrappid?.backendUrl && dispatch(
      apiRequestAction(
        HTTP.GET,
        "/noauth/business/all/RoutePages",
        true,
        { _defaultFilter: encodeURIComponent(JSON.stringify({ authRequired: authenticated })) },
        GET_ROUTE_SUCCESS,
        GET_ROUTE_FAILURE
      )
    );

    let defaultRouteName = appConfig?.wrappid?.defaultRoute;

    if (defaultRouteName) {
      if (Object.keys(routesRegistry).includes(defaultRouteName)) {
        setDefaultRoute(routesRegistry[defaultRouteName]);
      } else if (routesFromStore?.filter((route) => route?.entityRef === defaultRouteName)?.length > 0) {
        setDefaultRoute(routesFromStore?.filter((route) => route?.entityRef === defaultRouteName)[0]);
      }
    }
  }, []);

  React.useEffect(() => {
    appConfig?.wrappid?.backendUrl && dispatch(
      apiRequestAction(
        HTTP.GET,
        "/noauth/business/all/RoutePages",
        true,
        { _defaultFilter: encodeURIComponent(JSON.stringify({ authRequired: authenticated })) },
        GET_ROUTE_SUCCESS,
        GET_ROUTE_FAILURE
      )
    );
  }, [authenticated]);

  useEffect(() => {
    let defaultRouteName = appConfig?.wrappid?.defaultRoute;

    if (defaultRouteName) {
      if (Object.keys(routesRegistry).includes(defaultRouteName)) {
        setDefaultRoute(routesRegistry[defaultRouteName]);
      } else if (routesFromStore?.filter((route) => route?.entityRef === defaultRouteName)?.length > 0) {
        setDefaultRoute(routesFromStore?.filter((route) => route?.entityRef === defaultRouteName)[0]);
      }
    }
  }, [appConfig,routesFromStore]);

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
      {[...Object.values((routesRegistry || {})), ...(routesFromStore || [])]?.map((route) => {
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
            page={{
              auth: false,
              comp: Logout,
            }}
          />
        }
      />

      {/* 500: Server Error */}
      <NativeDomRoute
        path="/error"
        element={
          <PageContainer
            page={{
              auth: false,
              comp: Error500,
            }}
          />
        }
      />

      {/* 404: Not Found */}
      <NativeDomRoute
        path="*"
        element={
          <PageContainer
            page={{
              auth: false,
              comp: Error404,
            }}
          />
        }
      />
    </NativeDomRoutes>
  );
}

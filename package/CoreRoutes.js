import React, { useContext, useEffect, useState } from "react";

// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";
import { useSelector } from "react-redux";

import CenteredBlankLayout from "./components/layouts/_system/CenteredBlankLayout";
import Logout from "./components/navigation/Logout";
import SplashComponent from "./components/navigation/SplashComponent";
import { CoreRoutesContext } from "./config/contextHandler";
import Error404 from "./error/Error404";
import Error500 from "./error/Error500";
import { CoreDomRoute, CoreDomRoutes } from "./helper/routerHelper";
import PageContainer from "./layout/PageContainer";

const DEFAULT_ROUTE = {
  Page        : { appComponent: SplashComponent.name, layout: CenteredBlankLayout.name },
  authRequired: false,
  entityRef   : "defaultAppRoute",
  url         : "defaultAppRoute"
};

export let globalAccessToken = null;
export let globalRefreshToken = null;
export let globalTokenRequested = null;
export let globalTokenRequestTimeStamp = null;

export default function CoreRoutes() {
  const { uid, accessToken, refreshToken } = useSelector((state) => state?.auth);
  
  const registeredRoutes = useContext(CoreRoutesContext);
  const { config } = React.useContext(WrappidDataContext);
  
  const [defaultRoute, setDefaultRoute] = useState(DEFAULT_ROUTE);
  const { tokenRequested, tokenRequestTimeStamp } = useSelector(
    (state) => state?.pendingRequests
  );
  let authenticated = uid && accessToken ? true : false;

  globalAccessToken = accessToken;
  globalRefreshToken = refreshToken;
  globalTokenRequested = tokenRequested;
  globalTokenRequestTimeStamp = tokenRequestTimeStamp;

  useEffect(() => {
    let defaultRouteName = (authenticated ? config?.defaultAuthRoute : config?.defaultRoute) || config?.defaultRoute || DEFAULT_ROUTE;

    if (defaultRouteName) {
      let defRouteArr = registeredRoutes?.filter((route) => route?.entityRef === defaultRouteName);

      if (defRouteArr?.length > 0) {
        setDefaultRoute(defRouteArr[0]);
      }
    }
  }, [config, registeredRoutes]);

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
      {[...registeredRoutes]?.map((route) => {
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

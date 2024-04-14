import React from "react";

// eslint-disable-next-line import/no-unresolved
import { useSelector } from "react-redux";

import CenteredBlankLayout from "./components/layouts/_system/CenteredBlankLayout";
import Logout from "./components/navigation/Logout";
import PageLoader from "./components/PageLoader";
import { CoreRoutesContext } from "./config/contextHandler";
import Error404 from "./error/Error404";
import Error500 from "./error/Error500";
import { CoreDomRoute, CoreDomRoutes } from "./helper/routerHelper";
import PageContainer from "./layout/PageContainer";

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
  const { accessToken, refreshToken } = useSelector((state) => state?.auth);
  
  const contextRoutes = React.useContext(CoreRoutesContext);
  
  const { tokenRequested, tokenRequestTimeStamp } = useSelector(
    (state) => state?.pendingRequests
  );

  globalAccessToken = accessToken;
  globalRefreshToken = refreshToken;
  globalTokenRequested = tokenRequested;
  globalTokenRequestTimeStamp = tokenRequestTimeStamp;

  return (
    <CoreDomRoutes>
      <CoreDomRoute
        key="core-default-route"
        exact
        path="/"
        element={
          <PageContainer
            route={DEFAULT_ROUTE} />
        }
        end
      />

      {/* App related routes */}
      {[...(Object.values(contextRoutes) || [])]?.map((route) => {
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

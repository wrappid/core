import React from "react";

// eslint-disable-next-line import/no-unresolved
import { useDispatch, useSelector } from "react-redux";

import { CoreRoutesContext } from "./config/contextHandler";
import { CoreDomRoute, CoreDomRoutes, coreUseNavigate } from "./helper/routerHelper";
import PageContainer from "./layout/PageContainer";

const DEFAULT_ROUTE = {
  Page        : { appComponent: "PageLoader", layout: "CenteredBlankLayout" },
  authRequired: false,
  entityRef   : "defaultAppRoute",
  url         : "defaultAppRoute"
};

export let globalAccessToken = null;
export let globalRefreshToken = null;
export let globalTokenRequested = null;
export let globalTokenRequestTimeStamp = null;

export default function CoreRoutes() {
  const navigate = coreUseNavigate();
  const dispatch = useDispatch();
  const { accessToken, refreshToken, redirect } = useSelector((state) => state?.auth || {});
  
  const contextRoutes = React.useContext(CoreRoutesContext);
  
  const { tokenRequested, tokenRequestTimeStamp } = useSelector(
    (state) => state?.pendingRequests
  );

  const authenticated = accessToken ? true : false;

  globalAccessToken = accessToken;
  globalRefreshToken = refreshToken;
  globalTokenRequested = tokenRequested;
  globalTokenRequestTimeStamp = tokenRequestTimeStamp;

  React.useEffect(() => {
    // eslint-disable-next-line etc/no-commented-out-code
    // if (authenticated && currentPage === Object.keys(contextRoutes).includes(defaultAuthenticatedRoute).url) {
    //   navigate(defaultAuthenticatedRoute);
    // }
    if (authenticated && redirect) {
      dispatch({ type: "RESET_AUTH_REDIRECT" });
      navigate("");
    }
  }, [authenticated, redirect]);

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
            route={{ Page: { appComponent: "Logout", layout: "CenteredBlankLayout" }, authRequired: true }}
          />
        }
      />

      {/* 500: Server Error */}
      <CoreDomRoute
        key="error-500"
        path="/error"
        element={
          <PageContainer
            route={{ Page: { appComponent: "Error500", layout: "CenteredBlankLayout" } }}
          />
        }
      />

      {/* 404: Not Found */}
      <CoreDomRoute
        key="error-404"
        path="*"
        element={
          <PageContainer
            route={{ Page: { appComponent: "Error404", layout: "CenteredBlankLayout" } }}
          />
        }
      />
    </CoreDomRoutes>
  );
}

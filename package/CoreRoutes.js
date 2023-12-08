import React, { useContext } from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeDomRoutes, NativeDomRoute } from "@wrappid/native";
// eslint-disable-next-line import/no-unresolved
import { getConfigurationObject } from "@wrappid/styles";
import { useDispatch, useSelector } from "react-redux";

import Logout from "./components/navigation/Logout";
import SplashComponent from "./components/navigation/SplashComponent";
import WrappidComponent from "./components/WrappidComponent";
import { HTTP } from "./config/constants";
import { ComponentRegistryContext } from "./config/contextHandler";
import Error404 from "./error/Error404";
import Error500 from "./error/Error500";
import PageContainer from "./layout/PageContainer";
import { apiRequestAction } from "./store/action/appActions";
import { GET_ROUTE_FAILURE, GET_ROUTE_SUCCESS } from "./store/types/appTypes";

export default function CoreRoutes(props) {
  const { routes } = props;
  const dispatch = useDispatch();
  const componentRegistry = useContext(ComponentRegistryContext);
  const auth = useSelector((state) => state?.auth);
  const _routes = useSelector((state) => state?.route?.routes);
  let authenticated = auth?.uid ? true : false;
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

  const defRoute = _routes?.find(route => route.url === appConfig?.wrappid?.defaultRoute);

  return (
    <NativeDomRoutes>
      
      {/* Splash cmponent or redirection component or loader page  */}
      <NativeDomRoute
        exact
        path="/"
        element={
          appConfig?.wrappid?.defaultRoute ? (
            <PageContainer
              page={{
                auth: false,
                comp: defRoute?.Page?.appComponent ? componentRegistry[defRoute?.Page?.appComponent]?.comp : WrappidComponent
              }} />
          ) : (
            <PageContainer
              page={{
                auth: false,
                comp: SplashComponent,
              }}
            />
          )
        }
      />

      {/* App related routes */}
      {[...Object.values((routes || {})), ...(_routes || [])]?.map((route) => {
        return (
          <NativeDomRoute
            key={route.url}
            exact
            path={"/" + route.url}
            element={<PageContainer page={""} route={route} />}
          />
        );
      })}

      {/* LOGOUT PAGE  */}
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

      {/* Error 500 */}
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

      {/* Not Found */}
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

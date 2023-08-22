import React from "react";

import {
  NativeDomRoutes,
  NativeDomRoute
} from "@wrappid/styled-components";
import { useDispatch, useSelector } from "react-redux";

import Logout from "./components/navigation/custom/Logout";
import SplashComponent from "./components/navigation/custom/SplashComponent";
import { HTTP } from "./config/constants";
import Error404 from "./error/Error404";
import Error500 from "./error/Error500";
import PageContainer from "./layout/PageContainer";
import { apiRequestAction } from "./store/action/appActions";
import { GET_ROUTE_FAILURE, GET_ROUTE_SUCCESS } from "./store/types/appTypes";

export default function CoreRoutes() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state?.auth);
  const _routes = useSelector((state) => state?.route?.routes);
  let authenticated = auth?.uid ? true : false;

  React.useEffect(() => {
    dispatch(
      apiRequestAction(
        HTTP.GET,
        "/noauth/business/all/RoutePages",
        true,
        {
          _defaultFilter: encodeURIComponent(
            JSON.stringify({ authRequired: authenticated })
          ),
        },
        GET_ROUTE_SUCCESS,
        GET_ROUTE_FAILURE
      )
    );
  }, []);

  React.useEffect(() => {
    dispatch(
      apiRequestAction(
        HTTP.GET,
        "/noauth/business/all/RoutePages",
        true,
        {
          _defaultFilter: encodeURIComponent(
            JSON.stringify({ authRequired: authenticated })
          ),
        },
        GET_ROUTE_SUCCESS,
        GET_ROUTE_FAILURE
      )
    );
  }, [authenticated]);

  return (
    <NativeDomRoutes>
      {/* App related routes */}
      {_routes?.map((route) => {
        return (
          <NativeDomRoute
            key={route.url}
            exact
            path={"/" + route.url}
            element={<PageContainer page={""} route={route} />}
          />
        );
      })}

      {/* Splash cmponent or redirection component or loader page  */}
      <NativeDomRoute
        exact
        path="/"
        element={
          <PageContainer
            page={{
              auth: false,
              comp: SplashComponent,
            }}
          />
        }
      />

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

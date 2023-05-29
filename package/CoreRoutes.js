import React from "react";
import {
  NativeDomRoutes,
  NativeDomRoute,
  NativeDomNavigate,
} from "@wrappid/styled-components";
import { urls } from "./config/constants";
import Error404 from "./error/Error404";
import PageContainer from "./layout/PageContainer";
import Error500 from "./error/Error500";
import { useDispatch, useSelector } from "react-redux";
import { apiRequestAction } from "./store/action/appActions";
import { HTTP } from "./config/constants";
import { GET_ROUTE_FAILURE, GET_ROUTE_SUCCESS } from "./store/types/appTypes";
import SplashComponent from "./components/navigation/custom/SplashComponent";

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

  React.useEffect(() => {
    console.log("-----------------------------------------------");
    console.log(_routes);
    console.log("-----------------------------------------------");
  }, [_routes]);

  console.log("PROCESS ENV ", process.env);
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

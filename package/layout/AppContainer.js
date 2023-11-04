import React, { useState } from "react";

// eslint-disable-next-line import/no-unresolved
import { nativeUseLocation, NativeAppContainer } from "@wrappid/native";
import { useDispatch, useSelector } from "react-redux";

import CoreAppBar from "./../components/surfaces/CoreAppBar";
import CoreDrawer from "./../components/surfaces/CoreDrawer";
import CoreFooter from "./../components/surfaces/CoreFooter";
import ComponentRegistry from "./../config/ComponentRegistry";
import ErrorBoundary from "./../middleware/ErrorBoundary";
import CoreRequestProgressBar from "../components/feedback/CoreRequestProgressBar";
import {
  GET_ROLE_PERMISSIONS_API,
  GET_SETTINGS_META_API,
  GET_USER_SETTINGS,
  UPDATE_USER_SETTINGS
} from "../config/api";
import { HTTP, SMALL_WINDOW_WIDTH, userSettingsConstants } from "../config/constants";
import { CoreRouteRegistryContext } from "../config/contextHandler";
import { apiRequestAction } from "../store/action/appActions";
import { toggleLeftMenuState } from "../store/action/menuAction";
import { GET_ROLE_PERMISSION_ERROR, GET_ROLE_PERMISSION_SUCCESS } from "../store/types/authTypes";
import { BUILD_MENU_ROLE_PERMISSIONS } from "../store/types/menuTypes";
import {
  REMOVE_PENDING_REQUESTS,
  RECALL_TOKEN_REJUVINDATED
} from "../store/types/pendingRequestTypes";
import { SELECT_OPTION_SUCCESS } from "../store/types/selectOptionsTypes";
import {
  GET_SETTING_META_ERROR,
  GET_SETTING_META_SUCCESS,
  GET_USER_SETTINGS_ERROR,
  GET_USER_SETTINGS_SUCCESS,
  USER_SETTINGS_UPDATE_ERROR,
  USER_SETTINGS_UPDATE_SUCCESS
} from "../store/types/settingsTypes";
import CoreClasses from "../styles/CoreClasses";

export let globalAccessToken = null;
export let globalRefreshToken = null;
export let globalTokenRequested = null;
export let globalTokenRequestTimeStamp = null;

function AppContainer(props) {
  const windowWidth = window.innerWidth;
  const dispatch = useDispatch();
  const location = nativeUseLocation();
  const auth = useSelector((state) => state?.auth);
  const accessToken = useSelector((state) => state?.auth?.accessToken);
  const refreshToken = useSelector((state) => state?.auth?.refreshToken);
  const tokenRequested = useSelector((state) => state?.pendingRequests?.tokenRequested);
  const tokenRequestTimeStamp = useSelector(
    (state) => state?.pendingRequests?.tokenRequestTimeStamp
  );
  const leftMenuOpen = useSelector((state) => state?.menu?.leftMenuOpen);
  const [leftMenuOpenSmallScreen, setLeftDrawerSmallScreen] = useState(false);
  const currentPendingRequest = useSelector((state) => state.pendingRequests.pendingRequest);
  const recallState = useSelector((state) => state?.pendingRequests?.recall);
  const _routes = useSelector((state) => state?.route?.routes);
  const [routeRegistry, setRouteRegistry] = useState({});

  // user settings
  // const reload = useSelector((state) => state?.settings?.reload);

  React.useEffect(() => {
    if (accessToken) {
      dispatch(
        apiRequestAction(
          HTTP.GET,
          GET_USER_SETTINGS,
          true,
          {},
          GET_USER_SETTINGS_SUCCESS,
          GET_USER_SETTINGS_ERROR
        )
      );
      dispatch(
        apiRequestAction(
          HTTP.GET,
          GET_SETTINGS_META_API,
          true,
          {},
          GET_SETTING_META_SUCCESS,
          GET_SETTING_META_ERROR
        )
      );
    }
  }, [accessToken]);

  /**
   * @todo commenting reload dependency for now
   */
  // }, [reload, accessToken]);

  React.useEffect(() => {
    if (accessToken)
      dispatch(
        apiRequestAction(
          HTTP.GET,
          GET_ROLE_PERMISSIONS_API,
          true,
          {},
          [BUILD_MENU_ROLE_PERMISSIONS, GET_ROLE_PERMISSION_SUCCESS],
          GET_ROLE_PERMISSION_ERROR
        )
      );
  }, [auth?.uid, accessToken]);

  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    if (hasError) {
      setHasError(false);
    }
  }, [location]);

  const handleDrawer = () => {
    if (windowWidth <= SMALL_WINDOW_WIDTH) {
      setLeftDrawerSmallScreen(!leftMenuOpenSmallScreen);
    } else dispatch(toggleLeftMenuState());
    dispatch(
      apiRequestAction(
        HTTP.POST,
        UPDATE_USER_SETTINGS,
        true,
        {
          name : userSettingsConstants.LEFT_DRAWER_STATE,
          value: { open: !leftMenuOpen },
        },
        USER_SETTINGS_UPDATE_SUCCESS,
        USER_SETTINGS_UPDATE_ERROR
      )
    );
  };

  React.useEffect(() => {
    if (currentPendingRequest && recallState === RECALL_TOKEN_REJUVINDATED) {
      dispatch(
        apiRequestAction(
          currentPendingRequest.method,
          currentPendingRequest.endpoint,
          currentPendingRequest.authRequired,
          currentPendingRequest.data,
          currentPendingRequest.successType,
          currentPendingRequest.errorType,
          currentPendingRequest.localAction,
          currentPendingRequest.includeFile,
          currentPendingRequest.file,
          currentPendingRequest.formId,
          currentPendingRequest.reload,
          currentPendingRequest.reduxData,
          currentPendingRequest.pushSnack,
          currentPendingRequest.loadingType,
          currentPendingRequest.resetLoadingType
        )
      );
      dispatch({ type: REMOVE_PENDING_REQUESTS });
    }
  });

  React.useEffect(() => {
    let components =
      ComponentRegistry &&
      Object.keys(ComponentRegistry).map((key) => {
        return { id: key, label: key, value: key };
      });

    dispatch({
      payload: { data: components, key: "ComponentRegistry" },
      type   : SELECT_OPTION_SUCCESS,
    });
  }, []);

  React.useEffect(() => {
    let registry = {};

    for (let i = 0; i < _routes?.length; i++) {
      registry[_routes[i].entityRef] = _routes[i].url;
    }
    setRouteRegistry(registry);
  }, [_routes]);

  const getAppBar = () => {
    return auth?.uid ? <CoreAppBar handleDrawer={handleDrawer} routes={_routes} /> : null;
  };

  const getFooter = () => {
    return <CoreFooter />;
  };

  const getLeftDrawer = () => {
    return auth?.uid && auth?.accessToken ? (
      <CoreDrawer
        open={windowWidth <= SMALL_WINDOW_WIDTH ? leftMenuOpenSmallScreen : leftMenuOpen}
        toggleDrawer={handleDrawer}
      />
    ) : null;
  };

  globalAccessToken = accessToken;
  globalRefreshToken = refreshToken;
  globalTokenRequested = tokenRequested;
  globalTokenRequestTimeStamp = tokenRequestTimeStamp;

  return (
    <CoreRouteRegistryContext.Provider value={{ ...routeRegistry }}>
      <NativeAppContainer
        appBar={getAppBar}
        leftDrawer={getLeftDrawer}
        footer={getFooter}
        coreClasses={CoreClasses}
        uid={auth?.uid}
      >
        <CoreRequestProgressBar />

        <ErrorBoundary hasError={hasError} setHasError={setHasError}>
          {props.children}
        </ErrorBoundary>
      </NativeAppContainer>
    </CoreRouteRegistryContext.Provider>
  );
}

export default AppContainer;

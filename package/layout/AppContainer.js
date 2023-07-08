import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  nativeUseLocation,
  NativeAppContainer,
} from "@wrappid/styled-components";

import ComponentRegistry from "./../config/ComponentRegistry";
import ErrorBoundary from "./../middleware/ErrorBoundary";
import CoreAppBar from "./../components/surfaces/CoreAppBar";
import CoreDrawer from "./../components/surfaces/CoreDrawer";
import CoreRightDrawer from "./../components/surfaces/CoreRightDrawer";
import CoreFooter from "./../components/surfaces/CoreFooter";
import {
  GET_ROLE_PERMISSIONS_API,
  GET_SETTINGS_META_API,
  GET_USER_SETTINGS,
  UPDATE_USER_SETTINGS,
} from "../config/api";
import {
  HTTP,
  SMALL_WINDOW_WIDTH,
  userSettingsConstants,
} from "../config/constants";
import { apiRequestAction } from "../store/action/appActions";
import { toggleLeftMenuState } from "../store/action/menuAction";
import {
  REMOVE_PENDING_REQUESTS,
  RECALL_TOKEN_REJUVINDATED,
} from "../store/types/pendingRequestTypes";
import { SELECT_OPTION_SUCCESS } from "../store/types/selectOptionsTypes";
import {
  GET_SETTING_META_ERROR,
  GET_SETTING_META_SUCCESS,
  GET_USER_SETTINGS_ERROR,
  GET_USER_SETTINGS_SUCCESS,
  USER_SETTINGS_UPDATE_ERROR,
  USER_SETTINGS_UPDATE_SUCCESS,
} from "../store/types/settingsTypes";
import { BUILD_MENU_ROLE_PERMISSIONS } from "../store/types/menuTypes";
import {
  GET_ROLE_PERMISSION_SUCCESS,
  GET_ROLE_PERMISSION_ERROR,
} from "../modules/auth/types/authTypes";
import CoreClasses from "../styles/CoreClasses";
import CoreRequestProgressBar from "../components/feedback/CoreRequestProgressBar";

export var globalAccessToken = null;
export var globalRefreshToken = null;
export var globalTokenRequested = null;
export var globalTokenRequestTimeStamp = null;

function AppContainer(props) {
  const windowWidth = window.innerWidth;
  const dispatch = useDispatch();
  const location = nativeUseLocation();
  const auth = useSelector((state) => state?.auth);
  const accessToken = useSelector((state) => state?.auth?.accessToken);
  const refreshToken = useSelector((state) => state?.auth?.refreshToken);
  const tokenRequested = useSelector(
    (state) => state?.pendingRequests?.tokenRequested
  );
  const tokenRequestTimeStamp = useSelector(
    (state) => state?.pendingRequests?.tokenRequestTimeStamp
  );
  const leftMenuOpen = useSelector((state) => state?.menu?.leftMenuOpen);
  const [leftMenuOpenSmallScreen, setLeftDrawerSmallScreen] = useState(false);
  const currentPendingRequest = useSelector(
    (state) => state.pendingRequests.pendingRequest
  );
  const recallState = useSelector((state) => state?.pendingRequests?.recall);

  // user settings
  const reload = useSelector((state) => state?.settings?.reload);

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
  }, [auth.uid, accessToken]);

  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    if (hasError) {
      setHasError(false);
    }
    console.log(location);
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
          name: userSettingsConstants.LEFT_DRAWER_STATE,
          value: { open: !leftMenuOpen },
        },
        USER_SETTINGS_UPDATE_SUCCESS,
        USER_SETTINGS_UPDATE_ERROR
      )
    );
  };

  React.useEffect(() => {
    if (currentPendingRequest && recallState === RECALL_TOKEN_REJUVINDATED) {
      console.log("---REJUVINATED CALL------------", currentPendingRequest);
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
      type: SELECT_OPTION_SUCCESS,
    });
  }, []);

  const getAppBar = () => {
    return auth?.uid ? <CoreAppBar handleDrawer={handleDrawer} /> : null;
  };

  const getFooter = () => {
    return <CoreFooter />;
  };

  const getLeftDrawer = () => {
    return auth?.uid && auth?.accessToken ? (
      <CoreDrawer
        open={
          windowWidth <= SMALL_WINDOW_WIDTH
            ? leftMenuOpenSmallScreen
            : leftMenuOpen
        }
        toggleDrawer={handleDrawer}
      />
    ) : null;
  };

  globalAccessToken = accessToken;
  globalRefreshToken = refreshToken;
  globalTokenRequested = tokenRequested;
  globalTokenRequestTimeStamp = tokenRequestTimeStamp;

  return (
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
  );
}

export default AppContainer;

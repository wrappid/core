import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  nativeUseLocation,
  NativeCssBaseline,
} from "@wrappid/styled-components";

import { ComponentRegistry } from "./../config/ComponentRegistry";
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
// import { RECALL_TOKEN_REJUVINDATED } from "../store/reducers/pendingRequestReducer";
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
import CoreBox from "../components/layouts/CoreBox";
import { getCoreAccessToken } from "../middleware/coreTokenProvider";
import { APP_PLATFORM, WEB_PLATFORM, detectPlatform } from "../utils/themeUtil";
import CoreClasses from "../styles/CoreClasses";

function AppContainer(props) {
  const windowWidth = window.innerWidth;
  const dispatch = useDispatch();
  const location = nativeUseLocation();
  const auth = useSelector((state) => state?.auth);
  const leftMenuOpen = useSelector((state) => state?.menu?.leftMenuOpen);
  const [leftMenuOpenSmallScreen, setLeftDrawerSmallScreen] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [platform, setPlatform] = useState(WEB_PLATFORM);
  const currentPendingRequest = null;
  // useSelector(
  //   (state) => state.pendingRequests.pendingRequest
  // );
  // const pendingRequests = useSelector((state) => state.pendingRequests.requests);
  const recallState = useSelector((state) => state?.pendingRequests?.recall);

  // user settings
  const reload = useSelector((state) => state?.settings?.reload);

  /**
   * @todo getCeesToken function and and useeffect to call that canbe removed
   *
   * @description
   * this piece of code is used because of the inconsistency beteen accessToken in
   * nativestorage and reducer. Following functionality get accesstoken from native
   * storage and calls multiple times till it finds it.
   */
  const getAccessToken = async () => {
    let t = await getCoreAccessToken();
    if (t && typeof t === "string" && t !== "null") {
      console.log(
        "%%%%%%%%%%%%%%%%%%%\nACCESS TOKEN FOUND\n%%%%%%%%%%%%%%%%%%%%%%%%%%",
        t
      );
      setAccessToken(t);
    }
  };

  React.useEffect(() => {
    console.log("%%%%%%%%%%%%%%%%%%%\n OUTSIDE\n%%%%%%%%%%%%%%%%%%%%%%%%%%");
    if (auth && auth.uid && !accessToken) {
      console.log(
        "%%%%%%%%%%%%%%%%%%%\nACCESS TOKEN CALL\n%%%%%%%%%%%%%%%%%%%%%%%%%%"
      );
      getAccessToken();
    }
  });
  React.useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

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

  /**
   * @todo snake message ommitted as it was configured from app reducer
   * if needed have to be configured from other reducer
   */

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

  return (
    <CoreBox
      styleClasses={[
        CoreClasses.LAYOUT.FULL_HEIGHT,
        CoreClasses.LAYOUT.FLEXBOX,
      ]}
    >
      <NativeCssBaseline />

      {auth.uid && (
        <>
          <CoreAppBar handleDrawer={handleDrawer} />

          {auth.accessToken && platform === WEB_PLATFORM && (
            <CoreDrawer
              open={
                windowWidth <= SMALL_WINDOW_WIDTH
                  ? leftMenuOpenSmallScreen
                  : leftMenuOpen
              }
            />
          )}
        </>
      )}

      <CoreBox
        component="main"
        styleClasses={
          auth?.uid
            ? //this is done because CONTENT_CONTAINER has a top margin 56 for app bar in web
              //which is not needed in app
              platform === APP_PLATFORM
              ? [CoreClasses.LAYOUT.LOGGED_OUT_CONTENT_CONTAINER]
              : [CoreClasses.LAYOUT.CONTENT_CONTAINER]
            : [CoreClasses.LAYOUT.LOGGED_OUT_CONTENT_CONTAINER]
        }
      >
        {auth.accessToken && platform === APP_PLATFORM && (
          <CoreDrawer
            open={
              windowWidth <= SMALL_WINDOW_WIDTH
                ? leftMenuOpenSmallScreen
                : leftMenuOpen
            }
            toggleDrawer={handleDrawer}
          />
        )}
        <CoreRightDrawer open={false} />

        <ErrorBoundary hasError={hasError} setHasError={setHasError}>
          {props.children}
        </ErrorBoundary>
        <CoreFooter />
      </CoreBox>
    </CoreBox>
  );
}

export default AppContainer;

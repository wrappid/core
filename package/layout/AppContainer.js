import React, { useState } from "react";

import { CssBaseline } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { ComponentRegistry } from "./../config/ComponentRegistry";
import ErrorBoundary from "./../middleware/ErrorBoundary";
import CoreAppBar from "./../components/surfaces/CoreAppBar";
import CoreDrawer from "./../components/surfaces/CoreDrawer";
import CoreRightDrawer from "./../components/surfaces/CoreRightDrawer";
import CoreFooter from "./../components/surfaces/CoreFooter";
import { GET_USER_SETTINGS, UPDATE_USER_SETTINGS } from "../config/api";
import {
  HTTP_GET,
  HTTP_POST,
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
  GET_USER_SETTINGS_ERROR,
  GET_USER_SETTINGS_SUCCESS,
  USER_SETTINGS_UPDATE_ERROR,
  USER_SETTINGS_UPDATE_SUCCESS,
} from "../store/types/settingsTypes";
import CoreBox from "../components/layouts/CoreBox";
import { CoreClasses } from "@wrappid/styles";

function AppContainer(props) {
  const windowWidth = window.innerWidth;
  const dispatch = useDispatch();
  const location = useLocation();
  const auth = useSelector((state) => state?.auth);
  const leftMenuOpen = useSelector((state) => state?.menu?.leftMenuOpen);
  const [leftMenuOpenSmallScreen, setLeftDrawerSmallScreen] = useState(false);
  const currentPendingRequest = null;
  // useSelector(
  //   (state) => state.pendingRequests.pendingRequest
  // );
  // const pendingRequests = useSelector((state) => state.pendingRequests.requests);
  const recallState = useSelector((state) => state?.pendingRequests?.recall);

  // user settings
  const reload = useSelector((state) => state?.settings?.reload);

  React.useEffect(() => {
    dispatch(
      apiRequestAction(
        HTTP_GET,
        GET_USER_SETTINGS,
        true,
        {},
        GET_USER_SETTINGS_SUCCESS,
        GET_USER_SETTINGS_ERROR
      )
    );
  }, [reload]);

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
        HTTP_POST,
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
      <CssBaseline />

      {auth.uid && (
        <>
          <CoreAppBar handleDrawer={handleDrawer} />

          {auth.accessToken && (
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
            ? [CoreClasses.LAYOUT.CONTENT_CONTAINER]
            : [CoreClasses.LAYOUT.LOGGED_OUT_CONTENT_CONTAINER]
        }
      >
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

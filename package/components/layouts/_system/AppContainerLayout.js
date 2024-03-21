import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeAppContainer, nativeUseLocation } from "@wrappid/native";
// eslint-disable-next-line import/no-unresolved
import { SMALL_WINDOW_WIDTH } from "@wrappid/styles";
import { useDispatch, useSelector } from "react-redux";

import {
  GET_ROLE_PERMISSIONS_API,
  GET_SETTINGS_META_API,
  GET_USER_SETTINGS,
  UPDATE_USER_SETTINGS
} from "../../../config/api";
import { HTTP, userSettingsConstants } from "../../../config/constants";
import CoreLayoutPlaceholder from "../../../layout/CoreLayoutPlaceholder";
import ComponentsRegistry from "../../../registry/ComponentsRegistry";
import { apiRequestAction } from "../../../store/action/appActions";
import { toggleLeftMenuState } from "../../../store/action/menuAction";
import { GET_ROLE_PERMISSION_ERROR, GET_ROLE_PERMISSION_SUCCESS } from "../../../store/types/authTypes";
import { BUILD_MENU_ROLE_PERMISSIONS } from "../../../store/types/menuTypes";
import {
  RECALL_TOKEN_REJUVINDATED,
  REMOVE_PENDING_REQUESTS
} from "../../../store/types/pendingRequestTypes";
import { SELECT_OPTION_SUCCESS } from "../../../store/types/selectOptionsTypes";
import {
  GET_SETTING_META_ERROR,
  GET_SETTING_META_SUCCESS,
  GET_USER_SETTINGS_ERROR,
  GET_USER_SETTINGS_SUCCESS,
  USER_SETTINGS_UPDATE_ERROR,
  USER_SETTINGS_UPDATE_SUCCESS
} from "../../../store/types/settingsTypes";
import CoreClasses from "../../../styles/CoreClasses";
import CoreRequestProgressBar from "../../feedback/CoreRequestProgressBar";
import CoreAppBar from "../../surfaces/CoreAppBar";
import CoreDrawer from "../../surfaces/CoreDrawer";
import CoreFooter from "../../surfaces/CoreFooter";

export default function AppContainerLayout() {
  const dispatch = useDispatch();
  const location = nativeUseLocation();
  
  // eslint-disable-next-line etc/no-commented-out-code
  // const { leftMenuOpen } = useSelector((state) => state?.menu);
  const leftMenuOpen = true;
  const { routes: _routes } = useSelector((state) => state?.route);
  const { recall: recallState, pendingRequest: currentPendingRequest } = useSelector((state) => state?.pendingRequests);
  const { uid, accessToken } = useSelector((state) => state.auth);
  
  const [leftMenuOpenSmallScreen, setLeftDrawerSmallScreen] = React.useState(false);
  
  const windowWidth = window.innerWidth;
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
  }, [uid, accessToken]);

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
      ComponentsRegistry &&
      Object.keys(ComponentsRegistry).map((key) => {
        return { id: key, label: key, value: key };
      });

    dispatch({
      payload: { data: components, key: "ComponentsRegistry" },
      type   : SELECT_OPTION_SUCCESS,
    });
  }, []);

  const getAppBar = () => {
    return uid ? <CoreAppBar handleDrawer={handleDrawer} routes={_routes} /> : null;
  };
  const getFooter = () => {
    return <CoreFooter />;
  };
  const getLeftDrawer = () => {
    return uid && accessToken ? (
      <CoreDrawer
        open={windowWidth <= SMALL_WINDOW_WIDTH ? leftMenuOpenSmallScreen : leftMenuOpen}
        toggleDrawer={handleDrawer}
      />
    ) : null;
  };

  return (
    <>
      {/* eslint-disable-next-line etc/no-commented-out-code */}
      <NativeAppContainer
        appBar={getAppBar}
        leftDrawer={getLeftDrawer}
        footer={getFooter}
        coreClasses={CoreClasses}
        uid={uid}
      >
        <CoreRequestProgressBar />

        <CoreLayoutPlaceholder id={AppContainerLayout.PLACEHOLDER.CONTENT} />

      </NativeAppContainer>

    </>
  );
}

AppContainerLayout.PLACEHOLDER = { CONTENT: "content" };

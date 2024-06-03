import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativePageContainer, nativeUseLocation } from "@wrappid/native";
// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";
import { useDispatch, useSelector } from "react-redux";

import CoreDialog from "../components/feedback/CoreDialog";
import AppContainerLayout from "../components/layouts/_system/AppContainerLayout";
import CoreModal from "../components/utils/CoreModal";
import CoreNetworkStatus from "../components/utils/CoreNetworkStatus";
import {
  ComponentRegistryContext,
  CoreDialogContext,
  CoreResourceContext,
  FunctionsRegistryContext,
  ValidationsRegistryContext
} from "../config/contextHandler";
import DevelopmentInfo from "../development/DevelopmentInfo";
import { CoreDomNavigate } from "../helper/routerHelper";
import ErrorBoundary from "../middleware/ErrorBoundary";
import { RESET_LOADING } from "../store/types/appTypes";
import { SAVE_EXPIRED_SESSION, SESSION_RECALLED } from "../store/types/authTypes";
import { RESET_FROM_STATE, UPDATE_HELPER_FLAG } from "../store/types/formTypes";
import CoreClasses from "../styles/CoreClasses";
// eslint-disable-next-line import/order
import LayoutManager from "./LayoutManager";
import CoreThemeProvider from "../theme/CoreThemeProvider";

export let mergedComponentRegistry = {};
export let mergedResourceRegistry = {};
export let functionsRegistry = {};
export let validationsRegistry = {};
export let formStore = {};

export default function PageContainer(props) {
  const dispatch = useDispatch();
  const location = nativeUseLocation();
  const { config, themes } = React.useContext(WrappidDataContext);
  const { defaultLayout, defaultAuthenticatedLayout } = config;

  /**
   * Error related states
   */
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    if (hasError) {
      setHasError(false);
    }
  }, [location]);

  mergedComponentRegistry = React.useContext(ComponentRegistryContext);
  mergedResourceRegistry = React.useContext(CoreResourceContext);
  functionsRegistry = React.useContext(FunctionsRegistryContext);
  validationsRegistry = React.useContext(ValidationsRegistryContext);

  // -- console.log("mergedComponentRegistry", mergedComponentRegistry, mergedResourceRegistry);
  const { uid, sessionExpired, sessionDetail } = useSelector((state) => state?.auth || {});
  const { /* -- showHelperText = true, */ helperButtonFlag = true, rawForm, rawFormStatus } = useSelector(
    (state) => state?.forms
  );

  const [dialog, setDialog] = React.useState({});
  const dialogStates = { dialog, setDialog };

  formStore = { rawForm, rawFormStatus };

  const { route = { Page: { appComponent: "", schema: {} } } } = props;

  React.useEffect(()=>{
    dispatch({ type: RESET_FROM_STATE });
  }, [sessionExpired]);

  React.useEffect(() => {
    if (sessionExpired && !sessionDetail) {
      dispatch({
        payload: {
          location,
          userId: uid,
        },
        type: SAVE_EXPIRED_SESSION,
      });
      dispatch({ type: RESET_LOADING });
    }

    if (
      sessionExpired &&
      sessionDetail &&
      uid &&
      location.pathname === sessionDetail?.location?.pathname
    ) {
      dispatch({ type: SESSION_RECALLED });
    }
  }, []);

  React.useEffect(() => {
    // -- console.log("LOCATION SAVE______", location);
    dispatch({
      payload: { helperButtonFlag: false },
      type   : UPDATE_HELPER_FLAG,
    });
  }, []);

  React.useEffect(() => {
    // -- console.log("Current state of page container's helperButtonFlag = ", helperButtonFlag);
  }, [helperButtonFlag]);

  /**
   * This function will return theme based on the route JSON schema
   * 
   * @returns themeID
  */
  // eslint-disable-next-line no-unused-vars
  const pageTheme = () => {
    if (themes[route?.Page?.theme]) {
      return route?.Page?.theme;
    } else {
      return undefined;
    }
  };
  /**
   * This function will return layout component based on the route JSON schema
   * 
   * @returns Layout Component
  */
  // eslint-disable-next-line no-unused-vars
  const pageLayout = () => {
    if (mergedComponentRegistry[route?.Page?.layout]?.layout) {
      return route?.Page?.layout;
    } else {
      return (uid ? defaultAuthenticatedLayout : defaultLayout) || AppContainerLayout.name;
    }
  };
  /**
   * This function will return page component based on the route JSON schema
   * 
   * @returns Page Component
   */
  const pageChild = () => {
    if (route?.Page?.appComponent) {
      return route?.Page?.appComponent;
    } else {
      return undefined;
    }
  };

  return sessionExpired && !uid && route?.authRequired ? (
    <CoreDomNavigate to="/" replace={true} />
  ) : (
    <>
      {/* <CoreThemeProvider themeID={pageTheme()}> */}
      <ErrorBoundary hasError={hasError} setHasError={setHasError}>

        <CoreThemeProvider themeID={route?.Page?.theme}>
          <CoreNetworkStatus/>

          <NativePageContainer
            uid={uid}
            route={route}
            coreClasses={CoreClasses}>
            <CoreModal open={true} />

            <CoreDialogContext.Provider value={dialogStates}>
              <LayoutManager key={pageLayout() + "-" + pageChild()} pageName={pageChild()} layoutName={pageLayout()} />

              {/** @todo testing purposes */}
              {/* eslint-disable-next-line etc/no-commented-out-code */}
              {/* <CoreComponent componentName={pageChild()} /> */}
                
              <CoreDialog />
            </CoreDialogContext.Provider>
          </NativePageContainer>
        </CoreThemeProvider>
      </ErrorBoundary>

      <DevelopmentInfo />

      {/* </CoreThemeProvider> */}
    </>
  );
}

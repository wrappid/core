import React, { useContext } from "react";

// eslint-disable-next-line import/no-unresolved
import { NativePageContainer, nativeUseLocation } from "@wrappid/native";
// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";
import { useDispatch, useSelector } from "react-redux";

import {
  ComponentRegistryContext,
  CoreDialogContext,
  CoreResourceContext,
  FunctionsRegistryContext,
  ValidationsRegistryContext
} from "../../../config/contextHandler";
import DevelopmentInfo from "../../../development/DevelopmentInfo";
import { CoreDomNavigate } from "../../../helper/routerHelper";
import ErrorBoundary from "../../../middleware/ErrorBoundary";
import { RESET_LOADING } from "../../../store/types/appTypes";
import { SAVE_EXPIRED_SESSION, SESSION_RECALLED } from "../../../store/types/authTypes";
import { UPDATE_HELPER_FLAG } from "../../../store/types/formTypes";
import CoreClasses from "../../../styles/CoreClasses";
import CoreDialog from "../../feedback/CoreDialog";
import CoreModal from "../../utils/CoreModal";
import OnlineStatusSnackbar from "../../utils/OnlineStatusSnackbar";
// eslint-disable-next-line import/order
import LayoutManager from "../../../layout/core/LayoutManager";

export let mergedComponentRegistry = {};
export let mergedResourceRegistry = {};
export let functionsRegistry = {};
export let validationsRegistry = {};
export let formStore = {};

export default function PageContainer(props) {
  const dispatch = useDispatch();
  const location = nativeUseLocation();
  const { config } = React.useContext(WrappidDataContext);
  const { defaultLayout = "BlankLayout", defaultAuthenticatedLayout = "BlankLayout" } = config;

  /**
   * Error related states
   */
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    if (hasError) {
      setHasError(false);
    }
  }, [location]);

  mergedComponentRegistry = useContext(ComponentRegistryContext);
  mergedResourceRegistry = useContext(CoreResourceContext);
  functionsRegistry = useContext(FunctionsRegistryContext);
  validationsRegistry = useContext(ValidationsRegistryContext);

  // -- console.log("mergedComponentRegistry", mergedComponentRegistry, mergedResourceRegistry);
  const auth = useSelector((state) => state.auth);
  const { /* -- showHelperText = true, */ helperButtonFlag = true, rawForm, rawFormStatus } = useSelector(
    (state) => state.forms
  );

  const [dialog, setDialog] = React.useState({});
  const dialogStates = { dialog, setDialog };

  formStore = { rawForm, rawFormStatus };

  const { route = { Page: { appComponent: "", schema: {} } } } = props;

  React.useEffect(() => {
    if (auth?.sessionExpired && !auth?.sessionDetail) {
      dispatch({
        payload: {
          location,
          userId: auth.uid,
        },
        type: SAVE_EXPIRED_SESSION,
      });
      dispatch({ type: RESET_LOADING });
    }

    if (
      auth?.sessionExpired &&
      auth?.sessionDetail &&
      auth?.uid &&
      location.pathname === auth?.sessionDetail?.location?.pathname
    ) {
      dispatch({ type: SESSION_RECALLED });
    }
  });

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
   * This function will return layout component based on the route JSON schema
   * 
   * @returns Layout Component
  */
  const pageLayout = () => {
    if (mergedComponentRegistry[route?.Page?.layout]?.layout) {
      return route?.Page?.layout;
    } else {
      return (auth?.uid ? defaultAuthenticatedLayout : defaultLayout) || undefined;
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

  return auth?.sessionExpired && !auth?.uid && route?.authRequired ? (
    <CoreDomNavigate to="/" replace={true} />
  ) : (
    <>
      <ErrorBoundary hasError={hasError} setHasError={setHasError}>
      </ErrorBoundary>

      <OnlineStatusSnackbar/>

      <NativePageContainer
        uid={auth?.uid}
        route={route}
        coreClasses={CoreClasses}>
        <CoreModal open={true} />

        <CoreDialogContext.Provider value={dialogStates}>
          <LayoutManager pageName={pageChild()} layoutName={pageLayout()} />

          <CoreDialog />
        </CoreDialogContext.Provider>
      </NativePageContainer>

      <DevelopmentInfo />
    </>
  );
}

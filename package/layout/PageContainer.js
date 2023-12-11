import React, { useState, useContext } from "react";

// eslint-disable-next-line import/no-unresolved
import { nativeUseLocation, NativePageContainer } from "@wrappid/native";
import { useDispatch, useSelector } from "react-redux";

import CoreComponent from "../components/CoreComponent";
import CoreDialog from "../components/feedback/CoreDialog";
import CoreModal from "../components/utils/CoreModal";
import {
  ComponentRegistryContext,
  CoreDialogContext,
  CoreResourceContext,
  FunctionsRegistryContext,
  ValidationsRegistryContext
} from "../config/contextHandler";
import Error404 from "../error/Error404";
import { CoreDomNavigate } from "../helper/routerHelper";
import { RESET_LOADING } from "../store/types/appTypes";
import { SAVE_EXPIRED_SESSION, SESSION_RECALLED } from "../store/types/authTypes";
import { UPDATE_HELPER_FLAG } from "../store/types/formTypes";
import CoreClasses from "../styles/CoreClasses";

export let mergedComponentRegistry = {};
export let mergedResourceRegistry = {};
export let functionsRegistry = {};
export let validationsRegistry = {};
export let formStore = {};

export default function PageContainer(props) {
  const dispatch = useDispatch();
  let location = nativeUseLocation();

  mergedComponentRegistry = useContext(ComponentRegistryContext);
  mergedResourceRegistry = useContext(CoreResourceContext);
  functionsRegistry = useContext(FunctionsRegistryContext);
  validationsRegistry = useContext(ValidationsRegistryContext);

  // -- console.log("mergedComponentRegistry", mergedComponentRegistry, mergedResourceRegistry);
  const auth = useSelector((state) => state.auth);
  const { /* -- showHelperText = true, */ helperButtonFlag = true, rawForm, rawFormStatus } = useSelector(
    (state) => state.forms
  );

  formStore = { rawForm, rawFormStatus };

  const { route = { Page: { appComponent: "", schema: {} } } } = props;

  // -- const [pageComponent, setPageComponent] = React.useState();

  const [dialog, setDialog] = useState({});
  const value = { dialog, setDialog };

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

  const pageChild = () => {
    if (mergedComponentRegistry[route?.Page?.appComponent]?.comp) {
      return React.createElement(mergedComponentRegistry[route?.Page?.appComponent]?.comp);
    } else if (props.page?.comp) {
      return React.createElement(props.page?.comp, props?.page?.props, null);
    } else {
      return <Error404 />;
    }
  };

  /**
   * This function will return page layout component based on the JSON schema
   * 
   * @returns PageLayout Component
   */
  const pageLayout = () => {
    if (mergedComponentRegistry[route?.Page?.layout]?.layout) {
      return route?.Page?.layout;
    } else if (props.page?.layout) {
      return props?.page?.layout;
    } else {
      return auth?.uid ? "WrappidDefaultLayout" : "WrappidGuestLayout";
    }
  };

  return auth?.sessionExpired && !auth?.uid && route?.authRequired ? (
    <CoreDomNavigate to="/" replace={true} />
  ) : (
    <CoreComponent componentName={pageLayout()}>
      <NativePageContainer
        uid={auth?.uid}
        route={route}
        coreClasses={CoreClasses}>
        <CoreModal open={true} />
        
        <CoreDialogContext.Provider value={value}>
          {pageChild()}

          <CoreDialog />
        </CoreDialogContext.Provider>
      </NativePageContainer>
    </CoreComponent>
  );
}

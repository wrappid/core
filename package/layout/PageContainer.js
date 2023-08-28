import React, { useState, useContext } from "react";

// eslint-disable-next-line import/no-unresolved
import { nativeUseLocation, NativePageContainer } from "@wrappid/native";
import { useDispatch, useSelector } from "react-redux";

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

export default function PageContainer(props) {
  const dispatch = useDispatch();
  let location = nativeUseLocation();

  mergedComponentRegistry = useContext(ComponentRegistryContext);
  mergedResourceRegistry = useContext(CoreResourceContext);
  functionsRegistry = useContext(FunctionsRegistryContext);
  validationsRegistry = useContext(ValidationsRegistryContext);

  // -- console.log("mergedComponentRegistry", mergedComponentRegistry, mergedResourceRegistry);
  const auth = useSelector((state) => state.auth);
  const { /* -- showHelperText = true, */ helperButtonFlag = true } = useSelector(
    (state) => state.forms
  );

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

  return auth?.sessionExpired && !auth?.uid && route?.authRequired ? (
    <CoreDomNavigate to="/" replace={true} />
  ) : (
    <NativePageContainer uid={auth?.uid} route={route} coreClasses={CoreClasses}>
      <CoreModal open={true} />

      {/* Show Helper Text Toggle */}
      {/* -- {process.env.REACT_APP_ENV === ENV_DEV_MODE && helperButtonFlag && (
          <CoreAlert
            // severity="info"
            styleClasses={[
              // CoreClasses.LAYOUT.FULL_WIDTH,
              // CoreClasses.LAYOUT.HORIZONTAL_RIGHT,
              // CoreClasses.MARGIN.MB1,
            ]}
            action={
              <CoreSwitch
                checked={showHelperText}
                onChange={(e) => {
                  dispatch({ type: UPDATE_HELPER_TEXT_VIEW });
                }}
              />
            }
          >
            Toggle to see/hide helper texts from forms.
          </CoreAlert>
        )} */}
      <CoreDialogContext.Provider value={value}>
        {pageChild()}

        <CoreDialog />
      </CoreDialogContext.Provider>
    </NativePageContainer>
  );
}

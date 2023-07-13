import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  nativeUseLocation,
  NativePageContainer,
} from "@wrappid/styled-components";
import Error404 from "../error/Error404";
import { RESET_LOADING } from "../store/types/appTypes";
import {
  SAVE_EXPIRED_SESSION,
  SESSION_RECALLED,
} from "../modules/auth/types/authTypes";
import {
  UPDATE_HELPER_FLAG,
  UPDATE_HELPER_TEXT_VIEW,
} from "../store/types/formTypes";
import CoreAlert from "../components/feedback/CoreAlert";
import CoreSwitch from "../components/inputs/CoreSwitch";
import CoreBox from "../components/layouts/CoreBox";
import CoreModal from "../components/utils/CoreModal";
import {
  ComponentRegistryContext,
  CoreDialogContext,
} from "../config/contextHandler";
import CoreClasses from "../styles/CoreClasses";
import { coreUseNavigate } from "../helper/routerHelper";
import CoreDialog from "../components/feedback/CoreDialog";

export let mergedComponentRegistry = {};

export default function PageContainer(props) {
  const navigate = coreUseNavigate();
  const dispatch = useDispatch();
  let location = nativeUseLocation();
  mergedComponentRegistry = useContext(ComponentRegistryContext);
  console.log("mergedComponentRegistry", mergedComponentRegistry);
  const auth = useSelector((state) => state.auth);
  const { showHelperText = true, helperButtonFlag = true } = useSelector(
    (state) => state.forms
  );

  const { route = { Page: { schema: {}, appComponent: "" } } } = props;

  const [pageComponent, setPageComponent] = React.useState();

  const [dialog, setDialog] = useState({});
  const value = { dialog, setDialog };

  React.useEffect(() => {
    if (auth.sessionExpired && !auth.sessionDetail) {
      dispatch({
        type: SAVE_EXPIRED_SESSION,
        payload: {
          userId: auth.uid,
          location,
        },
      });
      dispatch({
        type: RESET_LOADING,
      });
    }

    if (
      auth.sessionExpired &&
      auth.sessionDetail &&
      auth.uid &&
      location.pathname === auth.sessionDetail?.location?.pathname
    ) {
      dispatch({
        type: SESSION_RECALLED,
      });
    }
  });

  React.useEffect(() => {
    console.log("LOCATION SAVE______", location);
    dispatch({
      type: UPDATE_HELPER_FLAG,
      payload: { helperButtonFlag: false },
    });
  }, []);

  React.useEffect(() => {
    console.log(
      "Current state of page container's helperButtonFlag = ",
      helperButtonFlag
    );
  }, [helperButtonFlag]);

  const pageChild = () => {
    if (mergedComponentRegistry[route?.Page?.appComponent]?.comp) {
      return React.createElement(
        mergedComponentRegistry[route?.Page?.appComponent]?.comp
      );
    } else if (props.page?.comp) {
      return React.createElement(props.page?.comp, props?.page?.props, null);
    } else {
      return <Error404 />;
    }
  };

  return (
    <NativePageContainer
      uid={auth?.uid}
      route={route}
      coreClasses={CoreClasses}
    >
      <CoreModal open={true} />
      {/* Show Helper Text Toggle */}
      {/* {process.env.REACT_APP_ENV === ENV_DEV_MODE && helperButtonFlag && (
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

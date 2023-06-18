import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nativeUseLocation } from "@wrappid/styled-components";
import config from "../config/config";
import { ENV_DEV_MODE } from "../config/constants";
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
// import {
//   DocumentMetaDescription,
//   DocumentMetaKeywords,
//   DocumentTitle,
//   useDocumentTitle,
// } from "../utils/seoManager";
import CoreAlert from "../components/feedback/CoreAlert";
import CoreSwitch from "../components/inputs/CoreSwitch";
import CoreBox from "../components/layouts/CoreBox";
import CoreModal from "../components/utils/CoreModal";
import { ComponentRegistryContext } from "../config/contextHandler";
import CoreClasses from "../styles/CoreClasses";
import { CoreDomNavigate } from "../helper/routerHelper";

export let mergedComponentRegistry = {};

export default function PageContainer(props) {
  const dispatch = useDispatch();
  let location = nativeUseLocation();
  mergedComponentRegistry = useContext(ComponentRegistryContext);
  console.log("mergedComponentRegistry", mergedComponentRegistry);
  const auth = useSelector((state) => state.auth);
  const { showHelperText = true, helperButtonFlag = true } = useSelector(
    (state) => state.forms
  );

  const { route = { Page: { schema: {}, appComponent: "" } } } = props;

  // const PageComponent = React.lazy(() =>
  //   import("../../" + componentRegistry[route?.Page?.appComponent]?.path),
  // );

  const [pageComponent, setPageComponent] = React.useState();

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

  // React.useEffect(() => {}, [route]);

  // redirection if guest
  if (!auth?.uid && route?.authRequired !== false) {
    console.log("NAVIGATING TO SPLASH AS PAGE NEED AUTH");
    return <CoreDomNavigate to="/" />;
  }

  return (
    <>
      {/* {route?.title && (
        <DocumentTitle title={route?.title || "NO TITLE PROVIDED"} />
      )}
      {route?.description && (
        <DocumentMetaDescription
          metaDescription={route?.description || "NO DESCRIPTION PROVIDED"}
        />
      )}
      {route?.keywords && (
        <DocumentMetaKeywords metaKeywords={route?.keywords || ""} />
      )} */}
      {/* ---------------------------------------------------- */}
      <CoreBox styleClasses={[CoreClasses.LAYOUT.PAGE_CONTAINER]}>
        {/* <CoreModal /> */}
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
        {mergedComponentRegistry[route?.Page?.appComponent]?.comp ? (
          React.createElement(
            mergedComponentRegistry[route?.Page?.appComponent]?.comp
          )
        ) : props.page?.comp ? (
          React.createElement(props.page?.comp, props?.page?.props, null)
        ) : (
          <Error404 />
        )}
      </CoreBox>
    </>
  );
}

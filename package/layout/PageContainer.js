import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import config from "../config/config";
import { ENV_DEV_MODE } from "../config/constants";
import Error404 from "../error/Error404";
import { RESET_LOADING } from "../store/types/appTypes";
import {
  SAVE_EXPIRED_SESSION,
  SESSION_RECALLED,
} from "../store/types/authTypes";
import {
  UPDATE_HELPER_FLAG,
  UPDATE_HELPER_TEXT_VIEW,
} from "../store/types/formTypes";
import {
  DocumentMetaDescription,
  DocumentMetaKeywords,
  DocumentTitle,
  useDocumentTitle,
} from "../utils/seoManager";
import CoreAlert from "../components/feedback/CoreAlert";
import CoreSwitch from "../components/inputs/CoreSwitch";
import CoreBox from "../components/layouts/CoreBox";
import CoreModal from "../components/utils/CoreModal";
import { CoreClasses } from "@wrappid/styles";
import ComponentRegistry from "./../config/ComponentRegistry";

export default function PageContainer(props) {
  const dispatch = useDispatch();
  let location = useLocation();
  const auth = useSelector((state) => state.auth);
  const { showHelperText = true, helperButtonFlag = true } = useSelector(
    (state) => state.forms
  );

  const { route = { Page: { schema: {}, appComponent: "" } } } = props;

  // const PageComponent = React.lazy(() =>
  //   import("../../" + ComponentRegistry[route?.Page?.appComponent]?.path),
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

  React.useEffect(() => {}, [route]);

  // redirection if guest
  // if (!auth?.uid && route?.Page?.authRequired !== false) return <Navigate to="/" />;

  // React.useEffect(() => {
  // }, []);

  return (
    <>
      {route?.title && (
        <DocumentTitle title={route?.title || "NO TITLE PROVIDED"} />
      )}
      {route?.description && (
        <DocumentMetaDescription
          metaDescription={route?.description || "NO DESCRIPTION PROVIDED"}
        />
      )}
      {route?.keywords && (
        <DocumentMetaKeywords metaKeywords={route?.keywords || ""} />
      )}
      {/* ---------------------------------------------------- */}
      <CoreBox styleClasses={[CoreClasses.LAYOUT.PAGE_CONTAINER]}>
        <CoreModal />
        {/* Show Helper Text Toggle */}
        {config.environment === ENV_DEV_MODE && helperButtonFlag && (
          <CoreAlert
            // severity="info"
            styleClasses={[
              CoreClasses.LAYOUT.FULL_WIDTH,
              CoreClasses.LAYOUT.HORIZONTAL_RIGHT,
              CoreClasses.MARGIN.MB1,
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
        )}
        {ComponentRegistry[route?.Page?.appComponent]?.comp || <Error404 />}
      </CoreBox>
    </>
  );
}

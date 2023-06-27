import React, { useContext } from "react";

import CoreBox from "../../../components/layouts/CoreBox";
import CoreSection from "../../../components/layouts/CoreSection";
import CoreClasses from "../../../styles/CoreClasses";

import { nativeUseNavigate } from "@wrappid/styled-components";
import { useSelector } from "react-redux";
import CoreComponent from "../../../components/CoreComponent";
import { CoreResourceContext } from "../../../config/contextHandler";

export const AuthContainer = (props) => {
  const navigate = nativeUseNavigate();
  const auth = useSelector((state) => state.auth);
  const requestUrl = useSelector((state) => state?.manageAssistant?.requestUrl);
  const resourceContext = useContext(CoreResourceContext);
  const logo = resourceContext?.logo;

  React.useEffect(() => {
    console.log("Logo: ", logo);
    if (auth.uid) {
      if (requestUrl) {
        navigate(requestUrl.requestUrl);
      } else if (
        auth.sessionExpired &&
        auth.sessionDetail &&
        auth.accessToken &&
        auth.refreshToken
      ) {
        let path = auth.sessionDetail?.location?.pathname;

        navigate("/", { state: { recalledPath: path } });
      } else {
        navigate("/");
      }
    }
  });
  return (
    <CoreBox
      styleClasses={[
        CoreClasses?.ALIGNMENT?.JUSTIFY_CONTENT_CENTER,
        CoreClasses?.ALIGNMENT?.ALIGN_CONTENT_CENTER,
      ]}
    >
      <CoreSection styleClasses={[CoreClasses?.UTILS?.FIT_CONTENT_WIDTH]}>
        <CoreBox
          styleClasses={[
            CoreClasses?.LAYOUT?.FULL_WIDTH,
            CoreClasses?.ALIGNMENT?.ALIGN_ITEMS_CENTER,
            CoreClasses?.MARGIN?.MB5,
          ]}
        >
          <CoreComponent componentName="AppLogo" />
        </CoreBox>

        {props.children}
      </CoreSection>
    </CoreBox>
  );
};

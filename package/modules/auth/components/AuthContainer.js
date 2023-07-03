import React, { useContext } from "react";

import CoreBox from "../../../components/layouts/CoreBox";
import CoreSection from "../../../components/layouts/CoreSection";
import CoreClasses from "../../../styles/CoreClasses";

import { nativeUseNavigate } from "@wrappid/styled-components";
import { useSelector } from "react-redux";
import CoreComponent from "../../../components/CoreComponent";
import { CoreResourceContext } from "../../../config/contextHandler";
import CoreApiVersion from "../../../components/utils/custom/CoreApiVersion";
import CoreAppVersion from "../../../components/utils/custom/CoreAppVersion";
import CoreTypographyCaption from "../../../components/dataDisplay/paragraph/CoreTypographyCaption";
import CoreGrid from "../../../components/layouts/CoreGrid";
import CoreLink from "../../../components/navigation/CoreLink";
import config from "../../../config/config";
import CoreSpan from "../../../components/layouts/CoreSpan";

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
        CoreClasses?.FLEX?.FLEX_WRAP_WRAP,
        CoreClasses?.HEIGHT?.VH_100,
        CoreClasses?.WIDTH?.VW_100,
      ]}
    >
      <CoreSection
        styleClasses={[
          CoreClasses?.UTILS?.FIT_CONTENT_WIDTH,
          CoreClasses?.UTILS?.FIT_CONTENT_HEIGHT,
          CoreClasses?.AUTH_CARD?.MIN_WIDTH,
          CoreClasses?.AUTH_CARD?.MAX_WIDTH,
        ]}
      >
        <CoreBox
          styleClasses={[
            CoreClasses?.LAYOUT?.FULL_WIDTH,
            CoreClasses?.ALIGNMENT?.ALIGN_ITEMS_CENTER,
            CoreClasses?.ALIGNMENT?.JUSTIFY_CONTENT_CENTER,
            CoreClasses?.MARGIN?.MB5,
          ]}
        >
          <CoreComponent componentName="AppLogo" />
        </CoreBox>

        {props.children}

        <CoreGrid styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN]}>
          <CoreBox gridProps={{ gridSize: 3 }}>
            <CoreAppVersion noTitle={true} />
          </CoreBox>
          <CoreBox
            gridProps={{ gridSize: 9 }}
            styleClasses={[CoreClasses?.MARGIN?.MT1,]}
          >
            <CoreLink>Help</CoreLink>
            <CoreLink
              styleClasses={[CoreClasses?.MARGIN?.ML1]}
              href={
                process.env?.REACT_APP_WRAPPID_privacyLink ||
                config?.wrappid?.privacyLink ||
                "#"
              }
            >
              Privacy
            </CoreLink>
            <CoreLink
              styleClasses={[CoreClasses?.MARGIN?.ML1]}
              href={
                process.env?.REACT_APP_WRAPPID_termsLink ||
                config?.wrappid?.termsLink ||
                "#"
              }
            >
              Terms
            </CoreLink>
          </CoreBox>
        </CoreGrid>
      </CoreSection>
    </CoreBox>
  );
};

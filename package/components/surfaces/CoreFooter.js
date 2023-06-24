import React from "react";

import CoreDivider from "../dataDisplay/CoreDivider";
import CoreTypographyBody1 from "../dataDisplay/paragraph/CoreTypographyBody1";
import CoreBox from "../layouts/CoreBox";
import CoreGrid from "../layouts/CoreGrid";
// import AppVersion from "../../module/app/AppVersion";
import config from "../../config/config";
import CoreClasses from "../../styles/CoreClasses";

export default function CoreFooter(props) {
  return (
    <CoreBox styleClasses={[/* CoreClasses.APP.FOOTER */]}>
      <CoreDivider />

      <CoreGrid styleClasses={[CoreClasses.PADDING.PT3]}>
        <CoreTypographyBody1 styleClasses={[CoreClasses.TEXT.TEXT_END]}>
          {process.env.REACT_APP_WRAPPID_FOOTER_TEXT ||
            config?.wrappid?.footerText ||
            "Wrappid Default Footer"}{` © ${new Date().getFullYear()}`}
        </CoreTypographyBody1>

        <CoreTypographyBody1>{/* <AppVersion /> */}</CoreTypographyBody1>
      </CoreGrid>
    </CoreBox>
  );
}

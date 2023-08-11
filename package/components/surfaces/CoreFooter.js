// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import config from "../../config/config";
import CoreClasses from "../../styles/CoreClasses";
import CoreTypographyCaption from "../dataDisplay/paragraph/CoreTypographyCaption";
import CoreBox from "../layouts/CoreBox";
import CoreGrid from "../layouts/CoreGrid";
// import AppVersion from "../../module/app/AppVersion";
import CoreAppVersion from "../utils/custom/CoreAppVersion";
import CoreTermsPrivacyLink from "../utils/custom/CoreTermsPrivacyLink";

export default function CoreFooter(props) {
  return (
    <CoreGrid styleClasses={[
      CoreClasses?.COLOR?.TEXT_WHITE, CoreClasses?.PADDING?.P1
      // CoreClasses.FRAMEWORK.CORE_FOOTER
    ]}>
      <CoreBox
        gridProps={{ gridSize: 4 }}
        styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_START]}>
        <CoreAppVersion noTitle={true} />
      </CoreBox>

      <CoreBox
        gridProps={{ gridSize: 4 }}
        styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
        <CoreTypographyCaption>
          {`${process.env.REACT_APP_WRAPPID_footerText ||
            config?.wrappid?.footerText ||
            "Wrappid Default Footer"} © ${new Date().getFullYear()}`}
        </CoreTypographyCaption>
      </CoreBox>

      <CoreBox
        gridProps={{ gridSize: 4 }}
        styleClasses={[CoreClasses.PADDING.PR1, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END]}>
        <CoreTermsPrivacyLink />
      </CoreBox>
    </CoreGrid>
  );
}

// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/order
import { getConfigurationObject } from "@wrappid/styles";
import CoreClasses from "../../styles/CoreClasses";
import CoreTypographyCaption from "../dataDisplay/paragraph/CoreTypographyCaption";
import CoreBox from "../layouts/CoreBox";
import CoreGrid from "../layouts/CoreGrid";
import CoreAppVersion from "../utils/custom/CoreAppVersion";
import CoreTermsPrivacyLink from "../utils/custom/CoreTermsPrivacyLink";

// eslint-disable-next-line no-unused-vars
export default function CoreFooter(props) {
  const config = getConfigurationObject();
  
  return (
    <CoreGrid styleClasses={[
      CoreClasses?.COLOR?.TEXT_WHITE, CoreClasses?.PADDING?.P1
      // eslint-disable-next-line etc/no-commented-out-code
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
          {`${config?.wrappid?.footerText || "Wrappid Default Footer"} © ${new Date().getFullYear()}`}
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

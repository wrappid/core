// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/order, import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";
import CoreClasses from "../../styles/CoreClasses";
import ThemeSelector from "../../theme/ThemeSelector";
import CoreTypographyCaption from "../dataDisplay/CoreTypographyCaption";
import CoreBox from "../layouts/CoreBox";
import CoreGrid from "../layouts/CoreGrid";
import CoreAppVersion from "../utils/CoreAppVersion";
import CoreTermsPrivacyLink from "../utils/CoreTermsPrivacyLink";

// eslint-disable-next-line no-unused-vars
export default function CoreFooter(props) {
  const { config } = React.useContext(WrappidDataContext);
  
  return (
    <CoreGrid styleClasses={[
      CoreClasses?.COLOR?.TEXT_WHITE, CoreClasses?.PADDING?.P1
      // eslint-disable-next-line etc/no-commented-out-code
      // CoreClasses.FRAMEWORK.CORE_FOOTER
    ]}>
      <CoreBox
        gridProps={{ gridSize: { md: 3 } }}
        styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
        <CoreAppVersion noTitle={true} />
      </CoreBox>

      <CoreBox
        gridProps={{ gridSize: { md: 3 } }}
        styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
        <CoreTypographyCaption>
          {`${config?.wrappid?.footerText || "Wrappid Default Footer"} © ${new Date().getFullYear()}`}
        </CoreTypographyCaption>
      </CoreBox>

      <CoreBox
        gridProps={{ gridSize: { md: 3 } }}
        styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
        <ThemeSelector />
      </CoreBox>

      <CoreBox
        gridProps={{ gridSize: { md: 3 } }}
        styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
        <CoreTermsPrivacyLink />
      </CoreBox>
    </CoreGrid>
  );
}

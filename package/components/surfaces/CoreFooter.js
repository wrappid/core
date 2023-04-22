import React from "react";

import CoreDivider from "../dataDisplay/CoreDivider";
import CoreTypographyBody1 from "../dataDisplay/paragraph/CoreTypographyBody1";
import CoreBox from "../layouts/CoreBox";
import CoreGrid from "../layouts/CoreGrid";
import { CoreClasses } from "@wrappid/styles";
// import AppVersion from "../../module/app/AppVersion";
import config from "../../config/config";

export default function CoreFooter(props) {
  return (
    <CoreBox styleClasses={[CoreClasses.APP.FOOTER]}>
      <CoreDivider />

      <CoreGrid styleClasses={[CoreClasses.PADDING.PT3]}>
        <CoreTypographyBody1>
          {config?.footerText || "Wrappid Default Footer @ 2023 "}
        </CoreTypographyBody1>

        <CoreTypographyBody1>{/* <AppVersion /> */}</CoreTypographyBody1>
      </CoreGrid>
    </CoreBox>
  );
}
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreClasses from "../../styles/CoreClasses";
import CoreDivider from "../dataDisplay/CoreDivider";
import CoreIcon from "../dataDisplay/CoreIcon";
import CoreTypographyBody1 from "../dataDisplay/CoreTypographyBody1";
import CoreIconButton from "../inputs/CoreIconButton";
import CoreBox from "../layouts/CoreBox";

export default function NotificationPopOver() {
  return (
    <>
      <CoreBox styleClasses={[CoreClasses.POPOVER.CONTENT]}>
        <CoreBox
          styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
        >
          <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MB0]}>Notifications</CoreTypographyBody1>

          <CoreIconButton disabled>
            <CoreIcon>more_horiz</CoreIcon>
          </CoreIconButton>
        </CoreBox>

      </CoreBox>

      <CoreDivider styleClasses={[CoreClasses.MARGIN.M0]}/>

      <CoreBox styleClasses={[CoreClasses.POPOVER.CONTENT]}>
        <CoreTypographyBody1
          sx={{ minWidth: "350px" }}
          styleClasses={[CoreClasses.MARGIN.MY4, CoreClasses.PADDING.PX5]}
        >
          No new notifications
        </CoreTypographyBody1>
      </CoreBox>
    </>
  );
}

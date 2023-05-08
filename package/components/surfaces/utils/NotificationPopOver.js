import React from "react";

import CoreDivider from "../../dataDisplay/CoreDivider";
import CoreIcon from "../../dataDisplay/CoreIcon";
import CoreTypographyBody1 from "../../dataDisplay/paragraph/CoreTypographyBody1";
import CoreIconButton from "../../inputs/CoreIconButton";
import CoreBox from "../../layouts/CoreBox";
import CoreClasses from "../../../styles/CoreClasses";

export default function NotificationPopOver() {
  return (
    <>
      <CoreBox styleClasses={[CoreClasses.POPOVER.CONTENT]}>
        <CoreBox
          styleClasses={[
            CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
            CoreClasses.LAYOUT.VERTICAL_CENTER,
          ]}
        >
          <CoreTypographyBody1>Notifications</CoreTypographyBody1>

          <CoreIconButton disabled>
            <CoreIcon>clear_all</CoreIcon>
          </CoreIconButton>
        </CoreBox>

        <CoreDivider />
      </CoreBox>

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

// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreLayoutPlaceholder from "../../../layout/CoreLayoutPlaceholder";
import CoreClasses from "../../../styles/CoreClasses";
import CoreTypographyBody1 from "../../dataDisplay/CoreTypographyBody1";
import CoreBox from "../CoreBox";

/* Right Drawer with header */
export default function RightDrawerLayout() {

  return (
    <>
      <CoreTypographyBody1>Right Drawr</CoreTypographyBody1>

      <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.RIGHT_DRAWER_LAYOUT_HEADER]} id={RightDrawerLayout.PLACEHOLDER.Header} />

      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
        <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.RIGHT_DRAWER_LAYOUT_LEFT_CONTENT]} id={RightDrawerLayout.PLACEHOLDER.RightDrawer} />

        <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.RIGHT_DRAWER_LAYOUT_RIGHT_DRAWER]} id={RightDrawerLayout.PLACEHOLDER.Content} />

      </CoreBox>
    </>

  );
}

RightDrawerLayout.PLACEHOLDER = { Content: "rightDrawerContent", Header: "header", RightDrawer: "rightDrawer" };

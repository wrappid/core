// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreLayoutPlaceholder from "../../../layout/CoreLayoutPlaceholder";
import CoreClasses from "../../../styles/CoreClasses";
import CoreBox from "../CoreBox";

/* Left Drawer with header */
export default function LeftDrawerLayout() {

  return (
    <>
      <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.LEFT_DRAWER_LAYOUT_HEDAER]} id={LeftDrawerLayout.PLACEHOLDER.Header} />

      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
        <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.LEFT_RIGHT_DRAWER_LAYOUT_LEFT_DRAWER]} id={LeftDrawerLayout.PLACEHOLDER.Content} />

        <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.LEFT_DRAWER_LAYOUT_RIGHT_CONTENT]} id={LeftDrawerLayout.PLACEHOLDER.LeftDrawer} />
      </CoreBox>
    </>

  );
}

LeftDrawerLayout.PLACEHOLDER = { Content: "leftDrawerContent", Header: "header", LeftDrawer: "leftDrawer" };

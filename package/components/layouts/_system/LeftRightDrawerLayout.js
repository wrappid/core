// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreLayoutPlaceholder from "../../../layout/CoreLayoutPlaceholder";
import CoreClasses from "../../../styles/CoreClasses";
import CoreTypographyBody1 from "../../dataDisplay/CoreTypographyBody1";
import CoreBox from "../CoreBox";

export default function LeftRightDrawerLayout() {

  return (
    <>
      <CoreTypographyBody1>Left Right Drawr</CoreTypographyBody1>

      <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.LEFT_RIGHT_DRAWER_LAYOUT_HEADER]} id={LeftRightDrawerLayout.PLACEHOLDER.Header} />

      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.WIDTH.VW_100]}>

        <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.LEFT_RIGHT_DRAWER_LAYOUT_LEFT_DRAWER]} id={LeftRightDrawerLayout.PLACEHOLDER.LeftDrawer} />

        <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.LEFT_RIGHT_DRAWER_LAYOUT_CONTENT]} id={LeftRightDrawerLayout.PLACEHOLDER.Content} />

        <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.LEFT_RIGHT_DRAWER_LAYOUT_RIGHT_DRAWER]} id={LeftRightDrawerLayout.PLACEHOLDER.RightDrawer} />
      </CoreBox>

    </>

  );
}

LeftRightDrawerLayout.PLACEHOLDER = { Content: "leftRightDrawer", Header: "header", LeftDrawer: "leftDrawer", RightDrawer: "rightDrawer" };

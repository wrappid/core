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

      <CoreLayoutPlaceholder id={LeftRightDrawerLayout.PLACEHOLDER.Header} />

      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.WIDTH.VW_100]}>

        <CoreLayoutPlaceholder id={LeftRightDrawerLayout.PLACEHOLDER.LeftDrawer} styleClasses={[CoreClasses.WIDTH.VW_25]} />

        <CoreLayoutPlaceholder id={LeftRightDrawerLayout.PLACEHOLDER.Content} styleClasses={[CoreClasses.WIDTH.VW_50]} />

        <CoreLayoutPlaceholder id={LeftRightDrawerLayout.PLACEHOLDER.RightDrawer} styleClasses={[CoreClasses.WIDTH.VW_25]} />
      </CoreBox>

    </>

  );
}

LeftRightDrawerLayout.PLACEHOLDER = { Content: "leftRightDrawer", Header: "header", LeftDrawer: "leftDrawer", RightDrawer: "rightDrawer" };

// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import CoreBox from "../../components/layouts/CoreBox";
import CoreClasses from "../../styles/CoreClasses";
import CoreLayoutItem from "../core/CoreLayoutItem";
import FixedHeaderLayout from "../FixedHeaderLayout";

export default function FixedHeaderLayoutPage() {
  return (
    <>

      <CoreLayoutItem
        id={FixedHeaderLayout.PLACEHOLDER.HEADER}
        styleClasses={[
          CoreClasses.WIDTH.VW_100,
          CoreClasses.HEIGHT.VH_25,
          CoreClasses.BG.BG_SECONDARY,
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
          CoreClasses.POSITION.POSITION_FIXED
        ]}>
        <CoreBox>
          <CoreTypographyBody1>Header content</CoreTypographyBody1> 
        </CoreBox>
      </CoreLayoutItem>

      <CoreLayoutItem
        id={FixedHeaderLayout.PLACEHOLDER.CONTENT}
        styleClasses={[
          CoreClasses.WIDTH.VW_100,
          CoreClasses.HEIGHT.VH_100,
          CoreClasses.BG.BG_WARNING,
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
          CoreClasses.OVERFLOW.OVERFLOW_Y_SCROLL
        ]}>
        <CoreBox>
          <CoreTypographyBody1>Outlet Content</CoreTypographyBody1>
        </CoreBox>
      </CoreLayoutItem>

    </>
  );
}
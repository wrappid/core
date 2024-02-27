// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import CoreBox from "../../components/layouts/CoreBox";
import CoreClasses from "../../styles/CoreClasses";
import CoreLayoutItem from "../core/CoreLayoutItem";
import FixedFooterLayout from "../FixedFooterLayout";

export default function FixedFooterLayoutPage() {
  return (
    <>
      <CoreLayoutItem
        id={FixedFooterLayout.PLACEHOLDER.CONTENT}
        styleClasses={[
          CoreClasses.WIDTH.VW_100,
          CoreClasses.HEIGHT.VH_100,
          CoreClasses.BG.BG_SECONDARY,
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
          CoreClasses.OVERFLOW.OVERFLOW_Y_SCROLL
        ]}>
        <CoreBox>
          <CoreTypographyBody1>Content above footer</CoreTypographyBody1>
        </CoreBox>  
      </CoreLayoutItem>

      <CoreLayoutItem
        id={FixedFooterLayout.PLACEHOLDER.FOOTER}
        styleClasses={[
          CoreClasses.WIDTH.VW_100,
          CoreClasses.HEIGHT.VH_25,
          CoreClasses.BG.BG_PRIMARY,
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
          CoreClasses.POSITION.POSITION_FIXED
        ]}>
        <CoreBox>
          <CoreTypographyBody1>Fixed Footer content</CoreTypographyBody1>

          <CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.HEIGHT.H_50, CoreClasses.BG.BG_INFO_DARK]}>

          </CoreBox>
        </CoreBox>  
      </CoreLayoutItem>

    </>
  );
}
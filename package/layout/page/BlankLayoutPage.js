// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import CoreBox from "../../components/layouts/CoreBox";
import CoreClasses from "../../styles/CoreClasses";
import BlankLayout from "../BlankLayout";
import CoreLayoutItem from "../core/CoreLayoutItem";

export default function BlankLayoutPage() {
  return (
    <>
      <CoreLayoutItem
        id={BlankLayout.PLACEHOLDER.CONTENT}
        styleClasses={[
          CoreClasses.WIDTH.VW_100,
          CoreClasses.HEIGHT.VH_100,
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
          CoreClasses.BG.BG_PRIMARY
        ]}>
        <CoreBox>
          <CoreTypographyBody1>Blank Layout</CoreTypographyBody1>
        </CoreBox>
      </CoreLayoutItem>
    </>
  );
}

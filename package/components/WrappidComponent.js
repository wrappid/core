// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/order
import CoreTypographyBody1 from "./dataDisplay/CoreTypographyBody1";
import CoreCircularProgress from "./feedback/CoreCircularProgress";
// eslint-disable-next-line import/order
import CoreGrid from "./layouts/CoreGrid";
import CoreSection from "./layouts/CoreSection";
import CoreClasses from "../styles/CoreClasses";

export default function WrappidComponent() {
  return (
    <CoreGrid styleClasses={[
      CoreClasses.WIDTH.VW_100,
      CoreClasses.HEIGHT.VH_100,
      CoreClasses.BG.BG_GREY_100,
      CoreClasses.DISPLAY.FLEX,
      CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
      CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
      CoreClasses.PADDING.P2
    ]}>
      <CoreSection styleClasses={[CoreClasses.BG.BG_INFO_LIGHT, CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]} gridProps={{ gridSize: { md: 4 } }}>
        <CoreCircularProgress></CoreCircularProgress>

        <CoreTypographyBody1 gutterBottom={false}>Loading ...</CoreTypographyBody1>
      </CoreSection>
    </CoreGrid>
  );
}

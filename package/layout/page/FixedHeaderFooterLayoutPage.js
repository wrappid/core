// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import CoreBox from "../../components/layouts/CoreBox";
import CoreClasses from "../../styles/CoreClasses";
import CoreLayoutItem from "../core/CoreLayoutItem";
import FixedHeaderFooterLayout from "../FixedHeaderFooterLayout";

export default function HeaderFooterLayoutPage() {
  return (
    <>

      <CoreLayoutItem id={FixedHeaderFooterLayout.PLACEHOLDER.HEADER} styleClasses={[CoreClasses.BG.BG_PRIMARY, CoreClasses.HEIGHT.VH_25, CoreClasses.POSITION.POSITION_FIXED]}>
        <CoreBox>
          <CoreTypographyBody1>Fixed Header content</CoreTypographyBody1> 
        </CoreBox>
      </CoreLayoutItem>

      <CoreLayoutItem id={FixedHeaderFooterLayout.PLACEHOLDER.CONTENT} styleClasses={[CoreClasses.BG.BG_WARNING, CoreClasses.HEIGHT.VH_100, CoreClasses.OVERFLOW.OVERFLOW_Y_SCROLL]}>
        <CoreBox>
          <CoreTypographyBody1>Layout content</CoreTypographyBody1> 
        </CoreBox>
      </CoreLayoutItem>

      <CoreLayoutItem id={FixedHeaderFooterLayout.PLACEHOLDER.FOOTER} styleClasses={[CoreClasses.BG.BG_INFO, CoreClasses.HEIGHT.VH_25, CoreClasses.POSITION.POSITION_FIXED]}>
        <CoreBox>
          <CoreTypographyBody1>Fixed Footer content</CoreTypographyBody1> 
        </CoreBox>
      </CoreLayoutItem>

    </>
  );
}
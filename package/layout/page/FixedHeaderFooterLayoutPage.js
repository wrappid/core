// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import CoreClasses from "../../styles/CoreClasses";
import CoreLayoutItem from "../core/CoreLayoutItem";
import FixedHeaderFooterLayout from "../FixedHeaderFooterLayout";

export default function HeaderFooterLayoutPage() {
  return (
    <>

      <CoreLayoutItem id={FixedHeaderFooterLayout.PLACEHOLDER.HEADER} styleClasses={[CoreClasses.BG.BG_PRIMARY, CoreClasses.HEIGHT.VH_25, CoreClasses.WIDTH.VW_100, CoreClasses.POSITION.POSITION_FIXED]}>
        <CoreTypographyBody1>Fixed Header content</CoreTypographyBody1> 
      </CoreLayoutItem>

      <CoreLayoutItem id={FixedHeaderFooterLayout.PLACEHOLDER.CONTENT} styleClasses={[CoreClasses.BG.BG_WARNING, CoreClasses.HEIGHT.VH_100, CoreClasses.WIDTH.VW_100]}>
        <CoreTypographyBody1>Layout content</CoreTypographyBody1> 
      </CoreLayoutItem>

      <CoreLayoutItem id={FixedHeaderFooterLayout.PLACEHOLDER.FOOTER} styleClasses={[CoreClasses.BG.BG_INFO, CoreClasses.HEIGHT.VH_25, CoreClasses.WIDTH.VW_100, CoreClasses.POSITION.POSITION_FIXED]}>
        <CoreTypographyBody1>Fixed Footer content</CoreTypographyBody1> 
      </CoreLayoutItem>
    </>
  );
}
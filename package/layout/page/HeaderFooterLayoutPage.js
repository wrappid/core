// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import CoreBox from "../../components/layouts/CoreBox";
import CoreClasses from "../../styles/CoreClasses";
import CoreLayoutItem from "../core/CoreLayoutItem";
import HeaderFooterLayout from "../HeaderFooterLayout";

export default function HeaderFooterLayoutPage() {
  return (
    <>

      <CoreLayoutItem id={HeaderFooterLayout.PLACEHOLDER.HEADER} styleClasses={[CoreClasses.BG.BG_PRIMARY, CoreClasses.HEIGHT.VH_25]}>
        <CoreBox>
          <CoreTypographyBody1>Header content</CoreTypographyBody1> 
        </CoreBox>
      </CoreLayoutItem>

      <CoreLayoutItem id={HeaderFooterLayout.PLACEHOLDER.CONTENT} styleClasses={[CoreClasses.BG.BG_WARNING, CoreClasses.HEIGHT.VH_50]}>
        <CoreBox>
          <CoreTypographyBody1>Layout content</CoreTypographyBody1> 
        </CoreBox>
      </CoreLayoutItem>

      <CoreLayoutItem id={HeaderFooterLayout.PLACEHOLDER.FOOTER} styleClasses={[CoreClasses.BG.BG_INFO, CoreClasses.HEIGHT.VH_25]}>
        <CoreBox>
          <CoreTypographyBody1>Footer content</CoreTypographyBody1> 
        </CoreBox>
      </CoreLayoutItem>

    </>
  );
}
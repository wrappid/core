// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import HeaderFooterLayout from "../../components/layouts/_system/HeaderFooterLayout";
import CoreClasses from "../../styles/CoreClasses";
import CoreLayoutItem from "../core/CoreLayoutItem";

export default function HeaderFooterLayoutPage() {
  return (
    <>
      <CoreLayoutItem id={HeaderFooterLayout.PLACEHOLDER.HEADER} styleClasses={[CoreClasses.BG.BG_PRIMARY, CoreClasses.HEIGHT.VH_25]}>
        <CoreTypographyBody1>Header content</CoreTypographyBody1>
      </CoreLayoutItem>

      <CoreLayoutItem id={HeaderFooterLayout.PLACEHOLDER.CONTENT} styleClasses={[CoreClasses.BG.BG_WARNING, CoreClasses.HEIGHT.VH_50]}>
        <CoreTypographyBody1>Layout content</CoreTypographyBody1>
      </CoreLayoutItem>

      <CoreLayoutItem id={HeaderFooterLayout.PLACEHOLDER.FOOTER} styleClasses={[CoreClasses.BG.BG_INFO, CoreClasses.HEIGHT.VH_25]}>
        <CoreTypographyBody1>Footer content</CoreTypographyBody1>
      </CoreLayoutItem>
    </>
  );
}
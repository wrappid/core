// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import FixedHeaderFooterLayout from "../../components/layouts/_system/FixedHeaderFooterLayout";
import CoreLayoutItem from "../core/CoreLayoutItem";

export default function HeaderFooterLayoutPage() {
  return (
    <>

      <CoreLayoutItem id={FixedHeaderFooterLayout.PLACEHOLDER.HEADER} styleClasses={[]}>
        <CoreTypographyBody1>This is header section of FixedHeaderFooterLayout</CoreTypographyBody1> 
      </CoreLayoutItem>

      <CoreLayoutItem id={FixedHeaderFooterLayout.PLACEHOLDER.CONTENT} styleClasses={[]}>
        <CoreTypographyBody1>This is content section of FixedHeaderFooterLayout</CoreTypographyBody1> 
      </CoreLayoutItem>

      <CoreLayoutItem id={FixedHeaderFooterLayout.PLACEHOLDER.FOOTER} styleClasses={[]}>
        <CoreTypographyBody1>This is footer section of FixedHeaderFooterLayout</CoreTypographyBody1> 
      </CoreLayoutItem>
    </>
  );
}
// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import HeaderFooterLayout from "../../components/layouts/_system/HeaderFooterLayout";
import CoreLayoutItem from "../core/CoreLayoutItem";

export default function HeaderFooterLayoutPage() {
  return (
    <>
      <CoreLayoutItem id={HeaderFooterLayout.PLACEHOLDER.HEADER} styleClasses={[]}>
        <CoreTypographyBody1>This is header section of HeaderFooterLayout</CoreTypographyBody1>
      </CoreLayoutItem>

      <CoreLayoutItem id={HeaderFooterLayout.PLACEHOLDER.CONTENT} styleClasses={[]}>
        <CoreTypographyBody1>This is content section of HeaderFooterLayout</CoreTypographyBody1>
      </CoreLayoutItem>

      <CoreLayoutItem id={HeaderFooterLayout.PLACEHOLDER.FOOTER} styleClasses={[]}>
        <CoreTypographyBody1>This is footer section of HeaderFooterLayout</CoreTypographyBody1>
      </CoreLayoutItem>
    </>
  );
}
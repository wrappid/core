// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import FixedFooterLayout from "../../components/layouts/_system/FixedFooterLayout";
import CoreBox from "../../components/layouts/CoreBox";
import CoreClasses from "../../styles/CoreClasses";
import CoreLayoutItem from "../core/CoreLayoutItem";

export default function FixedFooterLayoutPage() {
  return (
    <>
      <CoreLayoutItem
        id={FixedFooterLayout.PLACEHOLDER.CONTENT}
        styleClasses={[]}>
        <CoreTypographyBody1>This is a content section of FixedFooterLayout</CoreTypographyBody1> 
      </CoreLayoutItem>

      <CoreLayoutItem
        id={FixedFooterLayout.PLACEHOLDER.FOOTER}
        styleClasses={[]}>
        <CoreTypographyBody1>This is a Footer section of FixedFooterLayout</CoreTypographyBody1>

        <CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.HEIGHT.H_50, CoreClasses.BG.BG_INFO_DARK]}>

        </CoreBox> 
      </CoreLayoutItem>

    </>
  );
}
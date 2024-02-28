// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import RightDrawerLayout from "../../components/layouts/_system/RightDrawerLayout";
import CoreBox from "../../components/layouts/CoreBox";
import CoreLayoutItem from "../core/CoreLayoutItem";

export default function RightDrawerLayoutPage() {
  return (
    <>

      <CoreBox id={RightDrawerLayout.PLACEHOLDER.Header} styleClasses={[]}>
        <CoreLayoutItem styleClasses={[]}>
          <CoreTypographyBody1>Header component</CoreTypographyBody1>
        </CoreLayoutItem>

        <CoreBox styleClasses={[]}>
          <CoreLayoutItem id={RightDrawerLayout.PLACEHOLDER.Content} styleClasses={[]}>
            <CoreTypographyBody1>Right drawer component</CoreTypographyBody1>
          </CoreLayoutItem>

          <CoreLayoutItem id={RightDrawerLayout.PLACEHOLDER.RightDrawer} styleClasses={[]}>
            <CoreTypographyBody1>Right side component</CoreTypographyBody1>
          </CoreLayoutItem>       
        </CoreBox>
      </CoreBox>
      
    </>
  );
}
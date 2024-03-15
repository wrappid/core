// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreLayoutPlaceholder from "../../../layout/CoreLayoutPlaceholder";
import CoreClasses from "../../../styles/CoreClasses";
import CoreTypographyBody1 from "../../dataDisplay/CoreTypographyBody1";
import CoreGrid from "../CoreGrid";

export default function ThreeColumnLayout() {
  return (
    <>
      <CoreGrid styleClasses={[CoreClasses.LAYOUT.THREE_COL_LAYOUT]}>
      
        <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.THREE_COL_LAYOUT_FIRST_COL]} gridProps={{ gridSize: 4 }} id={ThreeColumnLayout.PLACEHOLDER.COL_1}>
          <CoreTypographyBody1>Three Column Layout - Placeholder - column1</CoreTypographyBody1>
        </CoreLayoutPlaceholder>
      
        <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.THREE_COL_LAYOUT_SECOND_COL]} gridProps={{ gridSize: 4 }} id={ThreeColumnLayout.PLACEHOLDER.COL_2}>
          <CoreTypographyBody1>Three Column Layout - Placeholder - column2</CoreTypographyBody1>
        </CoreLayoutPlaceholder>
      
        <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.THREE_COL_LAYOUT_THIRD_COL]} gridProps={{ gridSize: 4 }} id={ThreeColumnLayout.PLACEHOLDER.COL_3}>
          <CoreTypographyBody1>Three Column Layout - Placeholder - column3</CoreTypographyBody1>
        </CoreLayoutPlaceholder>
      
      </CoreGrid>
    </>
  );
}
ThreeColumnLayout.PLACEHOLDER = { COL_1: "column1", COL_2: "column2", COL_3: "column3" };
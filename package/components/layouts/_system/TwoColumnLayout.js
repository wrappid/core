// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreLayoutPlaceholder from "../../../layout/CoreLayoutPlaceholder";
import CoreClasses from "../../../styles/CoreClasses";
import CoreTypographyBody1 from "../../dataDisplay/CoreTypographyBody1";
import CoreGrid from "../CoreGrid";

export default function TwoColumnLayout() {
  return (
    <>
      <CoreGrid styleClasses={[CoreClasses.LAYOUT.TWO_COL_LAYOUT]}>
        <CoreLayoutPlaceholder 
          styleClasses={[CoreClasses.LAYOUT.TWO_COL_LAYOUT_FIRST_COL]} 
          gridProps={{ gridSize: 6 }} 
          id={TwoColumnLayout.PLACEHOLDER.COL_1}>
          <CoreTypographyBody1>Two Column Layout - Placeholder - column1</CoreTypographyBody1>
        </CoreLayoutPlaceholder>
      
        <CoreLayoutPlaceholder 
          styleClasses={[CoreClasses.LAYOUT.TWO_COL_LAYOUT_SECOND_COL]} 
          gridProps={{ gridSize: 6 }} 
          id={TwoColumnLayout.PLACEHOLDER.COL_2}>
          <CoreTypographyBody1>Two Column Layout - Placeholder - column2</CoreTypographyBody1>
        </CoreLayoutPlaceholder>

      </CoreGrid>
    </>
  );
}
TwoColumnLayout.PLACEHOLDER = { COL_1: "column1", COL_2: "column2" };
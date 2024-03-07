// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreLayoutPlaceholder from "../../../layout/CoreLayoutPlaceholder";
import CoreClasses from "../../../styles/CoreClasses";
import CoreGrid from "../CoreGrid";

export default function ThreeColumnLayout() {
  return (
    <>
      <CoreGrid styleClasses={[CoreClasses.LAYOUT.THREE_COL_LAYOUT]}>
      
        <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.THREE_COL_LAYOUT_FIRST_COL]} gridProps={{ gridSize: 4 }} id={ThreeColumnLayout.PLACEHOLDER.COL_1} />
      
        <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.THREE_COL_LAYOUT_SECOND_COL]} gridProps={{ gridSize: 4 }} id={ThreeColumnLayout.PLACEHOLDER.COL_2} />
      
        <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.THREE_COL_LAYOUT_THIRD_COL]} gridProps={{ gridSize: 4 }} id={ThreeColumnLayout.PLACEHOLDER.COL_3} />
      
      </CoreGrid>
    </>
  );
}
ThreeColumnLayout.PLACEHOLDER = { COL_1: "column1", COL_2: "column2", COL_3: "column3" };
// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreLayoutPlaceholder from "../../../layout/CoreLayoutPlaceholder";
import CoreClasses from "../../../styles/CoreClasses";
import CoreGrid from "../CoreGrid";

export default function TwoColumnLayout() {
  return (
    <>
      <CoreGrid styleClasses={[CoreClasses.LAYOUT.TWO_COL_LAYOUT]}>
        <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.TWO_COL_LAYOUT_FIRST_COL]} gridProps={{ gridSize: 6 }} id={TwoColumnLayout.PLACEHOLDER.COL_1} />
      
        <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.TWO_COL_LAYOUT_SECOND_COL]} gridProps={{ gridSize: 6 }} id={TwoColumnLayout.PLACEHOLDER.COL_2} />

      </CoreGrid>
    </>
  );
}
TwoColumnLayout.PLACEHOLDER = { COL_1: "column1", COL_2: "column2" };
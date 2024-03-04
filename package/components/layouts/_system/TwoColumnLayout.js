// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreLayoutPlaceholder from "../../../layout/CoreLayoutPlaceholder";
import CoreClasses from "../../../styles/CoreClasses";
import CoreBox from "../CoreBox";
import CoreGrid from "../CoreGrid";

export default function TwoColumnLayout() {
  return (
    <CoreGrid>
      <CoreBox gridProps={{ gridSize: { md: 6 } }}>
        <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.TWO_COLUMN_LAYOUT_FIRSTCOL]} id={TwoColumnLayout.PLACEHOLDER.COLUMN1} />
      </CoreBox>

      <CoreBox gridProps={{ gridSize: { md: 6 } }}>
        <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.TWO_COLUMN_LAYOUT_SECONDCOL]} id={TwoColumnLayout.PLACEHOLDER.COLUMN2} />
      </CoreBox>
    </CoreGrid>
  );
}
TwoColumnLayout.PLACEHOLDER = { COLUMN1: "column1", COLUMN2: "column2" };
// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreLayoutPlaceholder from "../../../layout/core/CoreLayoutPlaceholder";
import CoreClasses from "../../../styles/CoreClasses";
import CoreGrid from "../CoreGrid";

export default function ThreeColumnLayout() {
  return (
    <CoreGrid styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_CONTENT_CENTER]}>
      
      <CoreLayoutPlaceholder gridProps={{ gridSize: { md: 4 } }} id={ThreeColumnLayout.PLACEHOLDER.COLUMN1} />
      
      <CoreLayoutPlaceholder gridProps={{ gridSize: { md: 4 } }} id={ThreeColumnLayout.PLACEHOLDER.COLUMN2} />
      
      <CoreLayoutPlaceholder gridProps={{ gridSize: { md: 4 } }} id={ThreeColumnLayout.PLACEHOLDER.COLUMN3} />
      
    </CoreGrid>
  );
}
ThreeColumnLayout.PLACEHOLDER = { COLUMN1: "column1", COLUMN2: "column2", COLUMN3: "column3" };
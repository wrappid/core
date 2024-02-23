// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreLayoutPlaceholder from "./core/CoreLayoutPlaceholder";
import CoreBox from "../components/layouts/CoreBox";
import CoreGrid from "../components/layouts/CoreGrid";

export default function ThreeColumnLayout() {
  return (
    <CoreGrid>
      <CoreBox gridProps={{ gridSize: { md: 4 } }}>
        <CoreLayoutPlaceholder id={ThreeColumnLayout.PLACEHOLDER.COLUMN1} />
      </CoreBox>

      <CoreBox gridProps={{ gridSize: { md: 4 } }}>
        <CoreLayoutPlaceholder id={ThreeColumnLayout.PLACEHOLDER.COLUMN2} />
      </CoreBox>

      <CoreBox gridProps={{ gridSize: { md: 4 } }}>
        <CoreLayoutPlaceholder id={ThreeColumnLayout.PLACEHOLDER.COLUMN3} />
      </CoreBox>
    </CoreGrid>
  );
}
ThreeColumnLayout.PLACEHOLDER = { COLUMN1: "column1", COLUMN2: "column2", COLUMN3: "column3" };
// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody2 from "../../components/dataDisplay/CoreTypographyBody2";
import TwoColumnLayout from "../../components/layouts/_system/TwoColumnLayout";
import CoreGrid from "../../components/layouts/CoreGrid";
import CoreLayoutItem from "../core/CoreLayoutItem";

export default function TwoColumnLayoutPage() {
  return (
    <>
      <CoreGrid>

        <CoreLayoutItem gridProps={{ gridSize: { md: 6 } }} id={TwoColumnLayout.PLACEHOLDER.COLUMN1} styleClasses={[]}>
          <CoreTypographyBody2>
          This is first column of TwoColumnLayout
          </CoreTypographyBody2>
        </CoreLayoutItem>

        <CoreLayoutItem gridProps={{ gridSize: { md: 6 } }} id={TwoColumnLayout.PLACEHOLDER.COLUMN2} styleClasses={[]}>
          <CoreTypographyBody2>
          This is second column of TwoColumnLayout
          </CoreTypographyBody2>
        </CoreLayoutItem>

      </CoreGrid>
    </>
  );
}
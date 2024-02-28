// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody2 from "../../components/dataDisplay/CoreTypographyBody2";
import ThreeColumnLayout from "../../components/layouts/_system/ThreeColumnLayout";
import CoreGrid from "../../components/layouts/CoreGrid";
import CoreLayoutItem from "../core/CoreLayoutItem";

export default function ThreeColumnLayoutPage() {
  return (
    <>
      <CoreGrid styleClasses={[]}>

        <CoreLayoutItem gridProps={{ gridSize: { md: 4 } }} id={ThreeColumnLayout.PLACEHOLDER.COLUMN1} styleClasses={[]}>
          <CoreTypographyBody2>
          This is fisrt column of ThreeColumnLayout
          </CoreTypographyBody2>

        </CoreLayoutItem>

        <CoreLayoutItem gridProps={{ gridSize: { md: 4 } }} id={ThreeColumnLayout.PLACEHOLDER.COLUMN2} styleClasses={[]}>
          <CoreTypographyBody2>
          This is second column of ThreeColumnLayout
          </CoreTypographyBody2>

        </CoreLayoutItem>

        <CoreLayoutItem gridProps={{ gridSize: { md: 4 } }} id={ThreeColumnLayout.PLACEHOLDER.COLUMN3} styleClasses={[]}>
          <CoreTypographyBody2>
           This is third column of ThreeColumnLayout
          </CoreTypographyBody2>

        </CoreLayoutItem>

      </CoreGrid>
    </>
  );
}

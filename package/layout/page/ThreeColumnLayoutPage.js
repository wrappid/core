// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody2 from "../../components/dataDisplay/CoreTypographyBody2";
import CoreBox from "../../components/layouts/CoreBox";
import CoreGrid from "../../components/layouts/CoreGrid";
import CoreClasses from "../../styles/CoreClasses";
import CoreLayoutItem from "../core/CoreLayoutItem";
import ThreeColumnLayout from "../ThreeColumnLayout";

export default function ThreeColumnLayoutPage() {
  return (
    <CoreGrid>

      <CoreLayoutItem gridProps={{ gridSize: { md: 4 } }} id={ThreeColumnLayout.PLACEHOLDER.COLUMN1} styleClasses={[CoreClasses.BG.BG_PRIMARY, CoreClasses.HEIGHT.VH_100]}>
        <CoreBox>
          <CoreTypographyBody2>
                Fisrt setion
          </CoreTypographyBody2>
        </CoreBox>

      </CoreLayoutItem>

      <CoreLayoutItem gridProps={{ gridSize: { md: 4 } }} id={ThreeColumnLayout.PLACEHOLDER.COLUMN2} styleClasses={[CoreClasses.BG.BG_PRIMARY, CoreClasses.HEIGHT.VH_100]}>
        <CoreBox>
          <CoreTypographyBody2>
                Second setion
          </CoreTypographyBody2>

        </CoreBox>
          
      </CoreLayoutItem>

      <CoreLayoutItem gridProps={{ gridSize: { md: 4 } }} id={ThreeColumnLayout.PLACEHOLDER.COLUMN3}>

        <CoreTypographyBody2>
                Third setion
        </CoreTypographyBody2>

        <CoreBox>
        </CoreBox>

      </CoreLayoutItem>

    </CoreGrid>
  );
}
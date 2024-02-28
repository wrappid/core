// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody2 from "../../components/dataDisplay/CoreTypographyBody2";
import CoreGrid from "../../components/layouts/CoreGrid";
import CoreClasses from "../../styles/CoreClasses";
import CoreLayoutItem from "../core/CoreLayoutItem";
import TwoColumnLayout from "../TwoColumnLayout";

export default function TwoColumnLayoutPage() {
  return (
    <>
      <CoreGrid>

        <CoreLayoutItem gridProps={{ gridSize: { md: 6 } }} id={TwoColumnLayout.PLACEHOLDER.COLUMN1} styleClasses={[CoreClasses.BG.BG_PRIMARY, CoreClasses.HEIGHT.VH_100]}>
          <CoreTypographyBody2>
                Fisrt setion
          </CoreTypographyBody2>
        </CoreLayoutItem>

        <CoreLayoutItem gridProps={{ gridSize: { md: 6 } }} id={TwoColumnLayout.PLACEHOLDER.COLUMN2} styleClasses={[CoreClasses.BG.BG_SECONDARY, CoreClasses.HEIGHT.VH_100]}>
          <CoreTypographyBody2>
                Second setion
          </CoreTypographyBody2>
        </CoreLayoutItem>

      </CoreGrid>
    </>
  );
}
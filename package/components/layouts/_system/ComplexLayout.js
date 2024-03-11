// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreLayoutPlaceholder from "../../../layout/CoreLayoutPlaceholder";
import CoreTypographyBody1 from "../../dataDisplay/CoreTypographyBody1";
import CoreBox from "../CoreBox";
// eslint-disable-next-line import/order
import TwoColumnLayout from "./TwoColumnLayout";

export default function ComplexLayout() {
  return (
    <>
      <CoreTypographyBody1>Complex Layout</CoreTypographyBody1>

      <CoreBox>
        <CoreLayoutPlaceholder id="placeholder9">
          <CoreTypographyBody1>Layout Placeholder - placeholder9</CoreTypographyBody1>
        </CoreLayoutPlaceholder>
      </CoreBox>

      <CoreLayoutPlaceholder id="placeholder1">
        <CoreTypographyBody1>Layout Placeholder - placeholder1</CoreTypographyBody1>

        <TwoColumnLayout />

        <CoreLayoutPlaceholder id="placeholder4">
          <CoreTypographyBody1>Layout Placeholder - placeholder4</CoreTypographyBody1>
        </CoreLayoutPlaceholder>

        <CoreLayoutPlaceholder id="placeholder5">
          <CoreTypographyBody1>Layout Placeholder - placeholder5</CoreTypographyBody1>
          
          <CoreLayoutPlaceholder id="placeholder7">
            <CoreTypographyBody1>Layout Placeholder - placeholder7</CoreTypographyBody1>
          </CoreLayoutPlaceholder>
        </CoreLayoutPlaceholder>
      </CoreLayoutPlaceholder>

      <CoreLayoutPlaceholder id="placeholder2">
        <CoreTypographyBody1>Layout Placeholder - placeholder2</CoreTypographyBody1>

        <CoreLayoutPlaceholder id="placeholder6">
          <CoreTypographyBody1>Layout Placeholder - placeholder6</CoreTypographyBody1>
        </CoreLayoutPlaceholder>

        <CoreLayoutPlaceholder id="placeholder8">
          <CoreTypographyBody1>Layout Placeholder - placeholder8</CoreTypographyBody1>
        </CoreLayoutPlaceholder>
      </CoreLayoutPlaceholder>

      <CoreLayoutPlaceholder id="placeholder3">
        <CoreTypographyBody1>Layout Placeholder - placeholder3</CoreTypographyBody1>
      </CoreLayoutPlaceholder>
    </>
  );
}

ComplexLayout.PLACEHOLDER = {
  CONTENT1: "content1", CONTENT2: "content2", CONTENT3: "content3", CONTENT4: "content4", CONTENT5: "content5", CONTENT6: "content6", CONTENT7: "content7", CONTENT8: "content8" 
};
 
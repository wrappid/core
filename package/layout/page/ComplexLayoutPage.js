// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import CoreLayoutItem from "../core/CoreLayoutItem";

export default function ComplexLayoutPage() {
  return (
    <>
      <CoreLayoutItem id="placeholder1">
        <CoreTypographyBody1>Item 1</CoreTypographyBody1>

        <CoreLayoutItem id="placeholder4">
          <CoreTypographyBody1>Item 4</CoreTypographyBody1>
        </CoreLayoutItem>

        <CoreLayoutItem id="placeholder5">
          <CoreTypographyBody1>Item 5</CoreTypographyBody1>

          <CoreLayoutItem id="placeholder7">
            <CoreTypographyBody1>Item 7</CoreTypographyBody1>
          </CoreLayoutItem>
        </CoreLayoutItem>
      </CoreLayoutItem>

      <CoreLayoutItem id="placeholder2">
        <CoreTypographyBody1>Item 2</CoreTypographyBody1>

        <CoreLayoutItem id="placeholder6">
          <CoreTypographyBody1>Item 6</CoreTypographyBody1>
        </CoreLayoutItem>

        <CoreLayoutItem id="placeholder8">
          <CoreTypographyBody1>Item 8</CoreTypographyBody1>
        </CoreLayoutItem>
      </CoreLayoutItem>

      <CoreLayoutItem id="placeholder3">
        <CoreTypographyBody1>Item 3</CoreTypographyBody1>
      </CoreLayoutItem>
    </>
  );
}

// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../components/dataDisplay/CoreTypographyBody1";
import CoreClasses from "../styles/CoreClasses";
// eslint-disable-next-line import/order
import CoreLayoutPlaceholder from "./core/CoreLayoutPlaceholder";

export default function BlankLayout() {
  return (
    <>
      <CoreTypographyBody1>Blank Layout</CoreTypographyBody1>

      <CoreLayoutPlaceholder id={BlankLayout.PLACEHOLDER.CONTENT} styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.PADDING.P1]} />
    </>
  );
}

BlankLayout.PLACEHOLDER = { CONTENT: "content" };

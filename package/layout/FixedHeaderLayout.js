// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../components/dataDisplay/CoreTypographyBody1";
// eslint-disable-next-line import/order
import CoreLayoutPlaceholder from "./core/CoreLayoutPlaceholder";

export default function FixedHeaderLayout() {
  return (
    <>
      <CoreTypographyBody1>Fixed Header Layout</CoreTypographyBody1>

      <CoreLayoutPlaceholder id={FixedHeaderLayout.PLACEHOLDER.HEADER} />

      <CoreLayoutPlaceholder id={FixedHeaderLayout.PLACEHOLDER.CONTENT} />
    </>
  );
}

FixedHeaderLayout.PLACEHOLDER = { CONTENT: "Content", HEADER: "Header" };

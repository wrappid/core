// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../../dataDisplay/CoreTypographyBody1";
// eslint-disable-next-line import/order
import CoreLayoutPlaceholder from "../../../layout/core/CoreLayoutPlaceholder";

export default function HeaderLayout() {
  return (
    <>
      <CoreTypographyBody1>Header Layout</CoreTypographyBody1>

      <CoreLayoutPlaceholder id={HeaderLayout.PLACEHOLDER.HEADER} />

      <CoreLayoutPlaceholder id={HeaderLayout.PLACEHOLDER.CONTENT} />
    </>
  );
}

HeaderLayout.PLACEHOLDER = { CONTENT: "headerContent", HEADER: "header" };

// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/order
import CoreLayoutPlaceholder from "../../../layout/CoreLayoutPlaceholder";
import CoreClasses from "../../../styles/CoreClasses";
import CoreTypographyBody1 from "../../dataDisplay/CoreTypographyBody1";

export default function FixedHeaderLayout() {
  return (
    <>
      <CoreTypographyBody1>Fixed Header Layout</CoreTypographyBody1>

      <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.FIXED_HEADER_LAYOUT_HEADER]} id={FixedHeaderLayout.PLACEHOLDER.HEADER} />

      <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.FIXED_HEADER_LAYOUT_CONTENT]} id={FixedHeaderLayout.PLACEHOLDER.CONTENT} />
    </>
  );
}

FixedHeaderLayout.PLACEHOLDER = { CONTENT: "Content", HEADER: "Header" };

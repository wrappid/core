// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreLayoutPlaceholder from "../../../layout/core/CoreLayoutPlaceholder";
import CoreClasses from "../../../styles/CoreClasses";

export default function HCenteredBlankLayout() {
  return (
    <>
      <CoreLayoutPlaceholder
        id={HCenteredBlankLayout.PLACEHOLDER.CONTENT}
        styleClasses={[CoreClasses.LAYOUT.H_CENTERED_BLANK]} />
    </>
  );
}

HCenteredBlankLayout.PLACEHOLDER = { CONTENT: "content" };

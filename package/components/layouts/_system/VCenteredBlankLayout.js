// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreLayoutPlaceholder from "../../../layout/CoreLayoutPlaceholder";
import CoreClasses from "../../../styles/CoreClasses";

export default function VCenteredBlankLayout() {
  return (
    <>
      <CoreLayoutPlaceholder
        id={VCenteredBlankLayout.PLACEHOLDER.CONTENT}
        styleClasses={[CoreClasses.LAYOUT.V_CENTERED_BLANK]} />
    </>
  );
}

VCenteredBlankLayout.PLACEHOLDER = { CONTENT: "content" };

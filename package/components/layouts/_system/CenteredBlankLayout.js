// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreLayoutPlaceholder from "../../../layout/CoreLayoutPlaceholder";
import CoreClasses from "../../../styles/CoreClasses";

export default function CenteredBlankLayout() {
  return (
    <>
      <CoreLayoutPlaceholder
        id={CenteredBlankLayout.PLACEHOLDER.CONTENT}
        styleClasses={[CoreClasses.LAYOUT.CENTERED_BLANK]} />
    </>
  );
}

CenteredBlankLayout.PLACEHOLDER = { CONTENT: "content" };

// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreLayoutPlaceholder from "../../../layout/core/CoreLayoutPlaceholder";
import CoreClasses from "../../../styles/CoreClasses";

export default function VCenteredBlankLayout() {
  return (
    <>
      <CoreLayoutPlaceholder
        id={VCenteredBlankLayout.PLACEHOLDER.CONTENT}
        styleClasses={[
          CoreClasses.HEIGHT.VH_100,
          CoreClasses.WIDTH.VW_100,
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.FLEX.DIRECTION_COLUMN,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER
        ]} />
    </>
  );
}

VCenteredBlankLayout.PLACEHOLDER = { CONTENT: "content" };

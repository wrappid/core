// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreLayoutPlaceholder from "../../../layout/core/CoreLayoutPlaceholder";
import CoreClasses from "../../../styles/CoreClasses";

export default function CenteredBlankLayout() {
  return (
    <>
      <CoreLayoutPlaceholder
        id={CenteredBlankLayout.PLACEHOLDER.CONTENT}
        styleClasses={[
          CoreClasses.HEIGHT.VH_100,
          CoreClasses.WIDTH.VW_100,
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.FLEX.DIRECTION_COLUMN,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER
        ]} />
    </>
  );
}

CenteredBlankLayout.PLACEHOLDER = { CONTENT: "content" };

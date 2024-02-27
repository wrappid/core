// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreH1 from "../components/dataDisplay/CoreH1";
import CoreStack from "../components/layouts/CoreStack";
import CoreClasses from "../styles/CoreClasses";

function LayoutMismatch(props) {
  const { layoutName, pageName } = props;

  return (
    <CoreStack
      styleClasses={[CoreClasses.LAYOUT.FLEXBOX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
    >
      <CoreH1>{`Page ${pageName} content not supported layout ${layoutName}.`}</CoreH1>
    </CoreStack>
  );
}

export default LayoutMismatch;
// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreH1 from "../components/dataDisplay/CoreH1";
import CoreStack from "../components/layouts/CoreStack";
import CoreLayoutItem from "../layout/core/CoreLayoutItem";
import CoreClasses from "../styles/CoreClasses";

function ComponentNotFound(props) {
  const { componentName } = props;

  return (
    <>
      <CoreLayoutItem id="content">
        <CoreStack
          styleClasses={[CoreClasses.LAYOUT.FLEXBOX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
        >
          <CoreH1>{`Page component ${componentName} not found.`}</CoreH1>
        </CoreStack>
      </CoreLayoutItem>
    </>
  );
}

export default ComponentNotFound;
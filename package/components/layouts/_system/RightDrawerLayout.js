// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreLayoutPlaceholder from "../../../layout/CoreLayoutPlaceholder";
import CoreClasses from "../../../styles/CoreClasses";
import CoreBox from "../CoreBox";
import CoreGrid from "../CoreGrid";

/* Right Drawer with header */
export default function RightDrawerLayout() {

  return (
    <>
      <CoreLayoutPlaceholder 
        styleClasses={[CoreClasses.LAYOUT.RIGHT_DRAWER_LAYOUT_HEADER]} 
        id={RightDrawerLayout.PLACEHOLDER.Header} />

      <CoreGrid>
        <CoreBox gridProps={{ gridSize: 9 }}>
          <CoreLayoutPlaceholder
            styleClasses={[CoreClasses.LAYOUT.RIGHT_DRAWER_LAYOUT_RIGHT_DRAWER]} 
            id={RightDrawerLayout.PLACEHOLDER.Content} />
        </CoreBox>

        <CoreBox gridProps={{ gridSize: 3 }}>
          <CoreLayoutPlaceholder
            styleClasses={[CoreClasses.LAYOUT.RIGHT_DRAWER_LAYOUT_LEFT_CONTENT]} 
            id={RightDrawerLayout.PLACEHOLDER.RightDrawer} />
        </CoreBox>
      </CoreGrid>
    </>

  );
}

RightDrawerLayout.PLACEHOLDER = { Content: "rightDrawerContent", Header: "header", RightDrawer: "rightDrawer" };

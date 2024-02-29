// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreLayoutPlaceholder from "../../../layout/CoreLayoutPlaceholder";
import CoreClasses from "../../../styles/CoreClasses";
import CoreTypographyBody1 from "../../dataDisplay/CoreTypographyBody1";
import CoreBox from "../CoreBox";

/* Left Drawer with header */
export default function LeftDrawerLayout() {

  return (
    <>
      <CoreTypographyBody1>Left Drawr</CoreTypographyBody1>

      <CoreLayoutPlaceholder id={LeftDrawerLayout.PLACEHOLDER.Header} />

      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
        <CoreLayoutPlaceholder id={LeftDrawerLayout.PLACEHOLDER.Content} />

        <CoreLayoutPlaceholder id={LeftDrawerLayout.PLACEHOLDER.LeftDrawer} />
      </CoreBox>
    </>

  );
}

LeftDrawerLayout.PLACEHOLDER = { Content: "leftDrawerContent", Header: "header", LeftDrawer: "leftDrawer" };

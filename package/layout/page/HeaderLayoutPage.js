// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import CoreClasses from "../../styles/CoreClasses";
import CoreLayoutItem from "../core/CoreLayoutItem";
import HeaderLayout from "../HeaderLayout";

export default function HeaderLayoutPage() {
  return (
    <>

      <CoreLayoutItem
        id={HeaderLayout.PLACEHOLDER.HEADER} 
        styleClasses={[
          CoreClasses.WIDTH.VW_100,
          CoreClasses.HEIGHT.VH_25,
          CoreClasses.BG.BG_PRIMARY,
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER
        ]}>
        <CoreTypographyBody1>Header content</CoreTypographyBody1> 
      </CoreLayoutItem>

      <CoreLayoutItem
        id={HeaderLayout.PLACEHOLDER.CONTENT}
        styleClasses={[
          CoreClasses.WIDTH.VW_100,
          CoreClasses.HEIGHT.VH_75,
          CoreClasses.BG.BG_WARNING,
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER
        ]}>
        <CoreTypographyBody1>Outlet Content</CoreTypographyBody1>
      </CoreLayoutItem>

    </>
  );
}
// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import BlankLayout from "../../components/layouts/_system/BlankLayout";
import CoreBox from "../../components/layouts/CoreBox";
import CoreClasses from "../../styles/CoreClasses";
import CoreLayoutItem from "../core/CoreLayoutItem";

export default function BlankLayoutPage() {

  // eslint-disable-next-line etc/no-commented-out-code
  // React.useEffect(() => {
  //   // eslint-disable-next-line no-console
  //   console.log("BlankLayoutPage::useEffect");
  // });

  return (
    <>
      <CoreLayoutItem
        id={BlankLayout.PLACEHOLDER.CONTENT}
        styleClasses={[
          CoreClasses.WIDTH.VW_100,
          CoreClasses.HEIGHT.VH_100,
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
          CoreClasses.BG.BG_PRIMARY
        ]}>
        <CoreBox>
          <CoreTypographyBody1>Blank Layout</CoreTypographyBody1>
        </CoreBox>
      </CoreLayoutItem>
    </>
  );
}

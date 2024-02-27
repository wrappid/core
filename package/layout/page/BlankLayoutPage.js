// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import BlankLayout from "../../components/layouts/_system/BlankLayout";
import CoreClasses from "../../styles/CoreClasses";
import CoreLayoutItem from "../core/CoreLayoutItem";

export default function BlankLayoutPage() {

  // eslint-disable-next-line etc/no-commented-out-code
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("BlankLayoutPage::useEffect");
  });

  return (
    <>
      <CoreLayoutItem styleClasses={[CoreClasses.BG.BG_INFO_DARK]} id={BlankLayout.PLACEHOLDER.CONTENT}>
        <CoreTypographyBody1 styleClasses={[CoreClasses.COLOR.TEXT_WHITE]}>This is a content inside Blank Layout</CoreTypographyBody1>
      </CoreLayoutItem>
    </>
  );
}

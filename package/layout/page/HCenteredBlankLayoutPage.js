// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import HCenteredBlankLayout from "../../components/layouts/_system/HCenteredBlankLayout";
import CoreLayoutItem from "../core/CoreLayoutItem";

export default function HCenteredBlankLayoutPage() {

  // eslint-disable-next-line etc/no-commented-out-code
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("HCenteredBlankLayoutPage::useEffect");
  });

  return (
    <>
      <CoreLayoutItem id={HCenteredBlankLayout.PLACEHOLDER.CONTENT}>
        <CoreTypographyBody1>This is a content inside Horizontal BlankLayout Blank Layout</CoreTypographyBody1>
      </CoreLayoutItem>
    </>
  );
}
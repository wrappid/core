// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import VCenteredBlankLayout from "../../components/layouts/_system/VCenteredBlankLayout";
import CoreLayoutItem from "../core/CoreLayoutItem";

export default function VCenteredBlankLayoutPage() {

  // eslint-disable-next-line etc/no-commented-out-code
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("VCenteredBlankLayout::useEffect");
  });

  return (
    <>
      <CoreLayoutItem id={VCenteredBlankLayout.PLACEHOLDER.CONTENT}>
        <CoreTypographyBody1>This is a content inside vertical BlankLayout Layout</CoreTypographyBody1>
      </CoreLayoutItem>
    </>
  );
}
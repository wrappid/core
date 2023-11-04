// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreClasses from "../../styles/CoreClasses";
import CoreTypographyBody1 from "../dataDisplay/CoreTypographyBody1";
import CoreBox from "../layouts/CoreBox";

export default function ExportData() {

  return (
    <CoreBox styleClasses={[CoreClasses.TABLE.TABLE_FILTER_COLUMN_BOX]}>
      <CoreTypographyBody1>
        Export options are coming soon...{" "}
      </CoreTypographyBody1>
    </CoreBox>
  );
}

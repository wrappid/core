import React from "react";
import CoreTypographyBody1 from "../../dataDisplay/paragraph/CoreTypographyBody1";
import CoreBox from "../../layouts/CoreBox";
import CoreClasses from "../../../styles/CoreClasses";

export default function ExportData(props) {
  const {} = props;
  return (
    <CoreBox styleClasses={[CoreClasses.TABLE.TABLE_FILTER_COLUMN_BOX]}>
      <CoreTypographyBody1>
        Export options are coming soon...{" "}
      </CoreTypographyBody1>
    </CoreBox>
  );
}

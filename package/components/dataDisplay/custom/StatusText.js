// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreClasses from "../../../styles/CoreClasses";
import { getStatusTextColorClass } from "../../../utils/tableUtils";
import CoreTypographyCaption from "../../dataDisplay/paragraph/CoreTypographyCaption";

export default function StatusText(props) {
  const { status, gridProps } = props;

  return (
    <CoreTypographyCaption
      gridProps={gridProps}
      styleClasses={[getStatusTextColorClass(status || ""), CoreClasses.TEXT.TEXT_WEIGHT_BOLD, CoreClasses.TEXT.TEXT_UPPERCASE]}>
      {status || "UNKNOWN"}
    </CoreTypographyCaption>
  );
}

// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreTypography from "../CoreTypography";

export default function CoreTypographySubtitle2(props) {
  return (
    <CoreTypography {...props} variant="subtitle2">
      {props.children}
    </CoreTypography>
  );
}

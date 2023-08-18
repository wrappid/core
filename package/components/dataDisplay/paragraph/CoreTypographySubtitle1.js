// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreTypography from "../CoreTypography";

export default function CoreTypographySubtitle1(props) {
  return (
    <CoreTypography {...props} variant="subtitle1">
      {props.children}
    </CoreTypography>
  );
}

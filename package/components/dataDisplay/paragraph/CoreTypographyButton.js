// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreTypography from "../CoreTypography";

export default function CoreTypographyButton(props) {
  return (
    <CoreTypography {...props} variant="button">
      {props.children}
    </CoreTypography>
  );
}

import React from "react";

import CoreTypography from "../CoreTypography";

export default function CoreTypographyButton(props) {
  return (
    <CoreTypography {...props} variant="button">
      {props.children}
    </CoreTypography>
  );
}

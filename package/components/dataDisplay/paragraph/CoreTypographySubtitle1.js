import React from "react";
import CoreTypography from "../CoreTypography";

export default function CoreTypographySubtitle1(props) {
  return (
    <CoreTypography {...props} variant="subtitle1">
      {props.children}
    </CoreTypography>
  );
}

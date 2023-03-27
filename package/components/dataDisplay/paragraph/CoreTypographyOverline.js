import React from "react";
import CoreTypography from "../CoreTypography";

export default function CoreTypographyOverline(props) {
  return (
    <CoreTypography {...props} variant="overline">
      {props.children}
    </CoreTypography>
  );
}

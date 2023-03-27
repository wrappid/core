import React from "react";
import { SCTypography } from "../../styledComponents/dataDisplay/SCTypography";

export default function CoreTypography(props) {
  //Do not use this directly use CoreParagraph
  return (
    <SCTypography
      {...props}
      component={props.component}
      variant={props.variant}
    >
      {props.children}
    </SCTypography>
  );
}

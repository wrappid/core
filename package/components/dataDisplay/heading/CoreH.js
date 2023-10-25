// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreTypography from "../CoreTypography";

export default function CoreH(props) {
  //DONT use this directly instead use CoreH1 to CoreH6
  return (
    <CoreTypography
      {...props}
      component={props.__level}
      variant={props.variant ? props.variant : props.__level}
    >
      {props.children}
    </CoreTypography>
  );
}
CoreH.validProps = [
  ...CoreTypography.validProps,
  {
    description: "",
    name       : "__level",
    type       : [
      {
        default    : "h1",
        type       : "string",
        validValues: ["h1",
          "h2",
          "h3", 
          "h4", 
          "h5"
        ],
      },
    ],
  },
];

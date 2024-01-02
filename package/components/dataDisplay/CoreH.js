// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreTypography from "./CoreTypography";

const CoreH = React.forwardRef((props, ref) => {
  //DONT use this directly instead use CoreH1 to CoreH6

  return (
    <CoreTypography
      {...props}
      component={props.__level}
      variant={props.variant ? props.variant : props.__level}
      ref={ref}
    >
      {props.children}
    </CoreTypography>
  );
});

CoreH.displayName = "CoreH";
CoreH.validProps = [
  ...CoreTypography.validProps,
  {
    description: "",
    name: "__level",
    type: [
      {
        default: "h1",
        type: "string",
        validValues: ["h1", "h2", "h3", "h4", "h5"],
      },
    ],
  },
];

export default CoreH;

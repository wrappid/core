// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreH from "./CoreH";

export default function CoreH1(props) {
  const { styleClasses = [], variant = "h1", children, ...restProps } = props;
  
  return (
    <CoreH
      styleClasses={styleClasses}
      variant={variant}
      {...restProps}
      __level="h1">
      {children}
    </CoreH>
  );
}

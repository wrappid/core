// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreH from "./CoreH";
import { sanitizeComponentProps } from "../../utils/componentUtil";

const CoreH4 = React.forwardRef((props, ref) => {
  props = sanitizeComponentProps(CoreH4, props);
 
  return (
    <CoreH {...props} __level="h4" ref={ref}/>
  );
});

CoreH4.displayName = "CoreH4";

CoreH4.validProps = [...CoreH.validProps];
CoreH4.invalidProps = [];

export default CoreH4;
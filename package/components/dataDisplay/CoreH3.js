// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreH from "./CoreH";
import { sanitizeComponentProps } from "../../utils/componentUtil";

const CoreH3 = React.forwardRef((props, ref) => {
  props = sanitizeComponentProps(CoreH3, props);
 
  return (
    <CoreH {...props} __level="h3" ref={ref}/>
  );
});

CoreH3.displayName = "CoreH3";

CoreH3.validProps = [...CoreH.validProps];
CoreH3.invalidProps = [];

export default CoreH3;
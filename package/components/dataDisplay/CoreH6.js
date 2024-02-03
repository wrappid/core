// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreH from "./CoreH";
import { sanitizeComponentProps } from "../../utils/componentUtil";

const CoreH6 = React.forwardRef((props, ref) => {
  props = sanitizeComponentProps(CoreH6, props);
 
  return (
    <CoreH {...props} __level="h6" ref={ref}/>
  );
});

CoreH6.displayName = "CoreH6";

CoreH6.validProps = [...CoreH.validProps];
CoreH6.invalidProps = [];

export default CoreH6;
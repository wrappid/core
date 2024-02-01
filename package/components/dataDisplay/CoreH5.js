// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreH from "./CoreH";
import { sanitizeComponentProps } from "../../utils/componentUtil";

const CoreH5 = React.forwardRef((props, ref) => {
  props = sanitizeComponentProps(CoreH5, props);
 
  return (
    <CoreH {...props} __level="h5" ref={ref}/>
  );
});

CoreH5.displayName = "CoreH5";

CoreH5.validProps = [...CoreH.validProps];
CoreH5.invalidProps = [];

export default CoreH5;
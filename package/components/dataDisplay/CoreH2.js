// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreH from "./CoreH";
import { sanitizeComponentProps } from "../../utils/componentUtil";

const CoreH2 = React.forwardRef((props, ref) => {
  props = sanitizeComponentProps(CoreH2, props);
 
  return (
    <CoreH {...props} __level="h2" ref={ref}/>
  );
});

CoreH2.displayName = "CoreH2";

CoreH2.validProps = [...CoreH.validProps];
CoreH2.invalidProps = [];

export default CoreH2;
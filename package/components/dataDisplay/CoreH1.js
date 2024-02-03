// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreH from "./CoreH";
import { sanitizeComponentProps } from "../../utils/componentUtil";

const CoreH1 = React.forwardRef((props, ref) => {
  props = sanitizeComponentProps(CoreH1, props);
  
  return (
    <CoreH {...props} __level="h1" ref={ref}/>
  );
});

CoreH1.displayName = "CoreH1";
CoreH1.validProps = [...CoreH.validProps];
CoreH1.invalidProps = [];

export default CoreH1;
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreH from "./CoreH";
import { sanitizeComponentProps } from "../../../utils/componentUtil";

export default function CoreH1(props) {
  props = sanitizeComponentProps(CoreH1, props);
  const {
    align, gutterBottom, noWrap, paragraph, component, variant = "h1", children 
  } = props;
  
  return (
    <CoreH
      align={align}
      gutterBottom={gutterBottom}
      noWrap={noWrap}
      paragraph={paragraph}
      component={component}
      variant={variant}
      __level="h1">
      {children}
    </CoreH>
  );
}

CoreH1.validProps = [...CoreH.validProps];
CoreH1.invalidProps = ["sx", "classes"];
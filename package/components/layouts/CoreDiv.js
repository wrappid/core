// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeDiv } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

const CoreDiv = React.forwardRef((props, ref) => {
  props = sanitizeComponentProps(CoreDiv, props);
  return <NativeDiv ref={ref}>{props.children}</NativeDiv>;
});

CoreDiv.displayName = CoreDiv;

CoreDiv.validProps = [];
CoreDiv.invalidProps = ["sx", "classes"];

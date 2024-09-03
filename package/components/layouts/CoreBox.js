// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeBox } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

const CoreBox = React.forwardRef((props, ref) => {
  props = sanitizeComponentProps(CoreBox, props);
  return <NativeBox {...props} ref={ref} />;
});

CoreBox.displayName = "CoreBox";
CoreBox.validProps = [
  {
    description:
        "The component used for the root node. Either a string to use a HTML element or a component.",
    name : "component",
    types: [{ type: "elementType" }],
  },
];
export default CoreBox;

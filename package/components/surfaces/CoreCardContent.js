// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeCardContent } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreCardContent(props) {
  props = sanitizeComponentProps(CoreCardContent, props);

  return <NativeCardContent {...props} />;
}
CoreCardContent.validProps = [
  {
    description:
      "The component used for the root node. Either a string to use a HTML element or a component.",
    name : "component",
    types: [{ default: "", type: "elementType" }],
  },
];
CoreCardContent.invalidProps = [];

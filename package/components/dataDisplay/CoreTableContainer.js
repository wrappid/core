// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTableContainer } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreTableContainer(props) {
  props = sanitizeComponentProps(CoreTableContainer, props);
  return <NativeTableContainer {...props} />;
}

CoreTableContainer.displayName = "CoreTableContainer";
CoreTableContainer.validProps = [
  {
    description: "The content of the component, normally CoreTable.",
    name       : "children",
    types      : [{ type: "node" }]
  },
  {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    name       : "component",
    types      : [{ type: "elementType" }]
  }
];

CoreTableContainer.invalidProps = [];
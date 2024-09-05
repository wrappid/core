// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTableFooter } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreTableFooter(props) {
  props = sanitizeComponentProps(CoreTableFooter, props);
  return <NativeTableFooter {...props} />;
}
CoreTableFooter.displayName = "CoreTableFooter";
CoreTableFooter.validProps = [
  {
    description: "The content of the component, normally CoreTableRow.",
    name       : "children",
    types      : [{ type: "node" }]
  },
  {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    name       : "component",
    types      : [{ type: "elementType" }]
  }
];

CoreTableFooter.invalidProps = [];

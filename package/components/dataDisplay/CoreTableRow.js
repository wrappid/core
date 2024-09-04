// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTableRow } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreTableRow(props) {
  props = sanitizeComponentProps(CoreTableRow, props);
  return <NativeTableRow {...props} />;
}

CoreTableRow.displayName = "CoreTableRow";
CoreTableRow.validProps = [
  {
    description: "Should be valid <tr> children such as CoreTableCell.",
    name       : "children",
    types      : [{ type: "node" }]
  },
  {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    name       : "component",
    types      : [{ type: "elementType" }]
  },
  {
    description: "If true, the table row will shade on hover.",
    name       : "hover",
    types      : [
      {
        default: false,
        type   : "boolean"
      }
    ]
  },
  {
    description: "If true, the table row will have the selected shading.",
    name       : "selected",
    types      : [
      {
        default: false,
        type   : "boolean",
      }
    ]
  }
];
CoreTableRow.invalidProps = [];

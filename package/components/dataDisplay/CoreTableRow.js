// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTableRow } from "@wrappid/native";

export default function CoreTableRow(props) {
  return <NativeTableRow {...props} />;
}

CoreTableRow.validProps = [
  {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    name       : "component",
    types      : [{ type: "elementType" }],
  },
  {
    description: "If true, the table row will shade on hover.",
    name       : "hover",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "If true, the table row will have the selected shading.",
    name       : "selected",
    types      : [{ default: false, type: "boolean" }],
  },
];
CoreTableRow.invalidProps = [];

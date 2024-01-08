// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeStack } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreStack(props) {
  props = sanitizeComponentProps(CoreStack, props);

  return <NativeStack {...props} />;
}

CoreStack.validProps = [
  {
    description:
      "The component used for the root node. Either a string to use a HTML element or a component.",
    name : "component",
    types: [{ default: "", type: "elementType" }],
  },
  {
    description:
      "Defines the flex-direction style property. It is applied for all screen sizes.",
    name : "direction",
    types: [
      {
        default    : "",
        type       : "string",
        validValues: [
          "column-reverse",
          "column",
          "row-reverse",
          "row",
          "Array<'column-reverse'",
          "column",
          "row-reverse",
          "'row'>",
          "object"
        ],
      },
    ],
  },
  {
    description: "Add an element between each child.",
    name       : "divider",
    types      : [{ default: "", type: "node" }],
  },
  {
    description: "Defines the space between immediate children.",
    name       : "spacing",
    types      : [
      {
        default    : "", 
        type       : "string",
        validValues: "Array<number| string>| number| object| string" 
      },
    ],
  },
 
  {
    description:
      "If true, the CSS flexbox gap is used instead of applying margin to children.While CSS gap removes the known limitations, it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.To enable this flag globally, follow the theme's default props configuration.",
    name : "useFlexGap",
    types: [{ default: "", type: "boolean" }],
  },
];
CoreStack.invalidProps = ["sx", "classes"];

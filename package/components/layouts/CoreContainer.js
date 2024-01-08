// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeContainer } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreContainer(props) {
  props = sanitizeComponentProps(CoreContainer, props);
  return <NativeContainer {...props} />;
}

CoreContainer.validProps = [
  {
    description:
      "The component used for the root node. Either a string to use a HTML element or a component.",
    name : "component",
    types: [{ default: "", type: "elementType" }],
  },
  {
    description: "If true, the left and right padding is removed.",
    name       : "disableGutters",
    types      : [{ default: "", type: "boolean" }],
  },
  {
    description:
      "Set the max-width to match the min-width of the current breakpoint. This is useful if you'd prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport. It's fluid by default.",
    name : "fixed",
    types: [{ default: "", type: "boolean" }],
  },
  {
    description:
      "Determine the max-width of the container. The container width grows with the size of the screen. Set to false to disable maxWidth.",
    name : "maxWidth",
    types: [
      {
        default    : "",
        type       : "string",
        validValues: [
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "false"
        ],
      },
    ],
  },
];
CoreContainer.invalidProps = ["sx", "classes"];

// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativePaper } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CorePaper(props) {
  props = sanitizeComponentProps(CorePaper, props);

  return <NativePaper {...props} />;
}
CorePaper.validProps = [
  {
    description:
      "The component used for the root node. Either a string to use a HTML element or a component.",
    name : "component",
    types: [{ default: "", type: "elementType" }],
  },
  {
    description:
      "Shadow depth, corresponds to dp in the spec. It accepts values between 0 and 24 inclusive.",
    name : "elevation",
    types: [{ default: "1", type: "integer" }],
  },
  {
    description: "If true, rounded corners are disabled.",
    name       : "square",
    types      : [{ default: "FALSE", type: "bool" }],
  },
  {
    description: "The variant to use.",
    name       : "variant",
    types      : [
      {
        default    : "elevation'",
        type       : "string",
        validValues: ["elevationelevation", "outlined"],
      },
    ],
  },
];

CorePaper.invalidProps = ["sx", "classes"];

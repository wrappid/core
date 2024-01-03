// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeListItemText } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreListItemText(props) {
  props = sanitizeComponentProps(CoreListItemText, props);
  return <NativeListItemText {...props} />;
}

CoreListItemText.invalidProps = [
  {
    description: "If true, the children won't be wrapped by a Typography component. This can be useful to render an alternative Typography variant by wrapping the children (or primary) text, and optional secondary text with the Typography component.",
    name       : "disableTypography",
    types      : [
      {
        default    : "false",
        type       : "bool",
        validValues: [true, false],
      },
    ],
    
  },
  {
    description: "If true, the children are indented. This should be used if there is no left avatar or left icon.",
    name       : "inset",
    types      : [
      {
        default    : "false",
        type       : "bool",
        validValues: [true, false],
      },
    ]
  },
  {
    description:
    "The main content element.",
    name : "primary",
    types: [{ type: "node" }],
  },
  {
    description:
      "These props will be forwarded to the primary typography component (as long as disableTypography is not true).",
    name : "primaryTypographyProps",
    types: [
      {
        default: "{}",
        type   : "object",
      },
    ],
  },
  {
    description: "The secondary content element.",
    name       : "secondary",
    types      : [{ type: "node" }]
  }, 
  {
    description: "These props will be forwarded to the secondary typography component (as long as disableTypography is not true).",
    name       : "secondaryTypographyProps",
    types      : [{ type: "object" }]
  },
];

CoreListItemText.invalidProps = ["sx", "classes"];

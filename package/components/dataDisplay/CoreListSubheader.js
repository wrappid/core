// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeListSubheader } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreListSubheader(props) {
  props = sanitizeComponentProps(CoreListSubheader, props);
  return <NativeListSubheader {...props} />;
}

CoreListSubheader.validProps = [
  {
    description:
      "The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide.",
    name : "color",
    types: [
      {
        default    : "default",
        type       : "string",
        validValues: [
          "default",
          "primary",
          "secondary",
          "error",
          "info",
          "success",
          "warning",
        ],
      },
    ],
  },
  {
    description:
      "The component used for the root node. Either a string to use a HTML element or a component.",
    name : "component",
    types: [{ type: "elementType" }],
  },
  {
    description: "If true, the left and right padding is removed.",
    name       : "disableGutters",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ],
  }, 
  {
    description: "If true, the List Subheader will not stick to the top during scroll.",
    name       : "disableSticky",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ],
  },
  {
    description: "If true, the List Subheader is indented.",
    name       : "inset",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ],
  },
];

CoreListSubheader.invalidProps = [];
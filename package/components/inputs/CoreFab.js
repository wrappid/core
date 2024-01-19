// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeFab } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreFab(props) {
  props = sanitizeComponentProps(CoreFab, props);

  return <NativeFab {...props} />;
}

CoreFab.validProps = [
  {
    description:
      "The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide.",
    name : "color",
    types: [
      {
        default    : "primary",
        type       : "string",
        validValues: [
          "default",
          "primary",
          "secondary",
          "error",
          "info",
          "success",
          "warning"
        ]
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
    description: "If true, the component is disabled.",
    name       : "disabled",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "If true, the keyboard focus ripple is disabled.",
    name       : "disableFocusRipple",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "If true, the ripple effect is disabled.",
    name       : "disableRipple",
    type       : [{ default: false, type: "boolean" }],
  },
  {
    description: "The URL to link to when the button is clicked. If defined, an a element will be used as the root node.",
    name       : "href",
    type       : "string"
  },
  {
    name : "onClick",
    types: [{ type: "function" }],
  },
  {
    description:
      "The size of the component.",
    name : "size",
    types: [
      {
        default    : "medium",
        type       : "string",
        validValues: ["medium", "small"],
      },
    ],
  },
  {
    description:
      "The variant to use.",
    name : "variant",
    types: [
      {
        default    : "filled",
        type       : "string",
        validValues: ["filled", "outlined"],
      },
    ],
  },
];

CoreFab.invalidProps = ["sx", "classes"];

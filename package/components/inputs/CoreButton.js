/* eslint-disable no-console */
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeButton } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreButton(props) {
  props = sanitizeComponentProps(CoreButton, props);
  return <NativeButton {...props} />;
}

CoreButton.validProps = [
  {
    name : "label",
    types: [{ type: "string" }]
  },
  {
    name : "OnClick",
    types: [{ type: "function" }],
  },
  {
    description:
      "The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide.",
    name : "color",
    types: [
      {
        default    : "primary",
        type       : "string",
        validValues: [
          "inherit",
          "primary",
          "secondary",
          "success",
          "error",
          "info",
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
    description: "If true, the component is disabled.",
    name       : "disabled",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "If true, no elevation is used.",
    name       : "disableElevation",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "If true, the keyboard focus ripple is disabled.",
    name       : "disableFocusRipple",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description:
      "If true, the ripple effect is disabled.⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure to highlight the element by applying separate styles with the .Mui-focusVisible class.",
    name : "disableRipple",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description: "Element placed after the children.",
    name       : "endIcon",
    types      : [{ type: "node" }],
  },
  {
    description:
      "If true, the button will take up the full width of its container.",
    name : "fullWidth",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description:
      "The URL to link to when the button is clicked. If defined, an a element will be used as the root node.",
    name : "href",
    types: [{ type: "string" }],
  },
  {
    description:
      "The size of the component. small is equivalent to the dense button styling.",
    name : "size",
    types: [
      {
        default    : "medium",
        type       : "string",
        validValues: ["small", "medium", "large"],
      },
    ],
  },
  {
    description: "Element placed before the children.",
    name       : "startIcon",
    types      : [{ type: "node" }],
  },
  {
    description: "The variant to use.",
    name       : "variant",
    types      : [
      {
        default    : "text",
        type       : "string",
        validValues: ["contained", "outlined", "text"],
      },
    ],
  },
];
CoreButton.invalidProps = [];

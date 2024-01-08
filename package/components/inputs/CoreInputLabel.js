// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeInputLabel } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreInputLabel(props) {
  props = sanitizeComponentProps(CoreInputLabel, props);
  return <NativeInputLabel {...props}>{props.children}</NativeInputLabel>;
}
CoreInputLabel.validProps = [
  {
    description:
      "The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide.",
    name : "color",
    types: [
      {
        default    : "default",
        type       : "string",
        validValues: [
          "inherit",
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
    description: "If true, the transition animation is disabled.",
    name       : "disableAnimation",
    types      : [{ default: false, type: "boolean" }]
  },
  {
    description: "If true, the component is disabled..",
    name       : "disabled",
    types      : [{ type: "boolean" }]
  },
  {
    name : "error",
    types: [{ type: "boolean" }] 
  },
  {
    name : "focused",
    types: [{ type: "boolean" }] 
  },
  {
    description:
      "If dense, will adjust vertical spacing. This is normally obtained via context from FormControl. The prop defaults to the value ('none') inherited from the parent FormControl component.",
    name : "margin",
    types: [{ type: "dense" }],
  },
  {
    name : "required",
    types: [{ type: "boolean" }] 
  },
  {
    name : "shrink",
    types: [{ type: "boolean" }] 
  },
  {
    description:
      "The size of the component.",
    name : "size",
    types: [
      {
        default    : "normal",
        type       : "string",
        validValues: ["normal", "small"],
      },
    ],
  },
  {
    description:
      "The variant to use.",
    name : "variant",
    types: [
      {
        type       : "string",
        validValues: ["filled", "outlined", "standard"],
      },
    ],
  },
];
CoreInputLabel.validProps = ["sx", "classes"];


// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeFormControl } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreFormControl(props) {
  props = sanitizeComponentProps(CoreFormControl, props);
  return <NativeFormControl {...props} />;
}
CoreFormControl.validProps = [
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
    name : "error",
    types: [{ default: "false", type: "boolean" }]
  },
  {
    name : "focused",
    types: [{ type: "boolean" }]
  },
  {
    name : "fulwidth",
    types: [{ default: "false", type: "boolean" }]
  },
  {
    description: "If true, the label is hidden. This is used to increase density for a FilledInput. Be sure to add aria-label to the input element.",
    name       : "hiddenLabel",
    types      : [{ default: "false", type: "boolean" }]
  },
  {
    description:
      "If dense, will adjust vertical spacing. This is normally obtained via context from FormControl. The prop defaults to the value ('none') inherited from the parent FormControl component.",
    name : "margin",
    types: [{ default: "", type: "dense'| 'none'" }],
  },
  {
    name : "required",
    types: [{ default: "false", type: "boolean" }]
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
    description: "The shape of the avatar.",
    name       : "variant",
    types      : [
      {
        default    : "circular",
        type       : "string",
        validValues: ["circular", "rounded", "square"]
      },
      {
        default    : true,
        type       : "boolean",
        validValues: [true, false]
      }
    ]
  },
];
CoreFormControl.invalidProps = [];

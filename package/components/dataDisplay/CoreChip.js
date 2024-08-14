// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeChip } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreChip(props) {
  props = sanitizeComponentProps(CoreChip, props);

  return (
    <NativeChip
      {...props}
    />
  );
}

CoreChip.validProps = [
  {
    description: "The Avatar element to display.",
    name       : "avatar",
    types      : [{ type: "element" }],
  },
  {
    description: "If true, the chip will appear clickable, and will raise when pressed, even if the onClick prop is not defined. If false, the chip will not appear clickable, even if onClick prop is defined. This can be used, for example, along with the component prop to indicate an anchor Chip is clickable. Note: this controls the UI and does not affect the onClick event.",
    name       : "clickable",
    types      : [
      {
        isDefaultType: true,
        type         : "boolean",
        validValues  : [true, false],
      },
    ],
  },
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
    description:
      "Override the default delete icon element. Shown only if onDelete is set.",
    name : "deleteIcon",
    types: [{ type: "elementType" }],
  },
  {
    description:
      "If true, the component is disabled.",
    name : "showZero",
    types: [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ],
  },
  {
    description: "Icon element.",
    name       : "icon",
    types      : [{ type: "element" }],
  },
  {
    description: "The content of the component.",
    name       : "label",
    types      : [{ type: "node" }],
  },
  {
    description: "Callback fired when the delete icon is clicked. If set, the delete icon will be shown.",
    name       : "onDelete",
    types      : [{ type: "function" }],
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
      "If true, allows the disabled chip to escape focus. If false, allows the disabled chip to receive focus.",
    name : "skipFocusWhenDisabled",
    types: [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
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
  {
    description: "If true, the component is disabled.",
    name       : "disabled",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ],
  },
];

CoreChip.invalidProps = [];

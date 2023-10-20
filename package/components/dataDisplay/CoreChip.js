// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeChip } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreChip(props) {
  props = sanitizeComponentProps(CoreChip, props);

  const {
    avtar,
    children,
    clickable,
    color,
    component,
    deleteIcon,
    showZero,
    icon,
    label,
    onDelete,
    size,
    skipFocusWhenDisabled,
    varient
  } = props;

  return (
    <NativeChip 
      avtar={avtar}
      clickable={clickable}
      color={color}
      component={component}
      deleteIcon={deleteIcon}
      showZero={showZero}
      icon={icon}
      label={label}
      onDelete={onDelete}
      size={size}
      skipFocusWhenDisabled={skipFocusWhenDisabled}
      varient={varient}>
      {children}
    </NativeChip>
  );
}

CoreChip.validProps = [
  {
    description: "The Avatar element to display.",
    name       : "avtar",
    types      : [{ type: "element" }],
  },
  {
    description: "This prop isn't supported. Use the component prop if you need to change the children structure.",
    name       : "children",
    types      : [{ type: "unsupportedProp" }],
  },
  {
    description: "If true, the chip will appear clickable, and will raise when pressed, even if the onClick prop is not defined. If false, the chip will not appear clickable, even if onClick prop is defined. This can be used, for example, along with the component prop to indicate an anchor Chip is clickable. Note: this controls the UI and does not affect the onClick event.",
    name       : "clickable",
    types      : [
      {
        type       : "bool",
        validValues: [true, false],
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
        default    : "false",
        type       : "bool",
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
    types      : [{ type: "func" }],
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
        default    : "false",
        type       : "bool",
        validValues: [true, false],
      },
    ],
  },
  {
    description:
      "The variant to use.",
    name : "varient",
    types: [
      {
        default    : "filled",
        type       : "string",
        validValues: ["filled", "outlined"],
      },
    ],
  },
];

CoreChip.invalidProps = ["sx", "classes"];

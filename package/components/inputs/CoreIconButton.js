// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeIconButton } from "@wrappid/native";

// eslint-disable-next-line etc/no-commented-out-code
import CoreButton from "./CoreButton";
import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreIconButton(props) {
  // eslint-disable-next-line etc/no-commented-out-code
  props = sanitizeComponentProps(CoreIconButton, props);
  return <NativeIconButton {...props} />;
}
CoreIconButton.validProps = [
  ...CoreButton.validProps,
  {
    name : "onClick", /// temporary adding 'onClick' it should come default from CoreButton which is 'onClick'. onClick should changed to onClick
    types: [{ type: "function" }]
  },
  {
    name : "onClick", /// we have already a onClick props available in CoreButton but it's starting with Capital 'O' that's need to be changed to present 'onClicl' props.
    types: [{ type: "function" }], 
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
    description:
      "If true, the ripple effect is disabled. Without a ripple there is no styling for :focus-visible by default. Be sure to highlight the element by applying separate styles with the .Mui-focusVisible class.",
    name : "disableRipple",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description:
      "If given, uses a negative margin to counteract the padding on one side (this is often helpful for aligning the left or right side of the icon with content above or below, without ruining the border size and shape).",
    name : "edge",
    types: [{ default: false, type: "'end'| 'start'| false" }],
  },
  {
    description:
      "The size of the component. small is equivalent to the dense button styling.",
    name : "size",
    types: [
      {
        default    : "medium'",
        type       : "string",
        validValues: ["small", "medium", "large"],
      },
    ],
  },
];

CoreIconButton.invalidProps = [];

// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeCircularProgress } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreCircularProgress(props) {
  props = sanitizeComponentProps(CoreCircularProgress, props);

  const {
    color, disableShrink, size, thickness, value, variant 
  } = props;

  return (
    <NativeCircularProgress
      color={color}
      disableShrink={disableShrink}
      size={size}
      thickness={thickness}
      value={value}
      variant={variant}
    ></NativeCircularProgress>
  );
}
CoreCircularProgress.validProps = [
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
      "If true, the shrink animation is disabled. This only works if variant is indeterminate.",
    name : "disableShrink",
    types: [
      {
        default: false,
        type   : "boolean",
      },
    ],
  },
  {
    description:
      "The size of the component. If using a number, the pixel unit is assumed. If using a string, you need to provide the CSS unit, e.g. '3rem'.",
    name : "size",
    types: [
      {
        default: 40,
        type   : "number",
      },
    ],
  },
  {
    description: "The thickness of the circle.",
    name       : "thickness",
    types      : [
      {
        default: 3.6,
        type   : "number",
      },
    ],
  },
  {
    description:
      "The value of the progress indicator for the determinate variant. Value between 0 and 100.",
    name : "value",
    types: [
      {
        default: 0,
        type   : "nuumber",
      },
    ],
  },
  {
    description:
      "The variant to use. Use indeterminate when there is no progress value.",
    name : "variant",
    types: [
      {
        default    : "indeterminate",
        type       : "string",
        validValues: ["sxdeterminate", "indeterminate"],
      },
    ],
  },
];
CoreCircularProgress.invalidProps = [];

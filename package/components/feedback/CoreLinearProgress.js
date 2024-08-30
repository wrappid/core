// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeLinearProgress } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreLinearProgress(props) {
  props = sanitizeComponentProps(CoreLinearProgress, props);
  const { labelWidth = 35, ...restProps } = props;

  return (
    <NativeLinearProgress
      {...restProps}
      labelWidth={labelWidth}
    ></NativeLinearProgress>
  );
}

CoreLinearProgress.validProps = [
  {
    description:
      "The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide.",
    name : "color",
    types: [
      {
        default    : "primary",
        type       : "string",
        validValues: ["inherit", "primary", "secondary"],
      },
    ],
  },
  {
    description:
      "The value of the progress indicator for the determinate and buffer variants. Value between 0 and 100.",
    name : "value",
    types: [{ type: "number" }],
  },
  {
    description: "The value for the buffer variant. Value between 0 and 100.",
    name       : "valueBuffer",
    types      : [{ type: "number" }],
  },
  {
    description:
      "The variant to use. Use indeterminate or query when there is no progress value.",
    name : "variant",
    types: [
      {
        default    : "indeterminate",
        type       : "string",
        validValues: ["sxbuffer", "determinate", "indeterminate", "query"],
      },
    ],
  },
  {
    description: "Determines whether the label should be displayed next to the progress bar.",
    name       : "showLabel",
    types      : [
      {
        default: false,
        type   : "boolean",
      },
    ],
  },
  { 
    description: "This prop allows you to set the width of progress width",
    name       : "labelWidth",
    types      : [
      {
        default: 35,
        type   : "number" 
      }
    ]
  },
];
CoreLinearProgress.invalidProps = [];
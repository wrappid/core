// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreTypography from "./CoreTypography";
import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreTypographyButton(props) {
  props = sanitizeComponentProps(CoreTypographyButton, props);
  return (
    <CoreTypography {...props} variant="button">
      {props.children}
    </CoreTypography>
  );
}

CoreTypographyButton.validProps = [
  {
    description:
      "The content of the component need to show as it is like a code block.",
    name : "code",
    types: [{ default: false, type: "boolean", validValues: [true, false] }],
  },
  {
    description: "Set the text-align on the component.",
    name       : "align",
    types      : [
      {
        default    : "inherit",
        type       : "string",
        validValues: [
          "center",
          "inherit",
          "justify",
          "left",
          "right"
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
    description: "If true, the text will have a bottom margin.",
    name       : "gutterBottom",
    types      : [{ default: false, type: "boolean", validValues: [true, false] }],
  },
  {
    description:
      "If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.\
    Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).",
    name : "noWrap",
    types: [{ default: false, type: "boolean", validValues: [true, false] }],
  },

  {
    description: "",
    name       : "limitChars",
    types      : [{ type: "number" }],
  },
  {
    description: "",
    name       : "hideSeeMore",
    types      : [{ default: false, type: "boolean", validValues: [true, false] }],
  },
];
CoreTypographyButton.invalidProps = ["sx", "classes"];

// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeDivider } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreDivider(props) {
  let sanitizedProps = sanitizeComponentProps(CoreDivider, props);

  const { children, ...restProps } = sanitizedProps;

  return (
    <NativeDivider {...restProps}>
      {children} 
    </NativeDivider>
  );
}

CoreDivider.validProps = [
  {
    description: "Absolutely position the element.",
    name       : "absolute",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false]
      },
    ],
  },
  {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    name       : "component",
    types      : [{ type: "elementType" }],
  },
  {
    description: "If true, a vertical divider will have the correct height when used in flex container. (By default, a vertical divider will have a calculated height of 0px if it is the child of a flex container.)",
    name       : "flexItem",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false]
      },
    ],
  },
  {
    description: "If true, the divider will have a lighter color.",
    name       : "light",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false]
      },
    ],
  },
  {
    description: "The component orientation.",
    name       : "orientation",
    types      : [
      {
        default    : "horizontal",
        type       : "string",
        validValues: ["horizontal", "vertical"],
      },
    ],
  },
  {
    description: "The text alignment.",
    name       : "textAlign",
    types      : [
      {
        default    : "center",
        type       : "string",
        validValues: ["center", "left", "right"],
      },
    ],
  },
  {
    description: "The variant to use.",
    name       : "variant",
    types      : [
      {
        default    : "fullWidth",
        type       : "string",
        validValues: ["fullWidth", "inset", "middle"]
      },
    ],
  },
  {
    name : "leftInset",
    types: [
      {
        type       : "boolean",
        validValues: [true, false]
      },
    ],
  },
  {
    name : "horizontalInset",
    types: [
      {
        type       : "boolean",
        validValues: [true, false]
      },
    ],
  },
  {
    name : "bold",
    types: [
      {
        type       : "boolean",
        validValues: [true, false]
      },
    ],
  }
];

CoreDivider.invalidProps = ["style", "theme"];

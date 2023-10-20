// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeDivider } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreDivider(props) {
  props = sanitizeComponentProps(CoreDivider, props);
  const {
    absolute,
    component,
    children,
    orientation,
    flexItem,
    light,
    textAlign,
    variant
  } = props;

  return (
    <NativeDivider
      absolute={absolute}
      component={component}
      orientation={orientation}
      flexItem={flexItem}
      light={light}
      textAlign={textAlign}
      variant={variant}>
      {children} 
    </NativeDivider>
  );
}

CoreDivider.valid.props = [
  {
    description: "Absolutely position the element.",
    name       : "absolute",
    types      : [
      {
        default    : false,
        type       : "bool",
        validValues: [true, false]
      },
    ],
  },
  {
    description: "The content of the component.",
    name       : "children",
    types      : [{ type: "node" }],
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
        type       : "bool",
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
        type       : "bool",
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
];
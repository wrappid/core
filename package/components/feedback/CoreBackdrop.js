// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeBackdrop } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreBackdrop(props) {
  props = sanitizeComponentProps(CoreBackdrop, props);

  return <NativeBackdrop {...props} />;
}

CoreBackdrop.validProps = [
  {
    description: "If true, the component is shown.",
    name       : "open",
    required   : true,
    types      : [
      { 
        type       : "boolean",
        validValues: [true, false] 
      }
    ]
  },
  {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    name       : "component",
    required   : true,
    types      : [{ type: "elementType" }]
  },
  {
    description: "The components used for each slot inside. \
    This prop is an alias for the slots prop. It's recommended to use the slots prop instead.",
    name : "components",
    types: [
      {
        default    : {},
        type       : "object",
        validValues: { Root: "elementType" }
      },
      {
        default    : true,
        type       : "boolean",
        validValues: [true, false]
      }
    ]
  },
  {
    description: "The extra props for the slot components. You can override the existing props or add new ones.\
    This prop is an alias for the slotProps prop. It's recommended to use the slotProps prop instead, as componentsProps will be deprecated in the future.",
    name : "componentsProps",
    types: [
      {
        default    : {},
        type       : "object",
        validValues: { Root: "object" }
      }
    ]
  },
  {
    description: "If true, the backdrop is invisible. It can be used when rendering a popover or a custom select component.",
    name       : "invisible",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false]
      }
    ]
  },
  {
    description: "The extra props for the slot components. You can override the existing props or add new ones. \
    This prop is an alias for the componentsProps prop, which will be deprecated in the future.",
    name : "slotProps",
    types: [
      {
        default    : {},
        type       : "object",
        validValues: { root: "object" }
      }
    ]
  },
  {
    description: "The components used for each slot inside. \
    This prop is an alias for the components prop, which will be deprecated in the future.",
    name : "slots",
    types: [
      {
        default    : {},
        type       : "object",
        validValues: { root: "elementType" }
      }
    ]
  },
  {
    description: "The component used for the transition.",
    name       : "TransitionComponent",
    types      : [
      {
        default: "Fade",
        type   : "elementType",
      }
    ]
  },
  {
    description: "The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object.",
    name       : "transitionDuration",
    types      : [{ type: "number" }, { type: "object", validValues: "{ appear?: number, enter?: number, exit?: number }" }]
  },

];

CoreBackdrop.invalidProps = [];
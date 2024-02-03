// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeCollapse } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreCollapse(props) {
  props = sanitizeComponentProps(CoreCollapse, props);
  return <NativeCollapse {...props} />;
}
CoreCollapse.validProps = [
  {
    description:
      "Add a custom transition end trigger. Called with the transitioning DOM node and a done callback. Allows for more fine grained transition end logic. Note: Timeouts are still used as a fallback if provided.",
    name : "addEndListener",
    types: [{ default: "", type: "function" }],
  },
  {
    description: "The content node to be collapsed.",
    name       : "children",
    types      : [{ default: "", type: "node" }],
  },
  {
    description:
      "Override or extend the styles applied to the component.See CSS API below for more details.",
    name : "classes",
    types: [{ default: "", type: "object" }],
  },
  {
    description:
      "The width (horizontal) or height (vertical) of the container when collapsed.",
    name : "collapsedSize",
    types: [
      {
        default: "0px",
        type   : "number, string ",
      },
    ],
  },
  {
    description:
      "The component used for the root node. Either a string to use a HTML element or a component.This needs to be able to hold a ref.",
    name : "component",
    types: [{ type: "string" }],
  },
  {
    description:
      "The transition timing function. You may specify a single easing or a object containing enter and exit values.",
    name : "easing",
    types: [
      {
        default    : "",
        type       : "string",
        validValues: [{ enter: "string", exit: "string" }],
      },
    ],
  },
  {
    description: "If true, the component will transition in.",
    name       : "in",
    types      : [{ type: "string" }],
  },
  {
    description: "The transition orientation.",
    name       : "orientation",
    types      : [
      {
        default    : "vertical'",
        type       : "string",
        validValues: ["horizontal", "vertical"],
      },
    ],
  },
  {
    description:
      "The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object.Set to 'auto' to automatically calculate transition time based on height.",
    name : "timeout",
    types: [
      {
        default    : "duration.standard",
        type       : "string",
        validValues: ["'auto'| number| { appear?: number, enter?: number, exit?: number }"],
      },
    ],
  },
];
CoreCollapse.invalidProps = [];

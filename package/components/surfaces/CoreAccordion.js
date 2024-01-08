// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeAccordion } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreAccordion(props) {
  props = sanitizeComponentProps(CoreAccordion, props);
  return <NativeAccordion {...props} />;
}
CoreAccordion.validProps = [
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
    description: "If true, expands the accordion by default.",
    name       : "defaultExpanded",
    types      : [{ default: false, type: "boolean", validValues: [true, false] }],
  },
  {
    description: "If true, the component is disabled.",
    name       : "disabled",
    types      : [{ default: false, type: "boolean", validValues: [true, false] }],
  },
  {
    description:
      "If true, it removes the margin between two expanded accordion items and the increase of height.",
    name : "disableGutters",
    types: [{ default: false, type: "boolean", validValues: [true, false] }],
  },
  {
    description:
      "If true, expands the accordion, otherwise collapse it. Setting this prop enables control over the accordion.",
    name : "expanded",
    types: [{ type: "boolean", validValues: [true, false] }],
  },
  {
    description: "Callback fired when the value changes.Signature:function(event: React.SyntheticEvent, value: Value | Array, reason: string, details?: string) => voidevent The event source of the callback.value The new value of the component.reason One of \"createOption\", \"selectOption\", \"removeOption\", \"blur\" or \"clear\".",
    name       : "onChange",
    types      : [{ type: "func" }],
  },
  {
    description: "If true, rounded corners are disabled.",
    name       : "square",
    types      : [{ default: false, type: "boolean", validValues: [true, false] }],
  },
  {
    description:
      "The component used for the transition. Follow this guide to learn more about the requirements for this component.",
    name : "TransitionComponent",
    types: [
      {
        default: "Collapse",
        type   : "elementType",
      },
    ],
  },
  {
    description:
      "Props applied to the transition element. By default, the element is based on this Transition component.",
    name : "TransitionProps",
    types: [{ default: "", type: "stobjectring" }],
  },
];

CoreAccordion.invalidProps = ["sx", "classes"];

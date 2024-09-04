// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeListItemButton } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreListItemButton(props) {
  props = sanitizeComponentProps(CoreListItemButton, props);
  return <NativeListItemButton {...props} />;
}

CoreListItemButton.validProps = [
  {
    description: "Defines the align-items style property.",
    name       : "alignItems",
    types      : [
      {
        default    : "center",
        type       : "string",
        validValues: ["flex-start"]
      }
    ],
    
  },
  {
    description: "If true, the list item is focused during the first mount. Focus will also be triggered if the value changes from false to true.",
    name       : "autoFocus",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ]
  },
  {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    name       : "component",
    types      : [{ type: "elementType" }],
  }, 
  {
    description: "If true, compact vertical padding designed for keyboard and mouse input is used. The prop defaults to the value inherited from the parent List component.",
    name       : "dense",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ]
  },
  {
    description: "If true, the component is disabled.",
    name       : "disabled",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ]
  }, 
  {
    description: "If true, the left and right padding is removed.",
    name       : "disableGutters",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ]
  },
  {
    description: "If true, a 1px light border is added to the bottom of the list item.",
    name       : "divider",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ]
  },
  {
    description: "This prop can help identify which element has keyboard focus. The class name will be applied when the element gains the focus through keyboard interaction. It's a polyfill for the CSS :focus-visible selector. The rationale for using this feature is explained here. A polyfill can be used to apply a focus-visible class to other components if needed.",
    name       : "focusVisibleClassName",
    type       : "string"
  },
  {
    description: "Use to apply selected styling.",
    name       : "selected",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ]
  },
  {
    name : "activeOpacity",
    types: [{ default: 0.2, type: "number" }]
  },
  {
    name : "nextFocusDown",
    types: [{ type: "number" }]
  },
  {
    name : "nextFocusForward",
    types: [{ type: "number" }]
  },
  {
    name : "nextFocusLeft",
    types: [{ type: "number" }]
  },
  {
    name : "nextFocusRight",
    types: [{ type: "number" }]
  },
  {
    name : "nextFocusUp",
    types: [{ type: "number" }]
  }
];

CoreListItemButton.invalidProps = ["style"];

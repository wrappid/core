// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTableSortLabel } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreTableSortLabel(props) {
  props = sanitizeComponentProps(CoreTableSortLabel, props);
  return <NativeTableSortLabel {...props}>{props?.children}</NativeTableSortLabel>;
}

CoreTableSortLabel.displayName = "CoreTableSortLabel";

CoreTableSortLabel.validProps = [
  // eslint-disable-next-line etc/no-commented-out-code
  /*     CoreButtonBase not available. Implementing it's props here separately.
     ...CoreButtonBase.validProps, */

  // eslint-disable-next-line etc/no-commented-out-code
  // -----------------Start of CoreButtonBase.validProps-----------------
  {
    description: "A ref for imperative actions. It currently only supports focusVisible() action.",
    name       : "action",
    types      : [{ type: "ref" }]
  },
  {
    description: "If true, the ripples are centered. They won't start at the cursor interaction position.",
    name       : "centerRipple",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false]
      }
    ]
  },
  {
    description: "The content of the component.",
    name       : "children",
    types      : [{ type: "node" }]
  },
  {
    description: "The component used for the root node. Either a string to use a HTML element or a component. This needs to be able to hold a ref",
    name       : "component",
    types      : [{ type: "elementType" }]
  },
  {
    description: "If true, the component is disabled.",
    name       : "disabled",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false]
      }
    ]
  },
  {
    description: "If true, the ripple effect is disabled. Without a ripple there is no styling for :focus-visible by default. Be sure to highlight the element by applying separate styles with the .Mui-focusVisible class.",
    name       : "disableRipple",
    types      : [
      {
        default    : "false",
        type       : "boolean",
        validValues: [true, false]
      }
    ]
  },
  {
    description: "If true, the touch ripple effect is disabled.",
    name       : "disableTouchRipple",
    types      : [
      {
        default    : "false",
        type       : "boolean",
        validValues: [true, false]
      }
    ]
  },
  {
    description: "If true, the base button will have a keyboard focus ripple.",
    name       : "focusRipple",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false]
      }
    ]
  },
  {
    description: "This prop can help identify which element has keyboard focus. The class name will be applied when the element gains the focus through keyboard interaction. It's a polyfill for the CSS :focus-visible selector. The rationale for using this feature is explained here. A polyfill can be used to apply a focus-visible class to other components if needed.",
    name       : "focusVisibleClassName",
    types      : [
      {
        type       : "string",
        validValues: []
      }
    ]
  },
  {
    description: "The component used to render a link when the href prop is provided.",
    name       : "LinkComponent",
    types      : [{ type: "elementType" }]
  },
  {
    description: "Callback fired when the component is focused with a keyboard. We trigger a onFocus callback too.",
    name       : "onFocusVisible",
    types      : [
      {
        type       : "function",
        validValues: []
      }
    ]
  },
  {
    description: "Props applied to the TouchRipple element.",
    name       : "TouchRippleProps",
    types      : [
      {
        default: {},
        type   : "object",
      }
    ]
  },
  {
    description: "A ref that points to the TouchRipple element.",
    name       : "touchRippleRef",
    types      : [
      {
        // eslint-disable-next-line etc/no-commented-out-code
        /* default: "func|{ current?: { pulsate: func, start: func, stop: func } }",
        type: "function|{ current?: { pulsate: function, start: function, stop: function } }", */
        type: "function"
      },
      {
        default: {},
        type   : "object"
      }
    ]
  },
  // eslint-disable-next-line etc/no-commented-out-code
  // ------------------End of CoreButtonBase.validProps------------------
  {
    description: "If true, the label will have the active styling (should be true for the sorted column).",
    name       : "active",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false]
      }
    ]
  },
  {
    description: "Label contents, the arrow will be appended automatically.",
    name       : "children",
    types      : [{ type: "node" }]
  },
  {
    description: "The current sort direction.",
    name       : "direction",
    types      : [
      {
        default    : "asc",
        type       : "string",
        validValues: ["asc", "desc"]
      }
    ]
  },
  {
    description: "Hide sort icon when active is false.",
    name       : "hideSortIcon",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false]
      }
    ]
  },
  {
    description: "Sort icon to use.",
    name       : "IconComponent",
    types      : [
      {
        default: "ElementTypeArrowDownwardIcon",
        type   : "elementType",
      }
    ]
  }
];
CoreTableSortLabel.invalidProps = [];
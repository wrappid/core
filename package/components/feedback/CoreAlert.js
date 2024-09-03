// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeAlert } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreAlert(props) {
  props = sanitizeComponentProps(CoreAlert, props);

  return (
    <NativeAlert {...props} />
  );
}

CoreAlert.validProps = [
  {
    description: "The action to display. It renders after the message, at the end of the alert.",
    name       : "action",
    types      : [{ type: "node" }],
  },
  {
    description: "Override the default label for the close popup icon button.",
    name       : "closeText",
    types      : [
      {
        default: "Close",
        type   : "string"
      }
    ]
  },
  {
    description: "The color of the component. Unless provided, the value is taken from the severity prop.",
    name       : "color",
    types      : [
      {
        type       : "string",
        validValues: [
          "error",
          "info",
          "success",
          "warning",
          "string"
        ]
      }
    ]
  },
  {
    description: "The components used for each slot inside. This prop is an alias for the slots prop. It's recommended to use the slots prop instead.",
    name       : "components",
    types      : [
      {
        defaultValue: {},
        type        : "object",
        validValues : [{ closeButton: "elementType", closeIcon: "elementType" }]
      }
    ]
  },
  {
    description: "The extra props for the slot components. You can override the existing props or add new ones.\
    This prop is an alias for the slotProps prop. It's recommended to use the slotProps prop instead, as componentsProps will be deprecated in the future.",
    name : "componentsProps",
    types: [
      {
        defaultValue: {},
        type        : "object",
        validValues : [{ closeButton: "object", closeIcon: "object" }]
      }
    ]
  },
  {
    description: "Override the icon displayed before the children. Unless provided, the icon is mapped to the value of the severity prop. Set to false to remove the icon.",
    name       : "icon",
    types      : [{ type: "node" }],
  },
  {
    description: "The component maps the severity prop to a range of different icons, for instance success to <SuccessOutlined>. If you wish to change this mapping, you can provide your own. Alternatively, you can use the icon prop to override the icon displayed.",
    name       : "iconMapping",
    types      : [
      {
        type       : "object",
        validValues: [{ error: "node", info: "node", success: "node", warning: "node" }]
      }
    ]
  },
  {
    description: "Callback fired when the component requests to be closed. When provided and no action prop is set, a close icon button is displayed that triggers the callback when clicked.",
    name       : "onClose",
    types      : [{ type: "function" }]
  },
  {
    description: "The ARIA role attribute of the element.",
    name       : "role",
    types      : [{ default: "alert", type: "string" }]
  },
  {
    description: "The severity of the alert. This defines the color and icon used.",
    name       : "severity",
    types      : [
      {
        defaultValue: "success",
        type        : "string",
        validValues : ["error", "info", "success", "warning"]
      }
    ]
  },
  {
    description: "The extra props for the slot components. You can override the existing props or add new ones. This prop is an alias for the componentsProps prop, which will be deprecated in the future.",
    name       : "slotProps",
    types      : [
      {
        defaultValue: {},
        type        : "object",
        validValues : [{ closeButton: "object", closeIcon: "object" }],
      }
    ]
  },
  {
    description: "The components used for each slot inside. This prop is an alias for the components prop, which will be deprecated in the future.",
    name       : "slots",
    types      : [
      {
        defaultValue: {},
        type        : "object",
        validValues : [{ closeButton: "elementType", closeIcon: "elementType" }],
      }
    ]
  },
  {
    description: "The variant to use.",
    name       : "variant",
    types      : [
      {
        defaultValue: "standard",
        type        : "string",
        validValues : ["filled", "outlined", "standard", "string"]
      }
    ]
  },
];

CoreAlert.invalidProps = [];


// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeCheckbox } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";
import CoreIcon from "../dataDisplay/CoreIcon";

export default function CoreCheckbox(props) {
  props = sanitizeComponentProps(CoreCheckbox, props);
  return <NativeCheckbox {...props} />;
}
CoreCheckbox.validProps = [
  {
    description: "If true, the component is checked.",
    name       : "checked",
    types      : [{ type: "boolean" }],
  },
  {
    description: "The icon to display when the component is checked.",
    name       : "checkedIcon",
    types      : [{ default: <CoreIcon>check_box</CoreIcon>, type: "object" }],
  },
  
  {
    description:
      "The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide.",
    name : "color",
    types: [
      {
        default    : "primary",
        type       : "string",
        validValues: [
          "default",
          "primary",
          "secondary",
          "error",
          "info",
          "success",
          "warning"
        ]
      },
    ],
  },
  {
    description:
      "The default checked state. Use when the component is not controlled.",
    name : "defaultChecked",
    types: [{ type: "boolean" }],
  },
  {
    description: "If true, the component is disabled.",
    name       : "disabled",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "If true, the ripple effect is disabled.",
    name       : "disableRipple",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "The icon to display when the component is unchecked.",
    name       : "icon",
    types      : [{ default: <CoreIcon>check_box_outline_blank</CoreIcon>, type: "object" }],
  },
  {
    description: "The id of the input element.",
    name       : "id",
    types      : [{ type: "string" }],
  },
  {
    description:
      "If true, the component appears indeterminate. This does not set the native input element to indeterminate due to inconsistent behavior across browsers. However, we set a data-indeterminate attribute on the input.",
    name : "indeterminate",
    types: [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ],
  },
  {
    description: "The icon to display when the component is indeterminate.",
    name       : "indeterminateIcon",
    types      : [{ default: <CoreIcon>indeterminate_check_box</CoreIcon>, type: "object" }],
  },
  {
    description: "Attributes applied to the input element.",
    name       : "inputProps",
    types      : [{ type: "object" }],
  },
  {
    description: "Pass a ref to the input element.",
    name       : "inputRef",
    types      : [{ type: "ref" }],
  },
  {
    description:
      "Callback fired when the state is changed.Signature:function(event: React.ChangeEvent) => voidevent The event source of the callback. You can pull out the new checked state by accessing event.target.checked (boolean).",
    name : "onChange",
    types: [{ type: "function" }],
  },
  {
    description: "If true, the input element is required.",
    name       : "required",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description:
      "The size of the component. small is equivalent to the dense checkbox styling.",
    name : "size",
    types: [{ default: "medium'", type: "medium'| 'small'| string" }],
  },
  {
    description: "The value of the component. The DOM API casts this to a string. The browser uses \"on\" as the default value.",
    name       : "value",
    types      : [{ type: "any" }],
  },
];
CoreCheckbox.invalidProps = ["sx", "classes"];

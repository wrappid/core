// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeSwitch } from "@wrappid/native";

export default function CoreSwitch(props) {
  return <NativeSwitch {...props} />;
}
CoreSwitch.validProps = [
  {
    description: "If true, the component is checked.",
    name: "checked",
    types: [{ default: "", type: "bool" }],
  },
  {
    description: "The icon to display when the component is checked.",
    name: "checkedIcon",
    types: [{ default: "", type: "node" }],
  },
  {
    description:
      "The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide.",
    name: "color",
    types: [
      {
        default: "primary",
        type: "string",
        validValues: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      },
    ],
  },
  {
    description:
      "The default checked state. Use when the component is not controlled.",
    name: "defaultChecked",
    types: [{ default: "", type: "bool" }],
  },
  {
    description: "If true, the component is disabled.",
    name: "disabled",
    types: [{ default: "", type: "bool" }],
  },
  {
    description: "If true, the ripple effect is disabled.",
    name: "disableRipple",
    types: [{ default: "FALSE", type: "bool" }],
  },
  {
    description:
      "If given, uses a negative margin to counteract the padding on one side (this is often helpful for aligning the left or right side of the icon with content above or below, without ruining the border size and shape).",
    name: "edge",
    types: [{ default: "FALSE", type: "'end'| 'start'| false" }],
  },
  {
    description: "The icon to display when the component is unchecked.",
    name: "icon",
    types: [{ default: "", type: "node" }],
  },
  {
    description: "The id of the input element.",
    name: "id",
    types: [{ default: "", type: "string" }],
  },
  {
    description: "Attributes applied to the input element.",
    name: "inputProps",
    types: [{ default: "", type: "object" }],
  },
  {
    description: "Pass a ref to the input element.",
    name: "inputRef",
    types: [{ default: "", type: "ref" }],
  },
  {
    description:
      "Callback fired when the state is changed.Signature:function(event: React.ChangeEvent) => voidevent The event source of the callback. You can pull out the new value by accessing event.target.value (string). You can pull out the new checked state by accessing event.target.checked (boolean).",
    name: "onChange",
    types: [{ default: "", type: "func" }],
  },
  {
    description: "If true, the input element is required.",
    name: "required",
    types: [{ default: "FALSE", type: "bool" }],
  },
  {
    description:
      "The size of the component. small is equivalent to the dense switch styling.",
    name: "size",
    types: [{ default: "medium'", type: "string", validValues: ["medium", "small"] }],
  },
  
  {
    description: `The value of the component. The DOM API casts this to a string. The browser uses "on" as the default value.`,
    name: "value",
    types: [{ default: "", type: "any" }],
  },
];
CoreSwitch.invalidProps = ["sx", "classes"];

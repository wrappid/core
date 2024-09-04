// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeFormControlLabel } from "@wrappid/native";

export default function CoreFormControlLabel(props) {
  return (
    <NativeFormControlLabel {...props}>{props.children}</NativeFormControlLabel>
  );
}
CoreFormControlLabel.validProps = [
  {
    description: "A control element. For instance, it can be a Radio, a Switch or a Checkbox.",
    name       : "control",
    types      : [{ type: "element" }],
  },
  {
    description: "If true, the component appears selected.",
    name       : "checked",
    types      : [{ type: "boolean" }],
  },
  {
    description: "The props used for each slot inside.Deprecated－use the slotProps prop instead. This prop will be removed in v7. See Migrating from deprecated APIs for more details.",
    name       : "componentsProps",
    types      : [{ default: {}, type: "object" }, { type: "node" }],
  },
  {
    description: "If true, the control is disabled.",
    name       : "disabled",
    types      : [{ type: "boolean" }],
  },
  {
    description: "If true, the label is rendered as it is passed without an additional typography node.",
    name       : "disableTypography",
    types      : [{ type: "boolean" }],
  },
  {
    description: "Pass a ref to the input element.",
    name       : "inputRef",
    types      : [{ type: "ref" }],
  },
  {
    description: "A text or an element to be used in an enclosing label element.",
    name       : "label",
    types      : [{ type: "node" }, { type: "string" }],
  },
  {
    description: "The position of the label.",
    name       : "labelPlacement",
    types      : [{ default: "end", type: "string", validValues: ["bottom", "end", "start", "top"] }],
  },
  {
    description: "Callback fired when the state is changed.Signature:function(event: React.SyntheticEvent) => voidevent The event source of the callback. You can pull out the new checked state by accessing event.target.checked (boolean).",
    name       : "onChange",
    types      : [{ type: "function" }],
  },
  {
    description: "If true, the label will indicate that the input is required.",
    name       : "required",
    types      : [{ type: "boolean" }],
  },
  {
    description: "The components used for each slot inside.",
    name       : "slots",
    types      : [{ type: "node" }],
  },
  {
    description: "The value of the component.",
    name       : "value",
    types      : [{ type: "any" }],
  },
];
CoreFormControlLabel.invalidProps = [];

// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeRating } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreRating(props) {
  props = sanitizeComponentProps(CoreRating, props);
  return <NativeRating {...props} />;
}
CoreRating.validProps = [
  {
    description: "The default value. Use when the component is not controlled.",
    name       : "defaultValue",
    types      : [{ default: null, type: "number" }],
  },
  {
    description: "If true, the component is disabled.",
    name       : "disabled",
    types      : [{ default: false, type: "boolean", validValues: [true, false] }],
  },
  {
    description: "The icon to display when empty.",
    name       : "emptyIcon",
    types      : [{ default: "<StarBorder fontSize=inherit/>", type: "node" }],
  },
  {
    description: "The label read when the rating input is empty.",
    name       : "emptyLabelText",
    types      : [{ default: "Empty", type: "node" }],
  },
  {
    description: "Accepts a function which returns a string value that provides a user-friendly name for the current value of the rating. This is important for screen reader users.For localization purposes, you can use the provided translations.Signature:function(value: number) => stringvalue The rating label's value to format.",
    name       : "getLabelText",
    types      : [{ type: "function" }],
  },
  {
    description: "If true, only the selected icon will be highlighted.",
    name       : "highlightSelectedOnly",
    types      : [{ default: false, type: "boolean", validValues: [true, false] }],
  },
  {
    description: "The icon to display.",
    name       : "icon",
    types      : [{ default: "<Star fontSize=inherit/>", type: "node" }],
  },
  {
    description: "The component containing the icon.",
    name       : "IconContainerComponent",
    types      : [{ type: "elementType" }],
  },
  {
    description: "Maximum rating.",
    name       : "max",
    types      : [{ default: 5, type: "number" }],
  },
  {
    description: "The name attribute of the radio input elements. This input name should be unique within the page. Being unique within a form is insufficient since the name is used to generated IDs.",
    name       : "name",
    types      : [{ type: "string" }],
  },
  {
    description: "Callback fired when the value changes.Signature: function(event: React.SyntheticEvent, value: number | null) => void | event The event source of the callback | value The new value.",
    name       : "onChange",
    types      : [{ type: "function" }],
  },
  {
    description: "Callback function that is fired when the hover state changes.Signature:function(event: React.SyntheticEvent, value: number) => void | event The event source of the callback | value The new value.",
    name       : "onChangeActive",
    types      : [{ type: "function" }],
  },
  {
    description: "The minimum increment value change allowed.",
    name       : "precision",
    types      : [{ default: 1, type: "number" }],
  },
  {
    description: "Removes all hover effects and pointer events.",
    name       : "readOnly",
    types      : [{ default: false, type: "boolean", validValues: [true, false] }],
  },
  {
    description: "The size of the component.",
    name       : "size",
    types      : [{ default: "medium", type: "string", validValues: ["small", "medium", "large"] }],
  },
  {
    description: "The rating value.",
    name       : "value",
    types      : [{ type: "number" }],
  },
];
CoreRating.invalidProps = [];


// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTableSortLabel } from "@wrappid/native";

export default function CoreTableSortLabel(props) {
  return (
    <NativeTableSortLabel {...props}>{props.children}</NativeTableSortLabel>
  );
}

CoreTableSortLabel.validProps = [
  {
    description: "If true, the label will have the active styling (should be true for the sorted column).",
    name       : "ctive",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "Label contents, the arrow will be appended automatically.",
    name       : "children",
    types      : [{ type: "node" }],
  },
  {
    description: "Override or extend the styles applied to the component.See CSS classes API below for more details.",
    name       : "classes",
    types      : [{ type: "object" }],
  },
  {
    description: "The current sort direction.",
    name       : "direction",
    types      : [{ type: "string", validValues: ["asc", "desc"] }],

  },
  {
    description: "Hide sort icon when active is false.",
    name       : "hideSortIcon",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "Sort icon to use.",
    name       : "IconComponent",
    types      : [{ default: "ArrowDownwardIcon", type: "elementType" }],
  },
];

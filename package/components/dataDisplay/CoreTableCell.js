// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTableCell } from "@wrappid/native";

export default function CoreTableCell(props) {
  return <NativeTableCell {...props} />;
}

CoreTableCell.validProps = [
  {
    description: "Set the text-align on the table cell content.Monetary or generally number fields should be right aligned as that allows you to add them up quickly in your head without having to worry about decimals.",
    name       : "align",
    types      : [
      {
        default    : "inherit'",
        type       : "string",
        validValues: [
          "center",
          "inherit",
          "justify",
          "left",
          "right"
        ]
      },
    ],
  },
  {
    description: "The content of the component.",
    name       : "children",
    types      : [{ type: "node" }],
  },
  {
    description: "Override or extend the styles applied to the component.See CSS classes API below for more details.",
    name       : "classes",
    types      : [{ type: "object" }],
  },
  {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    name       : "component",
    types      : [{ type: "elementType" }],
  },
  {
    description: "Sets the padding applied to the cell. The prop defaults to the value ('default') inherited from the parent Table component.",
    name       : "padding",
    types      : [{ type: "string", validValues: ["checkbox", "none", "normal"] }],
  },
  {
    description: "Set scope attribute.",
    name       : "scope",
    types      : [{ type: "string" }],
  },
  {
    description: "Specify the size of the cell. The prop defaults to the value ('medium') inherited from the parent Table component.",
    name       : "size",
    types      : [{ type: "string", validValues: ["medium", "small"] }],
  },
  {
    description: "Set aria-sort direction.",
    name       : "sortDirection",
    types      : [{ type: "boolean" }, { type: "string", validValues: ["asc", "desc"] }],
  },
  {
    description: "Specify the cell type. The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components.",
    name       : "variant",
    types      : [{ type: "string", validValues: ["body", "footer", "head"] }],
  },
];
CoreTableCell.invalidProps = [];

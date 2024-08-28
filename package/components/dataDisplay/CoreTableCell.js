// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTableCell } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreTableCell(props) {
  props = sanitizeComponentProps(CoreTableCell, props);
  return <NativeTableCell {...props} />;
}

CoreTableCell.displayName = "CoreTableCell";

CoreTableCell.validProps = [
  {
    description: "Set the text-align on the table cell content. Monetary or generally number fields should be right aligned as that allows you to add them up quickly in your head without having to worry about decimals.",
    name       : "align",
    types      : [
      {
        default    : "inherit",
        type       : "string",
        validValues: [
          "left",
          "center",
          "right",
          "justify",
          "inherit"
        ]
      }
    ]
  },
  {
    description: "The content of the component.",
    name       : "children",
    types      : [{ type: "node" }]
  },
  {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    name       : "component",
    types      : [{ type: "elementType" }]
  },
  {
    description: "Set the padding applied to the cell. By default, the Table parent component set the padding to 16px. Set padding to 'checkbox' to have padding for the checkbox.",
    name       : "padding",
    types      : [
      {
        default    : "normal",
        type       : "string",
        validValues: ["normal", "checkbox", "none"]
      }
    ]
  },
  {
    description: "Set the scope attribute.",
    name       : "scope",
    types      : [{ type: "string" }]
  },
  {
    description: "Specify the size of the cell. The prop defaults to the value ('medium') inherited from the parent CoreTable component.",
    name       : "size",
    types      : [
      {
        default    : "medium",
        type       : "string",
        validValues: ["small", "medium"]
      }
    ]
  },
  {
    description: "Set aria-sort direction.",
    name       : "sortDirection",
    types      : [
      {
        type       : "string",
        validValues: ["asc", "desc", "false"]
      },
      {
        default      : false,
        isDefaultType: true,
        type         : "boolean",
        validValues  : [false]
      }
    ]
  },
  {
    description: "Specify the cell type. The prop defaults to the value inherited from the parent CoreTableHead, CoreTableBody, or CoreTableFooter components.",
    name       : "variant",
    types      : [
      {
        default    : "body",
        type       : "string",
        validValues: ["body", "footer", "head"]
      }
    ]
  }

];

CoreTableCell.invalidProps = [];


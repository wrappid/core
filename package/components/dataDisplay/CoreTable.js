/* eslint-disable import/no-unresolved */
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeTable } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

/**
 * CoreTable component is used to display data in a tabular format.
 * @todo implement React.useID 
 * @param {*} props 
 * @returns 
 */
export default function CoreTable(props) {
  props = sanitizeComponentProps(CoreTable, props);

  return (
    <NativeTable {...props} />
  );
}

CoreTable.displayName = "CoreTable";

CoreTable.validProps = [
  {
    description: "The content of the table, normally TableHead and TableBody.",
    name       : "children",
    types      : [{ type: "node" }],
  },
  {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    name       : "component",
    types      : [{ type: "elementType" }],
  },
  {
    description: "Allows TableCells to inherit padding of the Table.",
    name       : "padding",
    types      : [
      {
        default    : "normal",
        type       : "string",
        validValues: ["checkbox", "none", "normal"],
      },
    ],
  },
  {
    description: "Allows TableCells to inherit size of the Table.",
    name       : "size",
    types      : [
      {
        default    : "medium",
        type       : "string",
        validValues: ["medium", "small"],
      },
    ],
  },
  {
    description: "Set the header sticky. ⚠️ It doesn't work with IE11.",
    name       : "stickyHeader",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ],
  },
];

CoreTable.invalidProps = [];

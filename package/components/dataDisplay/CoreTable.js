// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeTable } from "@wrappid/native";

import { getUUID } from "../../utils/appUtils";
import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreTable(props) {
  let _uuid = getUUID();
  let containerId = props?.coreId ? "tc_" + props.coreId : "tc_" + _uuid;

  props = sanitizeComponentProps(CoreTable, props);

  const {
    children,
    component,
    padding,
    size,
    stickyHeader,
  } = props;

  return (
    <NativeTable 
      component={component}
      padding={padding}
      size={size}
      stickyHeader={stickyHeader}
    >
      {children}
    </NativeTable>
  );
}

CoreTable.validProps = [
  {
    description: "The content of the table, normally TableHead and TableBody.",
    name       : "children",
    types      : [{ type: "node" }],
  },
  {
    description:
      "The component used for the root node. Either a string to use a HTML element or a component.",
    name : "component",
    types: [{ type: "elementType" }],
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
    description:
      "Set the header sticky. ⚠️ It doesn't work with IE11.",
    name : "stickyHeader",
    types: [
      {
        default: "false",
        type   : "bool",
      },
    ],
  },
];

CoreTable.invalidProps = ["sx", "classes"];

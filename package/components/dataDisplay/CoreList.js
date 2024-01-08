// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeList } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreList(props) {
  props = sanitizeComponentProps(CoreList, props);

  const {
    children,
    component,
    dense,
    disablePadding,
    subheader,
  } = props;

  return(
    <NativeList
      component={component}
      dense={dense}
      disablePadding={disablePadding}
      subheader={subheader}>
      {children}
    </NativeList>
  );
}

CoreList.validProps = [
  {
    description: "The content of the component.",
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
    description: "If true, compact vertical padding designed for keyboard and mouse input is used for the list and list items. The prop is available to descendant components as the dense context.",
    name       : "dense",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ],
  },
  {
    description: "If true, vertical padding is removed from the list.",
    name       : "disablePadding",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ],
  },
  {
    description:
      "The content of the subheader, normally ListSubheader.",
    name : "subheader",
    types: [{ type: "node" }],
  },
];

CoreList.invalidProps = ["sx", "classes"];

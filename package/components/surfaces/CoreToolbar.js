// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeToolbar } from "@wrappid/native";

export default function CoreToolBar(props) {
  return <NativeToolbar {...props} />;
}
CoreToolBar.validProps = [
  {
    description:
      "The component used for the root node. Either a string to use a HTML element or a component.",
    name: "component",
    types: [{ default: "", type: "elementType", }],
  },
  {
    description: "If true, disables gutter padding.",
    name: "disableGutters",
    types: [{ default: "FALSE", type: "bool" }],
  },
 
  {
    description: "The variant to use.",
    name: "variant",
    types: [
      {
        default: "regular'",
        type: "string",
        validValues: ["dense", "regular"],
      },
    ],
  },
];
CoreToolBar.invalidProps = ["sx", "classes"];

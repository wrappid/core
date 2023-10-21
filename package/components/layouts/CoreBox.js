// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeBox } from "@wrappid/native";

export default function CoreBox(props) {
  return <NativeBox {...props} />;
}

CoreBox.validProps = [
  CoreBox.validProps = [
    {
      description:
        "The component used for the root node. Either a string to use a HTML element or a component.",
      name: "component",
      types: [{ default: "", type: "elementType" }],
    },
  ];x
  CoreBox.invalidProps = ["sx", "classes"];
  
];
CoreBox.invalidProps = [];

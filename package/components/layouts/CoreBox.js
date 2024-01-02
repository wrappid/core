// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeBox } from "@wrappid/native";

const CoreBox = React.forwardRef((props, ref) => {
  return <NativeBox {...props} ref={ref} />;
});

CoreBox.displayName = "CoreBox";
CoreBox.validProps = [
  (CoreBox.validProps = [
    {
      description:
        "The component used for the root node. Either a string to use a HTML element or a component.",
      name: "component",
      types: [{ default: "", type: "elementType" }],
    },
  ]),
  (CoreBox.invalidProps = ["sx", "classes"]),
];
CoreBox.invalidProps = [];

export default CoreBox;

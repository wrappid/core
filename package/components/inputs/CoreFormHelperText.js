// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeFormHelperText } from "@wrappid/native";

export default function CoreFormHelperText(props) {
  return <NativeFormHelperText {...props} />;
}

CoreFormHelperText.validProps = [
  {
    description: "The content of the component.If ' ' is provided, the component reserves one line height for displaying a future message.",
    name       : "children",
    types      : [{ type: "node" }],
  },
  {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    name       : "component",
    types      : [{ type: "elementType" }],
  },
  {
    description: "If true, the helper text should be displayed in a disabled state.",
    name       : "disabled",
    types      : [{ type: "boolean" }],
  },
  {
    description: "If true, helper text should be displayed in an error state.",
    name       : "error",
    types      : [{ type: "boolean" }],
  },
  {
    description: "If true, the helper text should use filled classes key.",
    name       : "filled",
    types      : [{ type: "boolean" }],
  },
  {
    description: "If true, the helper text should use focused classes key.",
    name       : "focused",
    types      : [{ type: "boolean" }],
  },
  {
    description: "If dense, will adjust vertical spacing. This is normally obtained via context from FormControl.",
    name       : "margin",
    types      : [{ type: "string", validValues: ["dense", "none"] }],
  },
  {
    description: "If true, the helper text should use required classes key.",
    name       : "required",
    types      : [{ type: "boolean" }],
  },
  {
    description: "The variant to use.",
    name       : "variant",
    types      : [
      {
        type       : "string",
        validValues: ["filled", "outlined", "standard"]
      },
    ],
  },
];
CoreFormHelperText.invalidProps = [];

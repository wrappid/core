// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeCardHeader } from "@wrappid/native";

export default function CoreCardHeader(props) {
  return <NativeCardHeader {...props} />;
}
CoreCardHeader.validProps = [
  {
    description: "The action to display in the card header.",
    name: "action",
    types: [{ default: "", type: "node" }],
  },
  {
    description: "The Avatar element to display.",
    name: "avatar",
    types: [{ default: "", type: "node" }],
  },

  {
    description:
      "The component used for the root node. Either a string to use a HTML element or a component.",
    name: "component",
    types: [{ default: "", type: "elementType" }],
  },
  {
    description:
      "If true, subheader and title won't be wrapped by a Typography component. This can be useful to render an alternative Typography variant by wrapping the title text, and optional subheader text with the Typography component.",
    name: "disableTypography",
    types: [{ default: "FALSE", type: "bool" }],
  },
  {
    description: "The content of the component.",
    name: "subheader",
    types: [{ default: "", type: "node" }],
  },
  {
    description:
      "These props will be forwarded to the subheader (as long as disableTypography is not true).",
    name: "subheaderTypographyProps",
    types: [{ default: "", type: "object" }],
  },
  {
    description: "The content of the component.",
    name: "title",
    types: [{ default: "", type: "node" }],
  },
  {
    description:
      "These props will be forwarded to the title (as long as disableTypography is not true).",
    name: "titleTypographyProps",
    types: [
      {
        default: "",
        type: "object",
      },
    ],
  },
];
CoreCardHeader.invalidProps = ["sx", "classes"];

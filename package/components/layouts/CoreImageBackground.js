// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeImageBackground } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreImageBackground(props) {
  props = sanitizeComponentProps(CoreImageBackground, props);
  return <NativeImageBackground {...props}>{props.children}</NativeImageBackground>;
}
/**
 * @todo: Add other valid/invalid props.
 */
CoreImageBackground.validProps = [
  {
    description:
    "Image source path.",
    name : "source",
    types: [{ default: "", type: "string" }],
  },
  {
    description: "Allows to set a reference to the inner Image component",
    name       : "imageRef",
    types      : [{ type: "ref" }]
  }
];
CoreImageBackground.invalidProps = ["sx", "classes"];

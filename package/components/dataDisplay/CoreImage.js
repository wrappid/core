/* eslint-disable import/no-unresolved */
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeImage } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreImage(props) {
  props = sanitizeComponentProps(CoreImage, props);
  return <NativeImage {...props} />;
}

CoreImage.displayName = "CoreImage";

CoreImage.validProps = [
  {
    description: "The source of the image.",
    name       : "src",
    types      : [{ type: "string" }]
  },
  {
    description: "The alternative text of the image.",
    name       : "alt",
    types      : [{ type: "string" }]
  }
];
CoreImage.invalidProps = ["style", "sx", "classes"];

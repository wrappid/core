// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeImageBackground } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreImageBackground(props) {
  props = sanitizeComponentProps(CoreImageBackground, props);
  return <NativeImageBackground {...props}>{props.children}</NativeImageBackground>;
}

CoreImageBackground.validProps = [];
CoreImageBackground.invalidProps = ["sx", "classes"];

// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeInputLabel } from "@wrappid/native";

export default function CoreInputLabel(props) {
  return <NativeInputLabel {...props}>{props.children}</NativeInputLabel>;
}

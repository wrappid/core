// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeFormControlLabel } from "@wrappid/native";

export default function CoreFormControlLabel(props) {
  return <NativeFormControlLabel {...props}>{props.children}</NativeFormControlLabel>;
}

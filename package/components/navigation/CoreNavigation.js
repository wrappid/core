// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeNavigation } from "@wrappid/native";

export default function CoreNavigation(props) {
  return <NativeNavigation>{props.children}</NativeNavigation>;
}

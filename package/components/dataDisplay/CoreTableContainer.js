// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTableContainer } from "@wrappid/native";

export default function CoreTableContainer(props) {
  return <NativeTableContainer {...props}>{props.children}</NativeTableContainer>;
}

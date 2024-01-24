// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTableFooter } from "@wrappid/native";

export default function CoreTableFooter(props) {
  return <NativeTableFooter {...props}>{props.children}</NativeTableFooter>;
}

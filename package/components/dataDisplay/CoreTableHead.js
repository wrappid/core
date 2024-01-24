// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTableHead } from "@wrappid/native";

export default function CoreTableHead(props) {
  return <NativeTableHead {...props}>{props.children}</NativeTableHead>;
}

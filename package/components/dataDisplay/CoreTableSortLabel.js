// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeTableSortLabel } from "@wrappid/native";

export default function CoreTableSortLabel(props) {
  return <NativeTableSortLabel {...props}>{props.children}</NativeTableSortLabel>;
}

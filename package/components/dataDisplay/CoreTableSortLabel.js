import React from "react";
import { NativeTableSortLabel } from "@wrappid/styled-components";

export default function CoreTableSortLabel(props) {
  return <NativeTableSortLabel {...props}>{props.children}</NativeTableSortLabel>;
}

import React from "react";
import { NativeTableHeadRow } from "@wrappid/styled-components";

export default function CoreTableHeadRow(props) {
  return <NativeTableHeadRow {...props}>{props.children}</NativeTableHeadRow>;
}

import React from "react";
import { NativeTableBody } from "@wrappid/styled-components";

export default function CoreTableBody(props) {
  return <NativeTableBody {...props}>{props.children}</NativeTableBody>;
}

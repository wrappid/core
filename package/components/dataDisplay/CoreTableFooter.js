import React from "react";
import { NativeTableFooter } from "@wrappid/styled-components";

export default function CoreTableFooter(props) {
  return <NativeTableFooter {...props}>{props.children}</NativeTableFooter>;
}

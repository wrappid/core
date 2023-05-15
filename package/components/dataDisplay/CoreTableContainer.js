import React from "react";
import { NativeTableContainer } from "@wrappid/styled-components";

export default function CoreTableContainer(props) {
  return <NativeTableContainer {...props}>{props.children}</NativeTableContainer>;
}

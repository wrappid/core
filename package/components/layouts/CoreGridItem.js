import React from "react";
import { NativeGridItem } from "@wrappid/styled-components";

export default function CoreGridItem(props) {
  return <NativeGridItem props>{props.children}</NativeGridItem>;
}

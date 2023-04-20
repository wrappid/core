import React from "react";
import { NativeNavigation } from "@wrappid/styled-components";

export default function CoreNavigation(props) {
  return (
      <NativeNavigation>{props.children}</NativeNavigation>
  )
}

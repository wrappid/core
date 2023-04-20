import React from "react";
import { NativeFormContainer } from "@wrappid/styled-components";

export default function CoreFormContainer(props) {
  return <NativeFormContainer {...props}>{props.children}</NativeFormContainer>;
}

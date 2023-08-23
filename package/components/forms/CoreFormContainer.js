// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeFormContainer } from "@wrappid/native";

export default function CoreFormContainer(props) {
  return <NativeFormContainer {...props}>{props.children}</NativeFormContainer>;
}

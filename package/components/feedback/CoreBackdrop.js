// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeBackdrop } from "@wrappid/styled-components";

export default function CoreBackdrop(props) {
  return <NativeBackdrop {...props}>{props.children}</NativeBackdrop>;
}

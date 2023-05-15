import React from "react";
import { NativeBackdrop } from "@wrappid/styled-components";

export default function CoreBackdrop(props) {
  return <NativeBackdrop {...props}>{props.children}</NativeBackdrop>;
}

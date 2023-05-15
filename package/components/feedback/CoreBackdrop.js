import React from "react";
import { CoreBackdrop } from "@wrappid/styled-components";

export default function CoreBackdrop(props) {
  return <CoreBackdrop {...props}>{props.children}</CoreBackdrop>;
}

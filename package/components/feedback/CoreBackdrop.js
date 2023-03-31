import React from "react";
import { SCBackdrop } from "@wrappid/styled-components";

export default function CoreBackdrop(props) {
  return <SCBackdrop {...props}>{props.children}</SCBackdrop>;
}

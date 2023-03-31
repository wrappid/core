import React from "react";
import { SCDivider } from "@wrappid/styled-components";

export default function CoreDivider(props) {
  return <SCDivider {...props}>{props.children}</SCDivider>;
}

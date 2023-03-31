import React from "react";
import { SCPaper } from "@wrappid/styled-components";

export default function CorePaper(props) {
  return <SCPaper {...props}>{props.children}</SCPaper>;
}

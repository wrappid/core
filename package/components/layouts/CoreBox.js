import React from "react";
import { SCBox } from "@wrappid/styled-components";

export default function CoreBox(props) {
  return <SCBox {...props}>{props.children}</SCBox>;
}

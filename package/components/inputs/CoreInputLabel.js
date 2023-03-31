import React from "react";
import { SCInputLabel } from "@wrappid/styled-components";

export default function CoreInputLabel(props) {
  return <SCInputLabel {...props}>{props.children}</SCInputLabel>;
}

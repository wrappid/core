import React from "react";
import { SCTableBody } from "@wrappid/styled-components";

export default function CoreTableBody(props) {
  return <SCTableBody {...props}>{props.children}</SCTableBody>;
}

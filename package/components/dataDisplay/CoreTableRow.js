import React from "react";
import { SCTableRow } from "@wrappid/styled-components";

export default function CoreTableRow(props) {
  return <SCTableRow {...props}>{props.children}</SCTableRow>;
}

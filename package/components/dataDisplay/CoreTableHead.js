import React from "react";
import { SCTableHead } from "@wrappid/styled-components";

export default function CoreTableHead(props) {
  return <SCTableHead {...props}>{props.children}</SCTableHead>;
}

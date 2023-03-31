import React from "react";
import { SCTableFooter } from "@wrappid/styled-components";

export default function CoreTableFooter(props) {
  return <SCTableFooter {...props}>{props.children}</SCTableFooter>;
}

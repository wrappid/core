import React from "react";
import { SCTableCell } from "@wrappid/styled-components";

export default function CoreTableCell(props) {
  const { children, ...restProps } = props;
  return <SCTableCell {...restProps}>{props.children}</SCTableCell>;
}

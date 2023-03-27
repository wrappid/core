import React from "react";
import { SCTableCell } from "../../styledComponents/dataDisplay/SCTableCell";

export default function CoreTableCell(props) {
  const { children, ...restProps } = props;
  return <SCTableCell {...restProps}>{props.children}</SCTableCell>;
}

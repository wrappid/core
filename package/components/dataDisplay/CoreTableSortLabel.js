import React from "react";
import { SCTableSortLabel } from "@wrappid/styled-components";

export default function CoreTableSortLabel(props) {
  return <SCTableSortLabel {...props}>{props.children}</SCTableSortLabel>;
}

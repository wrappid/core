import React from "react";
import { SCDivider } from "../../styledComponents/dataDisplay/SCDivider";

export default function CoreDivider(props) {
  return <SCDivider {...props}>{props.children}</SCDivider>;
}

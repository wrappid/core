import React from "react";
import { SCTableBody } from "../../styledComponents/dataDisplay/SCTableBody";

export default function CoreTableBody(props) {
  return <SCTableBody {...props}>{props.children}</SCTableBody>;
}

import React from "react";
import { SCTableFooter } from "../../styledComponents/dataDisplay/SCTableFooter";

export default function CoreTableFooter(props) {
  return <SCTableFooter {...props}>{props.children}</SCTableFooter>;
}

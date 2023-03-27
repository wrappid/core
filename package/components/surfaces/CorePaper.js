import React from "react";
import { SCPaper } from "../../styledComponents/surfaces/SCPaper";

export default function CorePaper(props) {
  return <SCPaper {...props}>{props.children}</SCPaper>;
}

import React from "react";

import { SCCardHeader } from "../../styledComponents/surfaces/SCCardHeader";

export default function CoreCardHeader(props) {
  return <SCCardHeader {...props}>{props.children}</SCCardHeader>;
}

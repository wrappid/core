import React from "react";

import { SCCardContent } from "../../styledComponents/surfaces/SCCardContent";

export default function CoreCardContent(props) {
  return <SCCardContent {...props}>{props.children}</SCCardContent>;
}

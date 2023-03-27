import React from "react";

import { SCCardActions } from "../../styledComponents/surfaces/SCCardActions";

export default function CoreCardActions(props) {
  return <SCCardActions {...props}>{props.children}</SCCardActions>;
}

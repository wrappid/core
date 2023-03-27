import React from "react";

import { SCAppBar } from "../../styledComponents/surfaces/SCAppBar";

export default function CoreAppBar(props) {
  return <SCAppBar {...props}>{props.children}</SCAppBar>;
}

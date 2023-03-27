import React from "react";

import { SCTabs } from "../../styledComponents/navigation/SCTabs";

export default function CoreTabs(props) {
  return <SCTabs {...props}>{props.children}</SCTabs>;
}

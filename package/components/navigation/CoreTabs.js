import React from "react";

import { SCTabs } from "@wrappid/styled-components";

export default function CoreTabs(props) {
  return <SCTabs {...props}>{props.children}</SCTabs>;
}

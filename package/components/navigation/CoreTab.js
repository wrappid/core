import React from "react";

import { SCTab } from "@wrappid/styled-components";

export default function CoreTab(props) {
  return <SCTab {...props}>{props.children}</SCTab>;
}

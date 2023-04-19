import React from "react";

import { SCAppBar } from "@wrappid/styled-components";

export default function CoreAppBar(props) {
  return <SCAppBar {...props}>{props.children}</SCAppBar>;
}

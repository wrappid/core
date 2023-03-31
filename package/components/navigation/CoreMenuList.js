import React from "react";

import { SCMenuList } from "@wrappid/styled-components";

export default function CoreMenuList(props) {
  return <SCMenuList {...props}>{props.children}</SCMenuList>;
}

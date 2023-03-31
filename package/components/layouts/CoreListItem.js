import React from "react";

import { SCListItem } from "@wrappid/styled-components";

export default function CoreListItem(props) {
  return <SCListItem {...props}>{props.children}</SCListItem>;
}

import React from "react";

import { SCContainer } from "@wrappid/styled-components";

export default function CoreContainer(props) {
  return <SCContainer {...props}>{props.children}</SCContainer>;
}

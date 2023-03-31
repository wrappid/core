import React from "react";

import { SCCardHeader } from "@wrappid/styled-components";

export default function CoreCardHeader(props) {
  return <SCCardHeader {...props}>{props.children}</SCCardHeader>;
}

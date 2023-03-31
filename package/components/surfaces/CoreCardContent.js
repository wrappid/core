import React from "react";

import { SCCardContent } from "@wrappid/styled-components";

export default function CoreCardContent(props) {
  return <SCCardContent {...props}>{props.children}</SCCardContent>;
}

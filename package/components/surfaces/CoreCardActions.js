import React from "react";

import { SCCardActions } from "@wrappid/styled-components";

export default function CoreCardActions(props) {
  return <SCCardActions {...props}>{props.children}</SCCardActions>;
}

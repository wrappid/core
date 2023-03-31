import React from "react";

import { SCStack } from "@wrappid/styled-components";

export default function CoreStack(props) {
  return <SCStack {...props}>{props.children}</SCStack>;
}

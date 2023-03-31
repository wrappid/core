import React from "react";

import { SCCard } from "@wrappid/styled-components";

export default function CoreCard(props) {
  return <SCCard {...props}>{props.children}</SCCard>;
}

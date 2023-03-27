import React from "react";

import { SCCard } from "../../styledComponents/surfaces/SCCard";

export default function CoreCard(props) {
  return <SCCard {...props}>{props.children}</SCCard>;
}

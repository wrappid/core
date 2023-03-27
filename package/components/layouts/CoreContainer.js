import React from "react";

import { SCContainer } from "../../styledComponents/layouts/SCContainer";

export default function CoreContainer(props) {
  return <SCContainer {...props}>{props.children}</SCContainer>;
}

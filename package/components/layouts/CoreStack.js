import React from "react";

import { SCStack } from "../../styledComponents/layouts/SCStack";

export default function CoreStack(props) {
  return <SCStack {...props}>{props.children}</SCStack>;
}

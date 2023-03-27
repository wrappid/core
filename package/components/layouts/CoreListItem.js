import React from "react";

import { SCListItem } from "../../styledComponents/layouts/SCListItem";

export default function CoreListItem(props) {
  return <SCListItem {...props}>{props.children}</SCListItem>;
}

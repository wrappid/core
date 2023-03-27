import React from "react";
import { SCDrawer } from "../../styledComponents/navigation/SCDrawer";

export default function CoreDrawer(props) {
  return <SCDrawer {...props}>{props.children}</SCDrawer>;
}

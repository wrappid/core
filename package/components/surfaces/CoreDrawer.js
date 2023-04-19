import React from "react";
import { SCDrawer } from "@wrappid/styled-components";

export default function CoreDrawer(props) {
  return <SCDrawer {...props}>{props.children}</SCDrawer>;
}

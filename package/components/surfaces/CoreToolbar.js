import React from "react";
import { SCToolbar } from "@wrappid/styled-components";

export default function CoreToolBar(props) {
  return <SCToolbar {...props}>{props.children}</SCToolbar>;
}

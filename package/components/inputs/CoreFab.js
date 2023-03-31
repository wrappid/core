import React from "react";
import { SCFab } from "@wrappid/styled-components";

export default function CoreFab(props) {
  return <SCFab {...props}>{props.children}</SCFab>;
}

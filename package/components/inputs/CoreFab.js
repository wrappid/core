import React from "react";
import { SCFab } from "../../styledComponents/inputs/SCFab";

export default function CoreFab(props) {
  return <SCFab {...props}>{props.children}</SCFab>;
}

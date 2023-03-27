import React from "react";
import { SCToolbar } from "../../styledComponents/utils/SCToolbar";

export default function CoreToolBar(props) {
  return <SCToolbar {...props}>{props.children}</SCToolbar>;
}

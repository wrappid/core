import React from "react";
import { SCList } from "../../styledComponents/layouts/SCList";

export default function CoreList(props) {
  return <SCList {...props}>{props.children}</SCList>;
}

import React from "react";
import { SCSwitch } from "../../styledComponents/inputs/SCSwitch";

export default function CoreSwitch(props) {
  return <SCSwitch {...props}>{props.children}</SCSwitch>;
}

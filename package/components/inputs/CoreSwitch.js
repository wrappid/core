import React from "react";
import { SCSwitch } from "@wrappid/styled-components";

export default function CoreSwitch(props) {
  return <SCSwitch {...props}>{props.children}</SCSwitch>;
}

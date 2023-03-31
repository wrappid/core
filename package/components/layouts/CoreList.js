import React from "react";
import { SCList } from "@wrappid/styled-components";

export default function CoreList(props) {
  return <SCList {...props}>{props.children}</SCList>;
}

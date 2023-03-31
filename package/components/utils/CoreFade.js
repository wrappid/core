import React from "react";
import { SCFade } from "@wrappid/styled-components";

export default function CoreFade(props) {
  return <SCFade {...props}>{props.children}</SCFade>;
}

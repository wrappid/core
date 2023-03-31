import React from "react";
import { SCTooltip } from "@wrappid/styled-components";

export default function CoreTooltip(props) {
  return <SCTooltip {...props}>{props.children}</SCTooltip>;
}

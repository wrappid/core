import React from "react";
import { SCAppDiv } from "@wrappid/styled-components";

export default function CoreAppDiv(props) {
  return <SCAppDiv {...props}>{props.children}</SCAppDiv>;
}

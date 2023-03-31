import React from "react";
import { SCAlert } from "@wrappid/styled-components";

export default function CoreAlert(props) {
  return <SCAlert {...props}>{props.children}</SCAlert>;
}

import React from "react";
import { SCLinearProgress } from "@wrappid/styled-components";

export default function CoreLinearProgress(props) {
  return <SCLinearProgress {...props}>{props.children}</SCLinearProgress>;
}

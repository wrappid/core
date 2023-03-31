import React from "react";
import { SCCircularProgress } from "@wrappid/styled-components";

export default function CoreCircularProgress(props) {
  return <SCCircularProgress {...props}>{props.children}</SCCircularProgress>;
}

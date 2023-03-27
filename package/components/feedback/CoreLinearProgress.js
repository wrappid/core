import React from "react";
import { SCLinearProgress } from "../../styledComponents/feedback/SCLinearProgress";

export default function CoreLinearProgress(props) {
  return <SCLinearProgress {...props}>{props.children}</SCLinearProgress>;
}

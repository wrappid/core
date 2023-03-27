import React from "react";
import { SCCircularProgress } from "../../styledComponents/feedback/SCCircularProgress";

export default function CoreCircularProgress(props) {
  return <SCCircularProgress {...props}>{props.children}</SCCircularProgress>;
}

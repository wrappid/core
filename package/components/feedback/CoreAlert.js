import React from "react";
import { SCAlert } from "../../styledComponents/feedback/SCAlert";

export default function CoreAlert(props) {
  return <SCAlert {...props}>{props.children}</SCAlert>;
}

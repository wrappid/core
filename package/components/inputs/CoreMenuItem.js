import React from "react";
import { SCMenuItem } from "../../styledComponents/inputs/SCMenuItem";

export default function CoreMenuItem  (props)  {
  return <SCMenuItem {...props}>{props.children}</SCMenuItem>;
};

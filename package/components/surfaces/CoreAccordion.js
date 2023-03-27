import React from "react";

import { SCAccordion } from "../../styledComponents/surfaces/SCAccordion";

export default function CoreAccordion(props) {
  return <SCAccordion {...props}>{props.children}</SCAccordion>;
}

import React from "react";

import { SCAccordionDetail } from "../../styledComponents/surfaces/SCAccordionDetail";

export default function CoreAccordionDetail(props) {
  return <SCAccordionDetail {...props}>{props.children}</SCAccordionDetail>;
}

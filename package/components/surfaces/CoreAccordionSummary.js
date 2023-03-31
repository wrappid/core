import React from "react";

import { SCAccordionSummery } from "@wrappid/styled-components";

export default function CoreAccordionSummary(props) {
  return <SCAccordionSummery {...props}>{props.children}</SCAccordionSummery>;
}

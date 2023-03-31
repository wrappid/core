import React from "react";

import { SCAccordionDetail } from "@wrappid/styled-components";

export default function CoreAccordionDetail(props) {
  return <SCAccordionDetail {...props}>{props.children}</SCAccordionDetail>;
}

import React from "react";

import { SCAccordion } from "@wrappid/styled-components";

export default function CoreAccordion(props) {
  return <SCAccordion {...props}>{props.children}</SCAccordion>;
}

import React from "react";

import { SCBox } from "@wrappid/styled-components";

export default function CoreSpan(props) {
  return (
    <SCBox {...props} component="span">
      {props.children}
    </SCBox>
  );
}

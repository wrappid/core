import React from "react";

import { SCBox } from "../../styledComponents/layouts/SCBox";

export default function CoreSpan(props) {
  return (
    <SCBox {...props} component="span">
      {props.children}
    </SCBox>
  );
}

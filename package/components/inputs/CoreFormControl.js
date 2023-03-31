import React from "react";

import { SCFormControl } from "@wrappid/styled-components";

export default function CoreFormControl(props) {
  return (
    <SCFormControl {...props} variant="standard">
      {props.children}
    </SCFormControl>
  );
}

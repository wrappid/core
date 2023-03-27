import React from "react";

import { SCMenuItem } from "../../styledComponents/navigation/SCMenuItem";

export default function CoreMenuItem(props) {
  return (
    <SCMenuItem {...props} underline="none">
      {props.children}
    </SCMenuItem>
  );
}

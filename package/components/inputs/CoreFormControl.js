import React from "react";

import { SCFormControl } from "../../styledComponents/inputs/SCFormControl";

export default function CoreFormControl(props)  {
  return (
    <SCFormControl {...props} variant="standard">
      {props.children}
    </SCFormControl>
  );
};

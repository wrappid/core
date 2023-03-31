import React from "react";
import { SCTextField } from "@wrappid/styled-components";
//do not use this component directly this is used for datepicker only internally
export default function CoreTextField(props) {
  return <SCTextField variant="standard" {...props} />;
}

import React from "react";
import { NativeTextField } from "@wrappid/styled-components";
//do not use this component directly this is used for datepicker only internally
export default function CoreTextField(props) {
  return <NativeTextField variant="standard" {...props} />;
}

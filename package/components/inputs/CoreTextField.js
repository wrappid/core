// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTextField } from "@wrappid/native";

//do not use this component directly this is used for datepicker only internally
export default function CoreTextField(props) {
  return <NativeTextField variant="standard" {...props} />;
}

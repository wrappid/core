// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeInputLabel } from "@wrappid/styled-components";

export default function CoreInputLabel(props) {
  return <NativeInputLabel {...props}>{props.children}</NativeInputLabel>;
}

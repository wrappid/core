// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeTableBody } from "@wrappid/styled-components";

export default function CoreTableBody(props) {
  return <NativeTableBody {...props}>{props.children}</NativeTableBody>;
}

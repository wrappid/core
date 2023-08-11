// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeTableHeadRow } from "@wrappid/styled-components";

export default function CoreTableHeadRow(props) {
  return <NativeTableHeadRow {...props}>{props.children}</NativeTableHeadRow>;
}

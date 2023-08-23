// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeTableFooter } from "@wrappid/native";

export default function CoreTableFooter(props) {
  return <NativeTableFooter {...props}>{props.children}</NativeTableFooter>;
}

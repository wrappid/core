// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeAlert } from "@wrappid/styled-components";

export default function CoreAlert(props) {
  return <NativeAlert {...props}>{props.children}</NativeAlert>;
}

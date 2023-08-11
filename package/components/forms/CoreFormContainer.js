// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeFormContainer } from "@wrappid/styled-components";

export default function CoreFormContainer(props) {
  return <NativeFormContainer {...props}>{props.children}</NativeFormContainer>;
}

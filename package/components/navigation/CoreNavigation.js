// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeNavigation } from "@wrappid/styled-components";

export default function CoreNavigation(props) {
  return (
    <NativeNavigation>{props.children}</NativeNavigation>
  );
}

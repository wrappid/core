// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeImageBackground } from "@wrappid/styled-components";

export default function CoreImageBackground(props) {
  return (
    <NativeImageBackground {...props}>{props.children}</NativeImageBackground>
  );
}

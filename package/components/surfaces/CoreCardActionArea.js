import React from "react";

import { NativeCardActionArea } from "@wrappid/styled-components";

export default function CoreCardActionArea(props) {
  return <NativeCardActionArea {...props}>{props.children}</NativeCardActionArea>;
}

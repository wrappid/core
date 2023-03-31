import React from "react";

import { SCCardMedia } from "@wrappid/styled-components";

export default function CoreCardMedia(props) {
  return <SCCardMedia {...props}>{props.children}</SCCardMedia>;
}

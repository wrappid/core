import React from "react";

import { SCCardActionArea } from "@wrappid/styled-components";

export default function CoreCardActionArea(props) {
  return <SCCardActionArea {...props}>{props.children}</SCCardActionArea>;
}

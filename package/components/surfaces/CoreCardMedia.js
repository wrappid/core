import React from "react";

import { SCCardMedia } from "../../styledComponents/surfaces/SCCardMedia";

export default function CoreCardMedia(props) {
  return <SCCardMedia {...props}>{props.children}</SCCardMedia>;
}

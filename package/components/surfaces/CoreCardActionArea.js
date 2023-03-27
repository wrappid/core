import React from "react";

import { SCCardActionArea } from "../../styledComponents/surfaces/SCCardActionArea";

export default function CoreCardActionArea(props) {
  return <SCCardActionArea {...props}>{props.children}</SCCardActionArea>;
}

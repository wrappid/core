import React from "react";
import { SCTextField } from "../../styledComponents/inputs/SCTextField";
//do not use this component directly this is used for datepicker only internally
export default function CoreTextField(props) {
  return <SCTextField variant="standard" {...props} />;
};

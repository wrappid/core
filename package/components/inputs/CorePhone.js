// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreInput from "./CoreInput";
import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CorePhone(props) {
  props = sanitizeComponentProps(CorePhone, props);
  return <CoreInput
    {...props}
    tyope = "text"
    inputProps={{
      inputMode: "numeric",
      max      : 999999999999,
      
      min: 1000000,
      
      pattern: "[0-9]*",
    }}
  />;
}
CorePhone.validProps = [...CoreInput.validProps];
CorePhone.invalidProps = [];


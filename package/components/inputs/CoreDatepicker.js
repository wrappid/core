import React from "react";

import CoreFormHelperText from "./CoreFormHelperText";
import CoreFormErrorText from "./CoreFormErrorText";
import { NativeDatepicker } from "@wrappid/styled-components";
import CoreBox from "../layouts/CoreBox";

export default function CoreDatePicker(props) {
  return (
    <CoreBox>
      <NativeDatepicker {...props} />
      <CoreFormErrorText>{props.touched && props.error}</CoreFormErrorText>
      <CoreFormHelperText>{props.helperText}</CoreFormHelperText>
    </CoreBox>
  );
}

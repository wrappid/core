// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeDatepicker } from "@wrappid/styled-components";

import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";
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

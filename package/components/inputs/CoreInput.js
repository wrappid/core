import React from "react";
import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";
import { NativeInput } from "@wrappid/styled-components";
import CoreBox from "../layouts/CoreBox";

export default function CoreInput(props) {
  return (
    <CoreBox>
      <NativeInput {...props} />
      <CoreFormErrorText>{props.error}</CoreFormErrorText>
      <CoreFormHelperText>{props.helperText}</CoreFormHelperText>
    </CoreBox>
  );
}

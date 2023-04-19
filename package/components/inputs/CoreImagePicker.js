import React from "react";
import CoreFormControl from "./CoreFormControl";
import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";
import { NativeImagePicker } from "@wrappid/styled-components";

export default function CoreImagePicker(props) {
  return (
    <CoreFormControl>
      <NativeImagePicker {...props} />
      <CoreFormErrorText>{props.touched && props.error}</CoreFormErrorText>
      <CoreFormHelperText>{props.helperText}</CoreFormHelperText>
    </CoreFormControl>
  );
}

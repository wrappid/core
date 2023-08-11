// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeImagePicker } from "@wrappid/styled-components";

import CoreFormControl from "./CoreFormControl";
import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";

export default function CoreImagePicker(props) {
  return (
    <CoreFormControl>
      <NativeImagePicker {...props} />

      <CoreFormErrorText>{props.touched && props.error}</CoreFormErrorText>

      <CoreFormHelperText>{props.helperText}</CoreFormHelperText>
    </CoreFormControl>
  );
}

import React from "react";
import { NativeOtpInput } from "@wrappid/styled-components";
import { CoreClasses } from "@wrappid/styles";
import CoreBox from "../layouts/CoreBox";
import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";

export default function CoreOtpInput(props) {
  return (
    <CoreBox>
      <NativeOtpInput {...props} />
      {props.error && <CoreFormErrorText>{props.error}</CoreFormErrorText>}
      <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
        {props.helperText}
      </CoreFormHelperText>
    </CoreBox>
  );
}

import React from "react";
import { NativeConfirmPassword } from "@wrappid/styled-components";
import CoreBox from "../layouts/CoreBox";
import CoreFormHelperText from "./CoreFormHelperText";
import CoreFormErrorText from "./CoreFormErrorText";

export default function CoreConfirmPassword(props) {
  return (
    <CoreBox>
      <NativeConfirmPassword {...props} />
      {props.error && <CoreFormErrorText>{props.error}</CoreFormErrorText>}
      {props.helperText && (
        <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
          {props.helperText}
        </CoreFormHelperText>
      )}
    </CoreBox>
  );
}

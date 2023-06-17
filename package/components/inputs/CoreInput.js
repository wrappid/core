import React from "react";
import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";
import { NativeInput } from "@wrappid/styled-components";
import CoreBox from "../layouts/CoreBox";
import CoreClasses from "../../styles/CoreClasses";

export default function CoreInput(props) {
  return (
    <CoreBox>
      <NativeInput {...props} />
      {props.error && <CoreFormErrorText>{props.error}</CoreFormErrorText>}
      {props.helperText && (
        <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
          {props.helperText}
        </CoreFormHelperText>
      )}
    </CoreBox>
  );
}

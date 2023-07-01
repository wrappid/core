import React from "react";
import { NativeInputPassword } from "@wrappid/styled-components";
import CoreBox from "../layouts/CoreBox";
import CoreFormHelperText from "./CoreFormHelperText";
import CoreFormErrorText from "./CoreFormErrorText";
import CoreClasses from "../../styles/CoreClasses";

export default function CoreInputPassword(props) {
  return (
    <CoreBox>
      <NativeInputPassword {...props} />
      {props.error && <CoreFormErrorText>{props.error}</CoreFormErrorText>}
      {props.helperText && (
        <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
          {props.helperText}
        </CoreFormHelperText>
      )}
    </CoreBox>
  );
}

// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeInputPassword } from "@wrappid/native";

import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";
import CoreClasses from "../../styles/CoreClasses";
import CoreBox from "../layouts/CoreBox";

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

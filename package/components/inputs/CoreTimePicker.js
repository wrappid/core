// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTimePicker } from "@wrappid/native";

import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";
import CoreClasses from "../../styles/CoreClasses";
import CoreBox from "../layouts/CoreBox";

export default function CoreTimePicker(props) {
  const { error, helperText } = props;

  return (
    <CoreBox>
      <NativeTimePicker {...props} />

      {error && <CoreFormErrorText>{error}</CoreFormErrorText>}

      {helperText && (
        <CoreFormHelperText styleClasses={[CoreClasses?.LAYOUT?.NO_MARGIN_P]}>
          {helperText}
        </CoreFormHelperText>
      )}
    </CoreBox>
  );
}

// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTimeRangePicker } from "@wrappid/native";

import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";
import CoreClasses from "../../styles/CoreClasses";

export default function CoreTimeRangePicker(props) {
  const { helperText, error, ...restProps } = props;

  return (
    <>
      <NativeTimeRangePicker {...restProps} />
    
      {helperText && (
        <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
          {helperText}
        </CoreFormHelperText>
      )}

      {error && <CoreFormErrorText>{error}</CoreFormErrorText>}
    </>
  );
}

// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeImagePicker } from "@wrappid/styled-components";

import CoreFormControl from "./CoreFormControl";
import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";
import CoreClasses from "../../styles/CoreClasses";

export default function CoreImagePicker(props) {
  const {
    error,
    helperText
  } =  props;
  
  return (
    <CoreFormControl>
      <NativeImagePicker {...props} />

      {error && <CoreFormErrorText>{error}</CoreFormErrorText>}

      {helperText && (
        <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
          {helperText}
        </CoreFormHelperText>
      )}
    </CoreFormControl>
  );
}

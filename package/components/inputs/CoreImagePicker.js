// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeImagePicker } from "@wrappid/native";

import CoreFormControl from "./CoreFormControl";
import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";
import defaultImage from "../../assets/no_image.png";
import CoreClasses from "../../styles/CoreClasses";

export default function CoreImagePicker(props) {
  const { error, helperText } = props;

  return (
    <CoreFormControl>
      <NativeImagePicker {...props} defaultImage={defaultImage}/>

      {error && <CoreFormErrorText>{error}</CoreFormErrorText>}

      {helperText && (
        <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
          {helperText}
        </CoreFormHelperText>
      )}
    </CoreFormControl>
  );
}

// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeSelect } from "@wrappid/native";

import CoreFormControl from "./CoreFormControl";
import CoreInputLabel from "./CoreInputLabel";

export default function CoreSelect(props) {
  const { label } = props;

  return (
    <CoreFormControl>
      <CoreInputLabel id="demo-simple-select-label">{label}</CoreInputLabel>

      <NativeSelect {...props} />
    </CoreFormControl>
  );
}

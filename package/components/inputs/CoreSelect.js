// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeSelect } from "@wrappid/styled-components";

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

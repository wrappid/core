// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTimePicker } from "@wrappid/native";

import CoreBox from "../layouts/CoreBox";

export default function CoreTimePicker(props) {
  return (
    <CoreBox>
      <NativeTimePicker {...props} />
    </CoreBox>
  );
}
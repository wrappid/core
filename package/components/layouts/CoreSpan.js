// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeSpan } from "@wrappid/native";

import CoreBox from "./CoreBox";
import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreSpan(props) {
  props = sanitizeComponentProps(CoreSpan, props);
  return <NativeSpan {...props} />;
}

CoreSpan.validProps = [...(CoreBox?.validProps || [])];
CoreSpan.invalidProps = [...(CoreBox?.invalidProps || [])];

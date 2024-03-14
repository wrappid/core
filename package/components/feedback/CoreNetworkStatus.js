/* eslint-disable etc/no-commented-out-code */
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeNetworkStatus } from "@wrappid/native";

// import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreSnackbar(props) {
//   props = sanitizeComponentProps(CoreSnackbar, props);

  return (
    <NativeNetworkStatus
      {...props}
    />
  );
}


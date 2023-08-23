// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeSnackbar } from "@wrappid/native";

export default function CoreSnackbar(props) {
  return <NativeSnackbar {...props}>{props.children}</NativeSnackbar>;
}

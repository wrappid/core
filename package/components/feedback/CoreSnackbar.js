import React from "react";
import { NativeSnackbar } from "@wrappid/styled-components";

export default function CoreSnackbar(props) {
  return <NativeSnackbar {...props}>{props.children}</NativeSnackbar>;
}

import React from "react";
import { SCSnackbar } from "@wrappid/styled-components";

export default function CoreSnackbar(props) {
  return <SCSnackbar {...props}>{props.children}</SCSnackbar>;
}

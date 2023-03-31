import React from "react";
import { SCTableContainer } from "@wrappid/styled-components";

export default function CoreTableContainer(props) {
  return <SCTableContainer {...props}>{props.children}</SCTableContainer>;
}

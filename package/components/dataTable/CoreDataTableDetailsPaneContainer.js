import React from "react";
import { NativeDataTableDetailsPaneContainer } from "@wrappid/styled-components";

export default function CoreDataTableDetailsPaneContainer(props) {
  return (
    <NativeDataTableDetailsPaneContainer {...props}>
      {props.children}
    </NativeDataTableDetailsPaneContainer>
  );
}

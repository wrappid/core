// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeDataTableDetailsPaneContainer } from "@wrappid/styled-components";

export default function CoreDataTableDetailsPaneContainer(props) {
  return (
    <NativeDataTableDetailsPaneContainer {...props}>
      {props.children}
    </NativeDataTableDetailsPaneContainer>
  );
}

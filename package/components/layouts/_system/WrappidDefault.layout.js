// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import AppContainer from "./AppContainer";

export default function WrappidDefaultLayout(props) {
  const { children } = props || { children: null };

  return (
    <AppContainer>
      {children}
    </AppContainer>
  );
}

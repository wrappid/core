// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import AppContainerLayout from "./AppContainerLayout";

export default function WrappidDefaultLayout(props) {
  const { children } = props || { children: null };

  return (
    <AppContainerLayout>
      {children}
    </AppContainerLayout>
  );
}

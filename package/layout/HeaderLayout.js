// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreLayoutPlaceholder from "./core/CoreLayoutPlaceholder";

export default function HeaderLayout() {
  return (
    <>
      <CoreLayoutPlaceholder id={HeaderLayout.PLACEHOLDER.HEADER} />

      <CoreLayoutPlaceholder id={HeaderLayout.PLACEHOLDER.CONTENT} />
    </>
  );
}

HeaderLayout.PLACEHOLDER = { CONTENT: "content", HEADER: "header" };

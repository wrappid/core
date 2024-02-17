// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreLayoutPlaceholder from "./core/CoreLayoutPlaceholder";

export default function HeaderFooterLayout() {
  return (
    <>
      <CoreLayoutPlaceholder id={HeaderFooterLayout.PLACEHOLDER.HEADER} />

      <CoreLayoutPlaceholder id={HeaderFooterLayout.PLACEHOLDER.CONTENT} />

      <CoreLayoutPlaceholder id={HeaderFooterLayout.PLACEHOLDER.FOOTER} />
    </>
  );
}

HeaderFooterLayout.PLACEHOLDER = { CONTENT: "content", FOOTER: "footer", HEADER: "header" };
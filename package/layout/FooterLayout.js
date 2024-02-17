// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreLayoutPlaceholder from "./core/CoreLayoutPlaceholder";

export default function FooterLayout() {
  return (
    <>
      <CoreLayoutPlaceholder id={FooterLayout.PLACEHOLDER.CONTENT} />

      <CoreLayoutPlaceholder id={FooterLayout.PLACEHOLDER.FOOTER} />
    </>
  );
}
FooterLayout.PLACEHOLDER = { CONTENT: "content", FOOTER: "footer" };
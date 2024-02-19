// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../components/dataDisplay/CoreTypographyBody1";
// eslint-disable-next-line import/order
import CoreLayoutPlaceholder from "./core/CoreLayoutPlaceholder";

export default function HeaderFooterLayout() {
  return (
    <>
      <CoreTypographyBody1>Header Footer Layout</CoreTypographyBody1>

      <CoreLayoutPlaceholder id={HeaderFooterLayout.PLACEHOLDER.HEADER} />

      <CoreLayoutPlaceholder id={HeaderFooterLayout.PLACEHOLDER.CONTENT} />

      <CoreLayoutPlaceholder id={HeaderFooterLayout.PLACEHOLDER.FOOTER} />
    </>
  );
}

HeaderFooterLayout.PLACEHOLDER = { CONTENT: "content", FOOTER: "footer", HEADER: "header" };
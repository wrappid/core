// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../../dataDisplay/CoreTypographyBody1";
// eslint-disable-next-line import/order
import CoreLayoutPlaceholder from "../../../layout/CoreLayoutPlaceholder";

export default function FixedHeaderFooterLayout() {
  return (
    <>
      <CoreTypographyBody1>Fixed Header Footer Layout</CoreTypographyBody1>

      <CoreLayoutPlaceholder id={FixedHeaderFooterLayout.PLACEHOLDER.HEADER} />

      <CoreLayoutPlaceholder id={FixedHeaderFooterLayout.PLACEHOLDER.CONTENT} />

      <CoreLayoutPlaceholder id={FixedHeaderFooterLayout.PLACEHOLDER.FOOTER} />
    </>
  );
}

FixedHeaderFooterLayout.PLACEHOLDER = { CONTENT: "FixedHFContent", FOOTER: "FixedHFFooter", HEADER: "fixedHFHeader" };
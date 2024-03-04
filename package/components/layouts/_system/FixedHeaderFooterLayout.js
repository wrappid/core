// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/order
import CoreLayoutPlaceholder from "../../../layout/CoreLayoutPlaceholder";
import CoreClasses from "../../../styles/CoreClasses";
import CoreTypographyBody1 from "../../dataDisplay/CoreTypographyBody1";

export default function FixedHeaderFooterLayout() {
  return (
    <>
      <CoreTypographyBody1>Fixed Header Footer Layout</CoreTypographyBody1>

      <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.FIXED_HEADER_FOOTER_LAYOUT_HEADER]} id={FixedHeaderFooterLayout.PLACEHOLDER.HEADER} />

      <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.FIXED_HEADER_FOOTER_LAYOUT_CONTENT]} id={FixedHeaderFooterLayout.PLACEHOLDER.CONTENT} />

      <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.FIXED_HEADER_FOOTER_LAYOUT_FOOTER]} id={FixedHeaderFooterLayout.PLACEHOLDER.FOOTER} />
    </>
  );
}

FixedHeaderFooterLayout.PLACEHOLDER = { CONTENT: "FixedHFContent", FOOTER: "FixedHFFooter", HEADER: "fixedHFHeader" };
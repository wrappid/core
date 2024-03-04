// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/order
import CoreLayoutPlaceholder from "../../../layout/CoreLayoutPlaceholder";
import CoreClasses from "../../../styles/CoreClasses";
import CoreTypographyBody1 from "../../dataDisplay/CoreTypographyBody1";

export default function FixedFooterLayout() {
  return (
    <>
      <CoreTypographyBody1>Fixed FOOTER Layout</CoreTypographyBody1>

      <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.FIXED_FOOTER_LAYOUT_CONTENT]} id={FixedFooterLayout.PLACEHOLDER.CONTENT} />

      <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.FIXED_FOOTER_LAYOUT_FOOTER]} id={FixedFooterLayout.PLACEHOLDER.FOOTER} />
    </>
  );
}

FixedFooterLayout.PLACEHOLDER = { CONTENT: "fixedFooterContent", FOOTER: "fixedFooter" };

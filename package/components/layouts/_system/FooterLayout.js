// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/order
import CoreLayoutPlaceholder from "../../../layout/CoreLayoutPlaceholder";
import CoreClasses from "../../../styles/CoreClasses";

export default function FooterLayout() {
  return (
    <>
      <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.FOOTER_LAYOUT_CONTENT]} id={FooterLayout.PLACEHOLDER.CONTENT} />

      <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.FOOTER_LAYOUT_FOOTER]} id={FooterLayout.PLACEHOLDER.FOOTER} />
    </>
  );
}
FooterLayout.PLACEHOLDER = { CONTENT: "footerContent", FOOTER: "footer" };
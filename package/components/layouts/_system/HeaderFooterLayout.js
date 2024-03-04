// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreLayoutPlaceholder from "../../../layout/CoreLayoutPlaceholder";
import CoreClasses from "../../../styles/CoreClasses";

export default function HeaderFooterLayout() {
  return (
    <>
      <CoreLayoutPlaceholder id={HeaderFooterLayout.PLACEHOLDER.HEADER} styleClasses={[CoreClasses.LAYOUT.HEADER_FOOTER_LAYOUT_HEADER]}/>

      <CoreLayoutPlaceholder id={HeaderFooterLayout.PLACEHOLDER.CONTENT} styleClasses={[CoreClasses.LAYOUT.HEADER_FOOTER_LAYOUT_CONTENT]}/>

      <CoreLayoutPlaceholder id={HeaderFooterLayout.PLACEHOLDER.FOOTER} styleClasses={[CoreClasses.LAYOUT.HEADER_FOOTER_LAYOUT_FOOTER]}/>
    </>
  );
}

HeaderFooterLayout.PLACEHOLDER = { CONTENT: "content", FOOTER: "footer", HEADER: "header" };
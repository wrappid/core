// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/order
import CoreLayoutPlaceholder from "../../../layout/CoreLayoutPlaceholder";
import CoreClasses from "../../../styles/CoreClasses";

export default function HeaderLayout() {
  return (
    <>

      <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.HEADER_LAYOUT_HEADER]} id={HeaderLayout.PLACEHOLDER.HEADER} />

      <CoreLayoutPlaceholder styleClasses={[CoreClasses.LAYOUT.HEADER_LAYOUT_CONTENT]} id={HeaderLayout.PLACEHOLDER.CONTENT} />
    </>
  );
}

HeaderLayout.PLACEHOLDER = { CONTENT: "headerContent", HEADER: "header" };

// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../components/dataDisplay/CoreTypographyBody1";
// eslint-disable-next-line import/order
import CoreLayoutPlaceholder from "./core/CoreLayoutPlaceholder";

export default function FooterLayout() {
  return (
    <>
      <CoreTypographyBody1>Footer Layout</CoreTypographyBody1>

      <CoreLayoutPlaceholder id={FooterLayout.PLACEHOLDER.CONTENT} />

      <CoreLayoutPlaceholder id={FooterLayout.PLACEHOLDER.FOOTER} />
    </>
  );
}
FooterLayout.PLACEHOLDER = { CONTENT: "footerContent", FOOTER: "footer" };
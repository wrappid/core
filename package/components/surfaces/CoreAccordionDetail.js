// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeAccordionDetail } from "@wrappid/native";

export default function CoreAccordionDetail(props) {
  return <NativeAccordionDetail {...props} />;
}
CoreAccordionDetail.validProps = [];
CoreAccordionDetail.invalidProps = ["sx", "classes"];

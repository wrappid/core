// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeAccordionDetail } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreAccordionDetail(props) {
  props = sanitizeComponentProps(CoreAccordionDetail, props);
  return <NativeAccordionDetail {...props} />;
}
CoreAccordionDetail.validProps = [];
CoreAccordionDetail.invalidProps = [];


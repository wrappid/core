// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { createFormFieldProps, createFormGridProps } from "../../../utils/formUtils";
import CoreBox from "../../layouts/CoreBox";

export default function CoreFormField(props) {
  const { element, formikprops } = props;

  return React.createElement(
    element?.box?.comp ? element.box.comp : CoreBox,
    createFormGridProps(element),
    element.comp
      ? React.createElement(
        element.comp,
        {
          ...createFormFieldProps(element, formikprops, "edit"),
          readOnly: !props.mode,
        },
        element.onlyView ? element.label : null
      )
      : null
  );
}

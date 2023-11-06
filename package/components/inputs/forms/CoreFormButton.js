// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { createFormButtonProps } from "../../../utils/formUtils";

export default function CoreFormButton(props) {
  const { element, formikprops, handleButtonCLick, submitLoading } = props;

  return element.comp
    ? React.createElement(element.comp, {
      ...createFormButtonProps(element, formikprops, handleButtonCLick),
      disabled: submitLoading,
    })
    : null;
}

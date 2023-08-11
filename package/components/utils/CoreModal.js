// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeModal } from "@wrappid/styled-components";

import { toggleModalState } from "../../store/action/modalAction";

export default function CoreModal(props) {
  return <NativeModal {...props} toggleModalState={toggleModalState} />;
}

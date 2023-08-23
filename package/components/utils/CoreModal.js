// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeModal } from "@wrappid/native";

import { toggleModalState } from "../../store/action/modalAction";

export default function CoreModal(props) {
  return <NativeModal {...props} toggleModalState={toggleModalState} />;
}

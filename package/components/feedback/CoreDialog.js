// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeDialog } from "@wrappid/native";

import { coreDialogInitValue } from "../../config/constants";
import { CoreDialogContext } from "../../config/contextHandler";

export const CORE_DIALOG_TYPES = {
  FAILURE: "error",
  INFO   : "info",
  SUCCESS: "success",
};

export default function CoreDialog(props) {
  return (
    <NativeDialog dialogInitValue={coreDialogInitValue} DialogContext={CoreDialogContext} props>
      {props.children}
    </NativeDialog>
  );
}

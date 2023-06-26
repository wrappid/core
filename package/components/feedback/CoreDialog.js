import React from "react";
import { NativeDialog } from "@wrappid/styled-components";
import { CoreDialogContext } from "../../config/contextHandler";
import { coreDialogInitValue } from "../../config/constants";

export default function CoreDialog(props) {
  return (
    <NativeDialog
      dialogInitValue={coreDialogInitValue}
      DialogContext={CoreDialogContext}
      props
    >
      {props.children}
    </NativeDialog>
  );
}

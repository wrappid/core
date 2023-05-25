import React, { useState } from "react";
import { NativeDialog } from "@wrappid/styled-components";
import { CoreDialogContext } from "../../config/contextHandler";
import { coreDialogInitValue } from "../../config/constants";

export default function CoreDialog(props) {
  const [dialog, setDialog] = useState(coreDialogInitValue);
  const value = { dialog, setDialog };
  
  return (
    <CoreDialogContext.Provider value={value}>
      <NativeDialog
        {...props}
        dialogInitValue={coreDialogInitValue}
        DialogContext={CoreDialogContext}
      >
        {props.children}
      </NativeDialog>
    </CoreDialogContext.Provider>
  );
}

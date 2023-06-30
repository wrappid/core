import React, { useContext } from "react";
import { CoreDialogContext } from "../../config/contextHandler";

export default function CoreFormDialogs({ dialogset, content }) {
  const coreDialogContext = useContext(CoreDialogContext);

  React.useEffect(() => {
    coreDialogContext?.setDialog(content);
  }, [dialogset]);

  return null;
}

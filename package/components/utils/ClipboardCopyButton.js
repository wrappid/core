// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { copyToClipboard } from "../../utils/appUtils";
import CoreIcon from "../dataDisplay/CoreIcon";
import CoreIconButton from "../inputs/CoreIconButton";

function ClipboardCopyButton(props) {
  const { text, icon, disabledIcon, triggered } = props;
  const [copied, setCopied] = React.useState(false);
    
  React.useEffect(() => {
    if (copied === true || triggered) {
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    }
  }, [copied, triggered]);

  return (
    <CoreIconButton
      onClick={() => {
        if (!copied) {
          copyToClipboard(text);
          setCopied(true);
        }
      }}
      disabled={copied ? true : false}
      aria-label="Copy to Clipboard">
      <CoreIcon>{copied ? (disabledIcon || "check_box") : (icon || "content_copy")}</CoreIcon>
    </CoreIconButton>
  );
}

export default ClipboardCopyButton;
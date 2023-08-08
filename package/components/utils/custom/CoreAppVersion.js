import React from "react";

import { CoreApplicationContext } from "../../../config/contextHandler";
import CoreTypographyCaption from "../../dataDisplay/paragraph/CoreTypographyCaption";

export default function CoreAppVersion(props) {
  const { noTitle = false } = props;
  const { version } = React.useContext(CoreApplicationContext);

  return <CoreTypographyCaption>{!noTitle && "Application Version: "}{`v${version || "unknown"}`}</CoreTypographyCaption>;
}

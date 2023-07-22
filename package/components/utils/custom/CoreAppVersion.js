import React, { useContext } from "react";
import CoreTypographyCaption from "../../dataDisplay/paragraph/CoreTypographyCaption";
import CoreBox from "../../layouts/CoreBox";
import { CoreApplicationContext } from "../../../config/contextHandler";
import CoreClasses from "../../../styles/CoreClasses";

export default function CoreAppVersion(props) {
  const { version } = useContext(CoreApplicationContext);

  return (
    <CoreTypographyCaption>
      {!props?.noTitle && "Application Version: "}{`v${version || "unknown"}`}
    </CoreTypographyCaption>
  );
}
